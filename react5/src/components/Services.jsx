import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <div style={{ padding: '50px' }}>
      <h2 style={{ color: '#fff' }}>Available Services</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
        {data.map(item => (
          <div key={item.id} style={styles.serviceBox}>
            <h4 style={styles.sTitle}>{item.title.substring(0, 15)}</h4>
            <button onClick={() => navigate(`/services/${item.id}`)} style={styles.btn}>VIEW DETAILS</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  serviceBox: { background: '#1e293b', padding: '20px', borderRadius: '12px', textAlign: 'center' },
  sTitle: { color: '#f8fafc', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '15px' },
  btn: { width: '100%', padding: '10px', background: 'transparent', border: '1px solid #334155', color: '#38bdf8', cursor: 'pointer', borderRadius: '8px' }
};

export default Services;