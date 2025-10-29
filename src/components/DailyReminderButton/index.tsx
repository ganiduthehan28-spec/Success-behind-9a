"use client";
import React, { useState } from 'react';

const DailyReminderButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>('09:00');

  const handleSetReminder = async () => {
    alert(`Daily reminder set for ${selectedTime}`);
    setShowModal(false);
  };

  const handleResetReminder = async () => {
    alert('Daily reminder has been reset.');
    setShowModal(false);
  };

  return (
    <div className="relative">
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          setShowModal(true);
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        Set Daily Reminder
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-md flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Set Daily Reminder Time</h2>
            <input
              type="time"
              value={selectedTime}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedTime(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <div className="flex justify-between space-x-2">
              <button
                onClick={handleResetReminder}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Reset
              </button>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSetReminder}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyReminderButton;