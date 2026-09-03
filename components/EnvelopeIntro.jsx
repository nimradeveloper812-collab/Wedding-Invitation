'use client';

import { useState } from 'react';
import { Sparkles, Heart, ArrowRight, RotateCcw, X, MailOpen } from 'lucide-react';
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
          particleCount: 65,
          spread: 70,
          origin: { y: 0.55 },
          colors: ['#D4AF37', '#EADBCE', '#FAF7F2', '#D9A7A0'],
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
      {/* Floating Replay Button - optimized for mobile screen recording */}
      {isDismissed && (
        <button
          onClick={handleReplay}
          className="fixed top-16 right-4 sm:top-20 sm:right-6 z-40 px-3.5 py-1.5 sm:py-2 rounded-full bg-champagne-500 hover:bg-champagne-600 text-charcoal-950 shadow-xl border border-white/60 flex items-center space-x-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all transform active:scale-95"
        >
          <MailOpen className="w-3.5 h-3.5" />
          <span>Replay ✉️</span>
        </button>
      )}

      {/* Main Full-Screen Overlay Curtain */}
      {!isDismissed && (
        <div className="fixed inset-0 z-50 bg-charcoal-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 select-none animate-fade-in overflow-hidden">
          {/* Skip Button */}
          <button
            onClick={handleEnterSite}
            className="absolute top-5 right-5 text-white/75 hover:text-white flex items-center space-x-1 text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all"
          >
            <span>Skip</span>
            <X className="w-3.5 h-3.5 ml-0.5" />
          </button>

          {/* Top Viral Hook Prompt */}
          <div className="text-center mb-5 sm:mb-8 animate-pulse">
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-champagne-300/40 text-champagne-200 text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-champagne-300" />
              <span>{isOpen ? 'Invitation Unfolded' : 'Tap the Wax Seal to Open'}</span>
              <Sparkles className="w-3.5 h-3.5 text-champagne-300" />
            </span>
          </div>

          {/* Envelope Card Container */}
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/3.3] flex items-center justify-center">
            {/* Envelope Base Body */}
            <div
              className={`relative w-full h-full rounded-2xl bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200 shadow-2xl border border-cream-300/90 flex items-center justify-center overflow-hidden transition-all duration-700 ${
                isOpen ? 'translate-y-20 sm:translate-y-24 scale-95 opacity-85' : 'scale-100'
              }`}
            >
              {/* Gold foil border */}
              <div className="absolute inset-2 sm:inset-3 border border-champagne-300/50 rounded-xl pointer-events-none" />

              {/* Flap V-Fold Shading */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)',
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #EADBCE 100%)',
                }}
              />

              {/* Triangular Bottom Pocket */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)',
                  background: 'linear-gradient(to top, rgba(213, 190, 172, 0.45), transparent)',
                }}
              />

              {/* Monogram Wax Seal */}
              {!isOpen && (
                <button
                  onClick={handleOpenEnvelope}
                  className={`absolute z-30 w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 transform active:scale-90 hover:scale-105 ${
                    sealCracked ? 'scale-125 opacity-0' : 'scale-100'
                  }`}
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, #D4AF37, #A07828, #5A4010)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.6), inset 0 2px 5px rgba(255,255,255,0.5)',
                  }}
                  title="Tap to Open"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-champagne-200/70 flex flex-col items-center justify-center text-cream-100 shadow-inner">
                    <Heart className="w-4 h-4 text-cream-100 fill-cream-100 mb-0.5 animate-pulse" />
                    <span className="font-serif text-sm sm:text-base tracking-widest font-semibold drop-shadow">
                      S & A
                    </span>
                  </div>
                </button>
              )}
            </div>

            {/* Emerging Invitation Card (Slide Up on Mobile) */}
            <div
              className={`absolute z-20 w-[92%] sm:w-[88%] bg-white rounded-2xl shadow-2xl border border-champagne-300/80 p-5 sm:p-7 text-center text-charcoal-900 transition-all duration-700 ${
                isOpen
                  ? '-translate-y-12 sm:-translate-y-16 scale-100 opacity-100 pointer-events-auto'
                  : 'translate-y-16 scale-75 opacity-0 pointer-events-none'
              }`}
            >
              <div className="border border-champagne-300/60 rounded-xl p-4 sm:p-6 bg-cream-50/50">
                <div className="inline-flex items-center space-x-1 text-sage-700 mb-2">
                  <Heart className="w-3 h-3 fill-current text-blush-500" />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-charcoal-600">
                    Wedding Invitation
                  </span>
                  <Heart className="w-3 h-3 fill-current text-blush-500" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-light tracking-tight mb-1.5">
                  {weddingData.couple.brideShort} & {weddingData.couple.groomShort}
                </h3>

                <div className="w-12 h-[1.5px] bg-champagne-400 mx-auto mb-2.5" />

                <p className="text-xs sm:text-sm font-serif italic text-charcoal-600 mb-4 leading-relaxed">
                  {weddingData.event.dateDisplay}
                  <br />
                  <span className="text-[11px] font-sans not-italic text-charcoal-500">
                    {weddingData.event.venueName}
                  </span>
                </p>

                <button
                  type="button"
                  onClick={handleEnterSite}
                  className="w-full py-3 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-[0.2em] shadow-md transition-all active:scale-95 flex items-center justify-center space-x-2"
                >
                  <span>Open Full Invitation</span>
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
