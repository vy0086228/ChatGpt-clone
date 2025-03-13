import React from "react";

const ChatMessage = ({ text, isUser }) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
      <div
        className={`p-3 max-w-xs rounded-lg shadow-md ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-800 text-white"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
