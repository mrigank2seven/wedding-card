# Wedding Invitation Website

A beautiful, production-quality wedding invitation website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Elegant Design**: Premium visual language with wine/burgundy color scheme and decorative elements
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Smooth Animations**: Subtle animations powered by Framer Motion
- **Countdown Timer**: Live countdown to the wedding date
- **Event Management**: Display multiple wedding events (Mehendi, Haldi, Wedding, Reception, etc.)
- **RSVP Form**: Interactive form with attendance tracking
- **Love Story Timeline**: Beautiful timeline component for couple's story
- **Venue Information**: Integrated Google Maps support
- **Music Control**: Floating music toggle button
- **Accessibility**: Respects prefers-reduced-motion, semantic HTML, keyboard navigation
- **Data-Driven**: Centralized wedding data configuration for easy customization

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Welcome/intro section with wax seal
│   ├── CoupleSection.tsx      # Bride & groom introduction
│   ├── WeddingDetails.tsx     # Date, time, venue details
│   ├── Countdown.tsx          # Live countdown timer
│   ├── Events.tsx             # Wedding events listing
│   ├── Story.tsx              # Timeline of love story
│   ├── Venue.tsx              # Venue information with map
│   ├── RSVP.tsx               # RSVP form
│   ├── Footer.tsx             # Footer section
│   └── MusicToggle.tsx        # Background music control
├── data/
│   └── wedding.ts             # Centralized wedding data
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
└── index.css                  # Global styles
```

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite 8** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 13** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Installation

```bash
cd /Users/mrigank2seven/Projects/wedding-card
npm install
```

### Development

```bash
npm run dev
```

Runs at http://localhost:3000

### Build for Production

```bash
npm run build
```

Output in `dist/` directory.

### Type Checking

```bash
npm run type-check
```

## Customization

Edit `src/data/wedding.ts` with your wedding details:

```typescript
export const weddingData: WeddingData = {
  couple: {
    bride: { name: "Your Name", ... },
    groom: { name: "Your Name", ... },
  },
  weddingDate: "2026-07-14",
  weddingTime: "6:00 PM",
  venue: { ... },
  events: [ ... ],
  story: [ ... ],
}
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Deployment

### Vercel
```bash
vercel
```

### Netlify
```bash
netlify deploy
```

## License

ISC
