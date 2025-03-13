import LeftSidebar from "@/components/LeftSidebar/LeftSidebar";
import ChatMessageContainer from "@/components/MessageContainer/ChatMessageContainer";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } h-screen bg-gray-800 text-white p-4 transition-all duration-300`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mb-4"
        >
          <FaBars />
        </button>
        {isSidebarOpen && (
          <p className="mt-4">
            <LeftSidebar />
          </p>
        )}
      </aside>

      <div>
        {/* Main Content */}
        <main>
          <ChatMessageContainer />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
