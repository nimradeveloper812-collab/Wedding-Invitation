'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSupported, setAudioSupported] = useState(true);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  // Wedding Piano Chord progression notes (Canon in D / Romantic Wedding Melody frequencies)
  const melodyNotes = [
    261.63, 329.63, 392.0, 523.25, // C Major
    196.0, 246.94, 293.66, 392.0,  // G Major
    220.0, 261.63, 329.63, 440.0,  // A Minor
    164.81, 196.0, 246.94, 329.63, // E Minor
    174.61, 220.0, 261.63, 349.23, // F Major
    261.63, 329.63, 392.0, 523.25, // C Major
    174.61, 220.0, 261.63, 349.23, // F Major
    196.0, 246.94, 293.66, 392.0,  // G Major
  ];

  const playChime = (freq, time, duration = 1.8) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Soft warm bell/piano tone (sine with subtle overtone)
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.exponentialRampToValueAtTime(0.08, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(time);
    osc.stop(time + duration);
  };

  const startMusic = () => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) {
        setAudioSupported(false);
        return;
      }

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      let noteIndex = 0;
      setIsPlaying(true);

      // Play notes gently on an interval
      intervalRef.current = setInterval(() => {
        const now = ctx.currentTime;
        const currentFreq = melodyNotes[noteIndex % melodyNotes.length];
        // Play root note and harmony third
        playChime(currentFreq, now, 2.2);
        if (noteIndex % 2 === 0) {
          playChime(currentFreq * 1.25, now + 0.15, 1.8);
        }
        noteIndex++;
      }, 700);
    } catch (e) {
      console.error(e);
    }
  };

  const stopMusic = () => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
      }
    };
  }, []);

  if (!audioSupported) return null;

  return (
    <div className="fixed bottom-6 right-20 z-40">
      <button
        onClick={toggleMusic}
        className={`flex items-center space-x-2.5 px-4 py-2.5 rounded-full shadow-lg border backdrop-blur-md transition-all duration-300 transform hover:scale-105 ${
          isPlaying
            ? 'bg-charcoal-900/90 border-champagne-400/60 text-cream-100 ring-2 ring-champagne-400/30'
            : 'bg-cream-50/90 border-cream-200/90 text-charcoal-800 hover:bg-white'
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-champagne-300 animate-pulse" />
            <div className="flex items-end space-x-0.5 h-3">
              <span className="w-1 bg-champagne-300 rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
              <span className="w-1 bg-champagne-300 rounded-full animate-bounce [animation-delay:-0.15s] h-2" />
              <span className="w-1 bg-champagne-300 rounded-full animate-bounce [animation-delay:-0.45s] h-3.5" />
              <span className="w-1 bg-champagne-300 rounded-full animate-bounce h-2.5" />
            </div>
            <span className="text-[11px] font-serif uppercase tracking-wider hidden sm:inline text-champagne-200">
              Playing Piano Romance
            </span>
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-charcoal-500" />
            <span className="text-[11px] uppercase tracking-wider font-medium text-charcoal-700">
              Play Music 🎵
            </span>
          </>
        )}
      </button>
    </div>
  );
}
