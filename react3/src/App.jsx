import React, { useState, useEffect } from 'react';

export default function APILab() {
  // Example 1 State: Simple Data (Random Quote)
  const [quote, setQuote] = useState({ text: "", author: "" });
  
  // Example 2 State: Complex List (User Profiles)
  const [users, setUsers] = useState([]);
  
  // Example 3 State: Error Handling (Faulty API)
  const [errorMsg, setErrorMsg] = useState("");

  const [loading, setLoading] = useState(false);

  // --- LOGIC 1: Fetching a Single Object (Quote) ---
  const getNewQuote = async () => {
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      setQuote({ text: data.content, author: data.author });
    } catch (e) { console.error("Quote fetch failed"); }
  };

  // --- LOGIC 2: Fetching a List on Mount (Users) ---
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
        const data = await res.json();
        setUsers(data);
      } catch (e) { console.error("User fetch failed"); }
      setLoading(false);
    };
    loadUsers();
    getNewQuote(); // Get initial quote too
  }, []);

  return (
    <div style={styles.shell}>
      <div style={styles.container}>
        <h2 style={styles.mainTitle}>React API Masterclass</h2>

        {/* EXAMPLE 1: TRIGGERED FETCH */}
        <section style={styles.section}>
          <h4 style={styles.label}>1. TRIGGERED FETCH (Single Object)</h4>
          <div style={styles.quoteBox}>
            <p>"{quote.text || 'Loading...'}"</p>
            <small>- {quote.author}</small>
            <button onClick={getNewQuote} style={styles.miniBtn}>Refresh Quote</button>
          </div>
        </section>

        {/* EXAMPLE 2: LIST CONSUMPTION */}
        <section style={styles.section}>
          <h4 style={styles.label}>2. LIST CONSUMPTION (Array Mapping)</h4>
          {loading ? <p>Loading Stream...</p> : (
            users.map(u => (
              <div key={u.id} style={styles.userStrip}>
                <strong>{u.name}</strong> — <span>{u.company.name}</span>
              </div>
            ))
          )}
        </section>

        {/* EXAMPLE 3: ERROR HANDLING TEST */}
        <section style={styles.section}>
          <h4 style={styles.label}>3. ERROR BOUNDARY TEST</h4>
          <button 
            onClick={async () => {
              try {
                await fetch('https://wrong-url-test.com');
              } catch (e) { setErrorMsg("Network Error: Could not reach server."); }
            }} 
            style={styles.errBtn}
          >
            Trigger Faulty Request
          </button>
          {errorMsg && <p style={styles.errText}>{errorMsg}</p>}
        </section>

      </div>
    </div>
  );
}

const styles = {
  shell: { minHeight: '100vh', padding: '40px', background: '#f8fafc', fontFamily: 'Inter, sans-serif' },
  container: { maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' },
  mainTitle: { fontSize: '1.8rem', color: '#1e293b', marginBottom: '30px', borderBottom: '2px solid #f1f5f9', paddingBottom: '10px' },
  section: { marginBottom: '35px' },
  label: { fontSize: '0.75rem', color: '#64748b', letterSpacing: '1px', marginBottom: '10px' },
  quoteBox: { padding: '20px', background: '#f1f5f9', borderRadius: '12px', textAlign: 'center' },
  miniBtn: { marginTop: '10px', padding: '6px 12px', borderRadius: '6px', border: 'none', background: '#3b82f6', color: '#fff', cursor: 'pointer' },
  userStrip: { padding: '10px', borderBottom: '1px solid #f1f5f9', fontSize: '0.9rem' },
  errBtn: { padding: '10px', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  errText: { color: '#ef4444', fontSize: '0.8rem', marginTop: '10px', fontWeight: 'bold' }
};