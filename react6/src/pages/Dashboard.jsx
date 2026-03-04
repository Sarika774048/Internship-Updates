import React from 'react';

const Dashboard = () => {
  const stats = [
    { label: "Total Users", value: "1,284", grow: "+12%" },
    { label: "Active Sessions", value: "432", grow: "+5%" },
    { label: "Server Uptime", value: "99.9%", grow: "Stable" }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 tracking-tight">System Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
            <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-green-500 font-bold mt-4">{stat.grow} since last login</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 bg-white p-10 rounded-3xl border border-gray-100 shadow-sm h-64 flex items-center justify-center italic text-gray-400">
        // Real-time chart visualization would render here
      </div>
    </div>
  );
};

export default Dashboard;