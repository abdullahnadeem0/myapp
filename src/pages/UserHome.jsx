// src/pages/UserHome.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Heart,
  Users,
  BookOpen,
  Upload,
  Save,
  Eye,
  EyeOff,
  FileText,
  AlertCircle,
  CheckCircle,
  Lock,
  Camera,
  Star,
  Quote,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function UserHome() {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
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
    
    if (!validatePasswords()) {
      return;
    }
    
    const { confirmPassword, ...dataToSave } = formData;
    const userData = {
      ...dataToSave,
      status: 'unverified',
      profileImage: previewImage,
      submittedDate: new Date().toISOString(),
      id: Date.now()
    };
    
    console.log('New User Registration:', userData);
    
    // Save to localStorage for demo
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    setFormSubmitted(true);
    
    setTimeout(() => {
      alert('Registration successful! Your account is pending verification. You will receive an email once verified.');
      resetForm();
      setCurrentStep(1);
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
    });
    setPreviewImage(null);
    setPasswordError('');
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.fullName || !formData.gender || !formData.age || !formData.city || !formData.email || !formData.phone) {
        alert('Please fill all required fields in Personal Details');
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.password || !formData.confirmPassword) {
        alert('Please set your password');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-5 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Find Your Perfect Match</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">Join thousands of happy couples who found their soulmate through our matrimony service</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">10,000+</div>
              <div className="text-gray-500 text-sm">Happy Marriages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">50,000+</div>
              <div className="text-gray-500 text-sm">Registered Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">98%</div>
              <div className="text-gray-500 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">25+</div>
              <div className="text-gray-500 text-sm">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-indigo-600 px-6 py-4">
              <h2 className="text-2xl font-bold text-white text-center">Create Your Profile</h2>
              <p className="text-indigo-100 text-center text-sm">Get started on your journey to find the perfect partner</p>
            </div>
            
            {/* Step Indicator */}
            <div className="flex border-b">
              {[1, 2, 3, 4, 5].map((step) => (
                <div 
                  key={step} 
                  className={`flex-1 text-center py-3 text-sm font-medium ${
                    currentStep === step ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'
                  }`}
                >
                  Step {step}
                </div>
              ))}
            </div>

            <div className="p-6">
              {formSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <div>
                    <p className="font-medium text-green-800">Registration Successful!</p>
                    <p className="text-sm text-green-600">Your profile is pending verification. Admin will verify soon.</p>
                  </div>
                </div>
              )}

              {passwordError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 flex items-center gap-3">
                  <AlertCircle className="text-red-600" size={20} />
                  <p className="text-sm text-red-700">{passwordError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Details */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                      <User size={18} className="text-indigo-500" />
                      Personal Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg">
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Age *</label>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., 28" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., Karachi" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg" placeholder="example@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg" placeholder="+92 XXX XXXXXXX" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Login Credentials */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                      <Lock size={18} className="text-indigo-500" />
                      Login Credentials
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email (will be used for login) *</label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-3 py-2 border rounded-lg" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                        <div className="relative">
                          <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required className="w-full pl-10 pr-10 py-2 border rounded-lg" placeholder="Minimum 6 characters" />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                        <div className="relative">
                          <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full pl-10 pr-10 py-2 border rounded-lg" />
                          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Bio Data */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                      <BookOpen size={18} className="text-indigo-500" />
                      Bio Data
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                        <input type="text" name="height" value={formData.height} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., 5 feet 10 inches" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Complexion</label>
                        <select name="complexion" value={formData.complexion} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg">
                          <option value="">Select</option>
                          <option value="Fair">Fair</option>
                          <option value="Wheatish">Wheatish</option>
                          <option value="Dusky">Dusky</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
                        <input type="text" name="religion" value={formData.religion} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., Islam" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Caste</label>
                        <input type="text" name="caste" value={formData.caste} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., Sheikh" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status *</label>
                        <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg">
                          <option value="">Select</option>
                          <option value="Unmarried">Unmarried</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Widowed">Widowed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Professional & Family Details */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                        <Briefcase size={18} className="text-indigo-500" />
                        Professional Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                          <input type="text" name="education" value={formData.education} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., Masters" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
                          <input type="text" name="profession" value={formData.profession} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., Engineer" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income</label>
                          <input type="text" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., PKR 1,50,000" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                        <Users size={18} className="text-indigo-500" />
                        Family Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Father's Occupation</label>
                          <input type="text" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Mother's Occupation</label>
                          <input type="text" name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Siblings</label>
                          <input type="text" name="siblings" value={formData.siblings} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., 2 brothers" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Family Type</label>
                          <select name="familyType" value={formData.familyType} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg">
                            <option value="">Select</option>
                            <option value="Nuclear">Nuclear</option>
                            <option value="Joint">Joint</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Partner Preference & Bio */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                        <Heart size={18} className="text-indigo-500" />
                        Partner Preference
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Age Range</label>
                          <input type="text" name="partnerAgeRange" value={formData.partnerAgeRange} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., 25-30" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Height Preference</label>
                          <input type="text" name="partnerHeight" value={formData.partnerHeight} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., 5 feet 4 inches to 5 feet 8 inches" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                          <input type="text" name="partnerEducation" value={formData.partnerEducation} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
                          <input type="text" name="partnerProfession" value={formData.partnerProfession} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred City</label>
                          <input type="text" name="partnerCity" value={formData.partnerCity} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., Karachi, Lahore" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                        <FileText size={18} className="text-indigo-500" />
                        About Me
                      </h3>
                      <textarea name="bio" value={formData.bio} onChange={handleChange} rows="4" className="w-full px-3 py-2 border rounded-lg" placeholder="Write about yourself, interests, and what you are looking for..." />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                        <Upload size={18} className="text-indigo-500" />
                        Profile Picture
                      </h3>
                      <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden mb-3">
                          {previewImage ? (
                            <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <User size={48} className="text-gray-400" />
                          )}
                        </div>
                        <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
                          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                          Upload Photo
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-4 border-t">
                  {currentStep > 1 && (
                    <button type="button" onClick={prevStep} className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      Previous
                    </button>
                  )}
                  {currentStep < 5 ? (
                    <button type="button" onClick={nextStep} className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 ml-auto">
                      Next Step
                    </button>
                  ) : (
                    <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 ml-auto flex items-center gap-2">
                      <Save size={16} /> Register Now
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p>&copy; 2024 Matrimony Service. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}