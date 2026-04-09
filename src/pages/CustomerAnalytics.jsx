// src/pages/CustomerAnalytics.jsx
import { useState, useEffect } from 'react';
import { 
  FiUsers, 
  FiUserCheck, 
  FiUserX, 
  FiHeart, 
  FiBriefcase, 
  FiMapPin, 
  FiCalendar,
  FiTrendingUp,
  FiPieChart,
  FiAward,
  FiSmile,
  FiFrown,
  FiAlertCircle
} from 'react-icons/fi';
import { FaRegHeart, FaHeartBroken, FaRegSadTear, FaRegSmile, FaUserGraduate } from 'react-icons/fa';
import { MdVerified, MdPending, MdCancel } from 'react-icons/md';

export default function CustomerAnalytics() {
  const [customers, setCustomers] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    married: 0,
    unmarried: 0,
    divorced: 0,
    widowed: 0,
    proposalsReceived: 0,
    proposalsApproved: 0,
    proposalsRejected: 0,
    pendingVerification: 0
  });

  const [professionStats, setProfessionStats] = useState({});
  const [cityStats, setCityStats] = useState({});
  const [ageStats, setAgeStats] = useState({
    "18-25": 0,
    "26-30": 0,
    "31-35": 0,
    "36-40": 0,
    "40+": 0
  });

  useEffect(() => {
    // Demo customer data
    const demoCustomers = [
      { id: 1, name: "Priya Sharma", age: 26, gender: "Female", city: "Mumbai", profession: "Software Engineer", maritalStatus: "Unmarried", status: "verified", proposalStatus: "approved" },
      { id: 2, name: "Rahul Patel", age: 29, gender: "Male", city: "Hyderabad", profession: "Business Owner", maritalStatus: "Unmarried", status: "verified", proposalStatus: "approved" },
      { id: 3, name: "Anjali Reddy", age: 24, gender: "Female", city: "Delhi", profession: "Doctor", maritalStatus: "Unmarried", status: "verified", proposalStatus: "approved" },
      { id: 4, name: "Arjun Singh", age: 31, gender: "Male", city: "Mumbai", profession: "Civil Engineer", maritalStatus: "Married", status: "verified", proposalStatus: "approved" },
      { id: 5, name: "Meera Iyer", age: 27, gender: "Female", city: "Chennai", profession: "CA", maritalStatus: "Unmarried", status: "verified", proposalStatus: "pending" },
      { id: 6, name: "Vikram Khanna", age: 28, gender: "Male", city: "Bangalore", profession: "Marketing Manager", maritalStatus: "Divorced", status: "verified", proposalStatus: "approved" },
      { id: 7, name: "Kavya Menon", age: 25, gender: "Female", city: "Kochi", profession: "Teacher", maritalStatus: "Unmarried", status: "verified", proposalStatus: "approved" },
      { id: 8, name: "Rohan Desai", age: 30, gender: "Male", city: "Pune", profession: "Data Scientist", maritalStatus: "Widowed", status: "verified", proposalStatus: "approved" },
      { id: 9, name: "Neha Gupta", age: 32, gender: "Female", city: "Delhi", profession: "Lawyer", maritalStatus: "Divorced", status: "verified", proposalStatus: "approved" },
      { id: 10, name: "Amit Sharma", age: 35, gender: "Male", city: "Mumbai", profession: "Architect", maritalStatus: "Married", status: "verified", proposalStatus: "approved" },
      { id: 11, name: "Sneha Verma", age: 23, gender: "Female", city: "Lucknow", profession: "Student", maritalStatus: "Unmarried", status: "pending", proposalStatus: "pending" },
      { id: 12, name: "Rajesh Kumar", age: 40, gender: "Male", city: "Patna", profession: "Government Employee", maritalStatus: "Married", status: "verified", proposalStatus: "rejected" },
      { id: 13, name: "Pooja Singh", age: 29, gender: "Female", city: "Jaipur", profession: "HR Manager", maritalStatus: "Unmarried", status: "verified", proposalStatus: "approved" },
      { id: 14, name: "Manish Joshi", age: 33, gender: "Male", city: "Ahmedabad", profession: "Entrepreneur", maritalStatus: "Divorced", status: "verified", proposalStatus: "approved" },
      { id: 15, name: "Divya Nair", age: 28, gender: "Female", city: "Kochi", profession: "Nurse", maritalStatus: "Widowed", status: "verified", proposalStatus: "approved" },
    ];

    setCustomers(demoCustomers);
    
    // Calculate stats
    const total = demoCustomers.length;
    const married = demoCustomers.filter(c => c.maritalStatus === "Married").length;
    const unmarried = demoCustomers.filter(c => c.maritalStatus === "Unmarried").length;
    const divorced = demoCustomers.filter(c => c.maritalStatus === "Divorced").length;
    const widowed = demoCustomers.filter(c => c.maritalStatus === "Widowed").length;
    const proposalsReceived = demoCustomers.filter(c => c.proposalStatus === "pending" || c.proposalStatus === "approved" || c.proposalStatus === "rejected").length;
    const proposalsApproved = demoCustomers.filter(c => c.proposalStatus === "approved").length;
    const proposalsRejected = demoCustomers.filter(c => c.proposalStatus === "rejected").length;
    const pendingVerification = demoCustomers.filter(c => c.status === "pending").length;

    setStats({
      total, married, unmarried, divorced, widowed,
      proposalsReceived, proposalsApproved, proposalsRejected, pendingVerification
    });

    // Profession stats
    const profStats = {};
    demoCustomers.forEach(c => {
      const prof = c.profession;
      profStats[prof] = (profStats[prof] || 0) + 1;
    });
    setProfessionStats(profStats);

    // City stats
    const cityStatsMap = {};
    demoCustomers.forEach(c => {
      const city = c.city;
      cityStatsMap[city] = (cityStatsMap[city] || 0) + 1;
    });
    setCityStats(cityStatsMap);

    // Age stats
    const ageStatsMap = { "18-25": 0, "26-30": 0, "31-35": 0, "36-40": 0, "40+": 0 };
    demoCustomers.forEach(c => {
      if (c.age <= 25) ageStatsMap["18-25"]++;
      else if (c.age <= 30) ageStatsMap["26-30"]++;
      else if (c.age <= 35) ageStatsMap["31-35"]++;
      else if (c.age <= 40) ageStatsMap["36-40"]++;
      else ageStatsMap["40+"]++;
    });
    setAgeStats(ageStatsMap);
  }, []);

  const getMaritalStatusIcon = (status) => {
    switch(status) {
      case "Married": return <FaRegHeart className="text-green-500" size={20} />;
      case "Unmarried": return <FaRegSmile className="text-blue-500" size={20} />;
      case "Divorced": return <FaHeartBroken className="text-red-500" size={20} />;
      case "Widowed": return <FaRegSadTear className="text-gray-500" size={20} />;
      default: return <FiUsers size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Customer Analytics Dashboard</h1>
          <p className="text-gray-500">Complete insights about customers, marriages, proposals, and more</p>
        </div>

        {/* Main Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-indigo-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Customers</p>
                <p className="text-2xl font-bold text-indigo-600">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <FiUsers size={24} className="text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Married Customers</p>
                <p className="text-2xl font-bold text-green-600">{stats.married}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FiHeart size={24} className="text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Unmarried</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.unmarried}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <FiSmile size={24} className="text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Divorced + Widowed</p>
                <p className="text-2xl font-bold text-red-600">{stats.divorced + stats.widowed}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <FiFrown size={24} className="text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Marital Status Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-5 text-center">
            <div className="flex justify-center mb-2">{getMaritalStatusIcon("Married")}</div>
            <p className="text-2xl font-bold text-green-700">{stats.married}</p>
            <p className="text-sm text-gray-600">Married</p>
            <p className="text-xs text-gray-400">{((stats.married/stats.total)*100).toFixed(1)}% of total</p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 text-center">
            <div className="flex justify-center mb-2">{getMaritalStatusIcon("Unmarried")}</div>
            <p className="text-2xl font-bold text-blue-700">{stats.unmarried}</p>
            <p className="text-sm text-gray-600">Unmarried</p>
            <p className="text-xs text-gray-400">{((stats.unmarried/stats.total)*100).toFixed(1)}% of total</p>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-5 text-center">
            <div className="flex justify-center mb-2">{getMaritalStatusIcon("Divorced")}</div>
            <p className="text-2xl font-bold text-red-700">{stats.divorced}</p>
            <p className="text-sm text-gray-600">Divorced</p>
            <p className="text-xs text-gray-400">{((stats.divorced/stats.total)*100).toFixed(1)}% of total</p>
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-5 text-center">
            <div className="flex justify-center mb-2">{getMaritalStatusIcon("Widowed")}</div>
            <p className="text-2xl font-bold text-gray-700">{stats.widowed}</p>
            <p className="text-sm text-gray-600">Widowed</p>
            <p className="text-xs text-gray-400">{((stats.widowed/stats.total)*100).toFixed(1)}% of total</p>
          </div>
        </div>

        {/* Proposal Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <MdVerified size={20} className="text-purple-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Proposals Approved</p>
                <p className="text-xl font-bold text-purple-600">{stats.proposalsApproved}</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${(stats.proposalsApproved/stats.proposalsReceived)*100}%` }}></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <MdPending size={20} className="text-yellow-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Pending Verification</p>
                <p className="text-xl font-bold text-yellow-600">{stats.pendingVerification}</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${(stats.pendingVerification/stats.total)*100}%` }}></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <MdCancel size={20} className="text-red-600" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Proposals Rejected</p>
                <p className="text-xl font-bold text-red-600">{stats.proposalsRejected}</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: `${(stats.proposalsRejected/stats.proposalsReceived)*100}%` }}></div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Professional Breakdown */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FiBriefcase className="text-indigo-500" />
              Professional Breakdown
            </h3>
            <div className="space-y-3">
              {Object.entries(professionStats).map(([prof, count]) => (
                <div key={prof}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{prof}</span>
                    <span className="font-semibold">{count} customers</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${(count/stats.total)*100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* City Distribution */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FiMapPin className="text-indigo-500" />
              Top Cities
            </h3>
            <div className="space-y-3">
              {Object.entries(cityStats).sort((a,b) => b[1] - a[1]).slice(0, 5).map(([city, count]) => (
                <div key={city}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{city}</span>
                    <span className="font-semibold">{count} customers</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(count/stats.total)*100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Age Distribution & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FiCalendar className="text-indigo-500" />
              Age Distribution
            </h3>
            <div className="space-y-3">
              {Object.entries(ageStats).map(([range, count]) => (
                <div key={range}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{range} years</span>
                    <span className="font-semibold">{count} customers</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${(count/stats.total)*100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FiTrendingUp className="text-indigo-500" />
              Quick Insights
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span>Marriage Success Rate</span>
                <span className="font-bold text-green-600">{((stats.married/stats.total)*100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span>Active Proposal Rate</span>
                <span className="font-bold text-blue-600">{((stats.proposalsApproved/stats.proposalsReceived)*100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span>Verification Pending</span>
                <span className="font-bold text-yellow-600">{stats.pendingVerification} customers</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span>Average Customer Age</span>
                <span className="font-bold text-purple-600">29.5 years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Customers Table */}
        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-800">Recent Customers</h2>
            <p className="text-sm text-gray-500">List of all registered customers</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr className="text-left text-gray-600 text-sm">
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Age</th>
                  <th className="px-6 py-3">City</th>
                  <th className="px-6 py-3">Profession</th>
                  <th className="px-6 py-3">Marital Status</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium">{customer.name}</td>
                    <td className="px-6 py-4">{customer.age}</td>
                    <td className="px-6 py-4">{customer.city}</td>
                    <td className="px-6 py-4">{customer.profession}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getMaritalStatusIcon(customer.maritalStatus)}
                        <span>{customer.maritalStatus}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {customer.status === 'verified' ? (
                        <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">Verified</span>
                      ) : (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">Pending</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}