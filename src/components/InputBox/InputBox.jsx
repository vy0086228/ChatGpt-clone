import { useState } from "react";
import { FaPaperPlane, FaPaperclip, FaTimes } from "react-icons/fa";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSend = () => {
    if (!message.trim() && !file) return;

    onSend(message, file);
    setMessage("");
    setFile(null);
  };

  return (
    <div className="flex items-center gap-2 w-150 h-20 mt-50 bg-white p-3 m-5 rounded-[3%] shadow-md border border-gray-300 focus:outline-none">
      <input
        type="text"
        className="flex p-2 text-gray-800 outline-none w-full"
        placeholder="Ask anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {file && (
        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg text-sm">
          <span>{file.name}</span>
          <FaTimes
            className="text-red-500 cursor-pointer"
            onClick={() => setFile(null)}
          />
        </div>
      )}

      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <label htmlFor="fileInput" className="cursor-pointer">
        <FaPaperclip className="text-gray-500 hover:text-gray-700" size={18} />
      </label>

      <button
        onClick={handleSend}
        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
      >
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default ChatInput;
