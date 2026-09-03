'use client';

import { useState, useEffect, useCallback } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Engagement', 'Adventures', 'Moments'];

  const filteredPhotos =
    activeCategory === 'All'
      ? weddingData.galleryPhotos
      : weddingData.galleryPhotos.filter((p) => p.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
  }, [filteredPhotos.length]);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [filteredPhotos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-cream-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-sage-600 mb-3">
            <Camera className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-sage-700">
              Visual Memories
            </span>
            <Camera className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light tracking-tight mb-4">
            Captured Moments
          </h2>
          <div className="w-16 h-[2px] bg-champagne-400 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
            A small glimpse into our journey together—from our earliest travels to the day we decided on forever. Click any photo to expand.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`text-xs uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-sage-700 text-white shadow-sm font-semibold'
                    : 'bg-white text-charcoal-700 hover:bg-cream-200/80 border border-cream-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (2 columns on mobile, 4 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-charcoal-900 aspect-square shadow-sm hover:shadow-xl transition-all duration-300 active:scale-95 hover:-translate-y-1"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-95 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-champagne-300 font-medium mb-1">
                  {photo.category}
                </span>
                <h4 className="font-serif text-lg font-normal">{photo.title}</h4>
                <div className="flex items-center text-xs text-cream-200/80 mt-1">
                  <MapPin className="w-3 h-3 mr-1 text-blush-400" />
                  <span>{photo.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].title}
              className="max-w-full max-h-[72vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Caption */}
            <div className="mt-4 text-center text-white">
              <h3 className="font-serif text-xl sm:text-2xl font-light">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <div className="flex items-center justify-center space-x-3 text-xs text-cream-200 mt-1">
                <span className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1 text-blush-400" />
                  {filteredPhotos[lightboxIndex].location}
                </span>
                <span>•</span>
                <span className="uppercase tracking-widest text-[10px] text-champagne-300">
                  {filteredPhotos[lightboxIndex].category}
                </span>
                <span>•</span>
                <span>
                  {lightboxIndex + 1} of {filteredPhotos.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
