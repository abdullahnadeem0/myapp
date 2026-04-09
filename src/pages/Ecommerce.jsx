import { ShoppingBag, Star } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Ecommerce() {
  const products = [
    { name: "Wedding Dress", price: "$2,499", sales: 45, rating: 4.8 },
    { name: "Bridal Shoes", price: "$299", sales: 128, rating: 4.5 },
    { name: "Wedding Cake", price: "$450", sales: 89, rating: 4.9 },
    { name: "Floral Decor", price: "$890", sales: 234, rating: 4.7 },
  ];

  return (
    <div className="space-y-6"><div className="flex justify-between items-center"><h2 className="text-xl font-bold">Wedding Shop</h2><button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">Browse All</button></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (<Card key={product.name}><div className="bg-gray-100 h-32 rounded-lg mb-3 flex items-center justify-center"><ShoppingBag size={32} className="text-gray-400" /></div><h4 className="font-semibold">{product.name}</h4><p className="text-indigo-600 font-bold mt-1">{product.price}</p><div className="flex items-center justify-between mt-2 text-xs text-gray-500"><span>{product.sales} sold</span><div className="flex items-center gap-1"><Star size={12} className="text-yellow-400 fill-yellow-400" /><span>{product.rating}</span></div></div><button className="w-full mt-3 bg-gray-100 py-1.5 rounded-lg text-sm hover:bg-indigo-50 transition">Add to Cart</button></Card>))}
      </div>
    </div>
  );
}