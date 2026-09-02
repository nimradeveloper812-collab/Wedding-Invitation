'use client';

import { useState } from 'react';
import {
  Gift,
  BedDouble,
  ExternalLink,
  Copy,
  Check,
  Plane,
  Car,
  Clock,
  Sparkles,
  Phone,
} from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function RegistryAccommodations() {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  return (
    <section id="accommodations" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-champagne-600 mb-3">
            <BedDouble className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              Guest Comfort & Travel
            </span>
            <BedDouble className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light tracking-tight mb-4">
            Accommodations & Travel
          </h2>
          <div className="w-16 h-[2px] bg-champagne-400 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
            For your convenience, we have reserved room blocks with exclusive rates at neighboring hotels. Complimentary shuttles will run throughout the celebration.
          </p>
        </div>

        {/* Hotel Room Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {weddingData.accommodations.map((hotel) => (
            <div
              key={hotel.name}
              className="bg-cream-50/70 hover:bg-white rounded-3xl p-7 border border-cream-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-champagne-100 text-champagne-900">
                    {hotel.badge}
                  </span>
                  <span className="font-serif text-base font-semibold text-charcoal-900">
                    {hotel.rate}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-charcoal-900 font-medium mb-2 group-hover:text-sage-800 transition-colors">
                  {hotel.name}
                </h3>

                <p className="text-xs text-charcoal-500 mb-3">{hotel.address}</p>
                <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed mb-4">
                  {hotel.notes}
                </p>

                {/* Group Code Card */}
                <div className="bg-white rounded-2xl p-3 border border-cream-200 flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-500 font-medium block">
                      Discount Code
                    </span>
                    <span className="font-mono text-xs font-semibold text-sage-800 tracking-wider">
                      {hotel.code}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(hotel.code)}
                    className="p-2 rounded-xl text-charcoal-600 hover:text-sage-700 hover:bg-cream-100 transition-colors"
                    title="Copy Discount Code"
                  >
                    {copiedCode === hotel.code ? (
                      <span className="flex items-center text-xs text-sage-700 font-medium">
                        <Check className="w-3.5 h-3.5 mr-1" /> Copied
                      </span>
                    ) : (
                      <span className="flex items-center text-xs text-charcoal-500 font-medium">
                        <Copy className="w-3.5 h-3.5 mr-1" /> Copy
                      </span>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-cream-200/80 flex items-center justify-between text-xs">
                <span className="text-charcoal-500 flex items-center">
                  <Phone className="w-3 h-3 mr-1" />
                  {hotel.phone}
                </span>
                <a
                  href={hotel.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sage-700 hover:text-sage-900 font-semibold tracking-wide uppercase text-[11px]"
                >
                  <span>Book Room</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Tips Banner */}
        <div className="bg-cream-100/60 rounded-3xl p-6 sm:p-10 border border-cream-200/80 mb-28">
          <div className="flex items-center space-x-2 text-sage-700 mb-6">
            <Plane className="w-4 h-4" />
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-charcoal-900">
              Travel & Transportation Logistics
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weddingData.travelTips.map((tip) => (
              <div key={tip.title} className="bg-white/80 rounded-2xl p-5 border border-cream-200">
                <h5 className="font-serif text-lg font-medium text-charcoal-900 mb-1.5">
                  {tip.title}
                </h5>
                <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                  {tip.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gift Registry Section */}
        <div id="registry" className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-champagne-600 mb-3">
              <Gift className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                Warmest Gratitude
              </span>
              <Gift className="w-4 h-4" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light tracking-tight mb-4">
              Gift Registry
            </h2>
            <div className="w-16 h-[2px] bg-champagne-400 mx-auto mb-6" />
            <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
              Your presence, love, and laughter at our wedding are the greatest gifts of all. If you would like to honor us with a gift, we have assembled wishlists for our new chapter and honeymoon adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {weddingData.registries.map((reg) => (
              <a
                key={reg.name}
                href={reg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-cream-50/70 hover:bg-white rounded-3xl p-8 border border-cream-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-sage-100 text-sage-800">
                      {reg.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-cream-200 flex items-center justify-center text-champagne-600 group-hover:bg-champagne-500 group-hover:text-white transition-colors">
                      <Gift className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-charcoal-900 font-medium mb-1.5 group-hover:text-sage-800 transition-colors">
                    {reg.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-champagne-600 mb-3">
                    {reg.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed mb-6">
                    {reg.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-cream-200/80 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-sage-700 group-hover:text-sage-900">
                  <span>{reg.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
