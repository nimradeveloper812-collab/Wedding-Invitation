'use client';

import { Heart, ArrowUp, Phone, Sparkles } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-emerald-950 text-white relative pt-16 pb-10 overflow-hidden border-t-2 border-gold-400">
      {/* Top Gold Shimmer Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Hashtag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/50 mb-5">
          <Sparkles className="w-3.5 h-3.5 text-gold-300" />
          <span className="text-xs uppercase tracking-[0.25em] text-gold-200 font-semibold">
            {weddingData.couple.hashtag}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold-300" />
        </div>

        {/* Couple Names */}
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-gold-100 tracking-tight mb-2">
          {weddingData.couple.brideShort} & {weddingData.couple.groomShort}
        </h2>

        <p className="font-arabic text-xl sm:text-2xl text-gold-300 font-bold mb-3">
          بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </p>

        <p className="font-serif italic text-xs sm:text-sm text-pearl-200 max-w-md mx-auto mb-8 font-light">
          &ldquo;May Allah bless you, shower His blessings upon you, and join you together in goodness.&rdquo;
        </p>

        {/* Contact Info Box */}
        <div className="max-w-lg mx-auto p-5 rounded-2xl bg-white/5 border border-gold-400/40 mb-10 text-xs text-pearl-200 flex flex-col sm:flex-row items-center justify-around gap-3">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Tariq Mehmood: {weddingData.contact.phone1}</span>
          </div>
          <div className="hidden sm:block text-gold-400">•</div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Shahid Malik: {weddingData.contact.phone2}</span>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mb-8">
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-200 hover:text-white px-5 py-2 rounded-full border border-gold-400/40 hover:border-gold-300 transition-all duration-300 active:scale-95"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-emerald-900 text-xs text-pearl-300/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            {weddingData.event.dateDisplay} • {weddingData.event.cityState}
          </p>
          <p className="flex items-center">
            With sincere Duas & Love for {weddingData.couple.brideShort} & {weddingData.couple.groomShort}
          </p>
        </div>
      </div>
    </footer>
  );
}
