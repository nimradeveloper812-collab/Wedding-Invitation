# 💍 Modern & Viral Wedding Invitation Web Application

An elegant, interactive, and romantic wedding invitation single-page web application built with **React**, **Next.js 15 (App Router)**, **Tailwind CSS**, and **Lucide Icons**.

Designed for high visual appeal, engagement, and viral sharing across **TikTok**, **Instagram Reels**, and **YouTube Shorts**.

---

## ✨ Features

- ✉️ **Interactive 3D Wax Seal Envelope Reveal**: Vintage royal envelope with a golden wax monogram stamp (`S & A`). Clicking the seal breaks it with a sparkles burst, unfolds the envelope flap in 3D, and smoothly slides out the royal invitation card. Includes a *"Replay Envelope"* button for screen recording.
- 🌸 **Floating Rose Petals & Golden Bokeh Canvas**: High-performance canvas particle system creating falling rose petals drifting gently across the screen with on/off toggle.
- 🎵 **Romantic Piano Music Player**: Ambient chord progression (*Canon in D*) synthesized via Web Audio API with real-time animated equalizer wave bars.
- 📱 **Aesthetic "Scan on Phone" QR Code Modal**: Gold-bordered QR code card with custom monogram badge, perfect for showcasing multi-device experience on camera.
- 💌 **Live Guestbook & Wishes Wall**: Interactive love notes board where guests can write warm wishes, pick reaction emojis (`💖`, `🥂`, `🕊️`, `💐`, `✨`), and give heart likes with live counters.
- ⏳ **Hero & Live Countdown**: Dynamic countdown timer (Days, Hours, Minutes, Seconds) leading up to the celebration, wedding date, and smooth-scroll CTA.
- 🌿 **Floating Glassmorphic Navbar**: Responsive navigation with quick RSVP access and mobile drawer menu.
- 📖 **Our Story Milestone Timeline**: Vertical interactive timeline chronicling key milestones with dates, narratives, and photography.
- 🗺️ **Event Schedule & Logistics**: Multi-stage schedule breakdown, Google Maps directions embed, dress code guide, shuttle and valet details, and Google Calendar integration.
- 📋 **Interactive RSVP Form**: Full client-side validation, dietary preference chips, plus-one toggle, song request input, toast confirmation, confetti celebration burst, and `localStorage` persistence.
- 🎁 **Gift Registry & Accommodations**: Clickable registry cards (Zola, Honeyfund, Crate & Barrel) and hotel room blocks with one-click group code copy.
- 📸 **Photo Gallery with Lightbox**: Filterable masonry grid (All, Engagement, Adventures, Moments) and full-screen lightbox modal with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).
- ❓ **FAQ Accordion & Footer**: Accordion for guest queries, wedding hashtag, contact details, and smooth back-to-top button.
- ⚙️ **Centralized Data**: Easily customize all text, dates, photos, and links in `data/weddingData.js`.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Google Fonts (*Cormorant Garamond* & *Plus Jakarta Sans*) via `next/font`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio**: Web Audio API Synthesizer
- **Interactivity**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/nimradeveloper812-collab/Wedding-Invitation.git
cd Wedding-Invitation
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for production
```bash
npm run build
npm start
```

---

## 📝 Customization

Update the couple details, event schedule, story milestones, photos, and hotel blocks in:
```
data/weddingData.js
```
