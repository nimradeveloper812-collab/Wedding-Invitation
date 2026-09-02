'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { weddingData } from '@/data/weddingData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center space-x-2 text-champagne-600 mb-3">
            <HelpCircle className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              Guest Inquiries
            </span>
            <HelpCircle className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-champagne-400 mx-auto mb-4" />
          <p className="text-sm text-charcoal-600 font-light leading-relaxed">
            Everything you need to know ahead of the celebration weekend.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {weddingData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-cream-200/90 bg-cream-50/50 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl text-charcoal-900 font-normal">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-champagne-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed border-t border-cream-200/40 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
