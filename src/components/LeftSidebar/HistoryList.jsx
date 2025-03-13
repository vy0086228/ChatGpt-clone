import React, { useState } from "react";
import { getCurrentTimestamp, timeAgo } from "../../utils/timeUtils";

const ChatHistory = () => {
  const [messages, setMessages] = useState([
    { role: "user", content: "Hello!", timestamp: getCurrentTimestamp() },
    {
      role: "assistant",
      content: "Hi! How can I assist?",
      timestamp: getCurrentTimestamp(),
    },
  ]);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md h-96 overflow-y-auto">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex my-2 ${
            msg.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`p-3 rounded-lg max-w-xs ${
              msg.role === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-900"
            }`}
          >
            <p className="text-sm">{msg.content}</p>
            <span className="text-xs text-gray-600 block mt-1">
              {timeAgo(msg.timestamp)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
