import { FiFacebook, FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="flex fixed bottom-0 h-10 w-[100%] ml-48 bg-gray-900 text-white shadow-inner mt-auto focus:outline-none">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Section - Copyright */}
        <p className="text-sm items-center justify-center justify-between">
          &copy; {new Date().getFullYear()} DeepChatGPT. All rights reserved.
        </p>

        {/* Center Section - Social Links */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FiFacebook size={20} />
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            <FiTwitter size={20} />
          </a>
          <a href="#" className="hover:text-pink-400 transition-colors">
            <FiInstagram size={20} />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <FiGithub size={20} />
          </a>
        </div>

        {/* Right Section - Additional Links */}
        <div className="text-sm mt-2 md:mt-0">
          <a href="/privacy" className="hover:underline mx-2">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
