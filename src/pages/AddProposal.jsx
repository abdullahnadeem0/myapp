// src/pages/AddProposal.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  GraduationCap,
  Heart,
  Users,
  BookOpen,
  Upload,
  X,
  Save,
  Eye,
  EyeOff,
  FileText,
  DollarSign,
  Ruler,
  Church,
  Home,
  AlertCircle,
  CheckCircle,
  UserPlus,
  Lock
} from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function AddProposal() {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    gender: '',
    age: '',
    city: '',
    email: '',
    phone: '',
    
    // Login Credentials
    password: '',
    confirmPassword: '',
    
    // Bio Data
    height: '',
    complexion: '',
    religion: '',
    caste: '',
    maritalStatus: '',
    
    // Professional Details
    education: '',
    profession: '',
    monthlyIncome: '',
    
    // Family Details
    fatherOccupation: '',
    motherOccupation: '',
    siblings: '',
    familyType: '',
    familyStatus: '',
    
    // Bio / About
    bio: '',
    
    // Partner Preference
    partnerAgeRange: '',
    partnerHeight: '',
    partnerEducation: '',
    partnerProfession: '',
    partnerReligion: '',
    partnerCaste: '',
    partnerMaritalStatus: '',
    partnerCity: '',
    
    // Status
    status: 'pending'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear password error when user types
    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validatePasswords = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match!');
      return false;
    }
    if (formData.password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate passwords
    if (!validatePasswords()) {
      return;
    }
    
    // Remove confirmPassword from data before saving
    const { confirmPassword, ...dataToSave } = formData;
    
    console.log('New Proposal Data:', dataToSave);
    console.log('Login Credentials - Email:', formData.email, 'Password:', formData.password);
    
    setFormSubmitted(true);
    
    // Simulate API call
    setTimeout(() => {
      setFormSubmitted(false);
      if (confirm('Proposal added successfully! User can now login with their email and password. Do you want to add another?')) {
        resetForm();
      } else {
        navigate('/admin/proposals');
      }
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      fullName: '', gender: '', age: '', city: '', email: '', phone: '',
      password: '', confirmPassword: '',
      height: '', complexion: '', religion: '', caste: '', maritalStatus: '',
      education: '', profession: '', monthlyIncome: '',
      fatherOccupation: '', motherOccupation: '', siblings: '', familyType: '', familyStatus: '',
      bio: '',
      partnerAgeRange: '', partnerHeight: '', partnerEducation: '', partnerProfession: '',
      partnerReligion: '', partnerCaste: '', partnerMaritalStatus: '', partnerCity: '',
      status: 'pending'
    });
    setPreviewImage(null);
    setPasswordError('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Add New Proposal</h1>
          <p className="text-gray-500 text-sm mt-1">Create a new customer profile with login credentials</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => navigate('/admin/proposals')}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition flex items-center gap-2"
          >
            <Save size={16} /> Save Proposal
          </button>
        </div>
      </div>

      {/* Success Message */}
      {formSubmitted && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle className="text-green-600" size={20} />
          <div>
            <p className="font-medium text-green-800">Proposal Added Successfully!</p>
            <p className="text-sm text-green-600">User can now login with email: <strong>{formData.email}</strong></p>
          </div>
        </div>
      )}

      {/* Password Error Message */}
      {passwordError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="text-red-600" size={20} />
          <p className="text-sm text-red-700">{passwordError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Details Section */}
            <Card>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <User size={18} className="text-indigo-500" />
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g., Abdul Rehman"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., 28"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Karachi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>
              </div>
            </Card>

            {/* Login Credentials Section - NEW */}
            <Card>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Lock size={18} className="text-indigo-500" />
                Login Credentials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="user@example.com"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">User will use this email to login</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="Minimum 6 characters"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff size={18} className="text-gray-400" /> : <Eye size={18} className="text-gray-400" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="Re-enter password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showConfirmPassword ? <EyeOff size={18} className="text-gray-400" /> : <Eye size={18} className="text-gray-400" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-700 flex items-center gap-2">
                  <CheckCircle size={14} /> User will receive login credentials via email after account creation
                </p>
              </div>
            </Card>

            {/* Bio Data Section */}
            <Card>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <BookOpen size={18} className="text-indigo-500" />
                Bio Data
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Height
                  </label>
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder='e.g., 5 feet 10 inches'
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Complexion
                  </label>
                  <select
                    name="complexion"
                    value={formData.complexion}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select</option>
                    <option value="Fair">Fair</option>
                    <option value="Wheatish">Wheatish</option>
                    <option value="Dusky">Dusky</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Religion
                  </label>
                  <input
                    type="text"
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Islam"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Caste
                  </label>
                  <input
                    type="text"
                    name="caste"
                    value={formData.caste}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Sheikh, Syed, Jutt"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Marital Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select Status</option>
                    <option value="Unmarried">Unmarried</option>
                    <option value="Previously Married (Divorced)">Previously Married (Divorced)</option>
                    <option value="Previously Married (Widowed)">Previously Married (Widowed)</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Professional Details */}
            <Card>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Briefcase size={18} className="text-indigo-500" />
                Professional Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Education
                  </label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Masters in Business"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profession
                  </label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Software Engineer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Income (PKR)
                  </label>
                  <input
                    type="text"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., PKR 1,50,000"
                  />
                </div>
              </div>
            </Card>

            {/* Family Details */}
            <Card>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Users size={18} className="text-indigo-500" />
                Family Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Father&apos;s Occupation
                  </label>
                  <input
                    type="text"
                    name="fatherOccupation"
                    value={formData.fatherOccupation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Businessman"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mother&apos;s Occupation
                  </label>
                  <input
                    type="text"
                    name="motherOccupation"
                    value={formData.motherOccupation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Housewife"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Siblings
                  </label>
                  <input
                    type="text"
                    name="siblings"
                    value={formData.siblings}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., 2 brothers, 1 sister"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Family Type
                  </label>
                  <select
                    name="familyType"
                    value={formData.familyType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select</option>
                    <option value="Nuclear">Nuclear</option>
                    <option value="Joint">Joint</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Family Status
                  </label>
                  <select
                    name="familyStatus"
                    value={formData.familyStatus}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select</option>
                    <option value="Middle Class">Middle Class</option>
                    <option value="Upper Middle Class">Upper Middle Class</option>
                    <option value="Rich">Rich</option>
                    <option value="Affluent">Affluent</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Bio / About */}
            <Card>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <FileText size={18} className="text-indigo-500" />
                Bio / About Me
              </h3>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Write a brief introduction about yourself..."
              />
            </Card>

            {/* Partner Preference */}
            <Card>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Heart size={18} className="text-indigo-500" />
                Partner Preference
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age Range
                  </label>
                  <input
                    type="text"
                    name="partnerAgeRange"
                    value={formData.partnerAgeRange}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., 25-30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Height Preference
                  </label>
                  <input
                    type="text"
                    name="partnerHeight"
                    value={formData.partnerHeight}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., 5 feet 4 inches to 5 feet 8 inches"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Education
                  </label>
                  <input
                    type="text"
                    name="partnerEducation"
                    value={formData.partnerEducation}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Graduate or Masters"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profession
                  </label>
                  <input
                    type="text"
                    name="partnerProfession"
                    value={formData.partnerProfession}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Working or Business"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Religion
                  </label>
                  <input
                    type="text"
                    name="partnerReligion"
                    value={formData.partnerReligion}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Islam"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Caste Preference
                  </label>
                  <input
                    type="text"
                    name="partnerCaste"
                    value={formData.partnerCaste}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Any or specific"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Partner Marital Status
                  </label>
                  <select
                    name="partnerMaritalStatus"
                    value={formData.partnerMaritalStatus}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select</option>
                    <option value="Unmarried">Unmarried</option>
                    <option value="Unmarried or Divorced">Unmarried or Divorced</option>
                    <option value="Any">Any</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred City
                  </label>
                  <input
                    type="text"
                    name="partnerCity"
                    value={formData.partnerCity}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Karachi, Lahore, Any"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Sidebar - Image Upload & Status */}
          <div className="space-y-6">
            {/* Profile Image Upload */}
            <Card>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Upload size={18} className="text-indigo-500" />
                Profile Image
              </h3>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden mb-3">
                  {previewImage ? (
                    <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <User size={48} className="text-gray-400" />
                  )}
                </div>
                <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition">
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  Upload Image
                </label>
                <p className="text-xs text-gray-400 mt-2">JPG, PNG, GIF (Max 2MB)</p>
              </div>
            </Card>

            {/* Proposal Status */}
            <Card>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <AlertCircle size={18} className="text-indigo-500" />
                Proposal Status
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Initial Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </Card>

            {/* Required Fields Info */}
            <Card>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <CheckCircle size={18} className="text-green-500" />
                Required Fields
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Full Name</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Gender</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Age</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>City</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Email</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Phone Number</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Password</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Marital Status</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t">
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <Eye size={12} /> Fields with <span className="text-red-500">*</span> are mandatory
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
          >
            Clear Form
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition flex items-center gap-2"
          >
            <Save size={16} /> Save Proposal
          </button>
        </div>
      </form>
    </div>
  );
}