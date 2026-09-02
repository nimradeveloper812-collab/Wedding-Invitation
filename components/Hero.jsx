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
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with warm gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        {/* Multilayer gradient overlays for ideal readability and romantic warmth */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-900/40 to-charcoal-950/80" />
        <div className="absolute inset-0 bg-amber-950/20 mix-blend-color" />
      </div>

      {/* Decorative filigree / corner borders */}
      <div className="absolute inset-4 sm:inset-8 border border-white/20 pointer-events-none rounded-3xl z-10 hidden sm:block">
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-champagne-300/80 rounded-tl-xl" />
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-champagne-300/80 rounded-tr-xl" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-champagne-300/80 rounded-bl-xl" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-champagne-300/80 rounded-br-xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-28 text-center text-white flex flex-col items-center justify-center">
        {/* Save The Date Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-champagne-300" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-medium text-cream-100">
            We Are Getting Married
          </span>
          <Sparkles className="w-3.5 h-3.5 text-champagne-300" />
        </div>

        {/* Couple Names */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-4 sm:mb-6 drop-shadow-md leading-[1.1]">
          {weddingData.couple.brideShort}{' '}
          <span className="font-serif italic font-thin text-champagne-300 text-3xl sm:text-5xl md:text-6xl mx-1 sm:mx-3">
            &
          </span>{' '}
          {weddingData.couple.groomShort}
        </h1>

        {/* Tagline / Subtitle */}
        <p className="font-serif italic text-base sm:text-lg md:text-xl text-cream-200/95 max-w-xl mx-auto mb-8 font-light">
          &ldquo;{weddingData.couple.storyQuote}&rdquo;
        </p>

        {/* Wedding Date & Venue Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base text-cream-100 mb-10 pb-6 border-b border-white/15 w-full max-w-xl">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-champagne-300" />
            <span className="font-light tracking-wide">{weddingData.event.dateDisplay}</span>
          </div>
          <span className="hidden sm:inline text-champagne-300/60">•</span>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-champagne-300" />
            <span className="font-light tracking-wide">{weddingData.event.venueName}</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="w-full mb-10">
          <CountdownTimer targetDate={weddingData.event.targetDate} />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#rsvp"
            onClick={scrollToRSVP}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-champagne-500 hover:bg-champagne-600 text-charcoal-950 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-lg hover:shadow-champagne-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
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
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-medium text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300"
          >
            View Event Schedule
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#story"
        onClick={scrollToStory}
        aria-label="Scroll down to story section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors animate-bounce flex flex-col items-center space-y-1 cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Our Story</span>
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  );
}
