// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, UserPlus, TrendingUp, Users, Settings, MessageSquare, User, X, Menu } from 'lucide-react';

import { useState } from 'react';

const menuItems = [
  { section: "Main Menu", items: [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Proposals", path: "/Proposals", icon: FileText },
    { name: "Add Proposal", path: "/Add-Proposal", icon: UserPlus },
    { name: "Plan Analytics", path: "/plan-analytics", icon: TrendingUp },
    { name: "Customer Analytics", path: "/customer-analytics", icon: Users },
    { name: "Messages", path: "/messages", icon: MessageSquare },
    { name: "Settings", path: "/settings", icon: Settings },
  ]},
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className={`font-bold text-xl text-indigo-600 ${!isOpen && 'hidden'}`}>Wedplan Admin</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-1 rounded-lg hover:bg-gray-100">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto p-3">
        {menuItems.map((section, idx) => (
          <div key={idx} className="mb-6">
            {isOpen && <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">{section.section}</div>}
            {section.items.map((item) => (
              <NavLink key={item.path} to={item.path} className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`
              }>
                <item.icon size={20} />
                {isOpen && <span className="text-sm">{item.name}</span>}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <User size={16} className="text-indigo-600" />
          </div>
          {isOpen && (
            <div>
              <p className="text-sm font-medium">Admin</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}