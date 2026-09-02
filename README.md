# 💍 Modern Wedding Invitation Web Application

An elegant, responsive, and romantic wedding invitation single-page web application built with **React**, **Next.js 15 (App Router)**, and **Tailwind CSS**.

---

## ✨ Features

- **Hero & Live Countdown**: Dynamic countdown timer (Days, Hours, Minutes, Seconds) leading up to the celebration, wedding date, and smooth-scroll CTA.
- **Floating Glassmorphic Navbar**: Responsive navigation with quick RSVP access and mobile drawer menu.
- **Our Story Milestone Timeline**: Vertical interactive timeline chronicling key milestones with dates, narratives, and photography.
- **Event Schedule & Logistics**: Multi-stage schedule breakdown, Google Maps directions embed, dress code guide, shuttle and valet details, and Google Calendar integration.
- **Interactive RSVP Form**: Full client-side validation, dietary preference chips, plus-one toggle, song request input, toast confirmation, confetti celebration burst, and `localStorage` persistence.
- **Gift Registry & Accommodations**: Clickable registry cards (Zola, Honeyfund, Crate & Barrel) and hotel room blocks with one-click group code copy.
- **Photo Gallery with Lightbox**: Filterable masonry grid (All, Engagement, Adventures, Moments) and full-screen lightbox modal with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).
- **FAQ Accordion & Footer**: Accordion for guest queries, wedding hashtag, contact details, and smooth back-to-top button.
- **Centralized Data**: Easily customize all text, dates, photos, and links in `data/weddingData.js`.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Google Fonts (*Cormorant Garamond* & *Plus Jakarta Sans*) via `next/font`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactivity**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for production
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
