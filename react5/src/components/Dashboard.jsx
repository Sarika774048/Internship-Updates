import React from 'react';

const Dashboard = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Welcome to the Zenith Ecosystem</h1>
    <p style={styles.text}>Your centralized hub for multi-page navigation and state synchronization.</p>
    <div style={styles.grid}>
      {[1, 2, 3].map(i => (
        <div key={i} style={styles.card}>
          <h3 style={styles.cardTitle}>MODULE_0{i}</h3>
          <p style={styles.cardText}>Operational status: Nominal. All systems synchronized with React Router v6.</p>
        </div>
      ))}
    </div>
  </div>
);

const styles = {
  container: { padding: '50px' },
  title: { color: '#f8fafc', fontSize: '2.5rem', marginBottom: '15px' },
  text: { color: '#94a3b8', marginBottom: '40px' },
  grid: { display: 'flex', gap: '20px' },
  card: { flex: 1, background: '#1e293b', padding: '30px', borderRadius: '16px', border: '1px solid #334155' },
  cardTitle: { color: '#38bdf8', margin: '0 0 10px 0' },
  cardText: { color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }
};

export default Dashboard;