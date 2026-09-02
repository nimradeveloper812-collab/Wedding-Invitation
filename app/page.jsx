import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Schedule from '@/components/Schedule';
import RSVPForm from '@/components/RSVPForm';
import RegistryAccommodations from '@/components/RegistryAccommodations';
import PhotoGallery from '@/components/PhotoGallery';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function WeddingPage() {
  return (
    <main className="relative min-h-screen bg-cream-50 text-charcoal-800">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Hero Header First Fold with Countdown */}
      <Hero />

      {/* Our Story Milestone Timeline */}
      <OurStory />

      {/* Event Schedule & Location Details */}
      <Schedule />

      {/* Interactive RSVP Form with Toast */}
      <RSVPForm />

      {/* Accommodations & Gift Registry */}
      <RegistryAccommodations />

      {/* Photo Gallery with Lightbox */}
      <PhotoGallery />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Romantic Footer & Back-to-Top */}
      <Footer />
    </main>
  );
}
