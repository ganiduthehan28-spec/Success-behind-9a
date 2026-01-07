
'use client';

import { useEffect, useState } from 'react';
import { quotes } from '@/lib/quotes';
import CheerAnimation from './CheerAnimation';

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [quote, setQuote] = useState({ en: '', si: '' });
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const targetDate = new Date('February 17, 2026 08:30:00');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime({ days, hours, minutes, seconds });
      } else {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsTimeUp(true);
      }
    };

    const updateQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    };

    updateCountdown();
    updateQuote();

    const countdownInterval = setInterval(updateCountdown, 1000);
    const quoteInterval = setInterval(updateQuote, 10000);

    return () => {
      clearInterval(countdownInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  return (
    <div className="text-center">
      {isTimeUp ? (
        <>
          <CheerAnimation />
          <div className="text-2xl md:text-4xl font-bold text-green-500 animate-pulse py-8">
            Congratulations & Best of Luck! The long wait is finally over.
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="time-card p-4 rounded-lg">
              <span className="time-value text-white">{time.days}</span>
              <span className="block text-sm text-white">Days</span>
            </div>
            <div className="time-card p-4 rounded-lg">
              <span className="time-value text-white">{time.hours}</span>
              <span className="block text-sm text-white">Hours</span>
            </div>
            <div className="time-card p-4 rounded-lg">
              <span className="time-value text-white">{time.minutes}</span>
              <span className="block text-sm text-white">Minutes</span>
            </div>
            <div className="time-card p-4 rounded-lg">
              <span className="time-value text-white">{time.seconds}</span>
              <span className="block text-sm text-white">Seconds</span>
            </div>
          </div>
          <div className="mt-4 quote-bar p-4 rounded-lg">
            <p className="text-base italic text-white">{quote.en}</p>
            <p className="text-base italic mt-2 text-white">{quote.si}</p>
          </div>
        </>
      )}
    </div>
  );

}
