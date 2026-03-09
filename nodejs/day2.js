const http = require('http');
const os = require('os');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');
const { exec } = require('child_process'); // NEW: For executing system commands

// 1. Configuration & Constants
const PORT = process.env.PORT || 3000; // CONCEPT: Dynamic Port Assignment
const LOG_FILE = path.join(__dirname, 'vitals.log');
const HIGH_LOAD_THRESHOLD = 80; // Percent

class SystemEmitter extends EventEmitter {}
const systemMonitor = new SystemEmitter();

// 2. Specialized Event Listeners
systemMonitor.on('log', (message, level = 'INFO') => {
    const logEntry = `[${new Date().toISOString()}] [${level}] ${message}\n`;
    const logStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });
    logStream.write(logEntry);
    logStream.end();
});

// NEW: Alert Listener for Critical System States
systemMonitor.on('alert', (cpuUsage) => {
    const alertMsg = `CRITICAL: CPU Usage at ${cpuUsage}%`;
    console.log('\x1b[31m%s\x1b[0m', alertMsg); // ANSI Red text
    systemMonitor.emit('log', alertMsg, 'WARNING');
});

// 3. Automated System Health Check Loop (Simulating continuous work)
setInterval(() => {
    const cpus = os.cpus();
    let totalIdle = 0, totalTick = 0;
    
    cpus.forEach(core => {
        for(let type in core.times) totalTick += core.times[type];
        totalIdle += core.times.idle;
    });

    const usage = (1 - totalIdle / totalTick) * 100;
    if (usage > HIGH_LOAD_THRESHOLD) {
        systemMonitor.emit('alert', usage.toFixed(2));
    }
}, 5000);

// 4. The Enhanced Server Engine
const server = http.createServer((req, res) => {
    systemMonitor.emit('log', `Request: ${req.method} ${req.url}`);

    // NEW ROUTE: System Process List (Using Child Process)
    if (req.url === '/api/processes') {
        const command = os.platform() === 'win32' ? 'tasklist' : 'ps aux | head -n 10';
        exec(command, (err, stdout) => {
            if (err) {
                res.writeHead(500);
                return res.end("Error fetching processes");
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(stdout);
        });
        return;
    }

    // ROUTE: Real-time Vitals
    if (req.url === '/api/vitals') {
        const vitals = {
            os: { type: os.type(), release: os.release() },
            memory: {
                total: (os.totalmem() / 1e9).toFixed(2) + " GB",
                free: (os.freemem() / 1e9).toFixed(2) + " GB",
                usage: ((1 - os.freemem() / os.totalmem()) * 100).toFixed(2) + "%"
            },
            network: os.networkInterfaces()
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(vitals, null, 2));
    }

    // ROUTE: Stream Logs
    if (req.url === '/view-logs') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return fs.createReadStream(LOG_FILE).pipe(res);
    }

    // DEFAULT UI
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <body style="background: #0f172a; color: white; font-family: sans-serif; padding: 50px;">
            <h1 style="color: #38bdf8;">Node.js Enterprise Monitor</h1>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 30px;">
                <a href="/api/vitals" style="background: #1e293b; padding: 20px; color: #38bdf8; text-decoration: none; border-radius: 12px; border: 1px solid #334155;">System Vitals API</a>
                <a href="/api/processes" style="background: #1e293b; padding: 20px; color: #38bdf8; text-decoration: none; border-radius: 12px; border: 1px solid #334155;">Active Processes</a>
                <a href="/view-logs" style="background: #1e293b; padding: 20px; color: #38bdf8; text-decoration: none; border-radius: 12px; border: 1px solid #334155;">Live Stream Logs</a>
            </div>
        </body>
    `);
});

// 5. Graceful Shutdown & Error Handling
const handleShutdown = () => {
    console.log("\n🛑 Gracefully shutting down...");
    systemMonitor.emit('log', 'System shutdown initiated.');
    server.close(() => {
        console.log("Server closed. Goodbye!");
        process.exit(0);
    });
};

process.on('SIGINT', handleShutdown); // Handle Ctrl+C
process.on('SIGTERM', handleShutdown); // Handle Termination signals

server.listen(PORT, () => {
    console.log(`\n🚀 Enterprise Monitor Online at http://localhost:${PORT}`);
    systemMonitor.emit('log', `Server started on port ${PORT}`);
});