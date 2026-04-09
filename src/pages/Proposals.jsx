// src/pages/Proposals.jsx
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Clock, 
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
  FileText,
  Download,
  MessageCircle,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Proposals() {
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sample Proposals Data
  const proposals = [
    {
      id: 1,
      name: "Abdul Rehman",
      gender: "Male",
      age: 28,
      city: "Karachi",
      email: "abdul.rehman@example.com",
      phone: "+92 300 1234567",
      education: "Masters in Business Administration",
      profession: "Software Engineer",
      income: "PKR 1,50,000/month",
      height: "5'10\"",
      complexion: "Fair",
      religion: "Islam",
      caste: "Sheikh",
      maritalStatus: "Unmarried",
      bio: "I am a practicing Muslim, family-oriented, looking for a partner who is kind, educated, and shares similar values.",
      partnerPreference: {
        ageRange: "24-28",
        height: "5'4\" to 5'8\"",
        education: "Graduate or above",
        profession: "Working or Homemaker",
        religion: "Islam",
        caste: "Any",
        maritalStatus: "Unmarried",
        city: "Karachi or willing to relocate"
      },
      familyDetails: {
        fatherOccupation: "Businessman",
        motherOccupation: "Housewife",
        siblings: "2 brothers, 1 sister",
        familyType: "Nuclear",
        familyStatus: "Middle Class"
      },
      status: "pending",
      submittedDate: "2024-12-18",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Fatima Akhtar",
      gender: "Female",
      age: 25,
      city: "Lahore",
      email: "fatima.akhtar@example.com",
      phone: "+92 321 7654321",
      education: "BS Computer Science",
      profession: "UI/UX Designer",
      income: "PKR 80,000/month",
      height: "5'4\"",
      complexion: "Wheatish",
      religion: "Islam",
      caste: "Arain",
      maritalStatus: "Unmarried",
      bio: "I love art and design. Looking for a partner who is supportive, ambitious, and has good sense of humor.",
      partnerPreference: {
        ageRange: "27-32",
        height: "5'8\" to 6'0\"",
        education: "Bachelors or Masters",
        profession: "Stable career",
        religion: "Islam",
        caste: "Any",
        maritalStatus: "Unmarried",
        city: "Lahore or Islamabad"
      },
      familyDetails: {
        fatherOccupation: "Government Officer",
        motherOccupation: "Teacher",
        siblings: "1 brother",
        familyType: "Joint",
        familyStatus: "Upper Middle Class"
      },
      status: "pending",
      submittedDate: "2024-12-17",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      name: "Hamza Ali",
      gender: "Male",
      age: 32,
      city: "Islamabad",
      email: "hamza.ali@example.com",
      phone: "+92 333 9876543",
      education: "Doctor of Medicine (MBBS)",
      profession: "Cardiologist",
      income: "PKR 4,00,000/month",
      height: "5'11\"",
      complexion: "Fair",
      religion: "Islam",
      caste: "Syed",
      maritalStatus: "Previously Married (Widower)",
      bio: "Doctor by profession, looking for a caring and understanding partner. Have one daughter from previous marriage.",
      partnerPreference: {
        ageRange: "28-35",
        height: "5'3\" to 5'7\"",
        education: "Graduate",
        profession: "Any",
        religion: "Islam",
        caste: "Syed preferred but not mandatory",
        maritalStatus: "Unmarried or Widowed",
        city: "Islamabad/Rawalpindi"
      },
      familyDetails: {
        fatherOccupation: "Retired Army Officer",
        motherOccupation: "Housewife",
        siblings: "2 sisters",
        familyType: "Nuclear",
        familyStatus: "Affluent"
      },
      status: "approved",
      submittedDate: "2024-12-15",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      name: "Zara Tariq",
      gender: "Female",
      age: 27,
      city: "Rawalpindi",
      email: "zara.tariq@example.com",
      phone: "+92 345 1122334",
      education: "LLB (Law)",
      profession: "Lawyer",
      income: "PKR 1,20,000/month",
      height: "5'5\"",
      complexion: "Fair",
      religion: "Islam",
      caste: "Rajput",
      maritalStatus: "Divorced",
      bio: "Lawyer by profession, looking for a partner who respects women and is financially stable.",
      partnerPreference: {
        ageRange: "30-38",
        height: "5'9\" to 6'2\"",
        education: "Masters or Professional Degree",
        profession: "Stable job or Business",
        religion: "Islam",
        caste: "Any",
        maritalStatus: "Unmarried or Divorced",
        city: "Any major city"
      },
      familyDetails: {
        fatherOccupation: "Businessman",
        motherOccupation: "Housewife",
        siblings: "2 brothers",
        familyType: "Nuclear",
        familyStatus: "Rich"
      },
      status: "rejected",
      submittedDate: "2024-12-14",
      profileImage: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      id: 5,
      name: "Bilal Ahmed",
      gender: "Male",
      age: 30,
      city: "Multan",
      email: "bilal.ahmed@example.com",
      phone: "+92 312 9988776",
      education: "B.Com",
      profession: "Businessman",
      income: "PKR 2,50,000/month",
      height: "5'9\"",
      complexion: "Wheatish",
      religion: "Islam",
      caste: "Jutt",
      maritalStatus: "Unmarried",
      bio: "Own a textile business. Looking for a partner who is family-oriented and well-educated.",
      partnerPreference: {
        ageRange: "25-30",
        height: "5'2\" to 5'6\"",
        education: "Graduate",
        profession: "Any",
        religion: "Islam",
        caste: "Any",
        maritalStatus: "Unmarried",
        city: "Multan or Lahore"
      },
      familyDetails: {
        fatherOccupation: "Businessman",
        motherOccupation: "Housewife",
        siblings: "1 sister",
        familyType: "Joint",
        familyStatus: "Rich"
      },
      status: "pending",
      submittedDate: "2024-12-13",
      profileImage: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: 6,
      name: "Sana Mahmood",
      gender: "Female",
      age: 26,
      city: "Peshawar",
      email: "sana.mahmood@example.com",
      phone: "+92 334 5566778",
      education: "Masters in English Literature",
      profession: "College Lecturer",
      income: "PKR 70,000/month",
      height: "5'3\"",
      complexion: "Fair",
      religion: "Islam",
      caste: "Khan",
      maritalStatus: "Unmarried",
      bio: "Teaching is my passion. Looking for a religious and well-settled partner.",
      partnerPreference: {
        ageRange: "28-33",
        height: "5'7\" to 5'10\"",
        education: "Masters",
        profession: "Government job or Business",
        religion: "Islam",
        caste: "Any",
        maritalStatus: "Unmarried",
        city: "Peshawar or Islamabad"
      },
      familyDetails: {
        fatherOccupation: "Professor",
        motherOccupation: "Housewife",
        siblings: "2 sisters",
        familyType: "Nuclear",
        familyStatus: "Middle Class"
      },
      status: "pending",
      submittedDate: "2024-12-12",
      profileImage: "https://randomuser.me/api/portraits/women/6.jpg"
    }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'pending':
        return <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700"><Clock size={12} /> Pending</span>;
      case 'approved':
        return <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-green-100 text-green-700"><CheckCircle size={12} /> Approved</span>;
      case 'rejected':
        return <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-red-100 text-red-700"><XCircle size={12} /> Rejected</span>;
      default:
        return null;
    }
  };

  const filteredProposals = filterStatus === 'all' 
    ? proposals 
    : proposals.filter(p => p.status === filterStatus);

  const totalPages = Math.ceil(filteredProposals.length / itemsPerPage);
  const paginatedProposals = filteredProposals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Proposal Management</h1>
          <p className="text-gray-500 text-sm mt-1">Manage all customer rishtay / proposals</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition flex items-center gap-2">
          <FileText size={16} /> Export All Proposals
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex gap-2">
          <button 
            onClick={() => { setFilterStatus('all'); setCurrentPage(1); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filterStatus === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            All ({proposals.length})
          </button>
          <button 
            onClick={() => { setFilterStatus('pending'); setCurrentPage(1); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filterStatus === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Pending ({proposals.filter(p => p.status === 'pending').length})
          </button>
          <button 
            onClick={() => { setFilterStatus('approved'); setCurrentPage(1); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filterStatus === 'approved' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Approved ({proposals.filter(p => p.status === 'approved').length})
          </button>
          <button 
            onClick={() => { setFilterStatus('rejected'); setCurrentPage(1); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filterStatus === 'rejected' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Rejected ({proposals.filter(p => p.status === 'rejected').length})
          </button>
        </div>
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search proposals..." 
            className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:border-indigo-300"
          />
        </div>
      </div>

      {/* Proposals List */}
      <div className="space-y-4">
        {paginatedProposals.map((proposal) => (
          <Card key={proposal.id} className="hover:shadow-md transition-all">
            <div className="flex items-start gap-4">
              {/* Profile Image */}
              <img 
                src={proposal.profileImage} 
                alt={proposal.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200"
              />
              
              {/* Main Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{proposal.name}</h3>
                    <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><User size={14} /> {proposal.gender}</span>
                      <span className="flex items-center gap-1"><Calendar size={14} /> {proposal.age} years</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {proposal.city}</span>
                      <span className="flex items-center gap-1"><Briefcase size={14} /> {proposal.profession}</span>
                    </div>
                  </div>
                  {getStatusBadge(proposal.status)}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs">Education</p>
                    <p className="font-medium">{proposal.education}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Marital Status</p>
                    <p className="font-medium">{proposal.maritalStatus}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Submitted</p>
                    <p className="font-medium">{proposal.submittedDate}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-3">
                  <button 
                    onClick={() => setSelectedProposal(proposal)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-sm hover:bg-indigo-100 transition"
                  >
                    <Eye size={14} /> View Full Profile
                  </button>
                  {proposal.status === 'pending' && (
                    <>
                      <button className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-sm hover:bg-green-100 transition">
                        <CheckCircle size={14} /> Approve
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-sm hover:bg-red-100 transition">
                        <XCircle size={14} /> Reject
                      </button>
                    </>
                  )}
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-sm hover:bg-gray-100 transition">
                    <MessageCircle size={14} /> Send Message
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p-1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 hover:bg-gray-50"
          >
            <ChevronLeft size={18} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg text-sm ${currentPage === page ? 'bg-indigo-600 text-white' : 'border border-gray-200 hover:bg-gray-50'}`}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 hover:bg-gray-50"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* Full Profile Modal */}
      {selectedProposal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Complete Profile - {selectedProposal.name}</h2>
              <button onClick={() => setSelectedProposal(null)} className="p-1 hover:bg-gray-100 rounded-full">
                <XCircle size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Header with Image */}
              <div className="flex items-center gap-4 pb-4 border-b">
                <img src={selectedProposal.profileImage} alt="" className="w-24 h-24 rounded-full object-cover border-4 border-indigo-200" />
                <div>
                  <h3 className="text-2xl font-bold">{selectedProposal.name}</h3>
                  <div className="flex gap-3 mt-1 text-gray-500">
                    <span>{selectedProposal.gender}</span>
                    <span>•</span>
                    <span>{selectedProposal.age} years</span>
                    <span>•</span>
                    <span>{selectedProposal.city}</span>
                  </div>
                  {getStatusBadge(selectedProposal.status)}
                </div>
              </div>

              {/* Personal Details */}
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><User size={18} className="text-indigo-500" /> Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
                  <div><p className="text-gray-400 text-xs">Full Name</p><p className="font-medium">{selectedProposal.name}</p></div>
                  <div><p className="text-gray-400 text-xs">Email</p><p className="font-medium">{selectedProposal.email}</p></div>
                  <div><p className="text-gray-400 text-xs">Phone</p><p className="font-medium">{selectedProposal.phone}</p></div>
                  <div><p className="text-gray-400 text-xs">Date of Birth</p><p className="font-medium">{1996} (Age {selectedProposal.age})</p></div>
                  <div><p className="text-gray-400 text-xs">Height</p><p className="font-medium">{selectedProposal.height}</p></div>
                  <div><p className="text-gray-400 text-xs">Complexion</p><p className="font-medium">{selectedProposal.complexion}</p></div>
                  <div><p className="text-gray-400 text-xs">Religion</p><p className="font-medium">{selectedProposal.religion}</p></div>
                  <div><p className="text-gray-400 text-xs">Caste</p><p className="font-medium">{selectedProposal.caste}</p></div>
                  <div><p className="text-gray-400 text-xs">Marital Status</p><p className="font-medium">{selectedProposal.maritalStatus}</p></div>
                </div>
              </div>

              {/* Professional Details */}
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><Briefcase size={18} className="text-indigo-500" /> Professional Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
                  <div><p className="text-gray-400 text-xs">Education</p><p className="font-medium">{selectedProposal.education}</p></div>
                  <div><p className="text-gray-400 text-xs">Profession</p><p className="font-medium">{selectedProposal.profession}</p></div>
                  <div><p className="text-gray-400 text-xs">Monthly Income</p><p className="font-medium text-green-600">{selectedProposal.income}</p></div>
                </div>
              </div>

              {/* Family Details */}
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><Users size={18} className="text-indigo-500" /> Family Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
                  <div><p className="text-gray-400 text-xs">Father's Occupation</p><p className="font-medium">{selectedProposal.familyDetails.fatherOccupation}</p></div>
                  <div><p className="text-gray-400 text-xs">Mother's Occupation</p><p className="font-medium">{selectedProposal.familyDetails.motherOccupation}</p></div>
                  <div><p className="text-gray-400 text-xs">Siblings</p><p className="font-medium">{selectedProposal.familyDetails.siblings}</p></div>
                  <div><p className="text-gray-400 text-xs">Family Type</p><p className="font-medium">{selectedProposal.familyDetails.familyType}</p></div>
                  <div><p className="text-gray-400 text-xs">Family Status</p><p className="font-medium">{selectedProposal.familyDetails.familyStatus}</p></div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><BookOpen size={18} className="text-indigo-500" /> Bio / About Me</h3>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-700">{selectedProposal.bio}</p>
                </div>
              </div>

              {/* Partner Preference */}
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><Heart size={18} className="text-indigo-500" /> Partner Preference</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
                  <div><p className="text-gray-400 text-xs">Age Range</p><p className="font-medium">{selectedProposal.partnerPreference.ageRange}</p></div>
                  <div><p className="text-gray-400 text-xs">Height</p><p className="font-medium">{selectedProposal.partnerPreference.height}</p></div>
                  <div><p className="text-gray-400 text-xs">Education</p><p className="font-medium">{selectedProposal.partnerPreference.education}</p></div>
                  <div><p className="text-gray-400 text-xs">Profession</p><p className="font-medium">{selectedProposal.partnerPreference.profession}</p></div>
                  <div><p className="text-gray-400 text-xs">Religion</p><p className="font-medium">{selectedProposal.partnerPreference.religion}</p></div>
                  <div><p className="text-gray-400 text-xs">Caste</p><p className="font-medium">{selectedProposal.partnerPreference.caste}</p></div>
                  <div><p className="text-gray-400 text-xs">Marital Status</p><p className="font-medium">{selectedProposal.partnerPreference.maritalStatus}</p></div>
                  <div><p className="text-gray-400 text-xs">Preferred City</p><p className="font-medium">{selectedProposal.partnerPreference.city}</p></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition">Approve Proposal</button>
                <button className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition">Reject Proposal</button>
                <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">Contact via Email</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}