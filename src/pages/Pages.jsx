import { Card } from '../components/ui/Card';

export default function Pages() {
  return (
    <div className="space-y-6"><h2 className="text-xl font-bold">Page Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {['About Us', 'Services', 'Pricing', 'Contact', 'Blog', 'Gallery'].map((page) => (<Card key={page} className="flex justify-between items-center"><span className="font-medium">{page}</span><div className="flex gap-2"><button className="text-indigo-600 text-sm">Edit</button><button className="text-gray-400 text-sm">Preview</button></div></Card>))}
      </div>
    </div>
  );
}