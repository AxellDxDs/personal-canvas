# Personal Portfolio Website - Design Guidelines

## Design Approach
**Reference-Based:** Draw inspiration from modern portfolio sites like Brittany Chiang's portfolio, Linear's design system for animations, and Discord for badge aesthetics. Combine glassmorphism trend with minimalist cool aesthetics.

## Core Design Principles
1. **Glassmorphism Theme:** Liquid glass effects throughout with frosted glass backgrounds, subtle borders, and backdrop blur
2. **Dual Theme System:** Dark and light mode toggle with smooth transitions
3. **Minimalist Cool:** Clean layouts, ample whitespace, modern typography
4. **Gen Z Energy:** Casual, relatable tone in bio with playful elements

## Typography
- **Primary Font:** Inter or Poppins (modern, clean sans-serif via Google Fonts)
- **Headings:** Bold weights (700-800), 2.5rem-4rem for hero, 1.5rem-2rem for sections
- **Body:** Regular weight (400), 1rem-1.125rem
- **Accent/Casual Text:** Medium weight (500) for Gen Z bio style

## Layout System
**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24
- Component spacing: gap-6 to gap-8
- Container: max-w-6xl mx-auto

## Component Library

### 1. Loading Screen
Full viewport animated loader with glassmorphism aesthetic - spinning glass circle or wave animation before main content reveals

### 2. Hero Section
- Center-aligned layout with Gen Z casual bio (playful, relatable, authentic tone)
- Discord-style status badges below bio:
  - "Programming" badge with code icon/GIF
  - "Designer" badge with design tool icon/GIF  
  - "Music Lovers" badge with music note icon/GIF
- Each badge: glassmorphism card, icon/GIF left, label right, subtle pulse animation

### 3. Skills Section
Animated progress bars in two categories:

**Programming Skills:**
- JavaScript: 90%
- Node.js: 30%
- Python: 50%
- HTML: 45%
- CSS: 30%
- Plus: React, TypeScript (add appropriate percentages)

**Design Tools (use actual logos):**
- Adobe Photoshop: 75%
- Canva: 95%
- Adobe Illustrator: 30%
- Figma: 45%

Progress bars: glassmorphism container, animated fill on scroll, logo icon left, percentage right

### 4. Music Favorites Section
Spotify integration with three albums displayed as cards:
1. Wave to Earth
2. Rex Orange County
3. Mitski

Each card: album artwork, artist name, embedded Spotify player for playable tracks, glassmorphism frame

### 5. Projects Showcase
Grid layout (2-3 columns on desktop) with project cards:

**Development Projects:**
- WhatsApp Bot: Badge/tag, description, placeholder image
- Dana Lite: Badge/tag, description, placeholder image
- Personal Profile: Badge/tag, description, placeholder image

**Design Projects:**
- Banner designs
- Poster designs
- UI/UX mockups
(Generate creative placeholder examples)

Each card: glassmorphism background, hover effect with slight lift, project image/thumbnail, tags, description

### 6. Blog Section
Card grid layout with sample blog posts, modern magazine-style cards with glassmorphism, featured image, title, excerpt, read more link

### 7. Contact Section
Clickable contact links with icons and glassmorphism buttons:
- WhatsApp: +6288289338073 (direct link)
- Instagram: @aelxansea_ (direct link)
- GitHub: AxellDxDs (direct link)

Each link: icon left, label center, arrow right, hover glow effect

### 8. Hobby Section
Creative cards with icons and descriptions, glassmorphism styling, playful micro-interactions

## Animations & Transitions
- **Loading → Main:** Fade with scale transform
- **Section Reveals:** Stagger fade-up animations on scroll
- **Theme Toggle:** Smooth 300ms transition on all theme-dependent properties
- **Card Hovers:** Subtle lift (translateY -4px) with shadow increase
- **Progress Bars:** Animate width from 0 to target percentage on scroll into view
- **Badge Pulse:** Gentle scale pulse animation on Discord-style badges
- **Varied Transitions:** Each section uses different animation style (fade, slide, scale)

## Glassmorphism Implementation
- Background: rgba with transparency (20-30% opacity)
- Backdrop blur: 12-16px
- Border: 1px solid rgba(255,255,255,0.18)
- Shadow: Soft, large spread shadows for depth
- Apply to: cards, navigation, badges, buttons, sections

## Theme Colors (Light/Dark)
Define color variables for both themes but maintain glassmorphism transparency. Focus on contrast and readability in both modes.

## Images
- **Hero:** No large hero image - focus on bio and badges
- **Projects:** Placeholder images for each project (400x300px aspect ratio)
- **Blog:** Featured images for blog cards (landscape 16:9)
- **Music:** Spotify album artworks (square format)
- **Icons/Badges:** Use animated GIFs or SVG icons for badges where appropriate

## Professional Icons
Use Font Awesome or Heroicons CDN for consistent professional iconography throughout (social links, skills, contact, navigation)