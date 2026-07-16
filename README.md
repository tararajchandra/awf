# Anokha Welfare Foundation (AWF) Homepage

A modern, responsive homepage for the Anokha Welfare Foundation built with Next.js 14, React 18, and Tailwind CSS.

## Features

- ✨ Sticky navigation with gold accent
- 🎨 Animated hero section with polygon mesh background
- 🏥 Service showcase (4 key services with icons)
- 💳 Membership levels section (Basic, Executive, Lifetime)
- 🔐 Sidebar member login widget
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Custom Tailwind configuration with brand colors
- 🔤 Google Fonts integration (Cormorant Garamond, DM Sans)
- ⚡ Performance optimized with Next.js 14

## Color Scheme

- Gold: `#C87000`
- Orange: `#E05A00`
- Cream: `#FAF7F0`

## Fonts

- Headings: Cormorant Garamond
- Body: DM Sans

## Project Structure

```
awf-homepage/
├── app/
│   ├── layout.tsx           # Root layout with navbar
│   ├── page.tsx             # Homepage
│   └── globals.css          # Tailwind directives and global styles
├── components/
│   └── awf/
│       ├── navbar.tsx       # Sticky navigation
│       ├── hero.tsx         # Hero section with animation
│       ├── service-row.tsx  # Service icons row
│       ├── membership-cards.tsx  # Membership tiers
│       ├── membership-login.tsx  # Login widget
│       └── footer.tsx       # Footer with social links
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── .gitignore
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the homepage.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Components

### Navbar
Sticky navigation bar with:
- AWF logo
- Navigation links (Home, About Us, Social Projects, Membership, Donate, Contact)
- Mobile menu toggle
- Gold accent border

### Hero Section
Features:
- Animated polygon mesh background
- Gold gradient AWF logo
- Serif tagline
- Two CTA buttons (Become a Member, Direct Donation)

### Service Row
4 service cards with:
- Lucide React icons
- Labels
- Responsive grid layout
- Vertical dividers on desktop

### Membership Cards
3 membership tiers:
- Basic
- Executive (featured with gold border)
- Lifetime
- Each with Razorpay badge and feature list

### Login Widget
Member login sidebar with:
- Username input
- Password input
- Login button
- Register and password reset links

### Footer
Features:
- AWF branding
- Quick links
- Social media links
- NGO certification badges
- Copyright and policies

## Customization

All design tokens are defined in `tailwind.config.js`. To customize:

1. Colors: Update `theme.extend.colors`
2. Fonts: Update `theme.extend.fontFamily`
3. Animations: Add custom keyframes in `app/globals.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Anokha Welfare Foundation. All rights reserved.
