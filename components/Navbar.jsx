'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Heart, Music2, Volume2, VolumeX } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function Navbar({ onOpenQR }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Travel & Stay', href: '#accommodations' },
    { label: 'Registry', href: '#registry' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Wishes', href: '#guestbook' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-sm border-b border-cream-200/80 py-3'
          : 'bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/20 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Initials */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, '#top')}
            className="group flex items-center space-x-2.5 transition-transform duration-200 hover:scale-105"
          >
            <span
              className={`font-serif tracking-widest text-xl sm:text-2xl font-light ${
                isScrolled ? 'text-charcoal-900' : 'text-white drop-shadow-sm'
              }`}
            >
              {weddingData.couple.brideShort} & {weddingData.couple.groomShort}
            </span>
            <Heart
              className={`w-3.5 h-3.5 fill-current transition-colors ${
                isScrolled ? 'text-blush-500' : 'text-blush-200'
              }`}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 relative py-1 hover:text-champagne-500 ${
                  isScrolled ? 'text-charcoal-700' : 'text-white/90 drop-shadow'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: RSVP Call to action & QR code */}
          <div className="hidden md:flex items-center space-x-3">
            {onOpenQR && (
              <button
                type="button"
                onClick={onOpenQR}
                title="Scan QR Code on Phone"
                className={`px-3 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 border flex items-center space-x-1.5 ${
                  isScrolled
                    ? 'border-cream-300 text-charcoal-700 hover:bg-cream-100'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                <span>📱 Scan QR</span>
              </button>
            )}
            <a
              href="#rsvp"
              onClick={(e) => scrollToSection(e, '#rsvp')}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                isScrolled
                  ? 'bg-sage-700 text-white hover:bg-sage-800'
                  : 'bg-white text-charcoal-900 hover:bg-cream-100 hover:text-charcoal-950'
              }`}
            >
              RSVP Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="#rsvp"
              onClick={(e) => scrollToSection(e, '#rsvp')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                isScrolled
                  ? 'bg-sage-700 text-white'
                  : 'bg-white text-charcoal-900'
              }`}
            >
              RSVP
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-charcoal-800 hover:bg-cream-200' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50/98 border-b border-cream-200 shadow-xl backdrop-blur-lg px-6 py-6 transition-all animate-fade-in text-charcoal-800">
          <div className="flex flex-col space-y-4">
            <div className="pb-2 border-b border-cream-200">
              <p className="text-xs uppercase tracking-widest text-sage-700 font-semibold">
                {weddingData.event.dateDisplay}
              </p>
              <p className="text-sm font-serif italic text-charcoal-600">
                {weddingData.event.cityState}
              </p>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm uppercase tracking-widest font-medium text-charcoal-800 hover:text-champagne-600 py-2 border-b border-cream-100/60"
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
                className="w-full text-center py-2.5 rounded-full bg-cream-200 text-charcoal-800 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5"
              >
                <span>📱 Scan / Share QR Code</span>
              </button>
            )}

            <a
              href="#rsvp"
              onClick={(e) => scrollToSection(e, '#rsvp')}
              className="w-full text-center py-3 mt-1 rounded-full bg-sage-700 text-white font-medium text-xs uppercase tracking-widest shadow-md hover:bg-sage-800 active:scale-95"
            >
              RSVP for Wedding
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
