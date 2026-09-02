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
          particleCount: 50,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#EADBCE', '#FAF7F2'],
        });
      } catch (e) {}
    }, 400);
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
      {/* Floating Replay Button visible when dismissed - great for TikTok screen recording */}
      {isDismissed && (
        <button
          onClick={handleReplay}
          className="fixed top-20 right-6 z-40 px-3.5 py-2 rounded-full bg-champagne-500 hover:bg-champagne-600 text-charcoal-950 shadow-xl border border-white/40 flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider transition-all transform hover:scale-105"
        >
          <MailOpen className="w-3.5 h-3.5" />
          <span>Replay Envelope ✉️</span>
        </button>
      )}

      {/* Main Overlay Curtain */}
      {!isDismissed && (
        <div className="fixed inset-0 z-50 bg-charcoal-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-opacity duration-700 animate-fade-in">
          {/* Skip / Close Button */}
          <button
            onClick={handleEnterSite}
            className="absolute top-6 right-6 text-white/70 hover:text-white flex items-center space-x-1 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <span>Skip To Invitation</span>
            <X className="w-4 h-4 ml-1" />
          </button>

          {/* Envelope & Card Wrapper */}
          <div className="relative w-full max-w-lg flex flex-col items-center">
            {/* Top Prompt */}
            <div className="text-center mb-6 animate-pulse">
              <span className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-champagne-500/20 border border-champagne-400/40 text-champagne-200 text-xs uppercase tracking-[0.25em] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-champagne-300" />
                <span>{isOpen ? 'Invitation Unfolded' : 'Tap the Wax Seal to Open'}</span>
                <Sparkles className="w-3.5 h-3.5 text-champagne-300" />
              </span>
            </div>

            {/* 3D Envelope Container */}
            <div className="relative w-full max-w-md aspect-[4/3] flex items-center justify-center select-none perspective-1000">
              {/* Envelope Body (Back & Pocket) */}
              <div
                className={`relative w-full h-full rounded-2xl bg-gradient-to-br from-cream-200 via-cream-100 to-cream-300 shadow-2xl border border-cream-300 flex items-center justify-center overflow-hidden transition-transform duration-700 ${
                  isOpen ? 'translate-y-16 scale-95 opacity-90' : ''
                }`}
              >
                {/* Envelope lining pattern */}
                <div className="absolute inset-2 border border-champagne-300/40 rounded-xl pointer-events-none" />

                {/* Pocket triangle shadows */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cream-300/70 to-transparent pointer-events-none" />

                {/* Envelope Front Flaps (V-Fold) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)',
                    background: 'linear-gradient(135deg, #F5EFEB 0%, #EADBCE 100%)',
                  }}
                />

                {/* Wax Seal Button (When Closed) */}
                {!isOpen && (
                  <button
                    onClick={handleOpenEnvelope}
                    className={`absolute z-30 w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                      sealCracked ? 'scale-125 opacity-0' : 'scale-100'
                    }`}
                    style={{
                      background: 'radial-gradient(circle at 35% 35%, #D4AF37, #9B7825, #6B4E12)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.4)',
                    }}
                    title="Click to Break the Seal"
                  >
                    {/* Golden Rim */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-champagne-200/60 flex flex-col items-center justify-center text-cream-100 shadow-inner">
                      <Heart className="w-4 h-4 text-cream-100 fill-cream-100 mb-0.5" />
                      <span className="font-serif text-sm sm:text-base tracking-widest font-semibold drop-shadow">
                        S & A
                      </span>
                    </div>
                  </button>
                )}
              </div>

              {/* Emerging Wedding Invitation Card (Slides Up on Open) */}
              <div
                className={`absolute z-20 w-[92%] sm:w-[88%] bg-white rounded-2xl shadow-2xl border border-champagne-300/60 p-6 sm:p-8 text-center text-charcoal-900 transition-all duration-700 ${
                  isOpen
                    ? '-translate-y-12 sm:-translate-y-16 scale-100 opacity-100 pointer-events-auto'
                    : 'translate-y-16 scale-75 opacity-0 pointer-events-none'
                }`}
              >
                {/* Gold Inner Border */}
                <div className="border border-champagne-300/80 rounded-xl p-4 sm:p-6 bg-cream-50/40">
                  <div className="inline-flex items-center space-x-1 text-sage-600 mb-2">
                    <Heart className="w-3 h-3 fill-current text-blush-500" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-charcoal-500">
                      You Are Cordially Invited
                    </span>
                    <Heart className="w-3 h-3 fill-current text-blush-500" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-light tracking-tight mb-2">
                    {weddingData.couple.brideShort} & {weddingData.couple.groomShort}
                  </h3>

                  <div className="w-12 h-[1px] bg-champagne-400 mx-auto mb-3" />

                  <p className="text-xs sm:text-sm font-serif italic text-charcoal-600 mb-4">
                    {weddingData.event.dateDisplay}
                    <br />
                    <span className="text-xs font-sans not-italic text-charcoal-500">
                      {weddingData.event.venueName}
                    </span>
                  </p>

                  <button
                    type="button"
                    onClick={handleEnterSite}
                    className="w-full py-3 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <span>View Full Invitation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
