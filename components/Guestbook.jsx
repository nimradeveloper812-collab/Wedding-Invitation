'use client';

import { useState } from 'react';
import { Heart, Send, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingData } from '@/data/weddingData';

export default function Guestbook() {
  const [duas, setDuas] = useState(weddingData.duasWall || []);
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTag, setSelectedTag] = useState('MashaAllah 🤍');
  const [userLikes, setUserLikes] = useState({});

  const tags = ['MashaAllah 🤍', 'BarakAllah ✨', 'Dua-e-Khas 🤲', 'Khush Raho 💐', 'Mubarak 🎉'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newDua = {
      id: Date.now(),
      name: name.trim(),
      relation: relation.trim() || 'Family & Well-Wisher',
      dua: message.trim(),
      tag: selectedTag,
      likes: 1,
      date: 'Just now',
    };

    setDuas([newDua, ...duas]);
    setName('');
    setRelation('');
    setMessage('');

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D4AF37', '#0B4635', '#850F22'],
      });
    } catch (e) {}
  };

  const handleLike = (id) => {
    if (userLikes[id]) return;
    setUserLikes({ ...userLikes, [id]: true });
    setDuas((prev) =>
      prev.map((d) => (d.id === id ? { ...d, likes: d.likes + 1 } : d))
    );
  };

  return (
    <section id="guestbook" className="py-20 sm:py-28 bg-pearl-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-gold-600 mb-2">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emerald-950">
              Duas & Well Wishes
            </span>
            <Sparkles className="w-4 h-4 text-gold-500" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-emerald-950 font-light tracking-tight mb-2">
            Duas & Blessings Wall
          </h2>
          <p className="font-arabic text-xl sm:text-2xl text-gold-700 font-bold mb-3">
            دعاؤں اور نیک تمناؤں کی دیوار
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-4" />
          <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
            Please shower the couple with your precious prayers, Quranic verses, and loving blessings for their new life together.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border-2 border-gold-300/80 mb-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-emerald-950 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Farooq Uncle / Saman Auntie"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-pearl-50 border border-pearl-300 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-gold-500"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-emerald-950 mb-1">
                  Relation / Family
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bride's Khala / School Friend"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-pearl-50 border border-pearl-300 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
            </div>

            {/* Reaction Tag Selection */}
            <div className="mb-4">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-emerald-950 mb-1.5">
                Select a Blessing Tag
              </label>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      selectedTag === tag
                        ? 'bg-emerald-900 text-gold-200 border-gold-400 font-semibold shadow-xs'
                        : 'bg-pearl-50 border-pearl-300 text-charcoal-700 hover:bg-pearl-100'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-emerald-950 mb-1">
                Your Dua / Message *
              </label>
              <textarea
                rows={2}
                placeholder="Share your prayers (e.g. May Allah bless your home with love and barakah)..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-pearl-50 border border-pearl-300 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-emerald-900 hover:bg-emerald-800 text-gold-200 font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center space-x-2 border border-gold-400"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Post Your Dua 🤲</span>
            </button>
          </form>
        </div>

        {/* Duas Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {duas.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-gold-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gold-100 text-emerald-950 border border-gold-300">
                    {item.tag}
                  </span>
                  <span className="text-[10px] text-charcoal-400 uppercase">{item.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-800 font-serif italic leading-relaxed mb-4">
                  &ldquo;{item.dua}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-pearl-200 flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-xs font-semibold text-emerald-950">{item.name}</h4>
                  <span className="text-[10px] text-charcoal-500">{item.relation}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleLike(item.id)}
                  className={`flex items-center space-x-1 text-xs px-2.5 py-1 rounded-full border transition-all ${
                    userLikes[item.id]
                      ? 'bg-rose-50 border-rose-300 text-rose-600'
                      : 'border-pearl-300 text-charcoal-500 hover:bg-pearl-50'
                  }`}
                >
                  <Heart
                    className={`w-3 h-3 ${
                      userLikes[item.id] ? 'fill-rose-500 text-rose-500' : 'text-charcoal-400'
                    }`}
                  />
                  <span>{item.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
