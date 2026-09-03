'use client';

import { useState } from 'react';
import { Sparkles, Heart, ArrowRight, X, MailOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingData } from '@/data/weddingData';

export default function EnvelopeIntro() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [sealCracked, setSealCracked] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpen) return;

    setSealCracked(true);
    setTimeout(() => {
      setIsOpen(true);
      try {
        confetti({
          particleCount: 75,
          spread: 80,
          origin: { y: 0.55 },
          colors: ['#D4AF37', '#0B4635', '#850F22', '#FAF8F5'],
        });
      } catch (e) {}
    }, 350);
  };

  const handleEnterSite = () => {
    setIsDismissed(true);
  };

  const handleReplay = () => {
    setIsDismissed(false);
    setIsOpen(false);
    setSealCracked(false);
  };

  return (
    <>
      {/* Floating Replay Button */}
      {isDismissed && (
        <button
          onClick={handleReplay}
          className="fixed top-16 right-4 sm:top-20 sm:right-6 z-40 px-3.5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 shadow-2xl border border-white/60 flex items-center space-x-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all transform active:scale-95"
        >
          <MailOpen className="w-3.5 h-3.5" />
          <span>Replay Card ✉️</span>
        </button>
      )}

      {/* Main Full-Screen Overlay */}
      {!isDismissed && (
        <div className="fixed inset-0 z-50 bg-emerald-950/92 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none animate-fade-in overflow-hidden">
          {/* Skip */}
          <button
            onClick={handleEnterSite}
            className="absolute top-5 right-5 text-gold-200/80 hover:text-white flex items-center space-x-1 text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all"
          >
            <span>Skip</span>
            <X className="w-3.5 h-3.5 ml-0.5" />
          </button>

          {/* Prompt */}
          <div className="text-center mb-5 animate-pulse">
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/50 text-gold-200 text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span>{isOpen ? 'Invitation Unfolded' : 'Tap the Royal Seal to Open'}</span>
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            </span>
          </div>

          {/* Envelope & Card Wrapper */}
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/3.3] flex items-center justify-center">
            {/* Envelope Base Body */}
            <div
              className={`relative w-full h-full rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-maroon-950 shadow-2xl border-2 border-gold-400 flex items-center justify-center overflow-hidden transition-all duration-700 ${
                isOpen ? 'translate-y-20 sm:translate-y-24 scale-95 opacity-85' : 'scale-100'
              }`}
            >
              {/* Gold border */}
              <div className="absolute inset-2 sm:inset-3 border border-gold-400/40 rounded-xl pointer-events-none" />

              {/* Flap V-Fold */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)',
                  background: 'linear-gradient(135deg, #062E22 0%, #4A0510 100%)',
                }}
              />

              {/* Wax Seal Button */}
              {!isOpen && (
                <button
                  onClick={handleOpenEnvelope}
                  className={`absolute z-30 w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 transform active:scale-90 hover:scale-105 ${
                    sealCracked ? 'scale-125 opacity-0' : 'scale-100'
                  }`}
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, #D4AF37, #A07828, #5A4010)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.7), inset 0 2px 5px rgba(255,255,255,0.6)',
                  }}
                  title="Tap to Break the Royal Seal"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gold-200/80 flex flex-col items-center justify-center text-pearl-100 shadow-inner">
                    <Heart className="w-4 h-4 text-gold-200 fill-gold-200 mb-0.5 animate-pulse" />
                    <span className="font-serif text-sm sm:text-base tracking-widest font-bold drop-shadow">
                      A & H
                    </span>
                  </div>
                </button>
              )}
            </div>

            {/* Emerging Card */}
            <div
              className={`absolute z-20 w-[92%] sm:w-[88%] bg-white rounded-2xl shadow-2xl border-2 border-gold-400 p-5 sm:p-7 text-center text-emerald-950 transition-all duration-700 ${
                isOpen
                  ? '-translate-y-12 sm:-translate-y-16 scale-100 opacity-100 pointer-events-auto'
                  : 'translate-y-16 scale-75 opacity-0 pointer-events-none'
              }`}
            >
              <div className="border border-gold-300/80 rounded-xl p-4 sm:p-5 bg-pearl-50">
                <p className="font-arabic text-xl sm:text-2xl text-emerald-950 font-bold mb-1">
                  {weddingData.couple.bismillah}
                </p>

                <h3 className="font-serif text-2xl sm:text-3xl text-emerald-950 font-normal tracking-tight mb-1">
                  {weddingData.couple.brideShort} & {weddingData.couple.groomShort}
                </h3>

                <div className="w-12 h-[1.5px] bg-gold-500 mx-auto mb-2" />

                <p className="text-xs sm:text-sm font-serif italic text-charcoal-700 mb-3 leading-relaxed">
                  {weddingData.event.dateDisplay}
                  <br />
                  <span className="text-[11px] font-sans not-italic text-charcoal-500">
                    {weddingData.event.cityState}
                  </span>
                </p>

                <button
                  type="button"
                  onClick={handleEnterSite}
                  className="w-full py-2.5 rounded-full bg-emerald-900 hover:bg-emerald-800 text-gold-200 font-bold text-xs uppercase tracking-[0.2em] shadow-md transition-all active:scale-95 flex items-center justify-center space-x-2 border border-gold-400"
                >
                  <span>Open Royal Farman</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
