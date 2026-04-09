// src/pages/Messages.jsx
import { useState, useEffect, useRef } from 'react';
import { 
  FiSend, 
  FiSearch, 
  FiUser, 
  FiMail, 
  FiClock, 
  FiStar,
  FiArchive,
  FiTrash2,
  FiPaperclip,
  FiSmile,
  FiMoreVertical,
  FiCheck,
  FiCheckCircle
} from 'react-icons/fi';
import { FaRegSmile } from 'react-icons/fa';

export default function Messages() {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Demo conversations data
    const demoConversations = [
      {
        id: 1,
        name: "Priya Sharma",
        email: "priya@example.com",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        lastMessage: "Thank you for your response! I'm interested in the match.",
        timestamp: "2024-12-18T10:30:00",
        unread: 2,
        status: "active",
        messages: [
          { id: 1, sender: "Priya Sharma", content: "Hello, I'm interested in finding a match.", timestamp: "2024-12-18T09:00:00", isAdmin: false, read: true },
          { id: 2, sender: "Admin", content: "Hi Priya! Thank you for reaching out. Please share your preferences.", timestamp: "2024-12-18T09:30:00", isAdmin: true, read: true },
          { id: 3, sender: "Priya Sharma", content: "I'm looking for a well-settled groom aged 28-32.", timestamp: "2024-12-18T10:00:00", isAdmin: false, read: true },
          { id: 4, sender: "Admin", content: "Thank you for your response! I'm interested in the match.", timestamp: "2024-12-18T10:30:00", isAdmin: true, read: false }
        ]
      },
      {
        id: 2,
        name: "Rahul Patel",
        email: "rahul@example.com",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        lastMessage: "Can you share more details about the profile?",
        timestamp: "2024-12-18T09:15:00",
        unread: 1,
        status: "active",
        messages: [
          { id: 1, sender: "Rahul Patel", content: "Hello, I need help with my profile.", timestamp: "2024-12-18T08:00:00", isAdmin: false, read: true },
          { id: 2, sender: "Admin", content: "Sure! What help do you need?", timestamp: "2024-12-18T08:30:00", isAdmin: true, read: true },
          { id: 3, sender: "Rahul Patel", content: "Can you share more details about the profile?", timestamp: "2024-12-18T09:15:00", isAdmin: false, read: false }
        ]
      },
      {
        id: 3,
        name: "Anjali Reddy",
        email: "anjali@example.com",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        lastMessage: "I've completed my payment. Please verify.",
        timestamp: "2024-12-17T18:45:00",
        unread: 0,
        status: "active",
        messages: [
          { id: 1, sender: "Anjali Reddy", content: "I want to upgrade to Premium plan.", timestamp: "2024-12-17T17:00:00", isAdmin: false, read: true },
          { id: 2, sender: "Admin", content: "Sure! Please complete the payment.", timestamp: "2024-12-17T17:30:00", isAdmin: true, read: true },
          { id: 3, sender: "Anjali Reddy", content: "I've completed my payment. Please verify.", timestamp: "2024-12-17T18:45:00", isAdmin: false, read: true }
        ]
      },
      {
        id: 4,
        name: "Vikram Khanna",
        email: "vikram@example.com",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        lastMessage: "When will my profile be verified?",
        timestamp: "2024-12-17T14:20:00",
        unread: 3,
        status: "active",
        messages: [
          { id: 1, sender: "Vikram Khanna", content: "I registered yesterday.", timestamp: "2024-12-17T12:00:00", isAdmin: false, read: true },
          { id: 2, sender: "Admin", content: "Welcome! We'll verify soon.", timestamp: "2024-12-17T13:00:00", isAdmin: true, read: true },
          { id: 3, sender: "Vikram Khanna", content: "When will my profile be verified?", timestamp: "2024-12-17T14:20:00", isAdmin: false, read: false },
          { id: 4, sender: "Vikram Khanna", content: "Please update me.", timestamp: "2024-12-17T14:25:00", isAdmin: false, read: false },
          { id: 5, sender: "Vikram Khanna", content: "Is there any issue?", timestamp: "2024-12-17T14:30:00", isAdmin: false, read: false }
        ]
      },
      {
        id: 5,
        name: "Meera Iyer",
        email: "meera@example.com",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        lastMessage: "Thank you for your support!",
        timestamp: "2024-12-16T11:00:00",
        unread: 0,
        status: "active",
        messages: [
          { id: 1, sender: "Meera Iyer", content: "I found a match! Thank you.", timestamp: "2024-12-16T10:00:00", isAdmin: false, read: true },
          { id: 2, sender: "Admin", content: "Congratulations! We're happy for you.", timestamp: "2024-12-16T10:30:00", isAdmin: true, read: true },
          { id: 3, sender: "Meera Iyer", content: "Thank you for your support!", timestamp: "2024-12-16T11:00:00", isAdmin: false, read: true }
        ]
      }
    ];

    setConversations(demoConversations);
    if (demoConversations.length > 0) {
      setSelectedConversation(demoConversations[0]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedConversation]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;

    const newMsg = {
      id: Date.now(),
      sender: "Admin",
      content: newMessage,
      timestamp: new Date().toISOString(),
      isAdmin: true,
      read: true
    };

    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedConversation.id) {
        return {
          ...conv,
          messages: [...conv.messages, newMsg],
          lastMessage: newMessage,
          timestamp: new Date().toISOString(),
          unread: 0
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setSelectedConversation({
      ...selectedConversation,
      messages: [...selectedConversation.messages, newMsg],
      lastMessage: newMessage,
      timestamp: new Date().toISOString(),
      unread: 0
    });
    setNewMessage('');
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (days === 1) {
      return 'Yesterday';
    } else if (days < 7) {
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { day: 'numeric', month: 'short' });
    }
  };

  const getUnreadCount = () => {
    return conversations.reduce((sum, conv) => sum + conv.unread, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar - Conversations List */}
        <div className="w-80 bg-white border-r flex flex-col">
          {/* Header */}
          <div className="p-4 border-b">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold text-gray-800">Messages</h1>
              <div className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-sm font-semibold">
                {getUnreadCount()} unread
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex border-b">
            {['all', 'unread', 'archived'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex-1 py-2 text-sm font-medium transition ${
                  activeFilter === filter
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`p-4 border-b cursor-pointer transition hover:bg-gray-50 ${
                  selectedConversation?.id === conv.id ? 'bg-indigo-50' : ''
                } ${conv.unread > 0 ? 'bg-blue-50' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <img src={conv.avatar} alt={conv.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className={`font-medium ${conv.unread > 0 ? 'font-semibold' : ''}`}>
                        {conv.name}
                      </h3>
                      <span className="text-xs text-gray-400">{formatTime(conv.timestamp)}</span>
                    </div>
                    <p className={`text-sm truncate ${conv.unread > 0 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                      {conv.lastMessage}
                    </p>
                    {conv.unread > 0 && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-indigo-500 text-white text-xs rounded-full">
                        {conv.unread} new
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        {selectedConversation ? (
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="bg-white border-b p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={selectedConversation.avatar} alt={selectedConversation.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h2 className="font-semibold text-gray-800">{selectedConversation.name}</h2>
                  <p className="text-xs text-gray-500">{selectedConversation.email}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <FiStar size={18} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <FiArchive size={18} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <FiTrash2 size={18} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <FiMoreVertical size={18} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {selectedConversation.messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isAdmin ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] ${msg.isAdmin ? 'order-2' : 'order-1'}`}>
                      <div className={`rounded-lg p-3 ${msg.isAdmin ? 'bg-indigo-600 text-white' : 'bg-white border shadow-sm'}`}>
                        <p className="text-sm">{msg.content}</p>
                      </div>
                      <div className={`flex items-center gap-1 mt-1 text-xs text-gray-400 ${msg.isAdmin ? 'justify-end' : 'justify-start'}`}>
                        <span>{formatTime(msg.timestamp)}</span>
                        {msg.isAdmin && msg.read && <FiCheckCircle size={12} />}
                        {msg.isAdmin && !msg.read && <FiCheck size={12} />}
                      </div>
                    </div>
                    {!msg.isAdmin && (
                      <img src={selectedConversation.avatar} alt="" className="w-8 h-8 rounded-full object-cover mx-2 order-2" />
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Message Input */}
            <div className="bg-white border-t p-4">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <FiPaperclip size={20} className="text-gray-500" />
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:border-indigo-500"
                />
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <FiSmile size={20} className="text-gray-500" />
                </button>
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
                >
                  <FiSend size={20} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <FiMail size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-500">No conversation selected</h3>
              <p className="text-sm text-gray-400">Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}