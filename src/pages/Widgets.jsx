import { Activity, Users, DollarSign, Calendar, TrendingUp } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Widgets() {
  return (
    <div className="space-y-6"><h2 className="text-xl font-bold">Widgets Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card><h3 className="font-semibold mb-3">Activity Feed</h3><div className="space-y-3">{['New guest RSVPed', 'Payment received', 'Venue confirmed'].map((item, i) => (<div key={i} className="flex items-center gap-2 text-sm"><Activity size={14} className="text-green-500" /><span>{item}</span></div>))}</div></Card>
        <Card><h3 className="font-semibold mb-3">Quick Stats</h3><div className="grid grid-cols-2 gap-3">{[{ label: "Total Guests", value: "2,250", icon: Users }, { label: "Budget Left", value: "$30k", icon: DollarSign }, { label: "Days Left", value: "20", icon: Calendar }, { label: "Vendors", value: "45", icon: TrendingUp }].map((stat) => (<div key={stat.label} className="flex items-center gap-2"><stat.icon size={16} className="text-indigo-500" /><div><p className="text-xs text-gray-400">{stat.label}</p><p className="font-bold">{stat.value}</p></div></div>))}</div></Card>
      </div>
    </div>
  );
}