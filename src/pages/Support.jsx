import { MessageCircle, Mail, Phone, ChevronRight, HelpCircle, FileQuestion } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Support() {
  const faqs = [
    { q: "How do I invite guests?", a: "Go to Guest List section and click 'Add Guest'" },
    { q: "Can I change wedding date?", a: "Yes, from Wedding Settings > Date & Time" },
    { q: "How to track budget?", a: "Budget tracker is available in Dashboard" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">How can we help you?</h2>
        <p className="text-blue-100 mb-6">24/7 support for all your wedding planning needs</p>
        <div className="max-w-md mx-auto"><div className="relative"><HelpCircle size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /><input type="text" placeholder="Search for help..." className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800" /></div></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[{ icon: MessageCircle, title: "Live Chat", desc: "Chat with our support team", action: "Start Chat", color: "bg-green-100 text-green-600" }, { icon: Mail, title: "Email Support", desc: "Get response within 24h", action: "Send Email", color: "bg-blue-100 text-blue-600" }, { icon: Phone, title: "Call Us", desc: "Speak to an expert", action: "Call Now", color: "bg-purple-100 text-purple-600" }].map((item) => (
          <Card key={item.title} className="text-center">
            <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-3`}><item.icon size={22} /></div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            <button className="mt-4 text-indigo-600 text-sm font-medium flex items-center justify-center gap-1">{item.action} <ChevronRight size={14} /></button>
          </Card>
        ))}
      </div>

      <Card>
        <h3 className="font-semibold mb-4 flex items-center gap-2"><FileQuestion size={18} className="text-indigo-500" />Frequently Asked Questions</h3>
        <div className="space-y-3">
          {faqs.map((faq, i) => (<div key={i} className="p-3 border-b border-gray-100 last:border-0"><p className="font-medium text-gray-800">{faq.q}</p><p className="text-sm text-gray-500 mt-1">{faq.a}</p></div>))}
        </div>
      </Card>
    </div>
  );
}