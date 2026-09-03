'use client';

import {
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  Heart,
  Flame,
  Wine,
  ExternalLink,
  Shirt,
  Compass,
} from 'lucide-react';
import { weddingData } from '@/data/weddingData';

const iconMap = {
  Sparkles: Sparkles,
  Heart: Heart,
  Flame: Flame,
  Wine: Wine,
};

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 sm:py-28 bg-pearl-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center space-x-2 text-gold-600 mb-2">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emerald-900">
              The 4 Royal Celebrations
            </span>
            <Sparkles className="w-4 h-4 text-gold-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-emerald-950 font-light tracking-tight mb-3">
            Wedding Itinerary & Venues
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
            Please join us across these four sacred and joyous occasions as we celebrate our union in Lahore.
          </p>

          <div className="mt-5">
            <a
              href={weddingData.event.googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white hover:bg-gold-50 text-emerald-950 text-xs font-semibold uppercase tracking-wider transition-all border border-gold-400 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-gold-600" />
              <span>Add All Events to Google Calendar</span>
            </a>
          </div>
        </div>

        {/* 4 Grand Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {weddingData.eventsList.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-gold-300/60 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Gold Foil Accent Header Bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300" />

                <div>
                  {/* Top Bar: Event Badge & Day */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${item.badgeColor}`}
                    >
                      <IconComponent className="w-3.5 h-3.5 mr-1.5" />
                      {item.day} • {item.date}
                    </span>

                    <span className="font-arabic text-base sm:text-lg text-emerald-900 font-bold">
                      {item.urduTitle}
                    </span>
                  </div>

                  {/* Title & Time */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-emerald-950 font-normal mb-1.5">
                    {item.title}
                  </h3>

                  <div className="flex items-center text-xs font-medium text-gold-700 mb-3">
                    <Clock className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                    <span>Time: {item.time}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Venue & Dress Code Box */}
                  <div className="p-4 rounded-2xl bg-pearl-50 border border-gold-200/80 space-y-2.5 text-xs text-charcoal-800 mb-4">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-maroon-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="font-semibold text-emerald-950 block">Venue:</strong>
                        <span className="text-charcoal-600">{item.venue}</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Shirt className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="font-semibold text-emerald-950 block">Dress Code / Attire:</strong>
                        <span className="text-charcoal-600">{item.dressCode}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action: Map Link */}
                <div className="pt-3 border-t border-gold-200/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-gold-700 uppercase tracking-wider">
                    Event 0{index + 1} of 04
                  </span>

                  <a
                    href={item.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-emerald-900 hover:text-gold-700 font-semibold uppercase tracking-wider text-[11px] transition-colors"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lahore Venue & Valet Advisory Banner */}
        <div className="rounded-3xl bg-emerald-900 text-white p-6 sm:p-10 border-2 border-gold-400 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gold-300">
              Guest Convenience
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-light">
              Valet Parking & Seating
            </h4>
            <p className="text-xs sm:text-sm text-pearl-200 font-light max-w-xl">
              Dedicated complimentary valet parking is arranged at all 4 banquet venues. For out-of-city family arriving at Lahore Airport (LHE), coordinator assistance is available.
            </p>
          </div>

          <a
            href={`tel:${weddingData.contact.phone1}`}
            className="px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-300 text-maroon-950 font-semibold text-xs uppercase tracking-wider shadow-md transition-all whitespace-nowrap active:scale-95"
          >
            Contact Hosts: {weddingData.contact.phone1}
          </a>
        </div>
      </div>
    </section>
  );
}
