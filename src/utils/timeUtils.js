import moment from "moment";

/**
 * Get the current timestamp in "YYYY-MM-DD HH:mm:ss" format
 */
export const getCurrentTimestamp = () => {
  return moment().format("YYYY-MM-DD HH:mm:ss");
};

/**
 * Convert a given timestamp into a human-readable format
 * Example: "2 minutes ago", "Yesterday", "5 days ago"
 */
export const timeAgo = (timestamp) => {
  return moment(timestamp, "YYYY-MM-DD HH:mm:ss").fromNow();
};

/**
 * Convert a timestamp into a different format
 * @param {string} timestamp - The timestamp to format
 * @param {string} format - The desired format (e.g., "MMM DD, YYYY - HH:mm")
 */
export const formatTimestamp = (timestamp, format = "YYYY-MM-DD HH:mm:ss") => {
  return moment(timestamp, "YYYY-MM-DD HH:mm:ss").format(format);
};
