import React, { useState } from 'react';

/**
 * MODULE: REUSABLE STAR RATING (Props Example)
 * This child receives the current 'rating' and 'setRating' function as props.
 */
const RatingSystem = ({ rating, onRate }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => onRate(star)}
          style={{ cursor: 'pointer', fontSize: '2rem', color: star <= rating ? '#f1c40f' : '#bdc3c7' }}
        >
          ★
        </span>
      ))}
      <p>You rated this session: {rating} stars</p>
    </div>
  );
};

export default function ReactDeepDive() {
  // --- EXTENDED STATE REPOSITORY ---
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState(""); // For Character Limit Example
  const [rating, setRating] = useState(0); // For Props interaction
  const [showSecret, setShowSecret] = useState(false); // For Conditional Logic
  const [items, setItems] = useState(['React Hooks', 'State Management']);
  const [newItem, setNewItem] = useState("");

  const charLimit = 50;

  const containerStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    minHeight: '100vh',
    padding: '40px',
    transition: 'all 0.4s ease',
    fontFamily: 'Segoe UI, sans-serif'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ borderLeft: '5px solid #3498db', paddingLeft: '15px' }}>🚀 React Advanced Interaction Lab</h1>
      
      {/* 1. THEME TOGGLE (State + Style) */}
      <section style={{ marginBottom: '30px' }}>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
        >
          Toggle {isDarkMode ? '☀️ Light' : '🌙 Dark'} Mode
        </button>
      </section>

      {/* 2. DYNAMIC CHARACTER COUNTER (User Input + Logic) */}
      <section style={{ background: isDarkMode ? '#333' : '#f4f4f4', padding: '20px', borderRadius: '10px' }}>
        <h3>2. Character Counter (User Input Handling)</h3>
        <textarea 
          placeholder="Tell us about your day..."
          value={bio}
          onChange={(e) => setBio(e.target.value.slice(0, charLimit))}
          style={{ width: '100%', height: '80px', padding: '10px' }}
        />
        <p style={{ color: bio.length >= charLimit ? 'red' : 'inherit' }}>
          Characters: {bio.length} / {charLimit}
          {bio.length >= charLimit && " (Limit Reached!)"}
        </p>
      </section>

      {/* 3. PROPS COMMUNICATION (Rating System) */}
      <section style={{ marginTop: '30px' }}>
        <h3>3. Component Communication (Props)</h3>
        <RatingSystem rating={rating} onRate={setRating} />
      </section>

      {/* 4. MULTI-LAYER CONDITIONAL RENDERING */}
      <section style={{ marginTop: '30px', padding: '20px', border: '1px dashed #7f8c8d' }}>
        <h3>4. Security Gate (Conditional Logic)</h3>
        <p>Type "OPEN" to see the secret content:</p>
        <input 
          type="text" 
          onChange={(e) => setShowSecret(e.target.value === "OPEN")}
          placeholder="Password..."
        />
        
        {/* Short-circuit && Rendering */}
        {showSecret && (
          <div style={{ marginTop: '20px', color: '#27ae60', fontWeight: 'bold' }}>
            🎉 SECRET UNLOCKED: React is just JavaScript with Superpowers!
          </div>
        )}
      </section>

      {/* 5. LISTS (Existing Example) */}
      <section style={{ marginTop: '30px' }}>
        <h3>5. Task List ({items.length} topics)</h3>
        <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button onClick={() => {setItems([...items, newItem]); setNewItem("");}}>Add</button>
        <ul>
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
}