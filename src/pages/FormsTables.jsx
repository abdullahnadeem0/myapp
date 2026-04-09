import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function FormsTables() {
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });
  const guests = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Confirmed", rsvp: "Yes" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Pending", rsvp: "Maybe" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", status: "Confirmed", rsvp: "Yes" },
    { id: 4, name: "Sarah Wilson", email: "sarah@example.com", status: "Declined", rsvp: "No" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card><h3 className="font-semibold mb-4">Add New Guest</h3><div className="space-y-4"><Input placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} /><Input placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /><Input placeholder="Role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} /><Button variant="primary">Add Guest</Button></div></Card>
        <Card><h3 className="font-semibold mb-4">Guest List</h3><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b"><th className="text-left py-2">Name</th><th className="text-left py-2">Email</th><th className="text-left py-2">Status</th><th className="text-left py-2">RSVP</th></tr></thead><tbody>{guests.map((guest) => (<tr key={guest.id} className="border-b"><td className="py-2">{guest.name}</td><td className="py-2">{guest.email}</td><td className="py-2"><span className={`px-2 py-1 rounded-full text-xs ${guest.status === 'Confirmed' ? 'bg-green-100 text-green-600' : guest.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'}`}>{guest.status}</span></td><td className="py-2">{guest.rsvp}</td></tr>))}</tbody></table></div></Card>
      </div>
    </div>
  );
}