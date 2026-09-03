'use client';

import { useState } from 'react';
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
  Layers,
  LayoutGrid,
} from 'lucide-react';
import { weddingData } from '@/data/weddingData';

const iconMap = {
  Sparkles: Sparkles,
  Heart: Heart,
  Flame: Flame,
  Wine: Wine,
};

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('mehndi');
  const [mobileViewMode, setMobileViewMode] = useState('tabs'); // 'tabs' | 'grid'

  const activeEvent = weddingData.eventsList.find((e) => e.id === activeTab) || weddingData.eventsList[0];
  const ActiveIcon = iconMap[activeEvent.icon] || Sparkles;

  return (
    <section id="schedule" className="py-16 sm:py-28 bg-pearl-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-gold-600 mb-2">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emerald-950">
              The 4 Royal Celebrations
            </span>
            <Sparkles className="w-4 h-4 text-gold-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-emerald-950 font-light tracking-tight mb-2">
            Wedding Itinerary & Venues
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-3" />
          <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
            Please join us across these four sacred and joyous occasions in Lahore.
          </p>

          <div className="mt-4">
            <a
              href={weddingData.event.googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white hover:bg-gold-50 text-emerald-950 text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all border border-gold-400 shadow-sm active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-gold-600" />
              <span>Add All to Google Calendar</span>
            </a>
          </div>
        </div>

        {/* Mobile Interactive Tab Switcher (Visible on Mobile & Tablet) */}
        <div className="block lg:hidden mb-6">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-950">
              Select Celebration:
            </span>
            <button
              onClick={() => setMobileViewMode(mobileViewMode === 'tabs' ? 'grid' : 'tabs')}
              className="text-[10px] uppercase tracking-wider font-semibold text-gold-700 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white border border-gold-300"
            >
              {mobileViewMode === 'tabs' ? (
                <>
                  <LayoutGrid className="w-3 h-3" />
                  <span>View All 4</span>
                </>
              ) : (
                <>
                  <Layers className="w-3 h-3" />
                  <span>Tab View</span>
                </>
              )}
            </button>
          </div>

          {/* Event Tabs Scroll */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {weddingData.eventsList.map((item) => {
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileViewMode('tabs');
                  }}
                  className={`flex-shrink-0 px-4 py-2 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-1.5 active:scale-95 border ${
                    isSelected
                      ? 'bg-emerald-950 text-gold-300 border-gold-400 shadow-md ring-2 ring-gold-400/30'
                      : 'bg-white text-charcoal-700 border-pearl-300'
                  }`}
                >
                  <span>{item.title.split(' ')[0]}</span>
                  <span className="text-[10px] opacity-75">({item.date.split(',')[0]})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Single Tab Featured Card View (When in tabs mode on mobile) */}
        {mobileViewMode === 'tabs' && (
          <div className="block lg:hidden mb-12">
            <div className="bg-white rounded-3xl p-6 border-2 border-gold-400 shadow-xl relative overflow-hidden animate-fade-in">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300" />

              <div className="flex items-center justify-between mb-3 pt-1">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${activeEvent.badgeColor}`}>
                  <ActiveIcon className="w-3.5 h-3.5 mr-1" />
                  {activeEvent.day} • {activeEvent.date}
                </span>

                <span className="font-arabic text-base text-emerald-900 font-bold">
                  {activeEvent.urduTitle}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-emerald-950 font-normal mb-1">
                {activeEvent.title}
              </h3>

              <div className="flex items-center text-xs font-medium text-gold-700 mb-3">
                <Clock className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                <span>Time: {activeEvent.time}</span>
              </div>

              <p className="text-xs text-charcoal-700 font-light leading-relaxed mb-4">
                {activeEvent.description}
              </p>

              <div className="p-3.5 rounded-2xl bg-pearl-50 border border-gold-200 space-y-2 text-xs text-charcoal-800 mb-4">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-maroon-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="font-semibold text-emerald-950 block">Venue:</strong>
                    <span className="text-charcoal-600">{activeEvent.venue}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Shirt className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="font-semibold text-emerald-950 block">Dress Code:</strong>
                    <span className="text-charcoal-600">{activeEvent.dressCode}</span>
                  </div>
                </div>
              </div>

              <a
                href={activeEvent.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-emerald-900 hover:bg-emerald-800 text-gold-200 font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center space-x-1.5 border border-gold-400"
              >
                <span>Get Venue Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* 4 Grand Event Cards Grid (Desktop or Mobile Grid Mode) */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 ${mobileViewMode === 'tabs' ? 'hidden lg:grid' : 'grid'}`}>
          {weddingData.eventsList.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-gold-300/60 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300" />

                <div>
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

                  <h3 className="font-serif text-2xl sm:text-3xl text-emerald-950 font-normal mb-1.5">
                    {item.title}
                  </h3>

                  <div className="flex items-center text-xs font-medium text-gold-700 mb-3">
                    <Clock className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                    <span>Time: {item.time}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

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
        <div className="rounded-3xl bg-emerald-900 text-white p-5 sm:p-8 border-2 border-gold-400 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-semibold text-gold-300">
              Guest Convenience
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-light">
              Valet Parking & Airport Coordination
            </h4>
            <p className="text-xs text-pearl-200 font-light max-w-xl">
              Complimentary valet parking is provided at all 4 banquet venues. Coordinator assistance is available for out-of-city guests.
            </p>
          </div>

          <a
            href={`tel:${weddingData.contact.phone1}`}
            className="w-full sm:w-auto text-center px-5 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
          >
            Call Coordinator: {weddingData.contact.phone1}
          </a>
        </div>
      </div>
    </section>
  );
}
