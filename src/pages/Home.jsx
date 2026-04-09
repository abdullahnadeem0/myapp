// src/pages/Home.jsx
import { useState } from 'react';
import { 
  Camera, 
  Star, 
  Users, 
  Diamond,
  MapPin, 
  CheckCircle, 
  Play, 
  Calendar, 
  Video, 
  Music, 
  Clock,
  UserPlus,
  LogIn,
  X,
  Mail,
  User,
  Phone,
  Cake,
  Heart,
  MessageCircle,
  Quote
} from 'lucide-react';

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    partnerPreference: '',
    weddingDate: '',
    city: '',
    budget: '',
    password: ''
  });

  const handleSignupChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
    alert('Account created successfully! Welcome to VivaahVids 🎉');
    setIsSignupOpen(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert('Login successful!');
    setIsLoginOpen(false);
  };

  const stats = [
    { icon: Users, value: "1,850+", label: "Verified Rishtey", sub: "100% real profiles", color: "bg-amber-50 text-amber-600" },
    { icon: Diamond, value: "1,020+", label: "Weddings Filmed", sub: "award-winning", color: "bg-amber-50 text-amber-600" },
    { icon: Star, value: "4.98 ★", label: "Customer Rating", sub: "based on 1,240+ reviews", color: "bg-amber-50 text-amber-600" },
    { icon: MapPin, value: "25+", label: "Cities Covered", sub: "Pan India & abroad", color: "bg-amber-50 text-amber-600" },
  ];

  const reviews = [
    { name: "Neha & Rahul", rating: 5, text: "VivaahVids captured every emotion perfectly. The cinematic quality is outstanding! Our families still cry watching it.", location: "Mumbai", verified: true, img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Priya & Amit", rating: 5, text: "The team made us feel so comfortable. The highlight reel was beyond our expectations. Highly recommend for authentic storytelling.", location: "Delhi", verified: true, img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Sneha & Vikram", rating: 5, text: "Best decision ever! They captured the mehendi, sangeet, and wedding with such artistry. Every frame is a treasure.", location: "Bangalore", verified: true, img: "https://randomuser.me/api/portraits/women/90.jpg" },
    { name: "Anjali & Rohit", rating: 5, text: "Professional, creative, and so passionate. Our wedding film feels like a Bollywood movie. Thank you team!", location: "Pune", verified: true, img: "https://randomuser.me/api/portraits/women/33.jpg" },
    { name: "Kavita & Sanjay", rating: 5, text: "The drone shots and candid moments were breathtaking. Every guest asked for their number.", location: "Jaipur", verified: true, img: "https://randomuser.me/api/portraits/women/55.jpg" },
    { name: "Ritu & Manoj", rating: 5, text: "Worth every penny! The editing style is so elegant. They captured our love story beautifully.", location: "Chennai", verified: true, img: "https://randomuser.me/api/portraits/women/22.jpg" },
  ];

  const features = [
    { icon: Video, title: "4K Cinematic", desc: "Ultra HD wedding films with cinematic color grading" },
    { icon: Music, title: "Licensed Audio", desc: "Premium music rights for every video" },
    { icon: Clock, title: "Fast Delivery", desc: "30-day turnaround with teaser in 7 days" },
    { icon: Camera, title: "Candid Moments", desc: "Natural, unposed storytelling" },
  ];

  const packages = [
    { name: "Essential", price: "₹49,999", features: ["8 hours coverage", "3-minute highlight", "Full ceremony edit", "Digital delivery"] },
    { name: "Premium", price: "₹89,999", features: ["12 hours coverage", "5-minute highlight", "Full event edit", "Drone shots", "Pre-wedding shoot"] },
    { name: "Luxury", price: "₹1,49,999", features: ["20 hours coverage", "8-minute cinematic film", "Full edit + raw footage", "Drone + 2 cameras", "Pre + post wedding", "Album design"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-200/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Camera className="text-3xl text-amber-700" size={32} />
            <span className="text-2xl font-bold font-serif text-stone-800">Vivaah<span className="text-amber-600">Vids</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-stone-700 font-medium">
            <a href="#" className="hover:text-amber-600 transition">Home</a>
            <a href="#films" className="hover:text-amber-600 transition">Films</a>
            <a href="#reviews" className="hover:text-amber-600 transition">Stories</a>
            <a href="#packages" className="hover:text-amber-600 transition">Packages</a>
            <a href="#contact" className="hover:text-amber-600 transition">Contact</a>
          </div>
          <div className="flex gap-3 items-center">
            <button onClick={() => setIsLoginOpen(true)} className="hidden sm:flex text-stone-700 font-medium hover:text-amber-700 transition items-center gap-1">
              <LogIn size={16} /> Log in
            </button>
            <button onClick={() => setIsSignupOpen(true)} className="bg-amber-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-amber-800 transition flex items-center gap-2">
              <UserPlus size={16} /> Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm mb-4">
              <CheckCircle size={14} /> Trusted by 2,500+ families
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-800 leading-tight">
              Your love story, <br />captured <span className="text-amber-600">forever</span>
            </h1>
            <p className="text-stone-600 text-lg mt-5 leading-relaxed">
              Cinematic wedding films, candid moments, and timeless edits. We don't just record — we create heirlooms.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-stone-800 text-white px-7 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2 hover:bg-amber-800 transition">
                <Play size={18} /> Explore films
              </button>
              <button className="border-2 border-amber-600 text-amber-700 px-7 py-3 rounded-full font-semibold hover:bg-amber-50 transition flex items-center gap-2">
                <Calendar size={18} /> Book a call
              </button>
            </div>
            <div className="flex flex-wrap gap-5 mt-8 text-sm text-stone-500">
              <div className="flex items-center gap-1"><Video size={16} className="text-amber-600" /> 4K Cinema</div>
              <div className="flex items-center gap-1"><Music size={16} className="text-amber-600" /> Licensed audio</div>
              <div className="flex items-center gap-1"><Clock size={16} className="text-amber-600" /> 30-day delivery</div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="wedding couple" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-3">
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <div><span className="font-bold">4.98</span> <span className="text-sm text-stone-500">(1.2k reviews)</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold tracking-wide"><Heart size={16} className="inline mr-1" /> Happy Hearts</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-800 mt-2">Verified Rishtey & Love Stories</h2>
            <p className="text-stone-500 max-w-2xl mx-auto mt-3">
              Over 1,850+ verified couples found their perfect match & trusted our cinematic memories.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-amber-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-amber-100">
                <div className="flex justify-center mb-2"><stat.icon size={40} className="text-amber-600" /></div>
                <div className="text-3xl font-extrabold text-stone-800">{stat.value}</div>
                <div className="text-stone-500 font-medium">{stat.label}</div>
                <div className="text-xs text-green-600 mt-1"><CheckCircle size={10} className="inline mr-1" />{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section - 6+ reviews */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <Quote size={32} className="mx-auto text-amber-400 mb-2" />
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-800">Real Couples, Real Emotions ❤️</h2>
            <p className="text-stone-500 mt-2">What our verified families say about us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <img src={review.img} className="w-12 h-12 rounded-full object-cover border-2 border-amber-300" alt={review.name} />
                  <div>
                    <h4 className="font-bold text-stone-800">{review.name}</h4>
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
                    </div>
                  </div>
                  {review.verified && <CheckCircle size={14} className="text-green-500 ml-auto" />}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">"{review.text}"</p>
                <div className="mt-3 text-xs text-amber-600 flex items-center gap-1"><MapPin size={12} /> {review.location}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="text-amber-700 font-semibold flex items-center gap-1 mx-auto hover:gap-2 transition-all">
              View all 1,240+ reviews <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-serif text-stone-800">Why couples ❤️ us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="text-center p-5 rounded-xl hover:bg-amber-50 transition">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <feat.icon size={28} className="text-amber-700" />
                </div>
                <h3 className="font-bold text-lg">{feat.title}</h3>
                <p className="text-stone-500 text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-amber-50/40">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-800">Cinematic Packages</h2>
            <p className="text-stone-500 mt-2">Choose the perfect plan for your special day</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-2xl transition-all hover:-translate-y-2">
                <h3 className="text-xl font-bold text-center">{pkg.name}</h3>
                <div className="text-3xl font-bold text-center text-amber-700 my-3">{pkg.price}</div>
                <ul className="space-y-2 mt-4">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle size={14} className="text-green-500" /> {feat}</li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-amber-700 text-white py-2 rounded-full hover:bg-amber-800 transition">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + 15+ section equivalent: extra details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold font-serif text-stone-800">15+ Years of Capturing Love</h2>
            <div className="w-20 h-1 bg-amber-500 my-4"></div>
            <p className="text-stone-600 leading-relaxed">We've filmed over 1,020 weddings across India and internationally. Our team of award-winning cinematographers understands every ritual, emotion, and candid moment that makes your day unique.</p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div><span className="font-bold text-amber-700">50+</span><br />Awards won</div>
              <div><span className="font-bold text-amber-700">15+</span><br />Years experience</div>
              <div><span className="font-bold text-amber-700">100%</span><br />Satisfaction rate</div>
              <div><span className="font-bold text-amber-700">24/7</span><br />Support team</div>
            </div>
          </div>
          <div className="bg-amber-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold flex items-center gap-2"><MessageCircle size={20} /> Free Consultation</h3>
            <p className="text-stone-600 mt-2">Talk to our creative director and get personalized quote.</p>
            <button className="mt-4 bg-amber-700 text-white px-5 py-2 rounded-full">Schedule a call →</button>
          </div>
        </div>
      </section>

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold font-serif">Create Account</h2>
              <button onClick={() => setIsSignupOpen(false)} className="p-1 hover:bg-gray-100 rounded-full"><X size={24} /></button>
            </div>
            <form onSubmit={handleSignupSubmit} className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1">Full Name *</label><input type="text" name="fullName" required className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-amber-400" onChange={handleSignupChange} /></div>
                <div><label className="block text-sm font-medium mb-1">Email *</label><input type="email" name="email" required className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-amber-400" onChange={handleSignupChange} /></div>
                <div><label className="block text-sm font-medium mb-1">Phone *</label><input type="tel" name="phone" required className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-amber-400" onChange={handleSignupChange} /></div>
                <div><label className="block text-sm font-medium mb-1">Gender *</label><select name="gender" required className="w-full border rounded-lg p-2" onChange={handleSignupChange}><option value="">Select</option><option>Male</option><option>Female</option><option>Other</option></select></div>
                <div><label className="block text-sm font-medium mb-1">Age *</label><input type="number" name="age" required className="w-full border rounded-lg p-2" onChange={handleSignupChange} /></div>
                <div><label className="block text-sm font-medium mb-1">Partner Preference</label><select name="partnerPreference" className="w-full border rounded-lg p-2" onChange={handleSignupChange}><option value="">Select</option><option>Male</option><option>Female</option><option>Any</option></select></div>
                <div><label className="block text-sm font-medium mb-1">Expected Wedding Date</label><input type="date" name="weddingDate" className="w-full border rounded-lg p-2" onChange={handleSignupChange} /></div>
                <div><label className="block text-sm font-medium mb-1">City</label><input type="text" name="city" className="w-full border rounded-lg p-2" onChange={handleSignupChange} /></div>
                <div><label className="block text-sm font-medium mb-1">Budget (₹)</label><input type="text" name="budget" placeholder="e.g., 50,000 - 1,00,000" className="w-full border rounded-lg p-2" onChange={handleSignupChange} /></div>
                <div><label className="block text-sm font-medium mb-1">Password *</label><input type="password" name="password" required className="w-full border rounded-lg p-2" onChange={handleSignupChange} /></div>
              </div>
              <button type="submit" className="w-full bg-amber-700 text-white py-3 rounded-full font-semibold hover:bg-amber-800 transition">Sign Up →</button>
              <p className="text-center text-sm text-stone-500">Already have an account? <button type="button" onClick={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} className="text-amber-700">Login</button></p>
            </form>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-4 border-b flex justify-between items-center"><h2 className="text-2xl font-bold font-serif">Welcome Back</h2><button onClick={() => setIsLoginOpen(false)}><X size={24} /></button></div>
            <form onSubmit={handleLoginSubmit} className="p-6 space-y-4">
              <input type="email" placeholder="Email" className="w-full border rounded-lg p-2" required />
              <input type="password" placeholder="Password" className="w-full border rounded-lg p-2" required />
              <button type="submit" className="w-full bg-amber-700 text-white py-2 rounded-full">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}