import { Heart, Star, Bell, Calendar, Users, Camera, Music, Gift, Coffee, Map, Cloud, Sun } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Icons() {
  const icons = [Heart, Star, Bell, Calendar, Users, Camera, Music, Gift, Coffee, Map, Cloud, Sun];
  return (
    <div><h2 className="text-xl font-bold mb-5">Icon Library</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {icons.map((Icon, i) => (<Card key={i} className="text-center p-4"><Icon size={32} className="mx-auto text-indigo-500" /><p className="text-xs text-gray-400 mt-2">{Icon.name}</p></Card>))}
      </div>
    </div>
  );
}