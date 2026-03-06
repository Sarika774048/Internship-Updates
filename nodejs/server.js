// 1. Core Module Import
const http = require('http');

// 2. Configuration (Environment Simulation)
const PORT = 3000;
const HOST = 'localhost';

/**
 * 3. Server Logic
 * This callback function runs every time someone visits http://localhost:3000
 */
const server = http.createServer((req, res) => {
    // Log the request method and URL to the terminal
    console.log(`[${new Date().toLocaleTimeString()}] Request: ${req.method} ${req.url}`);

    // Route Handling
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'Success',
            message: 'Welcome to the Node.js Server',
            developer: 'Sarika N'
        }));
    } 
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Node.js</h1><p>Node.js is a runtime built on Chromes V8 engine.</p>');
    } 
    else {
        // Handle 404 - Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Protocol: Resource Not Found');
    }
});

// 4. Activation
server.listen(PORT, HOST, () => {
    console.log(`-----------------------------------------`);
    console.log(`🚀 Server Node v1.0 is running!`);
    console.log(`📡 Access at: http://${HOST}:${PORT}`);
    console.log(`🛠️  Press Ctrl+C to stop the process`);
    console.log(`-----------------------------------------`);
});