

# Ajay Kumbhar Developer Portfolio

Building the full portfolio as originally described — single-page, dark futuristic UI with all 7 sections.

## Implementation

### 1. Update design system (`src/index.css`)
- Override CSS variables with dark theme colors (#0B0B0F backgrounds, purple-pink gradients)
- Add Google Fonts (Poppins + Inter)
- Add custom animation keyframes (fade-in, slide-up, glow pulse)

### 2. Update Tailwind config
- Add custom colors, font families, and animations

### 3. Create section components
- `src/components/Navbar.tsx` — Sticky glassmorphism nav with mobile hamburger, smooth scroll links
- `src/components/HeroSection.tsx` — Gradient heading, subtitle, two CTA buttons, background glow orbs
- `src/components/AboutSection.tsx` — Glassmorphism card with bio
- `src/components/ProjectsSection.tsx` — 3 project cards with hover glow, tech stack badges
- `src/components/SkillsSection.tsx` — Categorized skill badges in grid
- `src/components/AchievementsSection.tsx` — 4 achievement cards
- `src/components/ContactSection.tsx` — Email, GitHub, LinkedIn with icons
- `src/components/Footer.tsx` — Copyright + social links

### 4. Update `src/pages/Index.tsx`
- Compose all sections into single scrollable page

### 5. Update `index.html`
- Add Google Fonts links for Poppins and Inter

