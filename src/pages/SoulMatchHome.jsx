// src/pages/SoulMatchHome.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiUser, 
  FiLock, 
  FiShield, 
  FiCheckCircle, 
  FiHeart, 
  FiMapPin, 
  FiBriefcase, 
  FiUsers,
  FiStar,
  FiChevronRight,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiSearch
} from 'react-icons/fi';
import { FaShieldAlt, FaHandsHelping, FaRegSmile, FaGem } from 'react-icons/fa';

export default function SoulMatchHome() {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const featuredProfiles = [
    { name: "Priya Sharma", age: 26, profession: "Software Engineer", location: "Mumbai, Maharashtra", religion: "Hindu", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Rahul Patel", age: 29, profession: "Business Owner", location: "Hyderabad, Telangana", religion: "Hindu", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Anjali Reddy", age: 24, profession: "Doctor", location: "Delhi NCR", religion: "Sikh", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Arjun Singh", age: 31, profession: "Civil Engineer", location: "Mumbai, Maharashtra", religion: "Hindu", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Meera Iyer", age: 27, profession: "Chartered Accountant", location: "Chennai, Tamil Nadu", religion: "Hindu", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "Vikram Khanna", age: 28, profession: "Marketing Manager", location: "Bangalore, Karnataka", religion: "Hindu", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Kavya Menon", age: 25, profession: "Teacher", location: "Kochi, Kerala", religion: "Hindu", image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: "Rohan Desai", age: 30, profession: "Data Scientist", location: "Pune, Maharashtra", religion: "Hindu", image: "https://randomuser.me/api/portraits/men/4.jpg" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', loginData);
    // Demo login - any credentials work
    localStorage.setItem('loggedUser', JSON.stringify({ email: loginData.email, fullName: loginData.email.split('@')[0] }));
    setShowLoginModal(false);
    navigate('/browse-profiles');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setShowRegisterModal(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <FiHeart className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold text-gray-800">Soul<span className="text-pink-500">Match</span></span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-pink-500 transition">Home</a>
              <a href="#browse" className="text-gray-600 hover:text-pink-500 transition">Browse Profiles</a>
              <a href="#success" className="text-gray-600 hover:text-pink-500 transition">Success Stories</a>
              <a href="#premium" className="text-gray-600 hover:text-pink-500 transition">Premium Plans</a>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowLoginModal(true)}
                className="px-4 py-2 text-gray-600 hover:text-pink-500 transition"
              >
                Login
              </button>
              <button 
                onClick={() => setShowRegisterModal(true)}
                className="px-5 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition flex items-center gap-2"
              >
                Register Free <FiChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Find Your Perfect <span className="text-pink-500">Life Partner</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Trusted by 10L+ Families • Verified Profiles • Safe & Secure
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setShowRegisterModal(true)}
                className="px-8 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Register Free
              </button>
              <button 
                onClick={() => navigate('/browse-profiles')}
                className="px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-semibold hover:bg-pink-50 transition"
              >
                Browse Profiles
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">5,000+ profiles matched this week</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-pink-500">10,000+</div>
              <div className="text-gray-500 text-sm">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-500">5,000+</div>
              <div className="text-gray-500 text-sm">Weekly Matches</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-500">100%</div>
              <div className="text-gray-500 text-sm">Verified Profiles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-500">24/7</div>
              <div className="text-gray-500 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield size={28} className="text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
              <p className="text-gray-500 text-sm">Your data is encrypted and protected. Control who sees your profile.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheckCircle size={28} className="text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Verified Profiles</h3>
              <p className="text-gray-500 text-sm">Every profile is manually verified by our team for authenticity.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGem size={28} className="text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Matchmaking</h3>
              <p className="text-gray-500 text-sm">AI-powered matching combined with personalized assistance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart size={28} className="text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Success Stories</h3>
              <p className="text-gray-500 text-sm">Join 10L+ families who found their perfect match through our platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Profiles Section */}
      <section id="browse" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Featured Profiles</h2>
            <button className="text-pink-500 hover:text-pink-600 flex items-center gap-1">
              View All <FiChevronRight size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProfiles.slice(0, 4).map((profile, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100">
                <div className="h-32 bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center">
                  <img src={profile.image} alt={profile.name} className="w-20 h-20 rounded-full border-4 border-white object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">{profile.name}</h3>
                  <p className="text-sm text-gray-500">{profile.age} years, {profile.profession}</p>
                  <p className="text-xs text-gray-400 flex items-center justify-center gap-1 mt-1">
                    <FiMapPin size={12} /> {profile.location}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{profile.religion}</p>
                  <button className="w-full mt-3 py-2 bg-pink-50 text-pink-500 rounded-lg text-sm font-medium hover:bg-pink-100 transition">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {featuredProfiles.slice(4, 8).map((profile, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100">
                <div className="h-32 bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center">
                  <img src={profile.image} alt={profile.name} className="w-20 h-20 rounded-full border-4 border-white object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold">{profile.name}</h3>
                  <p className="text-sm text-gray-500">{profile.age} years, {profile.profession}</p>
                  <p className="text-xs text-gray-400 flex items-center justify-center gap-1 mt-1">
                    <FiMapPin size={12} /> {profile.location}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{profile.religion}</p>
                  <button className="w-full mt-3 py-2 bg-pink-50 text-pink-500 rounded-lg text-sm font-medium hover:bg-pink-100 transition">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Journey Today</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">Join millions of happy couples who found their perfect match on SoulMatch</p>
          <button 
            onClick={() => setShowRegisterModal(true)}
            className="px-8 py-3 bg-white text-pink-500 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Create Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <FiHeart className="text-white" size={16} />
                </div>
                <span className="text-xl font-bold">Soul<span className="text-pink-400">Match</span></span>
              </div>
              <p className="text-gray-400 text-sm">Finding perfect life partners since 2010. Trusted by millions of families.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-pink-400">Browse Profiles</a></li>
                <li><a href="#" className="hover:text-pink-400">Success Stories</a></li>
                <li><a href="#" className="hover:text-pink-400">Premium Plans</a></li>
                <li><a href="#" className="hover:text-pink-400">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-pink-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-pink-400">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-pink-400">Safety Tips</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: support@soulmatch.com</li>
                <li>Phone: +91 1800 123 4567</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <FiFacebook className="text-gray-400 hover:text-pink-400 cursor-pointer" size={20} />
                <FiTwitter className="text-gray-400 hover:text-pink-400 cursor-pointer" size={20} />
                <FiInstagram className="text-gray-400 hover:text-pink-400 cursor-pointer" size={20} />
                <FiLinkedin className="text-gray-400 hover:text-pink-400 cursor-pointer" size={20} />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 SoulMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Login to SoulMatch</h2>
              <button onClick={() => setShowLoginModal(false)} className="text-gray-400 text-2xl">×</button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})} required />
              <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} required />
              <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold">Login</button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-4">Don't have an account? <button onClick={() => { setShowLoginModal(false); setShowRegisterModal(true); }} className="text-pink-500">Register</button></p>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create Free Account</h2>
              <button onClick={() => setShowRegisterModal(false)} className="text-gray-400 text-2xl">×</button>
            </div>
            <form onSubmit={handleRegister} className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" required />
              <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" required />
              <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" required />
              <select className="w-full p-3 border rounded-lg">
                <option>Looking for</option>
                <option>Bride</option>
                <option>Groom</option>
              </select>
              <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold">Register Free</button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-4">Already have an account? <button onClick={() => { setShowRegisterModal(false); setShowLoginModal(true); }} className="text-pink-500">Login</button></p>
          </div>
        </div>
      )}
    </div>
  );
}