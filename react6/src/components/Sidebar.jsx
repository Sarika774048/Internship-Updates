import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <aside className="w-64 bg-white border-r border-gray-200 fixed h-full p-6 shadow-sm">
    <div className="mb-10 px-2">
      <h1 className="text-xl font-bold text-blue-600 tracking-tight italic">INTERACTIVE FORM</h1>
      <div className="h-1 w-12 bg-blue-600 mt-1 rounded-full"></div>
    </div>
    
    <nav className="space-y-1">
      <NavLink to="/dashboard" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}>
        Dashboard
      </NavLink>
      <NavLink to="/registration" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}>
        Registration
      </NavLink>
      <NavLink to="/settings" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}>
        Settings
      </NavLink>
    </nav>
  </aside>
);

export default Sidebar;