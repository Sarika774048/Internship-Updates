import React from 'react';

const Settings = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-2xl">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 tracking-tight">System Settings</h2>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-gray-100 flex justify-between items-center">
        <div>
          <p className="font-bold text-gray-800 text-sm">Email Notifications</p>
          <p className="text-xs text-gray-400">Receive alerts on system changes</p>
        </div>
        <div className="w-12 h-6 bg-blue-600 rounded-full"></div>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-gray-100 flex justify-between items-center">
        <div>
          <p className="font-bold text-gray-800 text-sm">Dark Mode</p>
          <p className="text-xs text-gray-400">Apply sleek terminal aesthetics</p>
        </div>
        <div className="w-12 h-6 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  </div>
);

export default Settings;