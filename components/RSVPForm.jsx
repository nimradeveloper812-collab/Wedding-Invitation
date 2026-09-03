'use client';

import { useState, useEffect } from 'react';
import {
  Heart,
  CheckCircle2,
  XCircle,
  Music,
  Utensils,
  Mail,
  User,
  UserPlus,
  Send,
  Sparkles,
  Calendar,
  RotateCcw,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingData } from '@/data/weddingData';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    attendance: 'attending', // 'attending' | 'declining'
    hasPlusOne: false,
    plusOneName: '',
    dietary: [],
    dietaryOther: '',
    songRequest: '',
    personalNote: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Restore existing submission if in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wedding_rsvp_submission');
      if (saved) {
        setFormData(JSON.parse(saved));
        setIsSubmitted(true);
      }
    } catch (e) {
      // localStorage may fail in restricted environments
    }
  }, []);

  const dietaryOptions = [
    'No Restrictions',
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Nut Allergy',
    'Dairy-Free',
    'Pescatarian',
  ];

  const handleDietaryToggle = (option) => {
    if (option === 'No Restrictions') {
      setFormData((prev) => ({ ...prev, dietary: ['No Restrictions'] }));
      return;
    }

    setFormData((prev) => {
      const current = prev.dietary.filter((d) => d !== 'No Restrictions');
      if (current.includes(option)) {
        return { ...prev, dietary: current.filter((d) => d !== option) };
      } else {
        return { ...prev, dietary: [...current, option] };
      }
    });
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (formData.attendance === 'attending' && formData.hasPlusOne && !formData.plusOneName.trim()) {
      errs.plusOneName = "Please enter your plus-one's full name.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const triggerConfetti = () => {
    try {
      // Cannon from left
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        colors: ['#D4AF37', '#76987E', '#DD9390', '#FAF7F2'],
      });
      // Cannon from right
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        colors: ['#D4AF37', '#76987E', '#DD9390', '#FAF7F2'],
      });
      // Center burst
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.55 },
        colors: ['#D4AF37', '#C5A059', '#FAF7F2'],
      });
    } catch (e) {
      // Confetti fallback safe
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowToast(true);

      if (formData.attendance === 'attending') {
        triggerConfetti();
      }

      try {
        localStorage.setItem('wedding_rsvp_submission', JSON.stringify(formData));
      } catch (err) {}

      // Auto-hide toast after 6 seconds
      setTimeout(() => setShowToast(false), 6000);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    try {
      localStorage.removeItem('wedding_rsvp_submission');
    } catch (e) {}
  };

  return (
    <section id="rsvp" className="py-24 sm:py-32 bg-cream-50 relative overflow-hidden">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-charcoal-900 text-white p-4 rounded-2xl shadow-2xl border border-champagne-400/40 flex items-start space-x-3 animate-fade-in-up">
          <div className="p-2 bg-sage-600 rounded-full text-white">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="font-serif text-base text-cream-100 font-medium">RSVP Received!</p>
            <p className="text-xs text-charcoal-300 mt-0.5">
              {formData.attendance === 'attending'
                ? "We cannot wait to celebrate with you in Napa Valley!"
                : "Thank you for letting us know. You will be missed in our hearts!"}
            </p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-charcoal-400 hover:text-white text-sm"
          >
            ✕
          </button>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-sage-600 mb-3">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-sage-700">
              Kindly Respond
            </span>
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light tracking-tight mb-4">
            RSVP For Our Wedding
          </h2>
          <div className="w-16 h-[2px] bg-champagne-400 mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-charcoal-600 font-light">
            Please reply by <strong className="font-semibold text-charcoal-800">September 15, 2026</strong>. We look forward to celebrating together!
          </p>
        </div>

        {/* Confirmation Card if already submitted */}
        {isSubmitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-cream-200 text-center max-w-xl mx-auto animate-fade-in">
            <div className="w-16 h-16 bg-sage-50 text-sage-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-sage-200">
              {formData.attendance === 'attending' ? (
                <CheckCircle2 className="w-8 h-8 text-sage-600" />
              ) : (
                <Heart className="w-8 h-8 text-blush-500 fill-blush-200" />
              )}
            </div>

            <h3 className="font-serif text-3xl text-charcoal-900 mb-2">
              {formData.attendance === 'attending' ? 'See You There!' : 'Thank You For Letting Us Know'}
            </h3>

            <p className="text-sm text-charcoal-600 font-light mb-6">
              {formData.attendance === 'attending' ? (
                <>
                  Your RSVP for <strong className="font-medium text-charcoal-900">{formData.fullName}</strong>
                  {formData.hasPlusOne && formData.plusOneName ? ` and ${formData.plusOneName}` : ''} has been confirmed. A confirmation copy has been sent to{' '}
                  <span className="underline text-sage-700">{formData.email}</span>.
                </>
              ) : (
                <>
                  We are sorry you cannot make it, <strong className="font-medium text-charcoal-900">{formData.fullName}</strong>. You will be dearly missed on our special day!
                </>
              )}
            </p>

            {formData.attendance === 'attending' && (
              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 text-left mb-6 text-xs text-charcoal-700 space-y-1.5">
                <p>
                  <strong className="text-charcoal-900">Event:</strong> {weddingData.couple.brideShort} & {weddingData.couple.groomShort}&apos;s Wedding
                </p>
                <p>
                  <strong className="text-charcoal-900">Date:</strong> {weddingData.event.dateDisplay} at {weddingData.event.timeDisplay}
                </p>
                <p>
                  <strong className="text-charcoal-900">Venue:</strong> {weddingData.event.venueName}
                </p>
                {formData.songRequest && (
                  <p>
                    <strong className="text-charcoal-900">Your Song:</strong> &ldquo;{formData.songRequest}&rdquo; 🎵
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {formData.attendance === 'attending' && (
                <a
                  href={weddingData.event.googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-sage-700 hover:bg-sage-800 text-white text-xs uppercase tracking-wider font-medium transition-colors inline-flex items-center justify-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Add To Calendar</span>
                </a>
              )}
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-cream-200 hover:bg-cream-300 text-charcoal-800 text-xs uppercase tracking-wider font-medium transition-colors inline-flex items-center justify-center space-x-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Update My RSVP</span>
              </button>
            </div>
          </div>
        ) : (
          /* Form Card */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-cream-200/90 relative"
          >
            {/* Attendance Toggle */}
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-widest font-semibold text-charcoal-700 mb-3 text-center">
                Will you be attending? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attendance: 'attending' })}
                  className={`p-4 rounded-2xl border text-center transition-all flex items-center justify-center space-x-3 ${
                    formData.attendance === 'attending'
                      ? 'bg-sage-50/80 border-sage-500 text-sage-900 shadow-sm ring-2 ring-sage-500/20'
                      : 'border-cream-200 hover:bg-cream-50 text-charcoal-600'
                  }`}
                >
                  <CheckCircle2
                    className={`w-5 h-5 ${
                      formData.attendance === 'attending' ? 'text-sage-700' : 'text-charcoal-400'
                    }`}
                  />
                  <span className="font-serif text-lg font-medium">Joyfully Accepts</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attendance: 'declining' })}
                  className={`p-4 rounded-2xl border text-center transition-all flex items-center justify-center space-x-3 ${
                    formData.attendance === 'declining'
                      ? 'bg-blush-50 border-blush-400 text-blush-900 shadow-sm ring-2 ring-blush-400/20'
                      : 'border-cream-200 hover:bg-cream-50 text-charcoal-600'
                  }`}
                >
                  <XCircle
                    className={`w-5 h-5 ${
                      formData.attendance === 'declining' ? 'text-blush-500' : 'text-charcoal-400'
                    }`}
                  />
                  <span className="font-serif text-lg font-medium">Regretfully Declines</span>
                </button>
              </div>
            </div>

            {/* Primary Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-charcoal-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-cream-50/60 border ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-cream-200'
                    } text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-rose-500 mt-1.5">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-charcoal-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    placeholder="eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-cream-50/60 border ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-cream-200'
                    } text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500 transition-all`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-rose-500 mt-1.5">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Plus One Section (Active if attending) */}
            {formData.attendance === 'attending' && (
              <div className="mb-6 p-5 rounded-2xl bg-cream-50/80 border border-cream-200 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <UserPlus className="w-4 h-4 text-sage-700" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-800">
                      Bringing a Plus-One?
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.hasPlusOne}
                      onChange={(e) =>
                        setFormData({ ...formData, hasPlusOne: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-cream-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-cream-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sage-600"></div>
                  </label>
                </div>

                {formData.hasPlusOne && (
                  <div className="mt-3 animate-fade-in">
                    <label className="block text-xs uppercase tracking-wider font-medium text-charcoal-700 mb-2">
                      Plus-One Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Luke Crain"
                      value={formData.plusOneName}
                      onChange={(e) =>
                        setFormData({ ...formData, plusOneName: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border ${
                        errors.plusOneName ? 'border-rose-400' : 'border-cream-200'
                      } text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500`}
                    />
                    {errors.plusOneName && (
                      <p className="text-xs text-rose-500 mt-1.5">{errors.plusOneName}</p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Dietary & Allergies (Active if attending) */}
            {formData.attendance === 'attending' && (
              <div className="mb-6">
                <label className="flex items-center text-xs uppercase tracking-wider font-medium text-charcoal-700 mb-2">
                  <Utensils className="w-3.5 h-3.5 text-champagne-600 mr-1.5" />
                  <span>Dietary Restrictions & Allergies</span>
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {dietaryOptions.map((option) => {
                    const isSelected = formData.dietary.includes(option);
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => handleDietaryToggle(option)}
                        className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                          isSelected
                            ? 'bg-sage-700 text-white border-sage-700 shadow-xs'
                            : 'bg-cream-50 border-cream-200 text-charcoal-700 hover:bg-cream-100'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                <input
                  type="text"
                  placeholder="Other dietary requirements or severe allergies (optional)"
                  value={formData.dietaryOther}
                  onChange={(e) => setFormData({ ...formData, dietaryOther: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-cream-50/60 border border-cream-200 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-sage-500"
                />
              </div>
            )}

            {/* Song Request (Active if attending) */}
            {formData.attendance === 'attending' && (
              <div className="mb-6">
                <label className="flex items-center text-xs uppercase tracking-wider font-medium text-charcoal-700 mb-2">
                  <Music className="w-3.5 h-3.5 text-champagne-600 mr-1.5" />
                  <span>Song Request for the Dance Floor</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 'Can't Take My Eyes Off You' by Frankie Valli"
                  value={formData.songRequest}
                  onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50/60 border border-cream-200 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500"
                />
              </div>
            )}

            {/* Note to the Couple */}
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-wider font-medium text-charcoal-700 mb-2">
                Warm Wishes & Notes for the Couple (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Share your favorite memory, travel advice, or loving wishes..."
                value={formData.personalNote}
                onChange={(e) => setFormData({ ...formData, personalNote: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-cream-50/60 border border-cream-200 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-sage-700 hover:bg-sage-800 disabled:bg-sage-400 text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting RSVP...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Response</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
