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
      <div className="flex items-center justify-center gap-1.5 sm:gap-3 py-1">
        {['Days', 'Hours', 'Mins', 'Secs'].map((label) => (
          <div
            key={label}
            className="w-14 sm:w-20 md:w-24 h-16 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-gold-400/40 flex flex-col items-center justify-center"
          >
            <span className="text-lg sm:text-3xl font-serif font-light text-white">--</span>
            <span className="text-[8px] sm:text-xs uppercase tracking-wider text-gold-200 mt-0.5">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (timeLeft.isExpired) {
    return (
      <div className="py-3 px-6 rounded-2xl bg-white/20 backdrop-blur-md border border-gold-300 text-center animate-fade-in max-w-sm mx-auto">
        <p className="font-serif text-lg sm:text-2xl text-white font-medium">Today is the Royal Wedding! 💍</p>
        <p className="text-[9px] sm:text-xs uppercase tracking-widest text-gold-200 mt-0.5">Mubarak to Ayesha & Hamza</p>
      </div>
    );
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 py-1">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="group relative flex flex-col items-center justify-center w-14 sm:w-20 md:w-24 h-16 sm:h-24 md:h-28 rounded-2xl bg-emerald-950/75 backdrop-blur-md border-2 border-gold-400/60 shadow-xl transition-all duration-300 hover:border-gold-300"
        >
          {/* Gold top accent */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-gold-300 to-transparent" />

          <span className="text-lg sm:text-3xl md:text-4xl font-serif font-light text-white tracking-tight drop-shadow-sm">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="text-[8px] sm:text-xs uppercase tracking-[0.15em] text-gold-200/90 font-semibold mt-0.5">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
