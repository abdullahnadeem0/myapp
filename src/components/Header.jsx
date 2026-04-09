import { Search, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search..." className="pl-9 pr-4 py-1.5 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:border-indigo-300" />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell size={20} className="text-gray-500" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-medium">U</div>
          <span className="text-sm font-medium">Usorai</span>
        </div>
      </div>
    </header>
  );
}
