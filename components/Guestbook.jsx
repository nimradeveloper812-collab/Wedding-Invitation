'use client';

import { useState } from 'react';
import { Heart, Send, MessageSquare, Sparkles, User, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Guestbook() {
  const [wishes, setWishes] = useState([
    {
      id: 1,
      name: 'Charlotte & David',
      message: 'So incredibly happy for both of you! Sophia, you will be the most stunning bride. Counting down the days to Napa!',
      emoji: '💖',
      likes: 14,
      date: 'Yesterday',
    },
    {
      id: 2,
      name: 'Marcus Vance',
      message: 'From college days to this incredible milestone! Alex, you found the real one. Cannot wait to celebrate with you guys!',
      emoji: '🥂',
      likes: 9,
      date: '2 days ago',
    },
    {
      id: 3,
      name: 'The Sterling Family',
      message: 'Sending you endless blessings, joy, and laughter as you embark on this beautiful adventure together.',
      emoji: '🕊️',
      likes: 21,
      date: '3 days ago',
    },
  ]);

  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('💖');
  const [userLikes, setUserLikes] = useState({});

  const emojis = ['💖', '🥂', '🕊️', '💐', '✨', '🎉'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now(),
      name: author.trim(),
      message: message.trim(),
      emoji: selectedEmoji,
      likes: 1,
      date: 'Just now',
    };

    setWishes([newWish, ...wishes]);
    setAuthor('');
    setMessage('');

    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#D4AF37', '#76987E', '#DD9390'],
      });
    } catch (err) {}
  };

  const handleLike = (id) => {
    if (userLikes[id]) return;

    setUserLikes({ ...userLikes, [id]: true });
    setWishes((prev) =>
      prev.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w))
    );
  };

  return (
    <section id="guestbook" className="py-24 sm:py-32 bg-cream-100/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center space-x-2 text-champagne-600 mb-3">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              Guestbook & Memories
            </span>
            <MessageSquare className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-light tracking-tight mb-4">
            Love Notes & Well Wishes
          </h2>
          <div className="w-16 h-[2px] bg-champagne-400 mx-auto mb-4" />
          <p className="text-sm text-charcoal-600 font-light leading-relaxed">
            Leave a note of love, advice for married life, or your favorite memory with the happy couple!
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-cream-200 mb-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-700 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Aunt Clara"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border border-cream-200 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-sage-500"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-700 mb-1.5">
                  Choose a Reaction
                </label>
                <div className="flex items-center space-x-2 h-10">
                  {emojis.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setSelectedEmoji(emoji)}
                      className={`text-lg p-1.5 rounded-lg transition-transform ${
                        selectedEmoji === emoji
                          ? 'bg-champagne-100 scale-125 border border-champagne-300'
                          : 'hover:scale-110 opacity-70 hover:opacity-100'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-700 mb-1.5">
                Your Warm Message
              </label>
              <textarea
                rows={2}
                placeholder="Share your loving wishes with Sophia & Alexander..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border border-cream-200 text-charcoal-900 text-xs focus:outline-none focus:ring-2 focus:ring-sage-500 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Post Your Wish</span>
            </button>
          </form>
        </div>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {wishes.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-cream-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-[10px] text-charcoal-400 uppercase tracking-wider">
                    {item.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed mb-4 italic font-serif">
                  &ldquo;{item.message}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-cream-100 flex items-center justify-between">
                <span className="font-sans text-xs font-semibold text-charcoal-900">
                  {item.name}
                </span>

                <button
                  type="button"
                  onClick={() => handleLike(item.id)}
                  className={`flex items-center space-x-1 text-xs px-2.5 py-1 rounded-full border transition-all ${
                    userLikes[item.id]
                      ? 'bg-rose-50 border-rose-200 text-rose-600'
                      : 'border-cream-200 text-charcoal-500 hover:bg-cream-50'
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
