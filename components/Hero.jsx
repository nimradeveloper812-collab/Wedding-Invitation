'use client';

import { Calendar, MapPin, ChevronDown, Sparkles } from 'lucide-react';
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

  const scrollToStory = (e) => {
    e.preventDefault();
    const element = document.querySelector('#story');
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
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Image with warm gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85')`,
        }}
      >
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/75 via-charcoal-900/45 to-charcoal-950/85" />
        <div className="absolute inset-0 bg-amber-950/20 mix-blend-color" />
      </div>

      {/* Luxury frame corner accents */}
      <div className="absolute inset-3 sm:inset-6 border border-white/20 pointer-events-none rounded-3xl z-10">
        <div className="absolute top-2 left-2 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-champagne-300/80 rounded-tl-lg" />
        <div className="absolute top-2 right-2 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-champagne-300/80 rounded-tr-lg" />
        <div className="absolute bottom-2 left-2 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-champagne-300/80 rounded-bl-lg" />
        <div className="absolute bottom-2 right-2 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-champagne-300/80 rounded-br-lg" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto py-20 sm:py-28 text-center text-white flex flex-col items-center justify-center">
        {/* Save The Date Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 mb-4 sm:mb-6 animate-fade-in">
          <Sparkles className="w-3 h-3 text-champagne-300" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium text-cream-100">
            We Are Getting Married
          </span>
          <Sparkles className="w-3 h-3 text-champagne-300" />
        </div>

        {/* Couple Names */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-3 sm:mb-5 drop-shadow-md leading-[1.1]">
          {weddingData.couple.brideShort}{' '}
          <span className="font-serif italic font-thin text-champagne-300 text-3xl sm:text-5xl md:text-6xl mx-1">
            &
          </span>{' '}
          {weddingData.couple.groomShort}
        </h1>

        {/* Tagline / Subtitle */}
        <p className="font-serif italic text-sm sm:text-lg text-cream-200/90 max-w-lg mx-auto mb-6 font-light px-2">
          &ldquo;{weddingData.couple.storyQuote}&rdquo;
        </p>

        {/* Date & Venue Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-base text-cream-100 mb-8 pb-5 border-b border-white/15 w-full max-w-md sm:max-w-xl">
          <div className="flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-champagne-300" />
            <span className="font-light tracking-wide">{weddingData.event.dateDisplay}</span>
          </div>
          <span className="hidden sm:inline text-champagne-300/60">•</span>
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-champagne-300" />
            <span className="font-light tracking-wide">{weddingData.event.venueName}</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="w-full mb-8">
          <CountdownTimer targetDate={weddingData.event.targetDate} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#rsvp"
            onClick={scrollToRSVP}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-champagne-500 hover:bg-champagne-600 text-charcoal-950 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all"
          >
            RSVP For The Celebration
          </a>
          <a
            href="#schedule"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#schedule');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-medium text-xs sm:text-sm uppercase tracking-[0.2em] active:scale-95 transition-all"
          >
            View Event Schedule
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#story"
        onClick={scrollToStory}
        aria-label="Scroll to story"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors animate-bounce flex flex-col items-center space-y-0.5 cursor-pointer"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">Our Story</span>
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  );
}
