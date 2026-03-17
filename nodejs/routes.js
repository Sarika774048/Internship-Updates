const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// --- 1. CONFIGURATION & SECURITY MIDDLEWARE ---
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Handle form submissions
app.use(express.static(path.join(__dirname, 'public')));

// --- 2. ADVANCED CUSTOM MIDDLEWARE ---

// Request Profiler: Measures response time
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[LOG] ${req.method} ${req.url} - ${res.statusCode} (${duration}ms)`);
    });
    next();
});

// Guard Middleware: Simple API Key check for protected routes
const apiKeyGuard = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey && apiKey === 'FLOW_2026') {
        next();
    } else {
        res.status(403).json({ error: 'Forbidden: Invalid API Key' });
    }
};

// --- 3. MODULAR ROUTING (Express Router) ---

const apiRouter = express.Router();

// Health Check Endpoint
apiRouter.get('/health', (req, res) => {
    res.json({
        uptime: process.uptime(),
        message: 'System Healthy',
        timestamp: Date.now()
    });
});

// User Simulation (GET with Query Params)
apiRouter.get('/users/search', (req, res) => {
    const { name } = req.query;
    const users = ['Sarika', 'Admin', 'DevUser'];
    const filtered = users.filter(u => u.toLowerCase().includes(name?.toLowerCase() || ''));
    res.json({ results: filtered });
});

// Protected Data Submission (POST)
apiRouter.post('/data/sync', apiKeyGuard, (req, res) => {
    const { payload } = req.body;
    if (!payload) return res.status(400).json({ error: 'Payload required' });
    
    console.log('Syncing data to core database...');
    res.status(201).json({ status: 'Success', syncedID: Math.random().toString(36).substr(2, 9) });
});

app.use('/api/v1', apiRouter);

// --- 4. CENTRALIZED ERROR HANDLING ---

// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Endpoint not found on this server' });
});

// Global Error Middleware
app.use((err, req, res, next) => {
    console.error('SERVER_ERROR:', err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
});

// --- 5. INITIALIZATION ---
const server = app.listen(PORT, () => {
    console.log(`\n-----------------------------------------`);
    console.log(`🚀 FLOW_NODE API Engine v2.1`);
    console.log(`📡 Root URL: http://localhost:${PORT}/api/v1`);
    console.log(`🛡️  Protected Sync: POST /api/v1/data/sync`);
    console.log(`-----------------------------------------\n`);
});

// Handle Graceful Shutdowns
process.on('SIGTERM', () => {
    server.close(() => console.log('Process terminated'));
});