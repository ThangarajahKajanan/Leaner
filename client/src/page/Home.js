import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated (has token)
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // If no token, redirect to login page
    }
  }, [navigate]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (!message.trim()) {
      setResponse('Message cannot be empty!');
      return;
    }

    // Logic to send the message (API call can go here)
    console.log('Message Sent:', message);

    // Simulate success response
    setResponse('Message sent successfully!');
    setMessage(''); // Clear the message box
  };

  const handleLogout = () => {
    // Ask for confirmation before logging out
    setIsLogoutOpen(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const cancelLogout = () => {
    setIsLogoutOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Logout Confirmation Modal */}
      {isLogoutOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 text-lg">Are you sure you want to log out?</p>
            <button
              onClick={confirmLogout}
              className="bg-red-600 text-white py-2 px-4 rounded-lg mr-4"
            >
              Yes
            </button>
            <button
              onClick={cancelLogout}
              className="bg-gray-400 text-white py-2 px-4 rounded-lg"
            >
              No
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Send an Inquiry Message</h2>
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="text-sm text-red-600 underline"
          >
            Logout
          </button>
        </div>

        <textarea
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Type your message here..."
          value={message}
          onChange={handleMessageChange}
        />

        <button
          className="w-full bg-black text-white py-2 px-4 mt-4 rounded-lg transition duration-300"
          onClick={handleSendMessage}
        >
          Send
        </button>

        {response && (
          <p className="mt-4 text-center text-sm text-gray-600">{response}</p>
        )}
      </div>
    </div>
  );
};

export default Home;