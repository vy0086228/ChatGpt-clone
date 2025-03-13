import React from "react";
import ChatInput from "../InputBox/InputBox";
import Footer from "../Navbar/Footer";
import Navbar from "../Navbar/Navbar";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

const ChatMessageContainer = ({ messages = [], onSend }) => {
  return (
    <div className="">
      {/* Left Sidebar (Fixed Width - w-60) */}
      <div className="">
        <LeftSidebar />
      </div>
      {/* Main Chat Container (Full Width - w-screen) */}
      <div className="">
        {/* Navbar (Full Width) */}
        <div className="w-[100%]">
          <Navbar />
        </div>

        {/* Messages Container (Full Width) */}
        <div className="flex flex-col flex-grow w-screen p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-4 ${
                msg.isSender ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg shadow-md ${
                  msg.isSender
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <p>{msg.text}</p>
                {msg.file && (
                  <a
                    href={msg.file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-300 underline"
                  >
                    {msg.file.name}
                  </a>
                )}
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input (Full Width) */}

        <div className="flex justify-center w-screen">
          <ChatInput onSend={onSend} />
        </div>

        {/* Footer (Full Width) */}
        <div className="w-[100%]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ChatMessageContainer;
