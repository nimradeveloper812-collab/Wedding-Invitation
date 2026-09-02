'use client';

import {
  Clock,
  MapPin,
  Calendar,
  Wine,
  Heart,
  Sparkles,
  Utensils,
  Music,
  Flame,
  Car,
  ExternalLink,
  Shirt,
} from 'lucide-react';
import { weddingData } from '@/data/weddingData';

const iconMap = {
  Wine: Wine,
  Heart: Heart,
  Sparkles: Sparkles,
  Utensils: Utensils,
  Music: Music,
  Flame: Flame,
};

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-champagne-600 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              The Celebration Plan
            </span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light tracking-tight mb-4">
            Event Schedule & Details
          </h2>
          <div className="w-16 h-[2px] bg-champagne-400 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
            Join us for an unforgettable day in Napa Valley. Here is what we have planned from the first toast to the last dance.
          </p>

          {/* Quick Calendar & Maps actions */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={weddingData.event.googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal-800 text-xs font-semibold uppercase tracking-wider transition-colors border border-cream-300"
            >
              <Calendar className="w-4 h-4 text-champagne-600" />
              <span>Add to Google Calendar</span>
            </a>
            <a
              href={weddingData.event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal-800 text-xs font-semibold uppercase tracking-wider transition-colors border border-cream-300"
            >
              <MapPin className="w-4 h-4 text-sage-600" />
              <span>Get Venue Directions</span>
            </a>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {weddingData.schedule.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Heart;

            return (
              <div
                key={item.title}
                className="group relative bg-cream-50/70 hover:bg-white rounded-3xl p-7 border border-cream-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-champagne-100 text-champagne-800">
                      <Clock className="w-3.5 h-3.5 mr-1.5" />
                      {item.time}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-cream-200 flex items-center justify-center text-sage-700 group-hover:bg-sage-700 group-hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 font-medium mb-2 group-hover:text-sage-800 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center text-xs font-medium text-sage-700 mb-3">
                    <MapPin className="w-3 h-3 mr-1.5 flex-shrink-0" />
                    <span>{item.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-cream-200/60 flex items-center justify-between text-[11px] text-charcoal-500">
                  <span className="uppercase tracking-widest text-[10px] font-semibold text-champagne-600">
                    Step 0{index + 1}
                  </span>
                  <span>{weddingData.event.dateDisplay.split(',')[0]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Venue & Location Highlight Card */}
        <div className="rounded-3xl bg-cream-100/70 border border-cream-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Venue info */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-sage-700">
                  The Venue
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-light mt-1 mb-4">
                  {weddingData.event.venueName}
                </h3>
                <p className="text-sm sm:text-base text-charcoal-600 font-light mb-6">
                  Set among rolling vineyards and private manicured gardens in the heart of St. Helena, California.
                </p>

                <div className="space-y-4 text-sm text-charcoal-700">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-champagne-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-medium text-charcoal-900">Address:</strong>
                      <p className="text-xs sm:text-sm text-charcoal-600">{weddingData.event.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-medium text-charcoal-900">Parking & Shuttles:</strong>
                      <p className="text-xs sm:text-sm text-charcoal-600">
                        Complimentary on-site valet parking is provided. Direct hotel shuttles depart starting at 3:15 PM.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Shirt className="w-5 h-5 text-blush-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="font-medium text-charcoal-900">Attire:</strong>
                      <p className="text-xs sm:text-sm text-charcoal-600">{weddingData.event.dressCodeDescription}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-cream-300/80 flex flex-wrap gap-4">
                <a
                  href={weddingData.event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium text-xs uppercase tracking-wider shadow-sm transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Map / Visual Location Preview */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full bg-cream-200">
              <iframe
                title="Venue Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50047.88636906233!2d-122.50361286950854!3d38.50293141103759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80845946ca353e41%3A0xe510255eb90d8926!2sSt%20Helena%2C%20CA%2094574!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full min-h-[340px] border-0 grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
