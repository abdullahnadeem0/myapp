// src/pages/Settings.jsx
import { useState, useEffect } from 'react';
import { 
  FiSave, 
  FiUpload, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGlobe,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiClock,
  FiInfo,
  FiShield,
  FiLock
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Settings() {
  const [settings, setSettings] = useState({
    // Basic Info
    websiteName: 'SoulMatch',
    websiteTagline: 'Find Your Perfect Life Partner',
    websiteLogo: null,
    logoPreview: null,
    favicon: null,
    
    // Contact Info
    contactEmail: 'support@soulmatch.com',
    contactPhone: '+91 1800 123 4567',
    alternatePhone: '+91 98765 43210',
    address: '123, Matrimony Plaza, Andheri East, Mumbai - 400069',
    
    // Social Links
    facebook: 'https://facebook.com/soulmatch',
    instagram: 'https://instagram.com/soulmatch',
    twitter: 'https://twitter.com/soulmatch',
    linkedin: 'https://linkedin.com/company/soulmatch',
    youtube: 'https://youtube.com/soulmatch',
    whatsapp: '+91 98765 43210',
    
    // Business Hours
    weekdayHours: '9:00 AM - 8:00 PM',
    weekendHours: '10:00 AM - 5:00 PM',
    support24x7: true,
    
    // About Us
    aboutText: 'SoulMatch is India\'s most trusted matrimony platform, helping millions of families find their perfect life partners since 2010.',
    missionText: 'To create happy families by connecting compatible life partners through technology and personalized matchmaking.',
    
    // SEO & Meta
    metaTitle: 'SoulMatch - Best Matrimony Site for Brides & Grooms',
    metaDescription: 'Find your perfect life partner on SoulMatch. Trusted by 10L+ families. Register free for verified profiles.',
    metaKeywords: 'matrimony, marriage, bride, groom, soulmatch, wedding',
    
    // Footer Settings
    footerText: '© 2026 SoulMatch. All rights reserved.',
    enableFooterSocial: true,
    enableFooterLinks: true,
    
    // Security
    enableTwoFactor: false,
    sessionTimeout: 60,
    maxLoginAttempts: 5,
    
    // Email Settings
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpEmail: 'noreply@soulmatch.com',
    
    // Payment Settings
    currency: 'PKR',
    razorpayKey: 'rzp_test_xxxxxxxxxxxx',
    jazzcashMerchantId: 'MCXXXXXXXXXX',
    easypaisaAccount: '0333XXXXXXX'
  });

  const [activeTab, setActiveTab] = useState('general');
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('websiteSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'logo') {
          setSettings({ ...settings, logoPreview: reader.result, websiteLogo: file });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem('websiteSettings', JSON.stringify(settings));
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const tabs = [
    { id: 'general', name: 'General', icon: FiInfo },
    { id: 'contact', name: 'Contact', icon: FiPhone },
    { id: 'social', name: 'Social Media', icon: FiGlobe },
    { id: 'content', name: 'Content', icon: FiSave },
    { id: 'security', name: 'Security', icon: FiShield },
    { id: 'payment', name: 'Payment', icon: FiLock },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Website Settings</h1>
          <p className="text-gray-500">Manage your website configuration, contact details, and preferences</p>
        </div>

        {/* Success Message */}
        {saveSuccess && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
            <FiSave className="text-green-600" />
            <p className="text-green-700">Settings saved successfully!</p>
          </div>
        )}

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 flex items-center gap-2 text-sm font-medium transition ${
                  activeTab === tab.id
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon size={16} />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          
          {/* General Settings Tab */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold border-b pb-2">General Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website Name</label>
                  <input
                    type="text"
                    name="websiteName"
                    value={settings.websiteName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website Tagline</label>
                  <input
                    type="text"
                    name="websiteTagline"
                    value={settings.websiteTagline}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website Logo</label>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center border">
                    {settings.logoPreview ? (
                      <img src={settings.logoPreview} alt="Logo" className="w-20 h-20 object-contain" />
                    ) : (
                      <span className="text-2xl font-bold text-indigo-600">{settings.websiteName?.charAt(0)}</span>
                    )}
                  </div>
                  <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm">
                    <FiUpload className="inline mr-2" /> Upload Logo
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'logo')} className="hidden" />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">About Us</label>
                <textarea
                  name="aboutText"
                  value={settings.aboutText}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mission Statement</label>
                <textarea
                  name="missionText"
                  value={settings.missionText}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}

          {/* Contact Settings Tab */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold border-b pb-2">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="contactEmail"
                      value={settings.contactEmail}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Primary Phone</label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="contactPhone"
                      value={settings.contactPhone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone</label>
                  <input
                    type="text"
                    name="alternatePhone"
                    value={settings.alternatePhone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Hours (Weekdays)</label>
                  <div className="relative">
                    <FiClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="weekdayHours"
                      value={settings.weekdayHours}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weekend Hours</label>
                  <input
                    type="text"
                    name="weekendHours"
                    value={settings.weekendHours}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Office Address</label>
                  <div className="relative">
                    <FiMapPin className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      name="address"
                      value={settings.address}
                      onChange={handleChange}
                      rows="2"
                      className="w-full pl-10 pr-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Social Media Tab */}
          {activeTab === 'social' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold border-b pb-2">Social Media Links</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
                  <div className="relative">
                    <FiFacebook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" />
                    <input
                      type="url"
                      name="facebook"
                      value={settings.facebook}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                  <div className="relative">
                    <FiInstagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-600" />
                    <input
                      type="url"
                      name="instagram"
                      value={settings.instagram}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
                  <div className="relative">
                    <FiTwitter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-500" />
                    <input
                      type="url"
                      name="twitter"
                      value={settings.twitter}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                  <div className="relative">
                    <FiLinkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700" />
                    <input
                      type="url"
                      name="linkedin"
                      value={settings.linkedin}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">YouTube</label>
                  <div className="relative">
                    <FiYoutube className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600" />
                    <input
                      type="url"
                      name="youtube"
                      value={settings.youtube}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                  <div className="relative">
                    <FaWhatsapp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                    <input
                      type="text"
                      name="whatsapp"
                      value={settings.whatsapp}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold border-b pb-2">SEO & Content Settings</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={settings.metaTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                <textarea
                  name="metaDescription"
                  value={settings.metaDescription}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Keywords</label>
                <input
                  type="text"
                  name="metaKeywords"
                  value={settings.metaKeywords}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="comma separated keywords"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Footer Text</label>
                <input
                  type="text"
                  name="footerText"
                  value={settings.footerText}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold border-b pb-2">Security Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="enableTwoFactor"
                      checked={settings.enableTwoFactor}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Enable Two-Factor Authentication</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Session Timeout (minutes)</label>
                  <input
                    type="number"
                    name="sessionTimeout"
                    value={settings.sessionTimeout}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Max Login Attempts</label>
                  <input
                    type="number"
                    name="maxLoginAttempts"
                    value={settings.maxLoginAttempts}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Payment Tab */}
          {activeTab === 'payment' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold border-b pb-2">Payment Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                  <select
                    name="currency"
                    value={settings.currency}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <option value="PKR">PKR - Pakistani Rupee</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="USD">USD - US Dollar</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Razorpay Key</label>
                  <input
                    type="text"
                    name="razorpayKey"
                    value={settings.razorpayKey}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">JazzCash Merchant ID</label>
                  <input
                    type="text"
                    name="jazzcashMerchantId"
                    value={settings.jazzcashMerchantId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">EasyPaisa Account</label>
                  <input
                    type="text"
                    name="easypaisaAccount"
                    value={settings.easypaisaAccount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="mt-6 pt-4 border-t flex justify-end">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 flex items-center gap-2"
            >
              <FiSave size={16} /> Save All Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}