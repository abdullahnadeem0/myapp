import { Calendar, Mail, MessageSquare, Video, Cloud, MapPin, CreditCard, FileText } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Apps() {
  const apps = [
    { name: "Wedding Planner", icon: Calendar, desc: "Manage your timeline", installed: true },
    { name: "Guest Manager", icon: Mail, desc: "Send invitations", installed: true },
    { name: "Chat Assistant", icon: MessageSquare, desc: "AI wedding planner", installed: false },
    { name: "Video Editor", icon: Video, desc: "Create wedding reels", installed: false },
    { name: "Cloud Storage", icon: Cloud, desc: "Store your photos", installed: true },
    { name: "Venue Finder", icon: MapPin, desc: "Discover locations", installed: false },
    { name: "Budget Tracker", icon: CreditCard, desc: "Track expenses", installed: true },
    { name: "Checklist", icon: FileText, desc: "Wedding to-dos", installed: true },
  ];

  return (
    <div><h2 className="text-xl font-bold mb-5">All Apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {apps.map((app) => (<Card key={app.name} className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center"><app.icon size={20} className="text-indigo-600" /></div><div><p className="font-medium">{app.name}</p><p className="text-xs text-gray-400">{app.desc}</p></div></div><button className={`px-3 py-1 rounded-lg text-xs font-medium ${app.installed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>{app.installed ? 'Installed' : 'Install'}</button></Card>))}
      </div>
    </div>
  );
}