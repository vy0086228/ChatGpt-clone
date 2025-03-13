import React, { useState } from "react";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";
import useWindowSize from "@/hooks/useWindowSize.js";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false); // Added state for profile dialog visibility

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
    if (isMobile || isTablet) setIsMenuOpen(false);
  };

  return (
    <nav className="flex fixed top-0 ml-4 sticky text-white p-4 shadow-lg">
      <div className="flex fixed top-0 h-10 w-[100%] ml-40 bg-gray-900 text-white shadow-inner mt-auto focus:outline-none">
        {/* Left Side (Empty, since we removed h2 and search bar) */}
        <div className="flex items-center gap-4"></div>

        {/* Right Side (User Avatar & Logout) */}
        <div className="flex items-center gap-4">
          {isMobile || isTablet ? (
            <>
              <button
                className="md:hidden p-2 hover:bg-gray-800 rounded transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>

              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-gray-900 shadow-lg p-4">
                  <div className="flex flex-col gap-4">
                    {/* User Info */}
                    <div className="flex items-center gap-3">
                      <div>
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <span>{"src" || "Guest"}</span>
                    </div>

                    {/* Logout Button */}
                    <button
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                      onClick={handleLogout}
                    >
                      <FiLogOut />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            // Desktop View
            <>
              {/* Profile Dialog */}
              {isProfileDialogOpen && (
                <div className="absolute top-10 right-0 bg-gray-800 text-white p-4 rounded-md shadow-lg w-64">
                  <div className="flex flex-col gap-4">
                    {/* User Info */}
                    <div className="flex items-center gap-3">
                      <img
                        src={user?.avatar || "/default-avatar.png"}
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span className="font-semibold">
                        {user?.name || "Guest"}
                      </span>
                    </div>

                    {/* Logout Button */}
                    <button
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                      onClick={handleLogout}
                    >
                      <FiLogOut />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
