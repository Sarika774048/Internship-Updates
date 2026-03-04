import React, { useState } from 'react';

const Registration = () => {
  const [entries, setEntries] = useState([
    { id: 1, name: "Sarika N", role: "Admin", status: "Active" },
    { id: 2, name: "Rahul K", role: "Developer", status: "Pending" }
  ]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">User Registry</h2>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-sm">Add New</button>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <tr>
              <th className="px-8 py-5">Name</th>
              <th className="px-8 py-5">Role</th>
              <th className="px-8 py-5 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm font-medium">
            {entries.map(user => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-8 py-5 text-gray-900">{user.name}</td>
                <td className="px-8 py-5 text-gray-500">{user.role}</td>
                <td className="px-8 py-5 text-right">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${user.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registration;