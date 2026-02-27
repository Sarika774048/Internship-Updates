import React from 'react';

const EmployeeModal = ({ isOpen, data, onClose }) => {
  if (!isOpen || !data) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.close}>×</button>
        <h2 style={styles.name}>{data.name}</h2>
        <p style={styles.detail}><strong>LOCATION:</strong> {data.address?.city}</p>
        <p style={styles.detail}><strong>EMAIL:</strong> {data.email}</p>
        <p style={styles.detail}><strong>COMPANY:</strong> {data.company?.name}</p>
        <div style={styles.footer}>ACCESS_LEVEL: RESTRICTED</div>
      </div>
    </div>
  );
};

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 },
  modal: { background: '#fff', width: '400px', padding: '30px', borderRadius: '20px', position: 'relative' },
  close: { position: 'absolute', top: '15px', right: '15px', border: 'none', background: 'none', fontSize: '1.5rem', cursor: 'pointer' },
  name: { margin: '0 0 20px 0', color: '#2d3748' },
  detail: { fontSize: '0.9rem', color: '#4a5568', borderBottom: '1px solid #f7fafc', padding: '10px 0' },
  footer: { marginTop: '20px', fontSize: '0.6rem', color: '#cbd5e0', letterSpacing: '2px' }
};

export default EmployeeModal;