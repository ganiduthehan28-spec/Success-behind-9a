'use client';

import { useEffect, useState, useCallback } from 'react';
import { tips } from '@/lib/tips';

export default function StudyTips() {
  const [tip, setTip] = useState({ en: '', si: '' });

  const updateTip = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTip(tips[randomIndex]);
  }, []);

  useEffect(() => {
    updateTip();
    const interval = setInterval(updateTip, 20000); // Update every 20 seconds

    return () => clearInterval(interval);
  }, [updateTip]);

  return (
    <div className="mt-8 p-4 rounded-lg bg-gray-100 dark:bg-gray-700 w-full max-w-2xl">
      <h3 className="text-lg font-semibold mb-2">Study Tip:</h3>
      <p className="text-sm sm:text-base">{tip.en}</p>
      {tip.si && <p className="text-sm sm:text-base mt-2">{tip.si}</p>}
    </div>
  );
}