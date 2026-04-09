// src/pages/Chat.jsx
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiSend, FiUser, FiArrowLeft, FiPhone, FiVideo } from 'react-icons/fi';
import { MdCall, MdVideocam } from 'react-icons/md';

export default function Chat() {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile, userPlan } = location.state || {};
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedUser');
    if (!loggedUser || !profile) {
      navigate('/browse-profiles');
      return;
    }
    setUser(JSON.parse(loggedUser));

    const chatKey = `chat_${Math.min(JSON.parse(loggedUser).id, profile.id)}_${Math.max(JSON.parse(loggedUser).id, profile.id)}`;
    const savedChats = JSON.parse(localStorage.getItem(chatKey) || '[]');
    setMessages(savedChats);
  }, [profile]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      text: newMessage,
      sender: user?.fullName || 'You',
      timestamp: new Date().toISOString(),
      isOwn: true
    };

    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    
    const chatKey = `chat_${Math.min(user?.id, profile.id)}_${Math.max(user?.id, profile.id)}`;
    localStorage.setItem(chatKey, JSON.stringify(updatedMessages));
    
    setNewMessage('');
    
    // Auto reply for demo
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        text: "Thanks for your message! I'll get back to you soon. (Demo Auto Reply)",
        sender: profile?.fullName,
        timestamp: new Date().toISOString(),
        isOwn: false
      };
      const updatedWithReply = [...updatedMessages, reply];
      setMessages(updatedWithReply);
      localStorage.setItem(chatKey, JSON.stringify(updatedWithReply));
    }, 2000);
  };

  const handleCall = () => {
    alert(`📞 Calling ${profile?.fullName}... (Demo: This would initiate a voice call)`);
  };

  const handleVideoCall = () => {
    alert(`🎥 Video call with ${profile?.fullName}... (Demo: This would start a video call)`);
  };

  const canCall = () => userPlan === 'premium';

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Chat Header */}
      <div className="bg-white shadow-sm p-4 flex items-center gap-3 sticky top-0">
        <button onClick={() => navigate('/browse-profiles')} className="p-2 hover:bg-gray-100 rounded-full">
          <FiArrowLeft size={20} />
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
          {profile?.fullName?.charAt(0)}
        </div>
        <div className="flex-1">
          <h2 className="font-semibold">{profile?.fullName}</h2>
          <p className="text-xs text-green-500">● Online</p>
        </div>
        {canCall() && (
          <>
            <button onClick={handleCall} className="p-2 hover:bg-gray-100 rounded-full">
              <FiPhone size={20} className="text-green-600" />
            </button>
            <button onClick={handleVideoCall} className="p-2 hover:bg-gray-100 rounded-full">
              <FiVideo size={20} className="text-purple-600" />
            </button>
          </>
        )}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-20">
            <p>No messages yet. Start a conversation!</p>
            <p className="text-sm mt-2">💬 Send a message to connect with {profile?.fullName}</p>
          </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] p-3 rounded-2xl ${msg.isOwn ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 shadow'}`}>
              <p className="text-sm">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.isOwn ? 'text-indigo-200' : 'text-gray-400'}`}>
                {new Date(msg.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-white p-4 flex gap-2 border-t">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition"
        >
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
}