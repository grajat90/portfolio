# Portfolio

Personal portfolio website built with Vite, React, TypeScript, and shadcn/ui

## SEO

- `public/robots.txt` allows all crawlers.
- `public/sitemap.xml` includes key anchors. Update the domain in `<loc>` entries to your live domain.
- `index.html` contains Open Graph, Twitter cards, and structured data for better previews and indexing.

## 🚀 Features

- **Modern Tech Stack**: Built with Vite, React 18, TypeScript, and Tailwind CSS
- **Component Library**: Uses shadcn/ui for consistent, accessible components
- **Icons**: Lucide React icons for a clean, consistent icon set
- **Responsive Design**: Carefully crafted to maintain pixel-perfect design
- **Glass Morphism**: Beautiful glass-morphism effects with backdrop blur
- **Smooth Animations**: Subtle hover effects and smooth scrolling
- **Professional Structure**: Well-organized component architecture
- **Type Safety**: Full TypeScript support throughout the codebase

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Fonts**: Geist and Inter from Google Fonts

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── icons/             # Icon components
│   ├── header/            # Header navigation
│   ├── hero/              # Hero section
│   ├── experience/        # Work experience components
│   └── profile/           # Profile-related components
├── lib/
│   └── utils.ts          # Utility functions
├── assets/               # Static assets
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles
```

## 🎨 Design System

### Colors

- **Background**: `#222222` (Dark theme)
- **Text**: `#d3d3d3` (Light gray)
- **Accent**: `#866df4` (Purple)
- **Muted**: `#808080` (Muted gray)
- **Glass**: `rgba(255,255,255,0.06)` (Glass morphism)

### Fonts

- **Primary**: Geist (Headings and main text)
- **Secondary**: Inter (UI elements and buttons)

### Components

- **Glass Cards**: Backdrop blur with subtle borders
- **Hover Effects**: Smooth transitions and color changes
- **Responsive Layout**: Maintains exact spacing and positioning

## 🔧 Customization

### Adding New Experience

Update the `experiences` array in `src/components/experience/experience-section.tsx`:

```tsx
{
  company: "Company Name",
  role: "Your Role",
  duration: "Duration",
  tags: [
    { text: "Skill", color: "#colorcode" },
    // Add more tags
  ],
  image: "image-url",
}
```

### Modifying Contact Information

Update the contact handlers in `src/components/header/header.tsx` and `src/components/hero/hero-section.tsx`.

### Styling Changes

The project uses Tailwind CSS with custom utilities. Modify:

- `tailwind.config.js` for theme customization
- `src/index.css` for global styles
- Individual component files for component-specific styles

## 📱 Responsive Design

The portfolio maintains the exact visual design across different screen sizes while ensuring all elements remain accessible and functional.

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Custom Server

1. Build: `npm run build`
2. Serve the `dist` folder with any static file server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Lucide** for the icon set
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tool and development server

---

Built with ❤️ using modern web technologies.
