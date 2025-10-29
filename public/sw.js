self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());

let reminderTime = null;

self.addEventListener("message", (event) => {
  if (event.data?.type === "SET_REMINDER_TIME") {
    reminderTime = event.data.time;
    self.registration.showNotification("Reminder Set ✅", {
      body: `Daily reminder set for ${reminderTime}`,
      icon: "/logo192.png",
    });
  }
});

async function showDailyNotification() {
  if (!reminderTime) return;
  const now = new Date();
  const current = now.toTimeString().slice(0, 5);
  if (current === reminderTime) {
    self.registration.showNotification("📅 Daily O/L Reminder", {
      body: "Don’t forget to check your O/L Countdown today!",
      icon: "/logo192.png",
      badge: "/logo192.png",
    });
  }
}

// Check every minute
setInterval(showDailyNotification, 60000);