# Hermes React Application

A modern React application built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component primitives
- **Framer Motion** - Animation library
- **Vite** - Build tool and dev server
- **Radix UI** - Accessible component primitives

## Project Structure

```
Hermes/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn UI components
│   │       ├── button.tsx
│   │       ├── badge.tsx
│   │       ├── card.tsx
│   │       └── liquid-metal-hero.tsx
│   ├── lib/
│   │   └── utils.ts     # shadcn cn() utility
│   ├── assets/
│   │   └── icons.tsx    # Lucide React icons
│   ├── demo.tsx         # Demo component
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind styles
├── public/              # Static assets
│   ├── vite.svg
│   ├── hero-bg.svg
│   ├── abstract-art.svg
│   ├── landscape.svg
│   └── gradient-bg.svg
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Components

### LiquidMetalHero

A hero section component with animated background and call-to-action buttons.

```tsx
import LiquidMetalHero from '@/components/ui/liquid-metal-hero'

function Page() {
  return (
    <LiquidMetalHero
      badge="✨ Next Generation UI"
      title="Fluid Design Excellence"
      subtitle="Experience the future..."
      primaryCtaLabel="Start Building"
      secondaryCtaLabel="View Examples"
      onPrimaryCtaClick={() => {}}
      onSecondaryCtaClick={() => {}}
      features={[
        "Seamless Animations",
        "Responsive Excellence",
        "Modern Architecture"
      ]}
    />
  )
}
```

## Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev)

## License

MIT

Just the experiment
