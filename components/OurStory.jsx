'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Heart, Sparkles } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function OurStory() {
  const [activeMilestone, setActiveMilestone] = useState(null);

  return (
    <section id="story" className="py-24 sm:py-32 bg-cream-50 relative overflow-hidden">
      {/* Subtle Background Pattern / Floral Accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-blush-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-sage-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center justify-center space-x-2 text-sage-600 mb-3">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-sage-700">
              The Journey
            </span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light tracking-tight mb-4">
            How Forever Began
          </h2>
          <div className="w-16 h-[2px] bg-champagne-400 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-light">
            Every love story is beautiful, but ours is our absolute favorite. Here are the unforgettable chapters that brought us to this joyful day.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Line for desktop */}
          <div className="hidden md:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-champagne-200 via-sage-300 to-blush-200" />

          {/* Timeline Nodes */}
          <div className="space-y-12 sm:space-y-20">
            {weddingData.storyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => setActiveMilestone(index)}
                  onMouseLeave={() => setActiveMilestone(null)}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-cream-200/80 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-sage-50 text-sage-700 border border-sage-200/60">
                          <Calendar className="w-3 h-3 mr-1.5" />
                          {item.year}
                        </span>
                        <div className="flex items-center text-xs text-charcoal-500">
                          <MapPin className="w-3.5 h-3.5 mr-1 text-blush-500" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <p className="text-xs font-semibold uppercase tracking-widest text-champagne-600 mb-1">
                        {item.subtitle}
                      </p>
                      <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-normal mb-3 group-hover:text-sage-800 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-charcoal-600 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Icon / Pin */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-champagne-400 shadow-md z-20 group-hover:scale-110 transition-transform">
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        activeMilestone === index ? 'text-blush-500 fill-blush-500' : 'text-champagne-500'
                      }`}
                    />
                  </div>

                  {/* Image Card */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full max-w-md relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md group border border-cream-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-xs font-medium tracking-wider uppercase flex items-center">
                          <Sparkles className="w-3.5 h-3.5 mr-1.5 text-champagne-300" />
                          Chapter {index + 1} • {item.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Romantic Closing Quote */}
        <div className="mt-20 sm:mt-28 text-center p-8 sm:p-12 rounded-3xl bg-white/70 backdrop-blur-sm border border-cream-200/90 shadow-sm max-w-2xl mx-auto">
          <p className="font-serif italic text-xl sm:text-2xl text-charcoal-800 mb-3">
            &ldquo;And in her smile I saw something more beautiful than the stars.&rdquo;
          </p>
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-sage-700">
            Next Chapter: October 24, 2026
          </span>
        </div>
      </div>
    </section>
  );
}
