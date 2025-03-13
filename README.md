# Simone Terranova's Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, featuring a clean design, smooth animations, and comprehensive showcase of professional work and skills.

## 🚀 Features

- Responsive design that works on all devices
- Dark/Light theme support
- Smooth page transitions and animations
- Portfolio project showcase
- Technical expertise section
- Interactive contact form
- Multi-language support
- Downloadable CV
- Performance optimized

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Router](https://reactrouter.com/) - Routing
- [React Hook Form](https://react-hook-form.com/) - Form Handling
- [Lucide Icons](https://lucide.dev/) - Icons
- [Next Themes](https://github.com/pacocoursey/next-themes) - Theme Management

## Technical Implementation

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

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/simoneterranova/Portfolio-simo.git
```

2. Navigate to the project directory:
```bash
cd Portfolio-simo
```

3. Install dependencies:
```bash
npm install
# or
bun install
```

4. Start the development server:
```bash
npm run dev
# or
bun run dev
```

5. Open [http://localhost:8080](http://localhost:8080) in your browser

## 🏗️ Building for Production

```bash
npm run build
# or
bun run build
```

The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment

This project can be deployed using various platforms. Here are the recommended options:

### Netlify (Recommended for Custom Domain)
1. Create a Netlify account
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add your custom domain in Netlify settings

### Direct Deployment
You can also deploy directly using the Lovable platform:
1. Open [Lovable](https://lovable.dev)
2. Navigate to your project
3. Click Share -> Publish

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

## 📝 License

This project is licensed under the MIT License

## 📬 Contact

Simone Terranova
