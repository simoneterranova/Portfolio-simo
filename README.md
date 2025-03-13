# Portfolio Website Documentation
This portfolio website showcases my professional work, skills, and experience in a modern, interactive format.

## Project Overview

The website consists of several key sections:
- Hero section with animated background
- About Me with downloadable CV
- Portfolio showcase with animated project cards
- Technical expertise with animated service cards
- Contact section with form integration
- Floating scroll-to-top button
- Responsive navigation with mobile menu

## Technical Implementation

### Animations and Interactions
- Framer Motion for component animations
- CSS keyframe animations for background effects
- Smooth section transitions using Intersection Observer
- Interactive hover effects on cards and buttons
- Theme transition animations

### Components Structure
```
src/
├── components/
│   ├── sections/       # Main page sections
│   │   ├── Hero.tsx
│   │   └── AboutMe.tsx
│   └── ui/            # Reusable UI components
│       ├── ServiceCard.tsx
│       ├── PortfolioItem.tsx
│       └── ContactForm.tsx
```

### State Management
- Theme management using next-themes
- Mobile detection with custom hook
- Section visibility tracking
- Form state handling with React Hook Form

### Styling Approach
- Tailwind CSS for responsive design
- CSS variables for theme colors
- CSS modules for component-specific styles
- Shadcn UI for consistent design system

## Performance Optimizations

1. Image Optimizations:
   - WebP format for profile image
   - Lazy loading for portfolio images
   - Optimized image dimensions

2. Code Splitting:
   - Component-level code splitting
   - Lazy loading of sections
   - Dynamic imports for heavy components

3. Animation Performance:
   - GPU-accelerated animations
   - Debounced scroll handlers
   - Optimized animation triggers

## Development Guidelines

### Adding New Portfolio Items
1. Add images to `/public`
2. Create new entry in portfolio data
3. Component will automatically handle the layout

### Creating New Sections
1. Create component in `sections/`
2. Add section to main page
3. Implement visibility tracking
4. Add navigation link

### Theme Customization
1. Theme variables in `styles/theme.css`
2. Color schema in Tailwind config
3. Component-specific themes in UI components

## Best Practices

- Keep components small and focused
- Use TypeScript for type safety
- Follow shadcn/ui component patterns
- Maintain consistent animation timings
- Optimize images before adding
- Test on multiple devices/browsers

## Roadmap

- [ ] Add blog section
- [ ] Implement i18n for multiple languages
- [ ] Add project filtering
- [ ] Enhance accessibility features
- [ ] Add more animation variations
- [ ] Implement contact form backend

## Troubleshooting

### Common Issues:
1. Theme flickering:
   - Check theme provider setup
   - Verify CSS variables

2. Animation performance:
   - Use transform instead of position
   - Implement will-change properly
   - Check animation frame rates

3. Mobile responsiveness:
   - Test with Chrome DevTools
   - Verify media queries
   - Check touch interactions

### Development Server
- Port: 8080
- Host: ::
- Environment: Vite + React
