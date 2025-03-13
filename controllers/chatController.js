import ChatHistory from "../models/ChatHistory.js";
import { getCurrentTimestamp } from "../utils/timeUtils.js";

export async function saveChat(req, res) {
  try {
    const { userId, messages } = req.body;

    const chat = new ChatHistory({
      user: userId,
      messages: messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
        timestamp: getCurrentTimestamp(), // Use helper function for consistency
      })),
    });

    await chat.save();
    console.log(`[${getCurrentTimestamp()}] Chat saved for user ${userId}`);

    res.status(201).json(chat);
  } catch (error) {
    console.error(
      `[${getCurrentTimestamp()}] Error saving chat: ${error.message}`
    );
    res.status(500).json({ error: "Server Error" });
  }
}
