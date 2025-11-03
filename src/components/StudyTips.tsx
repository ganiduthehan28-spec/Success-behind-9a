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
    <div className="tip-bar">
      <h3 className="text-lg font-semibold mb-2">Study Tip:</h3>
      <p className="tip-en">{tip.en}</p>
      {tip.si && <p className="tip-si">{tip.si}</p>}
    </div>
  );
}