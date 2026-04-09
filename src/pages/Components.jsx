import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function Components() {
  return (
    <div className="space-y-6"><h2 className="text-xl font-bold">UI Components</h2>
      <Card><h3 className="font-semibold mb-3">Buttons</h3><div className="flex flex-wrap gap-3"><Button variant="primary">Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="danger">Danger</Button></div></Card>
      <Card><h3 className="font-semibold mb-3">Alerts</h3><div className="space-y-2"><div className="p-3 bg-green-50 text-green-700 rounded-lg">Success! Wedding created.</div><div className="p-3 bg-red-50 text-red-700 rounded-lg">Error! Please try again.</div><div className="p-3 bg-yellow-50 text-yellow-700 rounded-lg">Warning! Budget exceeded.</div></div></Card>
    </div>
  );
}