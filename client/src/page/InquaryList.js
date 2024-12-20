import React, { useEffect, useState } from "react";
import axios from "axios";

const InquaryList = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  // Fetch messages from the backend
  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/messages");
      setMessages(response.data); // Assuming the API returns an array of messages
    } catch (err) {
      console.error(err);
      setError("Failed to fetch messages. Please try again later.");
    }
  };

  // Update adminResponse for a specific message
  const updateResponse = async (id, newStatus) => {
    try {
      await axios.patch(`http://localhost:8080/api/messages/${id}`, {
        adminResponse: newStatus,
      });

      // Update the local state after a successful update
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === id ? { ...message, adminResponse: newStatus } : message
        )
      );
    } catch (err) {
      console.error(err);
      setError("Failed to update response. Please try again.");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Messages</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-300">No</th>
              <th className="px-4 py-2 border border-gray-300">Message ID</th>
              <th className="px-4 py-2 border border-gray-300">Content</th>
              <th className="px-4 py-2 border border-gray-300">Admin Response</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <tr key={message.id}>
                  <td className="px-4 py-2 border border-gray-300">{index+1}</td>
                  <td className="px-4 py-2 border border-gray-300">{message.id}</td>
                  <td className="px-4 py-2 border border-gray-300">{message.content}</td>
                  <td className="px-4 py-2 border border-gray-300">{message.adminResponse}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    {message.adminResponse === "Pending" && (
                      <div className="flex space-x-2">
                        <button
                          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                          onClick={() => updateResponse(message.id, "Accepted")}
                        >
                          Accept
                        </button>
                        <button
                          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                          onClick={() => updateResponse(message.id, "Rejected")}
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-gray-500 border border-gray-300"
                >
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InquaryList;