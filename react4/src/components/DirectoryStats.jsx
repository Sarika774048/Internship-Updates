import React from 'react';

const DirectoryStats = ({ list }) => {
  const activeCount = list.filter(p => p.active).length;
  
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <small>TOTAL STAFF</small>
        <strong>{list.length}</strong>
      </div>
      <div style={styles.box}>
        <small>ACTIVE</small>
        <strong style={{color: '#38a169'}}>{activeCount}</strong>
      </div>
      <div style={styles.box}>
        <small>SUSPENDED</small>
        <strong style={{color: '#e53e3e'}}>{list.length - activeCount}</strong>
      </div>
    </div>
  );
};

const styles = {
  container: { display: 'flex', gap: '15px', marginBottom: '25px' },
  box: { flex: 1, background: '#fff', padding: '15px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' },
};

export default DirectoryStats;