import React from "react";
import ChatMessage from "./ChatMessage"; // Import the ChatMessage component

const ChatArea = ({ messages }) => {
  return (
    <div className="h-96 w-full p-4 overflow-y-auto bg-gray-900 text-white rounded-lg shadow-md">
      {messages.length === 0 ? (
        <p className="text-center text-gray-400">Start a conversation...</p>
      ) : (
        messages.map((msg, index) => (
          <ChatMessage key={index} text={msg.text} isUser={msg.isUser} />
        ))
      )}
    </div>
  );
};

export default ChatArea;
