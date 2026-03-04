import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import the components we created
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Registration from './pages/Registration';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#f8fafc] font-sans selection:bg-blue-100">
        
        {/* The Sidebar is fixed on the left and stays visible on all pages */}
        <Sidebar />
        
        {/* The Main area changes based on the URL path */}
        <main className="ml-64 flex-1 p-12 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <Routes>
              {/* If user lands on "/", automatically send them to "/dashboard" */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              
              {/* Define the paths for our specific pages */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/settings" element={<Settings />} />
              
              {/* Optional: 404 Not Found Page */}
              <Route path="*" element={
                <div className="flex flex-col items-center justify-center h-[60vh]">
                  <h1 className="text-6xl font-black text-gray-200 uppercase tracking-tighter">404</h1>
                  <p className="text-gray-500 font-medium">Protocol path not found.</p>
                </div>
              } />
            </Routes>
          </div>
        </main>

      </div>
    </Router>
  );
}