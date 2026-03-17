const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mock Data Source
let projects = [
    { id: 1, title: 'Portfolio Website', status: 'Active', priority: 'High', tags: ['React', 'CSS'] },
    { id: 2, title: 'Node Monitor', status: 'Completed', priority: 'Medium', tags: ['Node', 'API'] }
];

// --- MIDDLEWARE: DATA VALIDATOR ---
const validateProject = (req, res, next) => {
    const { title } = req.body;
    if (req.method === 'POST' && !title) {
        return res.status(400).json({ error: 'Title is a required field for new projects.' });
    }
    next();
};

// --- ROUTES ---

// 1. GET: Read with Filtering and Searching
// URL Example: /api/projects?status=Active&priority=High
app.get('/api/projects', (req, res) => {
    let results = [...projects];
    const { status, priority, search } = req.query;

    if (status) results = results.filter(p => p.status === status);
    if (priority) results = results.filter(p => p.priority === priority);
    if (search) results = results.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

    res.status(200).json({
        count: results.length,
        data: results
    });
});

// 2. GET: Single Project by ID
app.get('/api/projects/:id', (req, res) => {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
});

// 3. POST: Create Project with validation
app.post('/api/projects', validateProject, (req, res) => {
    const newProject = {
        id: projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1,
        title: req.body.title,
        status: req.body.status || 'Pending',
        priority: req.body.priority || 'Low',
        tags: req.body.tags || [],
        createdAt: new Date().toISOString()
    };
    projects.push(newProject);
    res.status(201).json(newProject);
});

// 4. PATCH: Partial Update (More efficient than PUT)
app.patch('/api/projects/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = projects.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).json({ error: 'Project not found' });

    // Only update fields that were provided in the request body
    const updatedProject = { ...projects[index], ...req.body };
    projects[index] = updatedProject;

    res.json({ message: 'Resource partially updated', data: updatedProject });
});

// 5. DELETE: Remove Project
app.delete('/api/projects/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialCount = projects.length;
    projects = projects.filter(p => p.id !== id);

    if (projects.length === initialCount) {
        return res.status(404).json({ error: 'Delete failed: ID not found' });
    }
    res.status(200).json({ message: `Project ${id} successfully purged.` });
});

// --- GLOBAL ERROR HANDLER ---
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'An internal server error occurred.' });
});

app.listen(PORT, () => {
    console.log(`\n🚀 Enterprise REST API Live at http://localhost:${PORT}`);
    console.log(`📊 Testing GET /api/projects with Query Params...`);
    console.log(`🛡️  Validation Middleware Active.`);
});