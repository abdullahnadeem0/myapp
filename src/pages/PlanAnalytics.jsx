// src/pages/PlanAnalytics.jsx
import { useState, useEffect } from 'react';
import { 
  FiDollarSign, 
  FiUsers, 
  FiStar, 
  FiTrendingUp, 
  FiCalendar,
  FiDownload,
  FiPieChart
} from 'react-icons/fi';
import { FaCrown, FaStar, FaGift } from 'react-icons/fa';

export default function PlanAnalytics() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [planStats, setPlanStats] = useState({
    free: 0,
    medium: 0,
    premium: 0
  });

  useEffect(() => {
    // Demo data - subscriptions
    const demoSubscriptions = [
      { id: 1, name: "Priya Sharma", email: "priya@example.com", plan: "premium", amount: 9999, date: "2024-12-15", status: "active", paymentMethod: "Credit Card" },
      { id: 2, name: "Rahul Patel", email: "rahul@example.com", plan: "medium", amount: 4999, date: "2024-12-14", status: "active", paymentMethod: "JazzCash" },
      { id: 3, name: "Anjali Reddy", email: "anjali@example.com", plan: "premium", amount: 9999, date: "2024-12-13", status: "active", paymentMethod: "EasyPaisa" },
      { id: 4, name: "Arjun Singh", email: "arjun@example.com", plan: "free", amount: 0, date: "2024-12-12", status: "active", paymentMethod: "-" },
      { id: 5, name: "Meera Iyer", email: "meera@example.com", plan: "medium", amount: 4999, date: "2024-12-11", status: "active", paymentMethod: "Bank Transfer" },
      { id: 6, name: "Vikram Khanna", email: "vikram@example.com", plan: "premium", amount: 9999, date: "2024-12-10", status: "active", paymentMethod: "Credit Card" },
      { id: 7, name: "Kavya Menon", email: "kavya@example.com", plan: "free", amount: 0, date: "2024-12-09", status: "active", paymentMethod: "-" },
      { id: 8, name: "Rohan Desai", email: "rohan@example.com", plan: "medium", amount: 4999, date: "2024-12-08", status: "active", paymentMethod: "JazzCash" },
      { id: 9, name: "Neha Gupta", email: "neha@example.com", plan: "premium", amount: 9999, date: "2024-12-07", status: "active", paymentMethod: "EasyPaisa" },
      { id: 10, name: "Amit Sharma", email: "amit@example.com", plan: "medium", amount: 4999, date: "2024-12-06", status: "active", paymentMethod: "Credit Card" },
    ];

    setSubscriptions(demoSubscriptions);
    
    // Calculate total earnings
    const total = demoSubscriptions.reduce((sum, sub) => sum + sub.amount, 0);
    setTotalEarnings(total);
    
    // Calculate plan statistics
    const stats = {
      free: demoSubscriptions.filter(s => s.plan === 'free').length,
      medium: demoSubscriptions.filter(s => s.plan === 'medium').length,
      premium: demoSubscriptions.filter(s => s.plan === 'premium').length
    };
    setPlanStats(stats);
  }, []);

  const getPlanIcon = (plan) => {
    switch(plan) {
      case 'free': return <FaGift className="text-gray-500" size={18} />;
      case 'medium': return <FaStar className="text-blue-500" size={18} />;
      case 'premium': return <FaCrown className="text-amber-500" size={18} />;
      default: return <FiStar size={18} />;
    }
  };

  const getPlanBadge = (plan) => {
    switch(plan) {
      case 'free': return <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Free</span>;
      case 'medium': return <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">Medium</span>;
      case 'premium': return <span className="px-2 py-1 bg-amber-100 text-amber-600 rounded-full text-xs">Premium</span>;
      default: return null;
    }
  };

  const totalUsers = planStats.free + planStats.medium + planStats.premium;
  const paidUsers = planStats.medium + planStats.premium;
  const conversionRate = totalUsers > 0 ? ((paidUsers / totalUsers) * 100).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Plan Analytics & Earnings</h1>
          <p className="text-gray-500">Track subscription plans, user purchases, and total revenue</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Earnings</p>
                <p className="text-2xl font-bold text-green-600">PKR {totalEarnings.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FiDollarSign size={24} className="text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Subscribers</p>
                <p className="text-2xl font-bold text-blue-600">{totalUsers}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FiUsers size={24} className="text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Paid Users</p>
                <p className="text-2xl font-bold text-purple-600">{paidUsers}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <FiTrendingUp size={24} className="text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Conversion Rate</p>
                <p className="text-2xl font-bold text-orange-600">{conversionRate}%</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <FiPieChart size={24} className="text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Plan Distribution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaGift size={28} className="text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold">Free Plan</h3>
            <p className="text-3xl font-bold text-gray-700 mt-2">{planStats.free}</p>
            <p className="text-sm text-gray-500">Users</p>
            <p className="text-xs text-gray-400 mt-2">Revenue: PKR 0</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaStar size={28} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold">Medium Plan</h3>
            <p className="text-3xl font-bold text-blue-700 mt-2">{planStats.medium}</p>
            <p className="text-sm text-gray-500">Users</p>
            <p className="text-xs text-green-600 mt-2">Revenue: PKR {(planStats.medium * 4999).toLocaleString()}</p>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaCrown size={28} className="text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold">Premium Plan</h3>
            <p className="text-3xl font-bold text-amber-700 mt-2">{planStats.premium}</p>
            <p className="text-sm text-gray-500">Users</p>
            <p className="text-xs text-green-600 mt-2">Revenue: PKR {(planStats.premium * 9999).toLocaleString()}</p>
          </div>
        </div>

        {/* Subscriptions Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Recent Subscriptions</h2>
              <p className="text-sm text-gray-500">List of all users who purchased plans</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
              <FiDownload size={16} /> Export Report
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr className="text-left text-gray-600 text-sm">
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Plan</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Payment Method</th>
                  <th className="px-6 py-3">Status</th>
                 </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub) => (
                  <tr key={sub.id} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getPlanIcon(sub.plan)}
                        <span className="font-medium">{sub.name}</span>
                      </div>
                     </td>
                    <td className="px-6 py-4 text-gray-600">{sub.email}</td>
                    <td className="px-6 py-4">{getPlanBadge(sub.plan)}</td>
                    <td className="px-6 py-4 font-semibold text-green-600">PKR {sub.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 text-gray-500">{sub.date}</td>
                    <td className="px-6 py-4 text-gray-500">{sub.paymentMethod}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">Active</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="px-6 py-4 border-t bg-gray-50 flex justify-between items-center">
            <p className="text-sm text-gray-500">Showing {subscriptions.length} subscriptions</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100">Previous</button>
              <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm">1</button>
              <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100">2</button>
              <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100">Next</button>
            </div>
          </div>
        </div>

        {/* Monthly Earnings Chart */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FiCalendar size={18} className="text-indigo-500" />
            Monthly Earnings Overview
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>December 2024</span>
                <span className="font-semibold">PKR 74,985</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>November 2024</span>
                <span className="font-semibold">PKR 54,990</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '73%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>October 2024</span>
                <span className="font-semibold">PKR 39,992</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '53%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}