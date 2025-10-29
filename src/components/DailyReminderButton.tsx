"use client";
import { useState, useEffect } from "react";

export default function DailyReminderButton() {
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState("09:00");
  const [tempTime, setTempTime] = useState("09:00");

  useEffect(() => {
    const savedTime = localStorage.getItem("reminderTime");
    if (savedTime) {
      setTime(savedTime);
      setTempTime(savedTime);
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

  const handleSaveReminder = () => {
    setTime(tempTime);
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        Set Daily Reminder
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-black">Set Daily Reminder Time</h2>
            <input
              type="time"
              value={tempTime}
              onChange={(e) => setTempTime(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full text-black"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveReminder}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}