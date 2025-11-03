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
              <div className="flex justify-end space-x-2">
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyReminderButton;