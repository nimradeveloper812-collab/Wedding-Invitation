'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function Navbar({ onOpenQR }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Functions', href: '#schedule' },
    { label: 'Our Story', href: '#story' },
    { label: 'Duas Wall', href: '#guestbook' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-emerald-950/95 backdrop-blur-md shadow-lg border-b border-gold-400/40 py-2.5'
          : 'bg-gradient-to-b from-emerald-950/90 via-emerald-950/40 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Initials */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, '#top')}
            className="group flex items-center space-x-2 transition-transform active:scale-95"
          >
            <span className="font-serif tracking-widest text-lg sm:text-2xl font-light text-gold-200 drop-shadow">
              {weddingData.couple.brideShort} & {weddingData.couple.groomShort}
            </span>
            <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-pearl-100 hover:text-gold-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {onOpenQR && (
              <button
                type="button"
                onClick={onOpenQR}
                title="Scan QR Code on Phone"
                className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium border border-gold-400/60 text-gold-200 hover:bg-gold-500/10 transition-colors flex items-center space-x-1"
              >
                <span>📱 Scan Card</span>
              </button>
            )}
            <a
              href="#rsvp"
              onClick={(e) => scrollToSection(e, '#rsvp')}
              className="px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 shadow-md hover:from-gold-400 hover:to-gold-300 transition-all transform hover:-translate-y-0.5"
            >
              RSVP & Duas
            </a>
          </div>

          {/* Mobile Right */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="#rsvp"
              onClick={(e) => scrollToSection(e, '#rsvp')}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gold-400 text-maroon-950 active:scale-95"
            >
              RSVP
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 rounded-lg text-gold-200 hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-950 border-b-2 border-gold-400 shadow-2xl px-6 py-5 transition-all text-pearl-100 animate-fade-in">
          <div className="flex flex-col space-y-3.5">
            <div className="pb-2 border-b border-gold-400/30">
              <p className="text-xs uppercase tracking-widest text-gold-300 font-semibold">
                {weddingData.event.dateDisplay}
              </p>
              <p className="text-xs font-serif italic text-pearl-200">
                {weddingData.event.cityState}
              </p>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm uppercase tracking-widest font-medium text-pearl-100 hover:text-gold-300 py-1.5 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}

            {onOpenQR && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQR();
                }}
                className="w-full text-center py-2.5 rounded-full bg-white/10 border border-gold-400/50 text-gold-200 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>📱 Scan / Share QR Card</span>
              </button>
            )}

            <a
              href="#rsvp"
              onClick={(e) => scrollToSection(e, '#rsvp')}
              className="w-full text-center py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 font-bold text-xs uppercase tracking-widest shadow-md active:scale-95"
            >
              Send RSVP & Duas 🤲
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
