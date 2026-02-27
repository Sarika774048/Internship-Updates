import React, { useState, useEffect } from 'react';
import EmployeeCard from './components/EmployeeCard';
import DirectoryStats from './components/DirectoryStats';
import FilterBar from './components/FilterBar';
import Notification from './components/Notification';
import EmployeeModal from './components/EmployeeModal';

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [activeDept, setActiveDept] = useState('All');
  const [msg, setMsg] = useState("");
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [loading, setLoading] = useState(true);

  const departments = ['Engineering', 'Design', 'Marketing', 'Sales'];

  useEffect(() => {
    const initFetch = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        const formatted = data.map((u, i) => ({
          ...u, dept: departments[i % departments.length], active: true
        }));
        setEmployees(formatted);
      } finally { setLoading(false); }
    };
    initFetch();
  }, []);

  const filtered = employees.filter(emp => 
    (activeDept === 'All' || emp.dept === activeDept)
  );

  const notify = (text) => setMsg(text);

  return (
    <div style={{ padding: '40px', background: '#f7fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px' }}>
          <h1>Staff_Nexus_v2</h1>
          <DirectoryStats list={employees} />
        </header>

        <FilterBar 
          departments={departments} 
          activeDept={activeDept} 
          onFilterChange={setActiveDept} 
        />

        {loading ? <p>SYNCING_DATA...</p> : (
          filtered.map(emp => (
            <div key={emp.id} onClick={() => setSelectedEmp(emp)}>
              <EmployeeCard 
                person={emp} 
                onToggle={(id) => { notify("Status Updated"); /* Logic */ }}
                onDelete={(id) => { setEmployees(prev => prev.filter(e => e.id !== id)); notify("Record Deleted"); }}
              />
            </div>
          ))
        )}

        <Notification message={msg} clear={() => setMsg("")} />
        <EmployeeModal isOpen={!!selectedEmp} data={selectedEmp} onClose={() => setSelectedEmp(null)} />
      </div>
    </div>
  );
}