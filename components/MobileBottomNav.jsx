'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Calendar, Heart, MessageSquare, QrCode } from 'lucide-react';

export default function MobileBottomNav({ onOpenQR }) {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'schedule', 'rsvp', 'story', 'guestbook'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 60;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-emerald-950/90 backdrop-blur-xl border-2 border-gold-400/60 rounded-full shadow-2xl p-1.5 flex items-center justify-around text-pearl-100"
    >
      {/* Home / Top */}
      <button
        type="button"
        onClick={() => scrollTo('top')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-full transition-all active:scale-95 ${
          activeSection === 'top'
            ? 'bg-gold-500/20 text-gold-300 font-semibold'
            : 'text-pearl-200/80 hover:text-gold-200'
        }`}
      >
        <Sparkles className="w-4 h-4" />
        <span className="text-[9px] uppercase tracking-wider mt-0.5">Home</span>
      </button>

      {/* Events / Schedule */}
      <button
        type="button"
        onClick={() => scrollTo('schedule')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-full transition-all active:scale-95 ${
          activeSection === 'schedule'
            ? 'bg-gold-500/20 text-gold-300 font-semibold'
            : 'text-pearl-200/80 hover:text-gold-200'
        }`}
      >
        <Calendar className="w-4 h-4" />
        <span className="text-[9px] uppercase tracking-wider mt-0.5">Events</span>
      </button>

      {/* RSVP Center Highlight Button */}
      <button
        type="button"
        onClick={() => scrollTo('rsvp')}
        className="flex items-center space-x-1 py-1.5 px-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-maroon-950 font-bold shadow-lg transform -translate-y-1 active:scale-95"
      >
        <Heart className="w-3.5 h-3.5 fill-maroon-950" />
        <span className="text-[11px] uppercase tracking-wider">RSVP 🤲</span>
      </button>

      {/* Duas Wall */}
      <button
        type="button"
        onClick={() => scrollTo('guestbook')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-full transition-all active:scale-95 ${
          activeSection === 'guestbook'
            ? 'bg-gold-500/20 text-gold-300 font-semibold'
            : 'text-pearl-200/80 hover:text-gold-200'
        }`}
      >
        <MessageSquare className="w-4 h-4" />
        <span className="text-[9px] uppercase tracking-wider mt-0.5">Duas</span>
      </button>

      {/* QR Code */}
      {onOpenQR && (
        <button
          type="button"
          onClick={onOpenQR}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-full text-pearl-200/80 hover:text-gold-200 transition-all active:scale-95"
        >
          <QrCode className="w-4 h-4 text-gold-300" />
          <span className="text-[9px] uppercase tracking-wider mt-0.5">QR</span>
        </button>
      )}
    </nav>
  );
}
