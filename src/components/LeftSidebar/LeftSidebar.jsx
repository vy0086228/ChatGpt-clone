import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiPlus,
  FiLogOut,
  FiMessageSquare,
} from "react-icons/fi";
import { Button } from "../ui/button";

function SidebarToggle({ isOpen, toggleSidebar }) {
  return (
    <button
      onClick={toggleSidebar}
      className="fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-full md:hidden z-50"
    >
      {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    </button>
  );
}

// Format chat date like ChatGPT (without time)
function formatChatDate(chatDate) {
  const date = new Date(chatDate);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  }

  if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date); // Example: "March 7, 2024"
}

function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [chats, setChats] = useState([
    { date: formatChatDate(new Date(Date.now())) },
    { date: formatChatDate(new Date(Date.now() - 86400000)) }, // Yesterday
    { date: formatChatDate(new Date("2024-03-07")) },
    { date: formatChatDate(new Date("2024-03-06")) },
  ]);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function handleLogout() {
    localStorage.removeItem("userToken");
    navigate("/login");
  }

  function handleNewChat() {
    const newChat = {
      date: formatChatDate(new Date()), // Ensure new chat is formatted correctly
    };
    setChats([newChat, ...chats]);
  }

  return (
    <>
      {/* Sidebar Toggle Button */}
      <SidebarToggle isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-60 bg-gray-100 dark:bg-gray-900 p-4 shadow-lg transition-transform flex flex-col z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-72"
        } md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            DeepChatGPT
          </h2>
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 text-gray-700 dark:text-white hover:bg-gray-800 rounded-full flex cursor-pointer"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search chats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 pl-10 rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" />
        </div>

        {/* New Chat Button */}
        <button
          onClick={handleNewChat}
          className="w-full flex items-center justify-center gap-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none mb-4 cursor-pointer"
        >
          <FiPlus />
          New Chat
        </button>

        {/* Chat History - Styled like ChatGPT (Date Outside Button) */}
        <div className="flex-grow overflow-auto">
          {chats.map((chat, index) => (
            <div key={index} className="mb-2">
              {/* ✅ Chat Date (Outside Button) */}
              <span className="block text-xs text-gray-500 px-4 mb-1 items-center justify-center flex">
                {chat.date}
              </span>

              {/* ✅ Chat Button */}
              <button className="w-full flex items-center px-4 py-3 text-left bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                <FiMessageSquare className="text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <Button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none cursor-pointer"
        >
          <FiLogOut />
          Logout
        </Button>
      </div>
    </>
  );
}

export default LeftSidebar;
