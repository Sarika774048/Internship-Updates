import React from 'react';

const FilterBar = ({ departments, activeDept, onFilterChange }) => (
  <div style={styles.filterContainer}>
    {['All', ...departments].map(dept => (
      <button
        key={dept}
        onClick={() => onFilterChange(dept)}
        style={activeDept === dept ? styles.btnActive : styles.btnInactive}
      >
        {dept.toUpperCase()}
      </button>
    ))}
  </div>
);

const styles = {
  filterContainer: { display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' },
  btnInactive: { padding: '6px 14px', borderRadius: '20px', border: '1px solid #e2e8f0', background: '#fff', color: '#718096', cursor: 'pointer', fontSize: '0.7rem' },
  btnActive: { padding: '6px 14px', borderRadius: '20px', border: '1px solid #3182ce', background: '#3182ce', color: '#fff', cursor: 'pointer', fontSize: '0.7rem', fontWeight: 'bold' }
};

export default FilterBar;