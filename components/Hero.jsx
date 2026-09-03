'use client';

import { Calendar, MapPin, ChevronDown, Sparkles, Heart } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { weddingData } from '@/data/weddingData';

export default function Hero() {
  const scrollToRSVP = (e) => {
    e.preventDefault();
    const element = document.querySelector('#rsvp');
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToSchedule = (e) => {
    e.preventDefault();
    const element = document.querySelector('#schedule');
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-24 sm:py-32">
      {/* Background with Royal Emerald & Gold Ambient Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85')`,
        }}
      >
        {/* Multi-gradient royal overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-maroon-950/80 to-emerald-950/95" />
        <div className="absolute inset-0 bg-gold-900/15 mix-blend-color" />
      </div>

      {/* Royal Gold Mughal Jaali Frame */}
      <div className="absolute inset-3 sm:inset-6 border border-gold-400/40 pointer-events-none rounded-3xl z-10">
        <div className="absolute top-2 left-2 w-7 sm:w-10 h-7 sm:h-10 border-t-2 border-l-2 border-gold-300 rounded-tl-lg" />
        <div className="absolute top-2 right-2 w-7 sm:w-10 h-7 sm:h-10 border-t-2 border-r-2 border-gold-300 rounded-tr-lg" />
        <div className="absolute bottom-2 left-2 w-7 sm:w-10 h-7 sm:h-10 border-b-2 border-l-2 border-gold-300 rounded-bl-lg" />
        <div className="absolute bottom-2 right-2 w-7 sm:w-10 h-7 sm:h-10 border-b-2 border-r-2 border-gold-300 rounded-br-lg" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-3xl mx-auto text-center text-white flex flex-col items-center justify-center">
        {/* Arabic Bismillah Calligraphy */}
        <div className="mb-4 sm:mb-6 animate-fade-in">
          <p className="font-arabic text-2xl sm:text-4xl md:text-5xl text-gold-300 font-bold tracking-wide drop-shadow-md leading-relaxed">
            {weddingData.couple.bismillah}
          </p>
          <p className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.25em] text-gold-200/80 mt-1">
            {weddingData.couple.bismillahTranslation}
          </p>
        </div>

        {/* Save The Date Royal Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold-500/15 backdrop-blur-md border border-gold-400/50 mb-4 sm:mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-gold-300" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium text-gold-100">
            Royal Wedding Celebrations
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold-300" />
        </div>

        {/* Couple Names */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-2 sm:mb-4 drop-shadow-lg leading-[1.1]">
          {weddingData.couple.brideShort}{' '}
          <span className="font-serif italic font-thin text-gold-300 text-3xl sm:text-5xl md:text-6xl mx-1">
            &
          </span>{' '}
          {weddingData.couple.groomShort}
        </h1>

        {/* Parents' Honour Announcement */}
        <div className="text-xs sm:text-sm font-light text-gold-100/90 mb-4 sm:mb-5 max-w-md mx-auto space-y-0.5">
          <p>{weddingData.couple.parentsBride}</p>
          <p>&</p>
          <p>{weddingData.couple.parentsGroom}</p>
        </div>

        {/* Quranic Verse */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-gold-300/30 max-w-xl mx-auto mb-6 text-xs sm:text-sm font-serif italic text-pearl-100/90 leading-relaxed">
          &ldquo;{weddingData.couple.quranicVerse}&rdquo;
          <span className="block not-italic font-sans text-[10px] uppercase tracking-widest text-gold-300 mt-1 font-semibold">
            {weddingData.couple.quranReference}
          </span>
        </div>

        {/* Dates & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-pearl-100 mb-8 pb-5 border-b border-gold-400/30 w-full max-w-md sm:max-w-lg">
          <div className="flex items-center space-x-1.5">
            <Calendar className="w-4 h-4 text-gold-300" />
            <span className="font-light tracking-wide">{weddingData.event.dateDisplay}</span>
          </div>
          <span className="hidden sm:inline text-gold-400">•</span>
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-4 h-4 text-gold-300" />
            <span className="font-light tracking-wide">{weddingData.event.cityState}</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="w-full mb-8">
          <CountdownTimer targetDate={weddingData.event.targetDate} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-2">
          <a
            href="#rsvp"
            onClick={scrollToRSVP}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-maroon-950 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
          >
            <span>Confirm RSVP & Duas 🤲</span>
          </a>
          <a
            href="#schedule"
            onClick={scrollToSchedule}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800/80 backdrop-blur-md border border-gold-400/50 text-gold-100 font-medium text-xs sm:text-sm uppercase tracking-[0.2em] active:scale-95 transition-all flex items-center justify-center space-x-2"
          >
            <span>View 4 Grand Events 🕌</span>
          </a>
        </div>
      </div>

      {/* Scroll Down */}
      <a
        href="#schedule"
        onClick={scrollToSchedule}
        aria-label="Scroll down"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 text-gold-300/80 hover:text-gold-200 transition-colors animate-bounce flex flex-col items-center space-y-0.5 cursor-pointer"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">Wedding Functions</span>
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  );
}
