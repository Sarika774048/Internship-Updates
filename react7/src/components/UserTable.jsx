import React from 'react';

const UserTable = ({ items, onDelete }) => (
  <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
    <table className="w-full text-left">
      <thead className="bg-gray-50 border-b border-gray-100">
        <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          <th className="px-8 py-5">Name</th>
          <th className="px-8 py-5">Role</th>
          <th className="px-8 py-5 text-right">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {items.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-8 py-5 font-bold text-gray-800">{user.name}</td>
            <td className="px-8 py-5 text-gray-500 text-sm">{user.role}</td>
            <td className="px-8 py-5 text-right">
              <button onClick={() => onDelete(user.id)} className="text-red-500 font-bold text-xs uppercase">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserTable;