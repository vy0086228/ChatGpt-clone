import { Schema, model } from "mongoose";
import { getCurrentTimestamp } from "../utils/timeUtils.js";

const ChatHistorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  messages: [
    {
      role: { type: String, enum: ["user", "assistant"], required: true },
      content: { type: String, required: true },
      timestamp: {
        type: String,
        default: getCurrentTimestamp, // Automatically add a timestamp
      },
    },
  ],
  createdAt: {
    type: String,
    default: getCurrentTimestamp, // Set creation time
  },
});

export default model("ChatHistory", ChatHistorySchema);
