import React, { useState, useEffect } from 'react';

// --- EXAMPLE 1: REUSABLE COMPONENT (Props & UI) ---
const StatusBadge = ({ label, active }) => (
  <span style={{
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.7rem',
    background: active ? '#e6fffa' : '#fff5f5',
    color: active ? '#38a169' : '#e53e3e',
    border: `1px solid ${active ? '#38a169' : '#e53e3e'}`,
    fontWeight: 'bold'
  }}>
    {label}
  </span>
);

export default function App() {
  // --- EXAMPLE 2: useState (The Data Driver) ---
  const [logs, setLogs] = useState([
    { id: '1', msg: 'System Boot Initialized', type: 'SYSTEM' },
    { id: '2', msg: 'React Hooks Loaded', type: 'SUCCESS' }
  ]);
  const [inputText, setInputText] = useState("");
  const [count, setCount] = useState(0);

  // --- EXAMPLE 3: useEffect (The Lifecycle Manager) ---
  // Scenario A: Acts like "ComponentDidMount" (Runs once on start)
  useEffect(() => {
    console.log("🚀 Lab Session Started: Component Mounted");
    
    // Scenario B: Cleanup (Acts like "ComponentWillUnmount")
    return () => console.log("Cleaning up resources...");
  }, []);

  // Scenario C: Acts like "ComponentDidUpdate" (Runs when 'count' changes)
  useEffect(() => {
    if(count > 0) {
      document.title = `Updates: ${count}`;
    }
  }, [count]);

  const addLog = () => {
    if (!inputText) return;
    // LISTS & KEYS: We create a unique 'id' for the key prop
    const newEntry = { id: Date.now().toString(), msg: inputText, type: 'USER' };
    setLogs([newEntry, ...logs]);
    setInputText("");
    setCount(c => c + 1);
  };

  return (
    <div style={styles.shell}>
      <div style={styles.container}>
        <h2 style={styles.title}>React Core Concepts Lab</h2>
        <p style={styles.subtitle}>23rd Feb: Hooks, Lists & Lifecycle</p>

        {/* INPUT BOX */}
        <div style={styles.inputGroup}>
          <input 
            style={styles.field}
            placeholder="Type a log message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={addLog} style={styles.btn}>PUSH TO LIST</button>
        </div>

        {/* LIST RENDERING SECTION */}
        <div style={styles.logContainer}>
          <h4 style={{color: '#718096', marginBottom: '15px'}}>LIVE ACTIVITY STREAM</h4>
          {logs.map((item) => (
            /* THE 'KEY' PROP: Critical for React performance */
            <div key={item.id} style={styles.logItem}>
              <div>
                <div style={styles.idLabel}>ID: {item.id.slice(-4)}</div>
                <div style={styles.msgText}>{item.msg}</div>
              </div>
              <StatusBadge label={item.type} active={item.type !== 'ERROR'} />
            </div>
          ))}
        </div>

        <footer style={styles.footer}>
          LIFECYCLE STATUS: <span style={{color: '#3182ce'}}>MOUNTED & WATCHING</span>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  shell: { height: '100vh', width: '100vw', background: '#f7fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Inter, sans-serif' },
  container: { width: '100%', maxWidth: '700px', height: '80%', background: '#fff', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' },
  title: { margin: 0, fontSize: '1.8rem', color: '#1a202c' },
  subtitle: { color: '#a0aec0', fontSize: '0.9rem', marginBottom: '30px' },
  inputGroup: { display: 'flex', gap: '10px', marginBottom: '30px' },
  field: { flex: 1, padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', fontSize: '1rem' },
  btn: { background: '#3182ce', color: '#fff', border: 'none', padding: '0 25px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' },
  logContainer: { flex: 1, overflowY: 'auto', paddingRight: '10px' },
  logItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '1px solid #edf2f7', transition: '0.2s' },
  idLabel: { fontSize: '0.6rem', color: '#cbd5e0', fontWeight: 'bold' },
  msgText: { fontSize: '0.95rem', color: '#2d3748', marginTop: '2px' },
  footer: { marginTop: '20px', textAlign: 'center', fontSize: '0.7rem', color: '#cbd5e0', fontWeight: 'bold', letterSpacing: '1px' }
};