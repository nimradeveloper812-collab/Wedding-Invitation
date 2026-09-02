'use client';

import { useEffect, useRef, useState } from 'react';
import { Flower2, Sparkles } from 'lucide-react';

export default function FallingPetals() {
  const canvasRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Rose petals and golden particles
    const petalCount = Math.min(26, Math.floor(window.innerWidth / 40));
    const petals = [];

    const colors = [
      'rgba(244, 216, 215, 0.65)', // soft blush
      'rgba(234, 184, 182, 0.60)', // rose
      'rgba(217, 167, 160, 0.55)', // dusty rose
      'rgba(220, 195, 137, 0.50)', // champagne gold speck
    ];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        r: Math.random() * 8 + 6,
        d: Math.random() * petalCount,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleIncremental: Math.random() * 0.05 + 0.02,
        tiltAngle: 0,
        speedX: Math.random() * 1.5 - 0.5,
        speedY: Math.random() * 1.4 + 1.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        ctx.beginPath();
        ctx.fillStyle = p.color;

        // Draw organic curved petal shape
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.tiltAngle * Math.PI) / 180);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(p.r / 2, -p.r / 2, p.r, 0, 0, p.r * 1.4);
        ctx.bezierCurveTo(-p.r, 0, -p.r / 2, -p.r / 2, 0, 0);
        ctx.fill();

        ctx.restore();

        p.tiltAngle += p.tiltAngleIncremental;
        p.y += p.speedY;
        p.x += Math.sin(p.d) * 0.8 + p.speedX;

        // Reset if offscreen
        if (p.y > height + 20) {
          petals[i].x = Math.random() * width;
          petals[i].y = -20;
          petals[i].speedY = Math.random() * 1.4 + 1.1;
        }
        if (p.x > width + 20) petals[i].x = -10;
        if (p.x < -20) petals[i].x = width + 10;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  return (
    <>
      {enabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-30 opacity-80 transition-opacity duration-500"
        />
      )}

      {/* Floating Toggle on bottom left */}
      <button
        onClick={() => setEnabled(!enabled)}
        title={enabled ? 'Turn off petals animation' : 'Turn on petals animation'}
        className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-cream-50/90 hover:bg-white text-charcoal-800 shadow-lg border border-cream-200/90 backdrop-blur-md transition-all duration-300 hover:scale-105 group"
      >
        <Flower2
          className={`w-4 h-4 transition-colors ${
            enabled ? 'text-blush-500 animate-spin-slow' : 'text-charcoal-400'
          }`}
        />
        <span className="sr-only">Toggle Petals</span>
      </button>
    </>
  );
}
