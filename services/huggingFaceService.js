// services/huggingFaceService.js
import { post } from "axios";

export async function getResponseFromHuggingFace(message) {
  try {
    const response = await post(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct",
      { inputs: message },
      {
        headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` },
      }
    );

    return response.data[0]?.generated_text || "No response from model";
  } catch (error) {
    console.error("Hugging Face API error:", error);
    throw new Error("Failed to fetch response from Hugging Face");
  }
}
