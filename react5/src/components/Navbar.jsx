import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav style={styles.nav}>
    <div style={styles.brand}>ZENITH_OS</div>
    <ul style={styles.links}>
      <li><NavLink to="/" style={({isActive}) => isActive ? styles.active : styles.link}>DASHBOARD</NavLink></li>
      <li><NavLink to="/services" style={({isActive}) => isActive ? styles.active : styles.link}>SERVICES</NavLink></li>
      <li><NavLink to="/contact" style={({isActive}) => isActive ? styles.active : styles.link}>SUPPORT</NavLink></li>
    </ul>
    <Link to="/login" style={styles.loginBtn}>TERMINAL_LOGIN</Link>
  </nav>
);

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 50px', background: '#0f172a', borderBottom: '1px solid #1e293b' },
  brand: { color: '#38bdf8', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '2px' },
  links: { display: 'flex', gap: '30px', listStyle: 'none' },
  link: { color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '600' },
  active: { color: '#38bdf8', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold', borderBottom: '2px solid #38bdf8', paddingBottom: '5px' },
  loginBtn: { background: '#38bdf8', color: '#0f172a', padding: '8px 18px', borderRadius: '6px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 'bold' }
};

export default Navbar;