import { CheckCircle, Sparkles, Shield, Zap } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Features() {
  const features = [
    { icon: Sparkles, title: "AI Assistant", desc: "Smart wedding planning suggestions" },
    { icon: Shield, title: "Secure Payment", desc: "Protected transactions" },
    { icon: Zap, title: "Real-time Updates", desc: "Instant notifications" },
    { icon: CheckCircle, title: "Task Automation", desc: "Automated reminders" },
  ];

  return (
    <div className="space-y-6"><h2 className="text-xl font-bold">Platform Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature) => (<Card key={feature.title} className="text-center"><div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-3"><feature.icon size={24} /></div><h3 className="font-semibold">{feature.title}</h3><p className="text-sm text-gray-500 mt-1">{feature.desc}</p></Card>))}
      </div>
    </div>
  );
}