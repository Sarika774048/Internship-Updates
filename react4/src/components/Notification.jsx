import React, { useEffect } from 'react';

const Notification = ({ message, clear }) => {
  useEffect(() => {
    const timer = setTimeout(clear, 3000);
    return () => clearTimeout(timer);
  }, [message, clear]);

  if (!message) return null;

  return (
    <div style={styles.toast}>
      <span style={styles.icon}>⚡</span> {message}
    </div>
  );
};

const styles = {
  toast: { position: 'fixed', bottom: '20px', right: '20px', background: '#2d3748', color: '#fff', padding: '12px 25px', borderRadius: '12px', boxShadow: '0 10px 15px rgba(0,0,0,0.2)', fontSize: '0.8rem', zIndex: 1000, display: 'flex', alignItems: 'center', gap: '10px' },
  icon: { color: '#ecc94b' }
};

export default Notification;