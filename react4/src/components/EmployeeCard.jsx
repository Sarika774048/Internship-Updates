import React from 'react';

const EmployeeCard = ({ person, onToggle, onDelete }) => {
  // Logic for dynamic badge styling
  const getBadgeStyle = (role) => {
    switch (role.toLowerCase()) {
      case 'engineering': return { background: '#ebf8ff', color: '#2b6cb0' };
      case 'design': return { background: '#faf5ff', color: '#6b46c1' };
      default: return { background: '#f7fafc', color: '#4a5568' };
    }
  };

  const badge = getBadgeStyle(person.dept || 'General');

  return (
    <div style={person.active ? styles.card : styles.cardInactive}>
      <div style={styles.mainInfo}>
        <div style={styles.avatar}>{person.name[0]}</div>
        <div>
          <h4 style={styles.name}>{person.name}</h4>
          <span style={{...styles.badge, ...badge}}>{person.dept}</span>
        </div>
      </div>
      
      <div style={styles.actions}>
        <button 
          onClick={() => onToggle(person.id)} 
          style={person.active ? styles.btnDeactivate : styles.btnActivate}
        >
          {person.active ? 'SUSPEND' : 'RESTORE'}
        </button>
        <button onClick={() => onDelete(person.id)} style={styles.btnDelete}>×</button>
      </div>
    </div>
  );
};

const styles = {
  card: { display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#fff', borderRadius: '12px', marginBottom: '12px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', borderLeft: '5px solid #3182ce' },
  cardInactive: { display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#f9fafb', borderRadius: '12px', marginBottom: '12px', opacity: 0.6, borderLeft: '5px solid #cbd5e0' },
  mainInfo: { display: 'flex', alignItems: 'center', gap: '15px' },
  avatar: { width: '40px', height: '40px', background: '#edf2f7', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: '#4a5568' },
  name: { margin: 0, fontSize: '1rem', color: '#2d3748' },
  badge: { fontSize: '0.65rem', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold', textTransform: 'uppercase' },
  actions: { display: 'flex', alignItems: 'center', gap: '10px' },
  btnDeactivate: { background: 'none', border: '1px solid #e53e3e', color: '#e53e3e', padding: '5px 10px', borderRadius: '6px', fontSize: '0.7rem', cursor: 'pointer' },
  btnActivate: { background: '#38a169', border: 'none', color: '#fff', padding: '5px 10px', borderRadius: '6px', fontSize: '0.7rem', cursor: 'pointer' },
  btnDelete: { background: 'none', border: 'none', color: '#cbd5e0', fontSize: '1.2rem', cursor: 'pointer' }
};

export default EmployeeCard;