// src/pages/PricingPlans.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  Crown, 
  Star, 
  Gift, 
  Zap, 
  MessageCircle, 
  Eye, 
  Phone, 
  Video, 
  Heart,
  Lock,
  ChevronRight,
  X
} from 'lucide-react';

export default function PricingPlans() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedUser');
    if (!loggedUser) {
      // If no user, redirect to login
      alert('Please login first to select a plan');
      navigate('/login');
      return;
    }
    setUser(JSON.parse(loggedUser));
  }, []);

  const plans = [
    {
      id: 'free',
      name: 'Free Plan',
      price: 'PKR 0',
      period: 'forever',
      icon: Gift,
      color: 'bg-gray-500',
      borderColor: 'border-gray-200',
      features: [
        'View 5 profiles only',
        'Basic profile viewing',
        'No contact numbers',
        'No chat feature',
        'Limited search filters',
        'Email support'
      ],
      limits: {
        profileViews: 5,
        canChat: false,
        canSeeContact: false,
        canVideoCall: false
      }
    },
    {
      id: 'medium',
      name: 'Medium Plan',
      price: 'PKR 4,999',
      period: 'per month',
      icon: Star,
      color: 'bg-blue-500',
      borderColor: 'border-blue-200',
      popular: true,
      features: [
        'Unlimited profile views',
        'View contact numbers',
        'Chat with matches',
        'Send interest requests',
        'Advanced search filters',
        'Priority support',
        'Profile highlights'
      ],
      limits: {
        profileViews: 'unlimited',
        canChat: true,
        canSeeContact: true,
        canVideoCall: false
      }
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 'PKR 9,999',
      period: 'per month',
      icon: Crown,
      color: 'bg-amber-500',
      borderColor: 'border-amber-200',
      features: [
        'Everything in Medium',
        'View WhatsApp numbers',
        'Video calling',
        'Verified badge',
        'Profile boost',
        'Matchmaker assistance',
        'Wedding planning tools',
        'Priority matching',
        '24/7 dedicated support'
      ],
      limits: {
        profileViews: 'unlimited',
        canChat: true,
        canSeeContact: true,
        canVideoCall: true,
        canSeeWhatsApp: true
      }
    }
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    
    if (plan.id === 'free') {
      // Free plan: directly save and proceed
      savePlanToLocalStorage(plan);
      navigate('/browse-profiles');
    } else {
      // Paid plans: show payment modal
      setShowPaymentModal(true);
    }
  };

  const savePlanToLocalStorage = (plan) => {
    // Save selected plan to localStorage
    const planData = {
      planId: plan.id,
      planName: plan.name,
      price: plan.price,
      selectedAt: new Date().toISOString(),
      profileViewsUsed: 0,
      profileViewsLimit: plan.id === 'free' ? 5 : 'unlimited',
      limits: plan.limits
    };
    
    localStorage.setItem('userPlan', JSON.stringify(planData));
    
    // Also update user object
    const currentUser = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    currentUser.plan = plan.id;
    currentUser.planName = plan.name;
    localStorage.setItem('loggedUser', JSON.stringify(currentUser));
    
    console.log('Plan saved:', planData);
  };

  const handlePaymentConfirm = () => {
    if (selectedPlan) {
      savePlanToLocalStorage(selectedPlan);
      setShowPaymentModal(false);
      alert(`✅ Successfully subscribed to ${selectedPlan.name}!\n\nYou can now enjoy all premium features.`);
      navigate('/browse-profiles');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey to find the perfect match with our flexible plans
          </p>
        </div>

        {/* User Info Banner */}
        {user && (
          <div className="bg-white rounded-xl shadow-sm p-4 mb-8 text-center">
            <p className="text-gray-600">
              Welcome, <span className="font-semibold text-indigo-600">{user.fullName || user.email}</span>!
              Select a plan to continue your journey.
            </p>
          </div>
        )}

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 border ${plan.borderColor}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-xl text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 text-center">
                <div className={`w-20 h-20 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-gray-100">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6">
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.id === 'free' 
                      ? 'bg-gray-600 text-white hover:bg-gray-700'
                      : plan.id === 'medium'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-amber-600 text-white hover:bg-amber-700'
                  }`}
                >
                  {plan.id === 'free' ? 'Get Started Free' : `Subscribe to ${plan.name}`}
                </button>
                {plan.id !== 'free' && (
                  <p className="text-xs text-gray-400 text-center mt-2">
                    Cancel anytime • 7-day money back guarantee
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="font-medium">Can I upgrade my plan later?</p>
              <p className="text-sm text-gray-500">Yes, you can upgrade anytime. The price will be prorated.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="font-medium">What payment methods do you accept?</p>
              <p className="text-sm text-gray-500">JazzCash, EasyPaisa, Bank Transfer, and Credit Cards.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Complete Payment</h2>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="text-center mb-6">
              <div className={`w-16 h-16 ${selectedPlan.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <selectedPlan.icon size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-bold">{selectedPlan.name}</h3>
              <p className="text-2xl font-bold text-indigo-600 mt-2">{selectedPlan.price}</p>
              <p className="text-sm text-gray-500">per month</p>
            </div>

            <div className="space-y-3 mb-6">
              <p className="font-semibold">Payment Methods:</p>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-indigo-600" />
                  <span>💳 Credit / Debit Card</span>
                </label>
                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="w-4 h-4 text-indigo-600" />
                  <span>📱 JazzCash</span>
                </label>
                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="w-4 h-4 text-indigo-600" />
                  <span>🏦 EasyPaisa</span>
                </label>
                <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="w-4 h-4 text-indigo-600" />
                  <span>🏛️ Bank Transfer</span>
                </label>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handlePaymentConfirm}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Confirm Payment
              </button>
            </div>
            
            <p className="text-xs text-gray-400 text-center mt-4">
              Your payment is secure and encrypted
            </p>
          </div>
        </div>
      )}
    </div>
  );
}