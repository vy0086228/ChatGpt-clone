import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api";

export const sendMessageToLLM = async (message, model) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/llm/chat`, {
      message,
      model,
    });
    return response.data.response;
  } catch (error) {
    console.error("API Error:", error);
    return "❌ Error fetching response.";
  }
};
