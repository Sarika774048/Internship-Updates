import React, { useState } from 'react';
import StatCards from './components/StatCards';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

export default function App() {
  // Lifting State Up: Central source of truth
  const [users, setUsers] = useState([
    { id: 1, name: 'Sarika N', role: 'Lead Architect' }
  ]);

  const handleAdd = (name, role) => {
    const newUser = { id: Date.now(), name, role };
    setUsers([newUser, ...users]); // Prepending for UX
  };

  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#fcfdfe] py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-gray-900 mb-10 italic">State_Node <span className="text-blue-600">v4.0</span></h1>
        
        {/* Passing props and callbacks down */}
        <StatCards count={users.length} />
        <UserForm onAdd={handleAdd} />
        <UserTable items={users} onDelete={handleDelete} />
      </div>
    </div>
  );
}