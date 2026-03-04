import React from 'react';

const StatCards = ({ count }) => (
  <div className="grid grid-cols-2 gap-4 mb-8">
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Records</p>
      <p className="text-3xl font-bold text-blue-600">{count}</p>
    </div>
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-right">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</p>
      <p className="text-sm font-bold text-green-500">Active_Node</p>
    </div>
  </div>
);

export default StatCards;