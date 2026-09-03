'use client';

import { useState, useEffect } from 'react';
import {
  Heart,
  CheckCircle2,
  XCircle,
  Music,
  Send,
  Sparkles,
  Calendar,
  RotateCcw,
  User,
  Users,
  Phone,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingData } from '@/data/weddingData';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    guestCount: '2',
    attendanceStatus: 'attending', // 'attending' | 'declining'
    attendingEvents: ['mehndi', 'nikkah', 'barat', 'walima'],
    mehndiSong: '',
    duaMessage: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('desi_wedding_rsvp');
      if (saved) {
        setFormData(JSON.parse(saved));
        setIsSubmitted(true);
      }
    } catch (e) {}
  }, []);

  const eventOptions = [
    { id: 'mehndi', label: 'Mayun & Mehndi (Nov 19)', color: 'text-amber-700' },
    { id: 'nikkah', label: 'The Sacred Nikkah (Nov 20)', color: 'text-gold-700' },
    { id: 'barat', label: 'The Royal Barat (Nov 21)', color: 'text-maroon-700' },
    { id: 'walima', label: 'The Grand Walima (Nov 22)', color: 'text-emerald-700' },
  ];

  const handleEventToggle = (eventId) => {
    setFormData((prev) => {
      const current = prev.attendingEvents;
      if (current.includes(eventId)) {
        return { ...prev, attendingEvents: current.filter((id) => id !== eventId) };
      } else {
        return { ...prev, attendingEvents: [...current, eventId] };
      }
    });
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full or family name.';
    if (!formData.phone.trim()) errs.phone = 'Please enter your WhatsApp or phone number.';
    if (formData.attendanceStatus === 'attending' && formData.attendingEvents.length === 0) {
      errs.attendingEvents = 'Please select at least one function you will be attending.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 65,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.65 },
        colors: ['#D4AF37', '#0B4635', '#850F22', '#F4EFEA'],
      });
      confetti({
        particleCount: 65,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.65 },
        colors: ['#D4AF37', '#0B4635', '#850F22', '#F4EFEA'],
      });
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#F5D77F', '#FAF8F5'],
      });
    } catch (e) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowToast(true);

      if (formData.attendanceStatus === 'attending') {
        triggerConfetti();
      }

      try {
        localStorage.setItem('desi_wedding_rsvp', JSON.stringify(formData));
      } catch (err) {}

      setTimeout(() => setShowToast(false), 6000);
    }, 850);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    try {
      localStorage.removeItem('desi_wedding_rsvp');
    } catch (e) {}
  };

  return (
    <section id="rsvp" className="py-20 sm:py-28 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Jaali accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-maroon-500/10 blur-3xl pointer-events-none" />

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white text-emerald-950 p-4 rounded-2xl shadow-2xl border-2 border-gold-400 flex items-start space-x-3 animate-fade-in-up">
          <div className="p-2 bg-emerald-700 rounded-full text-white">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="font-serif text-base font-semibold">JazakAllah Khair / RSVP Confirmed!</p>
            <p className="text-xs text-charcoal-600 mt-0.5">
              {formData.attendanceStatus === 'attending'
                ? "We look forward to welcoming you to our celebrations in Lahore!"
                : "Thank you for your warm wishes and prayers from afar."}
            </p>
          </div>
          <button onClick={() => setShowToast(false)} className="text-charcoal-400 hover:text-charcoal-900 text-sm">
            ✕
          </button>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-gold-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              Kindly Confirm Your Presence
            </span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight mb-3">
            RSVP & Duas
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-3" />
          <p className="text-xs sm:text-sm text-pearl-200 font-light">
            Please confirm your attendance by <strong className="font-semibold text-gold-300">October 25, 2026</strong> so we may reserve your family table.
          </p>
        </div>

        {/* Confirmation Card if already submitted */}
        {isSubmitted ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-gold-400 text-center max-w-xl mx-auto text-emerald-950 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-300">
              <CheckCircle2 className="w-8 h-8 text-emerald-700" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-light mb-1">
              {formData.attendanceStatus === 'attending' ? 'See You in Lahore!' : 'Thank You For Your Blessings'}
            </h3>

            <p className="text-xs sm:text-sm text-charcoal-600 font-light mb-5">
              RSVP recorded for <strong className="font-semibold text-emerald-950">{formData.fullName}</strong> ({formData.guestCount} Guests).
            </p>

            {formData.attendanceStatus === 'attending' && (
              <div className="p-4 rounded-2xl bg-pearl-100 border border-gold-300 text-left mb-5 text-xs text-charcoal-800 space-y-1.5">
                <p>
                  <strong className="text-emerald-950">Attending Functions:</strong>{' '}
                  {formData.attendingEvents.map((id) => id.toUpperCase()).join(', ')}
                </p>
                <p>
                  <strong className="text-emerald-950">Contact:</strong> {formData.phone}
                </p>
                {formData.mehndiSong && (
                  <p>
                    <strong className="text-emerald-950">Mehndi Song:</strong> &ldquo;{formData.mehndiSong}&rdquo; 💃
                  </p>
                )}
                {formData.duaMessage && (
                  <p>
                    <strong className="text-emerald-950">Your Dua:</strong> &ldquo;{formData.duaMessage}&rdquo; 🤲
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-pearl-200 hover:bg-pearl-300 text-emerald-950 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center space-x-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Update RSVP</span>
              </button>
            </div>
          </div>
        ) : (
          /* Form Card */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-gold-400 text-emerald-950"
          >
            {/* Joyfully Accept / Regretfully Decline */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-widest font-semibold text-emerald-900 mb-2 text-center">
                Will your family be attending? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attendanceStatus: 'attending' })}
                  className={`p-3.5 rounded-2xl border text-center transition-all flex items-center justify-center space-x-2.5 ${
                    formData.attendanceStatus === 'attending'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-950 shadow-sm ring-2 ring-emerald-500/20'
                      : 'border-pearl-300 hover:bg-pearl-50 text-charcoal-600'
                  }`}
                >
                  <CheckCircle2
                    className={`w-5 h-5 ${
                      formData.attendanceStatus === 'attending' ? 'text-emerald-700' : 'text-charcoal-400'
                    }`}
                  />
                  <span className="font-serif text-base sm:text-lg font-medium">Joyfully Accepts</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attendanceStatus: 'declining' })}
                  className={`p-3.5 rounded-2xl border text-center transition-all flex items-center justify-center space-x-2.5 ${
                    formData.attendanceStatus === 'declining'
                      ? 'bg-maroon-50 border-maroon-600 text-maroon-950 shadow-sm ring-2 ring-maroon-500/20'
                      : 'border-pearl-300 hover:bg-pearl-50 text-charcoal-600'
                  }`}
                >
                  <XCircle
                    className={`w-5 h-5 ${
                      formData.attendanceStatus === 'declining' ? 'text-maroon-700' : 'text-charcoal-400'
                    }`}
                  />
                  <span className="font-serif text-base sm:text-lg font-medium">Regretfully Declines</span>
                </button>
              </div>
            </div>

            {/* Guest Name & WhatsApp Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              <div className="sm:col-span-2">
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-emerald-950 mb-1.5">
                  Full / Family Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Tariq Mehmood & Family"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-pearl-50 border ${
                      errors.fullName ? 'border-rose-500' : 'border-pearl-300'
                    } text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-gold-500`}
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-emerald-950 mb-1.5">
                  Total Guests *
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-3" />
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-pearl-50 border border-pearl-300 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-gold-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Person' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* WhatsApp / Phone */}
            <div className="mb-5">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-emerald-950 mb-1.5">
                WhatsApp / Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-3" />
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-pearl-50 border ${
                    errors.phone ? 'border-rose-500' : 'border-pearl-300'
                  } text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-gold-500`}
                />
              </div>
              {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
            </div>

            {/* Events Checkboxes (Active if attending) */}
            {formData.attendanceStatus === 'attending' && (
              <div className="mb-5 p-4 rounded-2xl bg-pearl-50 border border-gold-300">
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-emerald-950 mb-2">
                  Select Celebrations You Will Attend: *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {eventOptions.map((opt) => {
                    const isChecked = formData.attendingEvents.includes(opt.id);
                    return (
                      <label
                        key={opt.id}
                        className={`flex items-center space-x-2.5 p-2.5 rounded-xl border cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-medium'
                            : 'bg-white border-pearl-300 text-charcoal-600'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleEventToggle(opt.id)}
                          className="w-4 h-4 text-emerald-700 rounded border-pearl-400 focus:ring-emerald-500"
                        />
                        <span className="text-xs">{opt.label}</span>
                      </label>
                    );
                  })}
                </div>
                {errors.attendingEvents && (
                  <p className="text-[11px] text-rose-500 mt-1.5">{errors.attendingEvents}</p>
                )}
              </div>
            )}

            {/* Mehndi Song Request (Active if attending) */}
            {formData.attendanceStatus === 'attending' && (
              <div className="mb-5">
                <label className="flex items-center text-[11px] uppercase tracking-wider font-semibold text-emerald-950 mb-1.5">
                  <Music className="w-3.5 h-3.5 text-amber-600 mr-1.5" />
                  <span>Song Request for Mehndi Dance Floor 💃🕺</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 'Gud Naal Ishq Mitha' or 'London Thumakda'"
                  value={formData.mehndiSong}
                  onChange={(e) => setFormData({ ...formData, mehndiSong: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-pearl-50 border border-pearl-300 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
            )}

            {/* Dua / Blessings Message */}
            <div className="mb-6">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-emerald-950 mb-1.5">
                Your Special Dua / Blessings for Ayesha & Hamza 🤲
              </label>
              <textarea
                rows={2}
                placeholder="Share your prayers and heartfelt blessings for the couple..."
                value={formData.duaMessage}
                onChange={(e) => setFormData({ ...formData, duaMessage: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-pearl-50 border border-pearl-300 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-maroon-950 font-bold text-xs uppercase tracking-[0.2em] shadow-lg transition-all active:scale-95 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-maroon-950 border-t-transparent rounded-full animate-spin" />
                  <span>Submitting RSVP...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Confirmation & Duas 🤲</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
