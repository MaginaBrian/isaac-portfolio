# Isaac Magina — Personal Portfolio

A production-ready personal portfolio built with **React + Vite**, styled with a global **CSS design system**, following the clean editorial monochromatic aesthetic from the Dribbble reference.

---

## 🚀 Quick Start

```bash
# 1. Clone or unzip the project
unzip isaac-portfolio.zip
cd isaac-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## 📁 Project Structure

```
isaac-portfolio/
│
├── index.html                        # HTML entry — Google Fonts loaded here
├── vite.config.js                    # Vite configuration
├── package.json                      # Dependencies and scripts
│
└── src/
    ├── main.jsx                      # React root mount point
    ├── App.jsx                       # Root component — assembles all sections
    ├── App.css                       # Global design system (all styles live here)
    │
    ├── data/
    │   └── portfolio.js              # ⭐ ALL content lives here — edit to update site
    │
    ├── hooks/
    │   └── useScrollReveal.js        # IntersectionObserver scroll animation hook
    │
    └── components/
        ├── Nav.jsx                   # Fixed navigation bar + mobile hamburger menu
        ├── Hero.jsx                  # Full-viewport split hero with stats + monogram
        ├── About.jsx                 # Dark section — bio, competencies, languages
        ├── Experience.jsx            # Vertical timeline of work history
        ├── Skills.jsx                # Animated skill progress bars
        ├── Education.jsx             # Card grid of qualifications + short courses
        ├── Contact.jsx               # Dark CTA section with contact links
        └── Footer.jsx                # Simple copyright footer
```

---

## 🖼️ How to Add Isaac's Photo

### Step 1 — Prepare the photo
- Use a **portrait / head-and-shoulders** photo
- Recommended size: at least **800 × 1000 px**
- Format: `.jpg` or `.webp` (smaller file size)
- Name the file: `isaac.jpg`

### Step 2 — Place the photo in the project
Copy the photo into the `public` folder:
```
isaac-portfolio/
└── public/
    └── isaac.jpg       ← put it here
```
Files in `/public` are served directly at the root URL, so it will be accessible as `/isaac.jpg`.

### Step 3 — Update Hero.jsx
Open `src/components/Hero.jsx` and find this block:

```jsx
<div className="hero__right">
  <div className="hero__monogram">{profile.initials}</div>     {/* ← replace this */}
  <div className="hero__card"> ... </div>
  <div className="hero__scroll"> ... </div>
</div>
```

Replace `<div className="hero__monogram">` with an `<img>` tag:

```jsx
<div className="hero__right">
  <img src="/isaac.jpg" alt="Isaac Magina" className="hero__photo" />
  <div className="hero__card"> ... </div>
  <div className="hero__scroll"> ... </div>
</div>
```

### Step 4 — Add the photo CSS to App.css
Add these styles to the `/* HERO */` section in `src/App.css`:

```css
.hero__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}
```

That's it — the photo will fill the right panel of the hero section, just like the Dribbble reference design.

---

## ✏️ Updating Content

All text content lives in one file: **`src/data/portfolio.js`**

| What to change | Where in the file |
|---|---|
| Name, email, phone, LinkedIn | `profile` object |
| Hero statistics (+18 years etc.) | `stats` array |
| Competency tags | `competencies` array |
| Languages | `languages` array |
| Work history | `experience` array |
| Skill bars and percentages | `skills` array |
| Degree cards | `education` array |
| Short courses | `courses` array |
| Personal interests | `interests` array |

---

## 🎨 Design System

All design tokens are CSS custom properties at the top of `App.css`. To change the color palette or fonts, edit these values:

```css
/* Colors */
--primary:    #222222   /* dark text, buttons */
--secondary:  #7b7b7b   /* muted text, labels */
--tertiary:   #f8f8f8   /* light section backgrounds */
--dark:       #181818   /* dark section backgrounds */
--border:     #e8e8e8   /* dividers, card borders */

/* Fonts */
--font-display: 'DM Serif Display'   /* headings */
--font-body:    'DM Sans'            /* body text */
```

---

## 📜 Available Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server with hot reload at localhost:5173 |
| `npm run build` | Compile optimised production build into `/dist` |
| `npm run preview` | Preview the production build locally |

---

## 🌍 Deploying Online

### Netlify (easiest — drag and drop)
```bash
npm run build
# Then drag the /dist folder to netlify.com/drop
```

### Vercel (connect GitHub and auto-deploy)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Push /dist contents to your gh-pages branch
```

---

## 🗂️ Sections Overview

| Section | Description |
|---|---|
| **Nav** | Fixed top bar, scrolls with active link highlighting, mobile hamburger |
| **Hero** | Split layout — stats, greeting, CTAs on left; photo/monogram on right |
| **About** | Dark background — biography, competency tags, languages, interests |
| **Experience** | Timeline of 6 roles from 2002 to present with achievements |
| **Skills** | Animated progress bars across domain and leadership skills |
| **Education** | Card grid — 5 qualifications + short courses dark card |
| **Contact** | Dark CTA — email, phone, LinkedIn, location links |
| **Footer** | Copyright + LinkedIn + email |

---

## 🐛 Common Issues

**Styles not loading after edit**
Press `Ctrl + Shift + R` in the browser to hard refresh and clear cache.

**Port already in use**
```bash
npm run dev -- --port 3000
```

**Module not found errors**
Make sure all imports in components use single-dot paths:
```js
import { profile } from '../data/portfolio'       // ✅ correct
import { profile } from '../../data/portfolio'    // ❌ wrong
```

**CSS Module errors**
There are no `.module.css` files in this project. If you see an import like `import styles from './Nav.module.css'`, delete that line entirely.

---

## 📞 Contact

**Isaac Magina**
- Email: isaacojuk@gmail.com
- Phone: +234 816 511 4957
- LinkedIn: [linkedin.com/in/isaac-magina-1a0592a5](https://www.linkedin.com/in/isaac-magina-1a0592a5/)
- Location: Nairobi, Kenya