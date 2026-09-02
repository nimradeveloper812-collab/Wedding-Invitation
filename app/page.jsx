'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Schedule from '@/components/Schedule';
import RSVPForm from '@/components/RSVPForm';
import RegistryAccommodations from '@/components/RegistryAccommodations';
import PhotoGallery from '@/components/PhotoGallery';
import Guestbook from '@/components/Guestbook';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import EnvelopeIntro from '@/components/EnvelopeIntro';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';
import QRCodeModal from '@/components/QRCodeModal';

export default function WeddingPage() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-cream-50 text-charcoal-800">
      {/* 3D Wax Seal Envelope Intro Curtain & Replay Trigger */}
      <EnvelopeIntro />

      {/* Floating Rose Petals & Golden Sparkles Animation */}
      <FallingPetals />

      {/* Romantic Ambient Piano Music Player */}
      <AudioPlayer />

      {/* Mobile QR Code Modal */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />

      {/* Fixed Navigation Header with QR shortcut */}
      <Navbar onOpenQR={() => setIsQRModalOpen(true)} />

      {/* Hero Header First Fold with Countdown */}
      <Hero />

      {/* Our Story Milestone Timeline */}
      <OurStory />

      {/* Event Schedule & Location Details */}
      <Schedule />

      {/* Interactive RSVP Form with Confetti Toast */}
      <RSVPForm />

      {/* Accommodations & Gift Registry */}
      <RegistryAccommodations />

      {/* Photo Gallery with Lightbox */}
      <PhotoGallery />

      {/* Love Notes & Wishes Guestbook Wall */}
      <Guestbook />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Romantic Footer & Back-to-Top */}
      <Footer />
    </main>
  );
}
