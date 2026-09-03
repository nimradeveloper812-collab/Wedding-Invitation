'use client';

import { MapPin, Calendar, Heart, Sparkles } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function OurStory() {
  return (
    <section id="story" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-gold-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-gold-600 mb-2">
            <Heart className="w-4 h-4 text-gold-500 fill-gold-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emerald-950">
              Khandan & Journey
            </span>
            <Heart className="w-4 h-4 text-gold-500 fill-gold-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-emerald-950 font-light tracking-tight mb-2">
            Our Journey to Forever
          </h2>
          <p className="font-arabic text-xl sm:text-2xl text-gold-700 font-bold mb-3">
            ہماری محبت اور خاندانی رفاقت کا سفر
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
            From the first tea gathering in Lahore to the formal Baat Pakki and preparations, here is how our families united.
          </p>
        </div>

        {/* Milestone Timeline Cards */}
        <div className="space-y-8 sm:space-y-12">
          {weddingData.storyMilestones.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.title}
                className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="bg-pearl-50 rounded-3xl p-6 sm:p-8 border border-gold-300 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-emerald-900 text-gold-200 border border-gold-400">
                        <Calendar className="w-3 h-3 mr-1.5" />
                        {item.year}
                      </span>
                      <div className="flex items-center text-xs text-charcoal-500">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-maroon-600" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-700 mb-1">
                      {item.subtitle}
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl text-emerald-950 font-normal mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Photo Card */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border-2 border-gold-300/80 group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-gold-200 text-xs font-medium tracking-wider uppercase flex items-center">
                        <Sparkles className="w-3.5 h-3.5 mr-1.5 text-gold-300" />
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
    </section>
  );
}
