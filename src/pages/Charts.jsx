import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card } from '../components/ui/Card';

const barData = [{ name: 'Jan', guests: 240, budget: 4000 }, { name: 'Feb', guests: 300, budget: 6000 }, { name: 'Mar', guests: 450, budget: 8000 }];
const pieData = [{ name: 'Venue', value: 45, color: '#6366f1' }, { name: 'Catering', value: 25, color: '#8b5cf6' }, { name: 'Decor', value: 20, color: '#a78bfa' }, { name: 'Other', value: 10, color: '#c4b5fd' }];

export default function Charts() {
  return (
    <div className="space-y-6"><h2 className="text-xl font-bold">Analytics Charts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card><h3 className="font-semibold mb-4">Guest Growth</h3><ResponsiveContainer width="100%" height={300}><BarChart data={barData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Bar dataKey="guests" fill="#6366f1" /></BarChart></ResponsiveContainer></Card>
        <Card><h3 className="font-semibold mb-4">Budget Allocation</h3><ResponsiveContainer width="100%" height={300}><PieChart><Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>{pieData.map((entry, index) => (<Cell key={index} fill={entry.color} />))}</Pie><Tooltip /></PieChart></ResponsiveContainer></Card>
      </div>
    </div>
  );
}