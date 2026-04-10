// src/components/Sidebar.jsx
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  UserPlus, 
  TrendingUp, 
  Users, 
  Settings, 
  MessageSquare, 
  User, 
  X, 
  Menu,
  LogOut,
  HelpCircle,
  Bell
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { 
    section: "MAIN MENU", 
    items: [
      { name: "Dashboard", path: "/", icon: LayoutDashboard, badge: null },
      { name: "Proposals", path: "/Proposals", icon: FileText, badge: "12" },
      { name: "Add Proposal", path: "/Add-Proposal", icon: UserPlus, badge: null },
    ]
  },
  { 
    section: "ANALYTICS", 
    items: [
      { name: "Plan Analytics", path: "/plan-analytics", icon: TrendingUp, badge: null },
      { name: "Customer Analytics", path: "/customer-analytics", icon: Users, badge: "New" },
    ]
  },
  { 
    section: "COMMUNICATION", 
    items: [
      { name: "Messages", path: "/messages", icon: MessageSquare, badge: "3" },
    ]
  },
  { 
    section: "SETTINGS", 
    items: [
      { name: "Settings", path: "/settings", icon: Settings, badge: null },
    ]
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const getBadgeStyle = (badge) => {
    if (badge === "New") return "bg-green-500 text-white";
    if (badge === "12") return "bg-red-500 text-white";
    if (badge === "3") return "bg-orange-500 text-white";
    return "";
  };

  return (
    <aside className={`${isOpen ? 'w-72' : 'w-20'} bg-white shadow-2xl border-r border-gray-100 transition-all duration-300 flex flex-col h-screen sticky top-0`}>
      {/* Logo Section */}
      <div className="p-5 border-b border-gray-100 flex items-center justify-between">
        <div className={`flex items-center gap-2 ${!isOpen && 'justify-center w-full'}`}>
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          {isOpen && (
            <h1 className="font-extrabold text-xl tracking-tight">
              <span className="text-gray-800">Wedplan</span>
              <span className="text-indigo-600"> Admin</span>
            </h1>
          )}
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-all duration-200 text-gray-500"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* User Profile Section */}
      <div className="p-4 mx-2 mt-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
        <div className={`flex items-center gap-3 ${!isOpen && 'justify-center'}`}>
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center shadow-md">
              <User size={18} className="text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          {isOpen && (
            <div className="flex-1">
              <p className="font-bold text-sm text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">admin@wedplan.com</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {menuItems.map((section, idx) => (
          <div key={idx} className="mb-6">
            {isOpen && (
              <div className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-3 px-3">
                {section.section}
              </div>
            )}
            {section.items.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive: active }) => `
                    group relative flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 transition-all duration-200 font-semibold
                    ${active 
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }
                    ${!isOpen && 'justify-center'}
                  `}
                >
                  <item.icon size={20} className="flex-shrink-0" />
                  {isOpen && (
                    <>
                      <span className="text-sm font-semibold flex-1">{item.name}</span>
                      {item.badge && (
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${getBadgeStyle(item.badge)}`}>
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-100 mt-auto">
        {/* Notifications */}
        <div className={`flex items-center gap-3 mb-2 p-2 rounded-xl hover:bg-gray-50 transition cursor-pointer ${!isOpen && 'justify-center'}`}>
          <div className="relative">
            <Bell size={18} className="text-gray-500" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
          {isOpen && <span className="text-sm font-medium text-gray-700">Notifications</span>}
        </div>

        {/* Help */}
        <div className={`flex items-center gap-3 mb-2 p-2 rounded-xl hover:bg-gray-50 transition cursor-pointer ${!isOpen && 'justify-center'}`}>
          <HelpCircle size={18} className="text-gray-500" />
          {isOpen && <span className="text-sm font-medium text-gray-700">Help & Support</span>}
        </div>

        {/* Logout */}
        <div className={`flex items-center gap-3 mt-3 pt-2 border-t border-gray-100 p-2 rounded-xl hover:bg-red-50 transition cursor-pointer ${!isOpen && 'justify-center'}`}>
          <LogOut size={18} className="text-red-500" />
          {isOpen && <span className="text-sm font-medium text-red-600">Logout</span>}
        </div>
      </div>
    </aside>
  );
}