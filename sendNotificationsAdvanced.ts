import { sendNotification } from './lib/sendNotification';

// Define target FIDs (empty array targets all users with notifications enabled)
const targetFids = [];

// Define filters to narrow down recipients
const filters = {
  exclude_fids: [420, 69], // Exclude specific FIDs
  following_fid: 3, // Only send to users following this FID
  minimum_user_score: 0.5, // Only send to users with score >= this value
  near_location: { // Only send to users near a specific location
    latitude: 34.052235,
    longitude: -118.243683,
    radius: 50000, // Distance in meters (optional, defaults to 50km)
  }
};

// Define notification content
const notification = {
  title: "🪐",
  body: "It's time to savor farcaster",
  target_url: "https://your-miniapp-domain.com/notification-destination",
};

// Send the notification
const result = await sendNotification(targetFids, filters, notification);

if (result.success) {
  console.log("Notification sent successfully:", result.data);
} else {
  console.error("Failed to send notification:", result.error);
}
