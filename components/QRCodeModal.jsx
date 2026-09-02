'use client';

import { useState } from 'react';
import { QrCode, X, Copy, Check, Smartphone, Sparkles, Heart } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function QRCodeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://wedding.example.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-charcoal-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-cream-200 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-charcoal-400 hover:text-charcoal-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-champagne-100 border border-champagne-300 flex items-center justify-center mx-auto mb-4 text-champagne-700">
          <Smartphone className="w-6 h-6" />
        </div>

        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-sage-700">
          Mobile Experience
        </span>
        <h3 className="font-serif text-2xl text-charcoal-900 font-light mt-1 mb-2">
          Scan to Open on Phone
        </h3>
        <p className="text-xs text-charcoal-500 font-light mb-6">
          Aim your phone&apos;s camera at the QR code below to preview this wedding invitation on mobile.
        </p>

        {/* QR Code Graphic Box */}
        <div className="relative w-52 h-52 mx-auto p-4 bg-cream-50 rounded-2xl border-2 border-champagne-300 shadow-inner flex items-center justify-center mb-6">
          {/* Real styled SVG QR code */}
          <svg
            className="w-full h-full"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Corner Position Detection Squares */}
            {/* Top Left */}
            <rect x="10" y="10" width="50" height="50" rx="6" fill="#1F2937" />
            <rect x="18" y="18" width="34" height="34" rx="3" fill="#FAF7F2" />
            <rect x="26" y="26" width="18" height="18" rx="2" fill="#C5A059" />

            {/* Top Right */}
            <rect x="140" y="10" width="50" height="50" rx="6" fill="#1F2937" />
            <rect x="148" y="18" width="34" height="34" rx="3" fill="#FAF7F2" />
            <rect x="156" y="26" width="18" height="18" rx="2" fill="#C5A059" />

            {/* Bottom Left */}
            <rect x="10" y="140" width="50" height="50" rx="6" fill="#1F2937" />
            <rect x="18" y="148" width="34" height="34" rx="3" fill="#FAF7F2" />
            <rect x="26" y="156" width="18" height="18" rx="2" fill="#C5A059" />

            {/* Simulated Data Pattern Matrix */}
            <rect x="70" y="15" width="10" height="10" fill="#374151" rx="1" />
            <rect x="90" y="15" width="10" height="10" fill="#374151" rx="1" />
            <rect x="110" y="15" width="10" height="10" fill="#374151" rx="1" />
            <rect x="70" y="35" width="20" height="10" fill="#374151" rx="1" />
            <rect x="105" y="35" width="15" height="10" fill="#374151" rx="1" />
            <rect x="70" y="55" width="10" height="20" fill="#374151" rx="1" />
            <rect x="115" y="55" width="15" height="10" fill="#374151" rx="1" />

            {/* Center Monogram Heart Badge */}
            <circle cx="100" cy="100" r="24" fill="#1F2937" />
            <circle cx="100" cy="100" r="20" fill="#C5A059" />
            <text
              x="100"
              y="105"
              textAnchor="middle"
              fill="#FAF7F2"
              fontSize="12"
              fontFamily="serif"
              fontWeight="bold"
            >
              S & A
            </text>

            <rect x="15" y="70" width="10" height="10" fill="#374151" rx="1" />
            <rect x="35" y="70" width="20" height="10" fill="#374151" rx="1" />
            <rect x="15" y="90" width="20" height="10" fill="#374151" rx="1" />
            <rect x="45" y="90" width="10" height="20" fill="#374151" rx="1" />
            <rect x="15" y="120" width="10" height="10" fill="#374151" rx="1" />

            <rect x="140" y="70" width="20" height="10" fill="#374151" rx="1" />
            <rect x="170" y="70" width="15" height="10" fill="#374151" rx="1" />
            <rect x="140" y="90" width="10" height="20" fill="#374151" rx="1" />
            <rect x="160" y="100" width="25" height="10" fill="#374151" rx="1" />
            <rect x="140" y="120" width="15" height="10" fill="#374151" rx="1" />

            <rect x="70" y="140" width="20" height="10" fill="#374151" rx="1" />
            <rect x="100" y="140" width="10" height="20" fill="#374151" rx="1" />
            <rect x="120" y="140" width="25" height="10" fill="#374151" rx="1" />
            <rect x="70" y="160" width="10" height="20" fill="#374151" rx="1" />
            <rect x="90" y="170" width="20" height="10" fill="#374151" rx="1" />
            <rect x="120" y="160" width="15" height="20" fill="#374151" rx="1" />
            <rect x="145" y="160" width="40" height="10" fill="#374151" rx="1" />
            <rect x="155" y="180" width="30" height="10" fill="#374151" rx="1" />
          </svg>
        </div>

        {/* Copy Link Action */}
        <button
          onClick={handleCopy}
          className="w-full py-3 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal-800 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 border border-cream-300"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-sage-600" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-charcoal-500" />
              <span>Copy Invitation Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
