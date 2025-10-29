"use client";
import { useState, useEffect } from "react";

export default function DailyReminderButton() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const savedTime = localStorage.getItem("reminderTime");
    if (savedTime) {
      setTime(savedTime);
    }
  }, []);

  useEffect(() => {
    if (time) {
      localStorage.setItem("reminderTime", time);
      if (navigator.serviceWorker?.controller) {
        navigator.serviceWorker.controller.postMessage({ type: "SET_REMINDER_TIME", time });
      }
    }
  }, [time]);

  return (
    <div className="flex flex-col gap-2 items-center">
      <label htmlFor="reminderTime" className="font-semibold">Daily Reminder Time</label>
      <input
        id="reminderTime"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border rounded p-2 text-black"
      />
      <p className="text-sm text-gray-400">You&apos;ll get notified daily at this time ⏰</p>
    </div>
  );
}