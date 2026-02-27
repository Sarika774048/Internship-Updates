import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/NavBar';
import Services from './components/Services';

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', background: '#0f172a' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<div style={{padding: '50px', color: '#fff'}}>Support Terminal Active.</div>} />
          <Route path="*" element={<div style={{padding: '50px', color: '#ef4444'}}>404: Node Not Found.</div>} />
        </Routes>
        <footer style={styles.footer}>ZENITH_PORTAL_LOG v2.27.26</footer>
      </div>
    </Router>
  );
}

const styles = {
  footer: { textAlign: 'center', padding: '40px', color: '#334155', fontSize: '0.7rem', letterSpacing: '3px' }
};