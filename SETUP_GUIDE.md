# Tiny Prism Labs - Setup Guide

## 🎉 Your Website is Ready!

The premium corporate website for Tiny Prism Labs has been successfully created and is now running at:
**http://localhost:3000/**

## 📋 What's Included

### Pages
✅ **Home Page** - Hero section with tagline, services overview, key differentiators
✅ **About Us** - Mission, vision, values, company story, and statistics
✅ **Services Pages** (3):
   - Embedded Systems Design
   - AI & Machine Learning  
   - Edge Computing Solutions
✅ **Case Studies** - 8 detailed real-world project examples
✅ **Careers** - Job openings and application form
✅ **Contact** - Contact form, office location with Google Maps

### Features
✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth animations and transitions using Framer Motion
✅ Clean, modern UI with Tailwind CSS
✅ Professional color scheme (blue/cyan gradient theme)
✅ SEO-optimized with proper meta tags
✅ Fast loading and optimized performance

## 🚀 Quick Start

### Development Mode (Already Running)
```bash
npm run dev
```
- Development server: http://localhost:3000/
- Hot reload enabled
- Browser will auto-refresh on file changes

### Production Build
```bash
npm run build
npm run preview
```
- Creates optimized build in `dist/` folder
- Preview the production build locally

### Deploy with Node.js Server
```bash
npm run build
npm run server
```
- Builds the app and starts Express server on port 5000
- Serves the static React app + API endpoints

## 🎨 Customization

### Update Company Information

**Contact Details** - Edit [src/components/Footer.jsx](src/components/Footer.jsx) and [src/pages/Contact.jsx](src/pages/Contact.jsx)
```javascript
// Change email, phone, address
email: 'info@tinyprismlabs.com'
phone: '+91 123 456 7890'
address: 'Bangalore, Karnataka, India'
```

**Colors** - Edit [tailwind.config.js](tailwind.config.js)
```javascript
colors: {
  primary: { ... },  // Main brand colors
  tech: { ... }      // Tech-themed colors
}
```

**Content** - Edit respective page files in [src/pages/](src/pages/)
- Each page is a separate React component
- Easy to update text, images, and layout

### Add New Pages
1. Create new component in `src/pages/`
2. Add route in [src/App.jsx](src/App.jsx)
3. Add navigation link in [src/components/Navbar.jsx](src/components/Navbar.jsx)

## 🛠️ Technology Stack

- **React 18** - Modern UI framework
- **React Router 6** - Client-side routing
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Vite** - Lightning-fast build tool
- **Node.js + Express** - Backend server (optional)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

All components are fully responsive and tested.

## 🔧 Useful Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Start Node.js server
npm run server
```

## 📦 Deployment Options

### 1. Static Hosting (Recommended)
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Push to gh-pages branch

### 2. Node.js Server
- Deploy `dist/` folder + `server/` folder
- Set environment variable: `PORT=5000`
- Run: `npm run server`

### 3. Docker
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "server"]
```

## 🎯 Key Features by Page

### Home Page
- Animated hero section with gradient background
- Core services cards with hover effects
- "Why Tiny Prism Labs" section
- Key differentiators with metrics
- Call-to-action sections

### About Page
- Mission, Vision, Goal cards
- Company statistics
- Core values
- Technical expertise list
- Company story narrative

### Services Pages
- Detailed service descriptions
- Technical capabilities
- Supported platforms
- Real-world use cases
- Development process timeline

### Case Studies
- 8+ production deployments
- Challenge-Solution-Outcome format
- Technology stack tags
- Performance metrics
- Industry categorization

### Careers
- Open positions with details
- Company culture and values
- Application form with resume upload
- Benefits and perks

### Contact
- Multi-channel contact options
- Detailed contact form
- Office location with map
- Business hours
- What to expect timeline

## 🎨 Brand Guidelines

**Primary Colors**
- Blue: #2563eb
- Cyan: #06b6d4
- Gradient: Blue → Cyan

**Typography**
- Headings: Inter (Bold)
- Body: Inter (Regular)
- Code: IBM Plex Mono

**Logo**
- Gradient blue-cyan square with "T"
- Located in navbar and footer

## 🐛 Troubleshooting

**Port already in use**
```bash
# Change port in vite.config.js
server: { port: 3001 }
```

**Dependencies issue**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails**
```bash
npm run build -- --debug
```

## 📧 Support

For questions or issues:
- Email: info@tinyprismlabs.com
- Documentation: This file
- React Docs: https://react.dev
- Tailwind Docs: https://tailwindcss.com

## 🎉 Next Steps

1. ✅ Review the website at http://localhost:3000/
2. ✅ Customize content and contact information
3. ✅ Add real company images and logos
4. ✅ Set up Google Analytics (optional)
5. ✅ Configure contact form backend
6. ✅ Deploy to production hosting
7. ✅ Set up custom domain

---

**Built with ❤️ for Tiny Prism Labs**
*Intelligence on the Edge. Innovation at the Core.*
