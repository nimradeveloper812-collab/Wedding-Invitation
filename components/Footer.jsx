'use client';

import { Heart, ArrowUp, Mail, Phone, Sparkles } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-charcoal-950 text-white relative pt-20 pb-12 overflow-hidden border-t border-charcoal-800">
      {/* Subtle top gold highlight */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne-400 to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Hashtag & Monogram */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-300 font-medium">
            {weddingData.couple.hashtag}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
        </div>

        {/* Couple Names */}
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight mb-4">
          {weddingData.couple.brideShort} & {weddingData.couple.groomShort}
        </h2>

        <p className="font-serif italic text-base sm:text-lg text-cream-300/80 max-w-md mx-auto mb-10">
          &ldquo;Thank you for being an essential part of our lives, our love story, and our celebration.&rdquo;
        </p>

        {/* Contact Info Box */}
        <div className="max-w-xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 mb-12 text-xs sm:text-sm text-charcoal-300 flex flex-col sm:flex-row items-center justify-around gap-4">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-champagne-400" />
            <a
              href={`mailto:${weddingData.contact.coupleEmail}`}
              className="hover:text-champagne-300 transition-colors"
            >
              {weddingData.contact.coupleEmail}
            </a>
          </div>
          <div className="hidden sm:block text-charcoal-600">•</div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-champagne-400" />
            <span>Wedding Coordinator: {weddingData.contact.weddingPhone}</span>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mb-10">
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-cream-200 hover:text-white px-5 py-2.5 rounded-full border border-white/20 hover:border-champagne-400 transition-all duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-charcoal-800 text-xs text-charcoal-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            {weddingData.event.dateDisplay} • {weddingData.event.venueName}
          </p>
          <p className="flex items-center">
            Designed with <Heart className="w-3.5 h-3.5 mx-1.5 text-blush-400 fill-blush-400" /> for {weddingData.couple.brideShort} & {weddingData.couple.groomShort}
          </p>
        </div>
      </div>
    </footer>
  );
}
