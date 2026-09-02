import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Sophia & Alexander — Wedding Celebration | October 24, 2026',
  description: 'Join us in celebrating the wedding of Sophia Evans and Alexander Wright at Villa Bellissima Estate in Napa Valley, California.',
  openGraph: {
    title: 'Sophia & Alexander — Wedding Celebration',
    description: 'October 24, 2026 • Villa Bellissima Estate, Napa Valley, CA',
    url: 'https://wedding.example.com',
    siteName: 'Sophia & Alexander Wedding',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Sophia & Alexander Wedding Celebration',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-cream-100 text-charcoal-800 selection:bg-champagne-200 selection:text-charcoal-950">
        {children}
      </body>
    </html>
  );
}
