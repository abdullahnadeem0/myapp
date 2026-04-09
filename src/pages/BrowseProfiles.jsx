// src/pages/BrowseProfiles.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMapPin, FiPhone, FiVideo, FiMessageCircle, FiEye, FiLock, FiPhoneCall, FiStar,  FiGift, FiCheckCircle, FiZap } from 'react-icons/fi';
import { MdVerified, MdChat, MdCall, MdVideocam } from 'react-icons/md';
import { FaWhatsapp, FaHeart } from 'react-icons/fa';

export default function BrowseProfiles() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userPlan, setUserPlan] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [viewedCount, setViewedCount] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedUser');
    const plan = localStorage.getItem('userPlan');
    
    if (!loggedUser) {
      navigate('/login');
      return;
    }
    
    setUser(JSON.parse(loggedUser));
    if (plan) {
      setUserPlan(JSON.parse(plan));
    } else {
      setUserPlan({ planId: 'free', profileViewsUsed: 0, profileViewsLimit: 5 });
    }
    
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const verifiedUsers = allUsers.filter(u => u.status === 'verified' && u.email !== JSON.parse(loggedUser).email);
    setProfiles(verifiedUsers);
    
    const viewed = JSON.parse(localStorage.getItem('viewedProfiles') || '[]');
    setViewedCount(viewed.length);
  }, []);

  const canViewProfile = () => {
    if (userPlan?.planId === 'free') {
      return viewedCount < 5;
    }
    return true;
  };

  const remainingViews = () => {
    if (userPlan?.planId === 'free') {
      return 5 - viewedCount;
    }
    return 'Unlimited';
  };

  const handleViewProfile = (profile) => {
    if (!canViewProfile()) {
      setShowUpgradeModal(true);
      return;
    }
    setSelectedProfile(profile);
    
    if (userPlan?.planId === 'free') {
      const updatedViews = [...JSON.parse(localStorage.getItem('viewedProfiles') || '[]'), profile.id];
      localStorage.setItem('viewedProfiles', JSON.stringify(updatedViews));
      setViewedCount(updatedViews.length);
    }
  };

  const canSeeContact = () => userPlan?.planId === 'medium' || userPlan?.planId === 'premium';
  const canChat = () => userPlan?.planId === 'medium' || userPlan?.planId === 'premium';
  const canCall = () => userPlan?.planId === 'premium';
  const canVideoCall = () => userPlan?.planId === 'premium';
  const canSeeWhatsApp = () => userPlan?.planId === 'premium';

  const handleChat = (profile) => {
    if (!canChat()) {
      setShowUpgradeModal(true);
      return;
    }
    navigate(`/chat/${profile.id}`, { state: { profile, userPlan: userPlan?.planId } });
  };

  const handleCall = (profile) => {
    if (!canCall()) {
      setShowUpgradeModal(true);
      return;
    }
    alert(`📞 Calling ${profile.fullName}... (Demo: This would initiate a call in production)`);
  };

  const handleVideoCall = (profile) => {
    if (!canVideoCall()) {
      setShowUpgradeModal(true);
      return;
    }
    alert(`🎥 Video call with ${profile.fullName}... (Demo: This would start a video call in production)`);
  };

  const getPlanBadge = () => {
    switch(userPlan?.planId) {
      case 'free': return { color: 'bg-gray-500', text: 'Free Plan', icon: FiGift };
      case 'medium': return { color: 'bg-blue-500', text: 'Medium Plan', icon: FiStar };
      case 'premium': return { color: 'bg-amber-500', text: 'Premium Plan',  };
      default: return { color: 'bg-gray-500', text: 'No Plan', icon: FiGift };
    }
  };

  const planBadge = getPlanBadge();
  const PlanIcon = planBadge.icon;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header with Plan Info */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex justify-between items-center flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold">Browse Matches</h1>
            <p className="text-gray-500">Find your perfect partner</p>
          </div>
          <div className={`${planBadge.color} text-white px-4 py-2 rounded-lg flex items-center gap-2`}>
            <PlanIcon size={18} />
            <span className="font-semibold">{planBadge.text}</span>
          </div>
        </div>

        {/* Plan Features Banner */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 mb-6 text-white">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <div>
              <p className="text-sm opacity-90">Your Plan Features:</p>
              {userPlan?.planId === 'free' && (
                <div className="flex flex-wrap gap-4 mt-1 text-sm">
                  <span>👁️ {remainingViews()} views left</span>
                  <span><FiLock className="inline mr-1" size={12} /> Contact hidden</span>
                  <span><MdChat className="inline mr-1" size={12} /> Chat locked</span>
                </div>
              )}
              {userPlan?.planId === 'medium' && (
                <div className="flex flex-wrap gap-4 mt-1 text-sm">
                  <span><FiCheckCircle className="inline mr-1" /> Unlimited views</span>
                  <span><FiPhone className="inline mr-1" /> Contact visible</span>
                  <span><MdChat className="inline mr-1" /> Chat enabled</span>
                </div>
              )}
              {userPlan?.planId === 'premium' && (
                <div className="flex flex-wrap gap-4 mt-1 text-sm">
                  <span><FiCheckCircle className="inline mr-1" /> Unlimited views</span>
                  <span><FiPhone className="inline mr-1" /> Contact visible</span>
                  <span><MdChat className="inline mr-1" /> Chat enabled</span>
                  <span><FaWhatsapp className="inline mr-1" /> WhatsApp available</span>
                  <span><MdVideocam className="inline mr-1" /> Video calls</span>
                </div>
              )}
            </div>
            {userPlan?.planId !== 'premium' && (
              <button 
                onClick={() => navigate('/pricing')}
                className="bg-white text-indigo-600 px-4 py-1 rounded-lg text-sm font-semibold"
              >
                Upgrade Plan
              </button>
            )}
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                {profile.profileImage ? (
                  <img src={profile.profileImage} alt={profile.fullName} className="w-32 h-32 rounded-full object-cover border-4 border-white" />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                    <FiUser size={48} className="text-white" />
                  </div>
                )}
                {profile.status === 'verified' && (
                  <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1">
                    <MdVerified size={16} className="text-white" />
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold">{profile.fullName}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                  <FiMapPin size={14} /> {profile.city} • Age: {profile.age}
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                  <FiUser size={14} /> {profile.profession || 'Not specified'}
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleViewProfile(profile)}
                    className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
                  >
                    <FiEye size={16} /> View Profile
                  </button>
                  <button
                    onClick={() => handleChat(profile)}
                    className={`flex-1 py-2 rounded-lg transition flex items-center justify-center gap-2 ${
                      canChat() 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!canChat()}
                  >
                    <MdChat size={16} /> Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upgrade Modal */}
        {showUpgradeModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* <FiCrown size={32} className="text-amber-600" /> */}
                </div>
                <h2 className="text-xl font-bold mb-2">Limit Reached!</h2>
                <p className="text-gray-600 mb-4">
                  {userPlan?.planId === 'free' 
                    ? 'You have reached your limit of 5 profile views. Upgrade to see more profiles and unlock all features!'
                    : 'This feature is only available on paid plans. Upgrade to unlock chat and contact features!'}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowUpgradeModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setShowUpgradeModal(false);
                      navigate('/pricing');
                    }}
                    className="flex-1 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700"
                  >
                    Upgrade Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Modal */}
        {selectedProfile && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold">Profile Details</h2>
                <button onClick={() => setSelectedProfile(null)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  {selectedProfile.profileImage ? (
                    <img src={selectedProfile.profileImage} alt="" className="w-24 h-24 rounded-full object-cover" />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <FiUser size={40} className="text-gray-400" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold">{selectedProfile.fullName}</h3>
                    <p>{selectedProfile.age} years • {selectedProfile.city}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Personal Details</h4>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                      <p><span className="text-gray-500">Gender:</span> {selectedProfile.gender}</p>
                      <p><span className="text-gray-500">Marital Status:</span> {selectedProfile.maritalStatus}</p>
                      <p><span className="text-gray-500">Religion:</span> {selectedProfile.religion || 'Not specified'}</p>
                      <p><span className="text-gray-500">Education:</span> {selectedProfile.education || 'Not specified'}</p>
                      <p><span className="text-gray-500">Profession:</span> {selectedProfile.profession || 'Not specified'}</p>
                      <p><span className="text-gray-500">Income:</span> {selectedProfile.monthlyIncome || 'Not specified'}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold">About Me</h4>
                    <p className="text-sm text-gray-600 mt-1">{selectedProfile.bio || 'No bio available'}</p>
                  </div>

                  {/* Contact Info - For Medium & Premium Plans */}
                  {canSeeContact() && (
                    <div className="border-t pt-4">
                      <h4 className="font-semibold flex items-center gap-2">
                        <FiPhone size={16} /> Contact Information
                      </h4>
                      <div className="mt-2 p-3 bg-green-50 rounded-lg">
                        <p className="text-sm">📞 Phone: {selectedProfile.phone || 'Not provided'}</p>
                        <p className="text-sm mt-1">📧 Email: {selectedProfile.email}</p>
                        {canSeeWhatsApp() && (
                          <p className="text-sm mt-1 text-green-600 flex items-center gap-1">
                            <FaWhatsapp /> WhatsApp: +92 XXX XXXXXXX
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Locked Contact - For Free Plan */}
                  {!canSeeContact() && (
                    <div className="border-t pt-4">
                      <div className="p-3 bg-yellow-50 rounded-lg text-center">
                        <FiLock size={20} className="mx-auto text-yellow-600 mb-2" />
                        <p className="text-sm text-yellow-700">
                          Contact information is locked. Upgrade to Medium or Premium plan to view contact details and chat.
                        </p>
                        <button 
                          onClick={() => navigate('/pricing')}
                          className="mt-2 bg-yellow-600 text-white px-4 py-1 rounded-lg text-sm"
                        >
                          Upgrade Now
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons for Chat/Call/Video */}
                <div className="flex gap-2 mt-6">
                  {canChat() && (
                    <button
                      onClick={() => handleChat(selectedProfile)}
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                    >
                      <MdChat size={18} /> Start Chat
                    </button>
                  )}
                  {canCall() && (
                    <button
                      onClick={() => handleCall(selectedProfile)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                      <MdCall size={18} /> Call
                    </button>
                  )}
                  {canVideoCall() && (
                    <button
                      onClick={() => handleVideoCall(selectedProfile)}
                      className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2"
                    >
                      <MdVideocam size={18} /> Video Call
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}