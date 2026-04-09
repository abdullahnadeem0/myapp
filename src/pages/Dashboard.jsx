// src/pages/Dashboard.jsx
import { 
  Calendar, 
  Users, 
  DollarSign, 
  Bell, 
  Clock, 
  UserCheck, 
  UserX, 
  AlertCircle, 
  CheckCircle, 
  Wallet, 
  CalendarCheck, 
  UsersRound,
  User,
  Heart,
  TrendingUp,
  Gift,
  Briefcase
} from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Dashboard() {
  // Total Stats for Marriage Bureau
  const stats = [
    { title: "Total Male", value: "2,450", sub: "Registered Grooms", icon: User, color: "bg-blue-500", change: "+15%" },
    { title: "Total Female", value: "2,890", sub: "Registered Brides", icon: Users, color: "bg-pink-500", change: "+18%" },
    { title: "Total Users", value: "5,340", sub: "Total Platform Users", icon: UsersRound, color: "bg-purple-500", change: "+16%" },
  ];

  // Wedding Stats (Marriages Done)
  const weddingStats = [
    { title: "Marriages Done", value: "1,250", sub: "Successfully Matched", icon: CheckCircle, color: "bg-green-500" },
    { title: "Pending Proposals", value: "380", sub: "Awaiting Response", icon: CalendarCheck, color: "bg-orange-500" },
    { title: "Total Proposals", value: "1,630", sub: "All Time Requests", icon: Heart, color: "bg-indigo-500" },
  ];

  // Verification & Earnings in PKR
  const verificationStats = [
    { title: "Verified Profiles", value: "3,890", sub: "Email & Phone Verified", icon: UserCheck, color: "bg-emerald-500", percentage: "73%" },
    { title: "Unverified Profiles", value: "1,450", sub: "Need Verification", icon: UserX, color: "bg-red-500", percentage: "27%" },
    { title: "Total Earnings", value: "PKR 2.85 Cr", sub: "Platform Commission", icon: Wallet, color: "bg-amber-500", change: "+32%" },
  ];

  // Recently Married Couples (Recent Weddings)
  const recentWeddings = [
    { id: 1, groom: "Rahul Khan", bride: "Priya Sharma", date: "Dec 15, 2024", commission: "PKR 85,000", package: "Premium" },
    { id: 2, groom: "Amit Ali", bride: "Sneha Verma", date: "Dec 20, 2024", commission: "PKR 55,000", package: "Essential" },
    { id: 3, groom: "Vikram Singh", bride: "Neha Reddy", date: "Dec 25, 2024", commission: "PKR 1,25,000", package: "Luxury" },
    { id: 4, groom: "Rohit Malhotra", bride: "Anjali Nair", date: "Jan 05, 2025", commission: "PKR 85,000", package: "Premium" },
    { id: 5, groom: "Sanjay Gupta", bride: "Kavita Joshi", date: "Jan 12, 2025", commission: "PKR 55,000", package: "Essential" },
  ];

  // Recent Profile Requests (Incoming Rishtas)
  const recentRequests = [
    { id: 1, name: "Abdul Rehman", age: 28, city: "Karachi", status: "Pending", type: "Groom" },
    { id: 2, name: "Fatima Akhtar", age: 25, city: "Lahore", status: "Pending", type: "Bride" },
    { id: 3, name: "Hamza Ali", age: 30, city: "Islamabad", status: "Verified", type: "Groom" },
    { id: 4, name: "Zara Tariq", age: 24, city: "Rawalpindi", status: "Pending", type: "Bride" },
    { id: 5, name: "Bilal Ahmed", age: 32, city: "Multan", status: "Verified", type: "Groom" },
  ];

  // Pending Profile Verifications
  const pendingVerifications = [
    { name: "Sana Mahmood", type: "Bride", date: "Dec 18, 2024", priority: "High", action: "Verify" },
    { name: "Usman Chaudhry", type: "Groom", date: "Dec 19, 2024", priority: "High", action: "Verify" },
    { name: "Ayesha Tariq", type: "Bride", date: "Dec 20, 2024", priority: "Medium", action: "Verify" },
    { name: "Omar Riaz", type: "Groom", date: "Dec 21, 2024", priority: "Low", action: "Verify" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-1">Assalam-o-Alaikum Maria! 👋</h2>
            <p className="text-indigo-100 mb-4">Welcome to Marriage Bureau Dashboard - Manage Rishtas & Weddings</p>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-50 transition">
              View Full Analytics
            </button>
          </div>
          <div className="bg-white/20 rounded-full p-3">
            <Briefcase size={28} />
          </div>
        </div>
      </div>

      {/* User Stats Cards - Male/Female/Total */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-2">{stat.sub}</p>
              </div>
              <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                <stat.icon size={20} className="text-white" />
              </div>
            </div>
            <div className="mt-3 text-xs text-green-600">{stat.change} from last month</div>
          </Card>
        ))}
      </div>

      {/* Wedding Stats - Marriages Done / Pending Proposals / Total Proposals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {weddingStats.map((stat) => (
          <Card key={stat.title}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-2">{stat.sub}</p>
              </div>
              <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                <stat.icon size={20} className="text-white" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Verification & Earnings Stats (PKR) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {verificationStats.map((stat) => (
          <Card key={stat.title}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-2">{stat.sub}</p>
                {stat.percentage && <p className="text-xs text-gray-400 mt-1">{stat.percentage} of total users</p>}
              </div>
              <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                <stat.icon size={20} className="text-white" />
              </div>
            </div>
            {stat.change && <div className="mt-3 text-xs text-green-600">{stat.change} revenue growth (PKR)</div>}
          </Card>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Recently Married Couples */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recently Weddings Section (Jin ki abhi shadi hui hai) */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <Gift size={18} className="text-indigo-500" />
                Recently Married Couples (Abhi Abhi Shadi Hui)
              </h3>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Last 30 days</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b">
                  <tr className="text-left text-gray-500">
                    <th className="py-2">Groom</th>
                    <th className="py-2">Bride</th>
                    <th className="py-2">Wedding Date</th>
                    <th className="py-2">Package</th>
                    <th className="py-2">Commission (Profit)</th>
                  </tr>
                </thead>
                <tbody>
                  {recentWeddings.map((wedding) => (
                    <tr key={wedding.id} className="border-b hover:bg-gray-50">
                      <td className="py-2 font-medium">{wedding.groom}</td>
                      <td className="py-2">{wedding.bride}</td>
                      <td className="py-2 text-gray-500">{wedding.date}</td>
                      <td className="py-2">
                        <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-600">
                          {wedding.package}
                        </span>
                      </td>
                      <td className="py-2 font-semibold text-green-600">{wedding.commission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="w-full mt-4 text-center text-sm text-indigo-600 py-2 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition">
              View All Married Couples
            </button>
          </Card>

          {/* Recent Profile Requests (Incoming Rishtas) */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <Users size={18} className="text-amber-500" />
                Recent Profile Requests (Naye Rishtay)
              </h3>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Awaiting Response</span>
            </div>
            <div className="space-y-3">
              {recentRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${request.type === 'Groom' ? 'bg-blue-100' : 'bg-pink-100'}`}>
                      <User size={18} className={request.type === 'Groom' ? 'text-blue-600' : 'text-pink-600'} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{request.name}</p>
                      <p className="text-xs text-gray-400">{request.age} years • {request.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${request.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                      {request.status}
                    </span>
                    <button className="text-indigo-600 text-sm hover:text-indigo-800">View →</button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column - Pending Verifications & Platform Overview */}
        <div className="space-y-6">
          {/* Pending Profile Verifications */}
          <Card>
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <UserCheck size={18} className="text-emerald-500" />
              Pending Profile Verifications
            </h3>
            <div className="space-y-3">
              {pendingVerifications.map((profile, i) => (
                <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${profile.priority === 'High' ? 'bg-red-500' : profile.priority === 'Medium' ? 'bg-orange-500' : 'bg-yellow-500'}`}></div>
                    <div>
                      <p className="text-sm font-medium">{profile.name}</p>
                      <p className="text-xs text-gray-400">{profile.type} • {profile.date}</p>
                    </div>
                  </div>
                  <button className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded hover:bg-indigo-100">
                    {profile.action}
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-center text-sm text-indigo-600 py-2 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition">
              Verify All Profiles
            </button>
          </Card>

          {/* Marriage Bureau Platform Overview */}
          <Card>
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <TrendingUp size={18} className="text-green-500" />
              Bureau Overview
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Avg. Commission per Wedding</span>
                <span className="font-semibold">PKR 75,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Success Rate (Marriages)</span>
                <span className="font-semibold text-green-600">76.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Profile Verification Rate</span>
                <span className="font-semibold text-blue-600">72.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Active Proposals</span>
                <span className="font-semibold">380</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">This Month's Revenue (PKR)</span>
                <span className="text-lg font-bold text-green-600">PKR 42.5 Lakhs</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">Target: PKR 62.5 Lakhs (68% achieved)</p>
            </div>
          </Card>

          {/* Quick Stats Card */}
          <Card>
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Clock size={18} className="text-amber-500" />
              Today's Summary
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>New Profile Requests</span>
                <span className="font-bold text-blue-600">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Profile Verifications Pending</span>
                <span className="font-bold text-orange-600">8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>New Matches</span>
                <span className="font-bold text-green-600">5</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Today's Commission Earned</span>
                <span className="font-bold text-emerald-600">PKR 2,50,000</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}