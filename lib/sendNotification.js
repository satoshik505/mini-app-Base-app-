import { NeynarAPIClient } from "@neynar/nodejs-sdk";

const client = new NeynarAPIClient(process.env.NEYNAR_API_KEY);

/**
 * Send a notification to mini app users
 * @param {number[]} targetFids - Array of FIDs to target (empty array = all users with notifications enabled)
 * @param {Object} filters - Optional filters to narrow down recipients
 * @param {Object} notification - Notification content and target URL
 */
export async function sendNotification(targetFids, filters, notification) {
  try {
    const response = await client.publishFrameNotifications({
      targetFids,
      filters,
      notification,
    });
    
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error("Failed to send notification:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}
