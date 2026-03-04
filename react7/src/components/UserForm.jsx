import React, { useState } from 'react';

const UserForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Developer');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name, role);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-8 flex gap-4">
      <input 
        value={name} onChange={(e) => setName(e.target.value)}
        className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter name..."
      />
      <select 
        value={role} onChange={(e) => setRole(e.target.value)}
        className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 outline-none"
      >
        <option>Developer</option>
        <option>Lead Architect</option>
        <option>Manager</option>
      </select>
      <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all">
        Add
      </button>
    </form>
  );
};

export default UserForm;