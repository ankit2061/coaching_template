# Premium Coaching Institute Website Template - Customization Guide

This is a premium, production-ready website template designed to be sold on marketplaces. It's built with modern technologies and follows best practices for performance, SEO, and user experience.

## 🎯 Project Overview

**Purpose**: Reusable website template for coaching institutes with full customization capabilities  
**Target Market**: Coaching businesses in India and globally  
**Design Philosophy**: Premium, professional, conversion-focused  
**Tech Stack**: React 18 + TypeScript + Tailwind CSS v4 + Framer Motion + Vite

---

## 📁 Project Structure

```
coaching_template/
├── src/
│   ├── components/
│   │   ├── common/              # Reusable components
│   │   │   ├── Button.tsx       # CTA Button variations
│   │   │   ├── Card.tsx         # Glassmorphism cards
│   │   │   ├── Section.tsx      # Section wrapper
│   │   │   └── index.ts         # Barrel exports
│   │   ├── sections/            # 11 main page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CoursesSection.tsx
│   │   │   ├── WhyChooseUsSection.tsx
│   │   │   ├── AchievementsSection.tsx
│   │   │   ├── FacultySection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── BranchesSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── index.ts
│   │   ├── Header.tsx            # Navigation bar with theme toggle
│   │   └── Footer.tsx            # Footer with links and contact
│   ├── hooks/
│   │   └── index.ts              # Custom React hooks
│   ├── config/
│   │   └── content.json          # ALL site content (customization hub)
│   ├── App.tsx                   # Root component
│   ├── App.css                   # Custom animations
│   ├── index.css                 # Global styles
│   └── main.tsx                  # Entry point
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS setup
├── vite.config.ts                # Vite build configuration
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎨 Key Features

### ✨ Design Features
- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Soft Shadows**: Elevation-based shadow system
- **Gradient Backgrounds**: Smooth color transitions
- **Floating Cards**: 3D depth with hover effects
- **Smooth Animations**: Scroll-reveal, hover, and micro-interactions

### 🌙 Theme Features
- **Dark Mode Toggle**: System preference detection + manual toggle
- **4-Color Theme Switcher**: Blue, Purple, Pink, Green
- **Persistent Settings**: LocalStorage for user preferences

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- All components tested on mobile, tablet, and desktop

### ⚡ Performance
- Vite for lightning-fast builds
- Code splitting for optimal loading
- Optimized animations (60fps)
- Lazy-loaded images ready

---

## 🔧 How to Customize

### 1. **Edit All Content via JSON** (Most Important!)

**File**: `src/config/content.json`

This is your single source of truth. Developers don't need to touch React code to customize content!

#### Example: Change Institute Name
```json
{
  "site": {
    "name": "Your Coaching Institute Name",
    "tagline": "Your success is our mission"
  }
}
```

#### Example: Add/Edit a Course
```json
{
  "courses": [
    {
      "id": 1,
      "title": "JEE Advanced Crash Course",
      "duration": "6 months",
      "price": "₹45,000",
      "subjects": ["Physics", "Chemistry", "Math"],
      "batches": ["Morning 6AM", "Evening 4PM"],
      "features": ["Live classes", "Multiple choice tests"]
    }
  ]
}
```

#### Example: Update Faculty
```json
{
  "faculty": [
    {
      "id": 1,
      "name": "Dr. Rajesh Kumar",
      "subject": "Physics",
      "qualification": "B.Tech IIT Delhi",
      "bio": "15 years of teaching experience",
      "experience": "15+"
    }
  ]
}
```

#### Example: Add Student Success Stories
```json
{
  "achievements": [
    {
      "id": 1,
      "name": "Arjun Singh",
      "exam": "JEE Advanced",
      "rank": 47,
      "score": "345/360"
    }
  ]
}
```

#### Example: Add Testimonials
```json
{
  "testimonials": [
    {
      "id": 1,
      "name": "Priya Sharma",
      "text": "Best coaching institute ever!",
      "rating": 5
    }
  ]
}
```

---

### 2. **Change Primary Color**

**File**: `tailwind.config.js`

Search for `primary` and `secondary` color definitions. Update the hex values:

```javascript
primary: {
  50: '#f0f9ff',
  100: '#e0f2fe',
  500: '#0ea5e9',    // ← Change this to your brand color
  600: '#0284c7',
  700: '#0369a1',
  // ... more shades
}
```

Colors should have 5 shades for light/dark mode compatibility.

**Tool**: Use [Tailwind Color Generator](https://www.tints.dev/) to generate complete color palettes.

---

### 3. **Modify Section Content**

### Header Navigation
```json
{
  "navigation": [
    { "label": "Home", "href": "#hero" },
    { "label": "Courses", "href": "#courses" },
    // Add more items...
  ]
}
```

### Contact Information
```json
{
  "contact": {
    "phone": "+91 1234567890",
    "email": "info@coaching.com",
    "address": "123 Education Street, City"
  }
}
```

### Social Links
```json
{
  "social": {
    "facebook": "https://facebook.com/yourpage",
    "instagram": "https://instagram.com/yourprofile",
    "linkedin": "https://linkedin.com/in/yourprofile"
  }
}
```

---

### 4. **Add Your Logo**

1. Replace the logo text in `Header.tsx` (line ~20):
```tsx
<h1>Your Logo Here</h1>
// Replace with: <img src="logo.png" alt="Logo" className="h-8" />
```

2. Place your logo image in `public/` folder

---

### 5. **Customize Form Handling** (Contact Section)

Currently logs to console. To use with a backend:

**File**: `src/components/sections/ContactSection.tsx`

```typescript
// Replace this line (around line 20):
console.log('Form data:', formData);

// With your API call:
const response = await fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: { 'Content-Type': 'application/json' }
});
```

**Popular Backend Options**:
- Formspree (free tier available)
- EmailJS (client-side)
- Firebase
- Your own Node.js/Express API

---

### 6. **Add Google Maps** (Branch Locations)

**File**: `src/components/sections/BranchesSection.tsx`

Replace placeholder with actual map:

```tsx
// Around line 80, replace the placeholder with:
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
/>
```

Get embed URL from [Google Maps Embed](https://maps.google.com/)

---

## 🎬 Animation Customization

### Scroll Reveal Speed
**File**: `src/hooks/index.ts`

```typescript
const observer = new IntersectionObserver(entries => {
  // Change threshold to adjust when animation triggers
  threshold: 0.1  // 0 = top of viewport, 1 = fully visible
});
```

### Animation Duration
**File**: `tailwind.config.js`

```javascript
animation: {
  blob: 'blob 7s infinite',  // ← Change duration
  glow: 'glow 3s ease-in-out infinite'
}
```

### Keyframe Animations
**File**: `src/App.css`

Modify `@keyframes` sections for custom animations

---

## 📝 SEO Customization

### Meta Tags
**File**: `index.html`

```html
<meta name="description" content="Your coaching institute description">
<meta name="keywords" content="coaching, JEE, NEET, education">
<title>Your Institute Name - Premier Coaching Institute</title>
```

### Open Graph Tags (for social sharing)
```html
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="screenshot.png">
```

---

## 🚀 Deployment Guide

### Option 1: Vercel (Recommended - Free)
1. Push code to GitHub
2. Connect repo at [vercel.com](https://vercel.com)
3. Deploy automatically (takes ~1 min)

### Option 2: Netlify
1. Push code to GitHub
2. Connect at [netlify.com](https://netlify.com)
3. One-click deploy

### Option 3: Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your web hosting via FTP
```

---

## 📦 Build & Development

### Start Development Server
```bash
npm run dev
# Opens at http://localhost:5173/
```

### Build for Production
```bash
npm run build
# Creates optimized dist/ folder
```

### Preview Production Build
```bash
npm run preview
```

---

## 🎯 Sections Overview

| Section | Purpose | Key Features |
|---------|---------|--------------|
| **Hero** | First impression | Animated title, stats cards, CTA buttons |
| **About** | Build credibility | Highlight cards with icons |
| **Courses** | Showcase offerings | Course cards with pricing & batches |
| **Why Choose Us** | Differentiation | Feature grid with hover effects |
| **Achievements** | Social proof | Student success stories with ranks |
| **Faculty** | Build trust | Teacher cards with qualifications |
| **Testimonials** | Social proof | Carousel with star ratings |
| **FAQ** | Reduce friction | Accordion with common questions |
| **Contact** | Lead capture | Contact form + info cards |
| **Branches** | Multi-location | Location cards + map |
| **CTA Banner** | Final push | Conversion-focused section |

---

## 🔑 Key React Hooks

### `useScrollReveal()`
Auto-animates elements when scrolled into view
```typescript
const { ref, isVisible } = useScrollReveal();
<div ref={ref} className={isVisible ? 'animate' : ''}>
```

### `useTheme()`
Dark mode management
```typescript
const { isDark, toggleTheme } = useTheme();
```

### `usePrimaryColor()`
Color preference storage
```typescript
const { primaryColor, setColor } = usePrimaryColor();
```

---

## 📊 Content.json Structure

```json
{
  "site": { /* Basic settings */ },
  "navigation": [ /* Nav menu */ ],
  "hero": { /* Hero data */ },
  "about": { /* About section */ },
  "courses": [ /* Course array */ ],
  "whyChoose": [ /* Features */ ],
  "achievements": [ /* Success stories */ ],
  "faculty": [ /* Teacher list */ ],
  "testimonials": [ /* Reviews */ ],
  "faq": [ /* FAQ items */ ],
  "branches": [ /* Locations */ ],
  "contact": { /* Contact info */ }
}
```

---

## 💡 Pro Tips

1. **Use Tailwind Classes**: Don't write CSS, use utility classes for consistency
2. **Test Dark Mode**: Always verify dark mode styling (toggle in header)
3. **Mobile Testing**: Use browser DevTools or physical device for testing
4. **Performance**: Keep images <100KB, use webp format
5. **Accessibility**: Ensure color contrast meets WCAG standards
6. **SEO**: Update meta tags and add alt text to images

---

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🆘 Troubleshooting

### Issue: Colors not changing
**Solution**: Clear browser cache (Ctrl+Shift+Delete) and restart dev server

### Issue: Animations not working
**Solution**: Check if element has `scroll-margin-top: 80px` for proper scroll behavior

### Issue: Form not submitting
**Solution**: Update ContactSection.tsx with your backend URL

### Issue: Images not loading
**Solution**: Place images in `public/` folder and reference as `/image-name.png`

---

## 📄 License & Usage

This template is designed for resale. Each buyer gets:
- Full source code
- Commercial usage rights
- Lifetime updates
- Customization rights
- SEO optimization included

---

## 🎓 Next Steps

1. ✅ Review all 11 sections in the browser
2. ✅ Edit `content.json` with your institute data
3. ✅ Change color scheme to match your brand
4. ✅ Update contact information
5. ✅ Connect contact form to email service
6. ✅ Add your logo and images
7. ✅ Test on mobile devices
8. ✅ Deploy to production

---

## 📞 Support Resources

- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Vite: https://vitejs.dev

---

**Version**: 1.0.0  
**Last Updated**: 2025  
**Status**: Production Ready ✅

Built with ❤️ for coaching institutes worldwide
