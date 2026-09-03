'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import OurStory from '@/components/OurStory';
import RSVPForm from '@/components/RSVPForm';
import PhotoGallery from '@/components/PhotoGallery';
import Guestbook from '@/components/Guestbook';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import EnvelopeIntro from '@/components/EnvelopeIntro';
import FallingPetals from '@/components/FallingPetals';
import QRCodeModal from '@/components/QRCodeModal';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function WeddingPage() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-pearl-100 text-charcoal-900 pb-16 md:pb-0">
      {/* 3D Royal Wax Seal Envelope Intro Curtain */}
      <EnvelopeIntro />

      {/* Floating Rose Petals & Gold Sparkles */}
      <FallingPetals />

      {/* Mobile QR Code Modal */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />

      {/* Fixed Navigation Header with QR shortcut */}
      <Navbar onOpenQR={() => setIsQRModalOpen(true)} />

      {/* Royal Bismillah Hero Header First Fold with Countdown */}
      <Hero />

      {/* 4 Grand Celebrations (Mehndi, Nikkah, Barat, Walima with Mobile Tabs) */}
      <Schedule />

      {/* Interactive Desi RSVP Form with Dual-Cannon Confetti & Song Request */}
      <RSVPForm />

      {/* Our Journey & Milestones */}
      <OurStory />

      {/* Bridal & Traditional Photo Gallery with Lightbox */}
      <PhotoGallery />

      {/* Duas & Well Wishes Wall (Guestbook) */}
      <Guestbook />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Royal Closing Footer with Islamic Blessing & Back-to-Top */}
      <Footer />

      {/* Floating Glassmorphic Mobile Bottom Dock */}
      <MobileBottomNav onOpenQR={() => setIsQRModalOpen(true)} />
    </main>
  );
}
