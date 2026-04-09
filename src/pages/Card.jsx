import { Card as UICard } from '../components/ui/Card';

export default function Card() {
  const cards = [
    { title: "Basic Plan", price: "$99", features: ["Guest List", "Budget Tracker", "Email Support"] },
    { title: "Pro Plan", price: "$299", features: ["Everything in Basic", "Vendor Management", "Priority Support", "Analytics"] },
    { title: "Enterprise", price: "$599", features: ["Everything in Pro", "Dedicated Manager", "API Access", "Custom Branding"] },
  ];

  return (
    <div><h2 className="text-xl font-bold mb-5">Pricing Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card) => (<UICard key={card.title}><h3 className="text-lg font-bold">{card.title}</h3><p className="text-2xl font-bold mt-2">{card.price}<span className="text-sm font-normal text-gray-400">/month</span></p><ul className="mt-4 space-y-2">{card.features.map((feature) => (<li key={feature} className="text-sm text-gray-600">✓ {feature}</li>))}</ul><button className="w-full mt-6 bg-indigo-600 text-white py-2 rounded-lg text-sm">Select Plan</button></UICard>))}
      </div>
    </div>
  );
}