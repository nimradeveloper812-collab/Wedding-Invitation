'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center space-x-3 sm:space-x-5 py-4">
        {['Days', 'Hours', 'Mins', 'Secs'].map((label) => (
          <div
            key={label}
            className="w-16 sm:w-20 md:w-24 h-20 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center"
          >
            <span className="text-xl sm:text-3xl font-serif font-light text-white">--</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 mt-1">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (timeLeft.isExpired) {
    return (
      <div className="py-4 px-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-center animate-fade-in">
        <p className="font-serif text-2xl text-white font-medium">Today is the Day!</p>
        <p className="text-xs uppercase tracking-widest text-cream-200 mt-1">Celebrating our love with you</p>
      </div>
    );
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 py-2">
      {units.map((unit, index) => (
        <div
          key={unit.label}
          className="group relative flex flex-col items-center justify-center w-16 sm:w-20 md:w-24 h-20 sm:h-24 md:h-28 rounded-2xl bg-charcoal-900/40 backdrop-blur-md border border-white/25 shadow-lg transition-all duration-300 hover:border-champagne-400 hover:bg-charcoal-900/50"
        >
          {/* Subtle gold decorative accent top border */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-champagne-300 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

          <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-white tracking-tight drop-shadow-sm">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cream-200 font-medium mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
