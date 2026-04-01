# Dusseau & Makris — CPA Website

A clean, professional single-page website for Dusseau & Makris CPA built with React + Vite.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## Project Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx               # Root component — manages theme state
├── index.css             # All styles (CSS variables, layout, components)
└── components/
    ├── Navbar.jsx        # Fixed top nav with mobile hamburger + theme toggle
    ├── Hero.jsx          # Full-width hero with headline and CTAs
    ├── About.jsx         # Firm overview and stat boxes
    ├── Services.jsx      # Service cards grid
    ├── Team.jsx          # Team member cards
    ├── Contact.jsx       # Contact form with validation
    └── Footer.jsx        # Footer with links and contact info
```

---

## Editing Business Content

All copy is defined in constants at the top of each component file — no need to dig through JSX.

| What to change | Where to edit |
|---|---|
| Firm name / nav brand | `Navbar.jsx` line 1 block + `Hero.jsx` + `Footer.jsx` |
| Hero headline / tagline | `Hero.jsx` → `HERO_CONTENT` |
| About text + stats | `About.jsx` → `ABOUT_CONTENT` |
| Services | `Services.jsx` → `SERVICES` array |
| Team members | `Team.jsx` → `TEAM` array |
| Contact details (phone/email/address) | `Contact.jsx` → `CONTACT_INFO` and `Footer.jsx` → `FOOTER_CONTENT` |
| Accent color | `index.css` → `--accent` in `:root` |

---

## Connecting the Contact Form

The form in `Contact.jsx` is wired up and validates inputs. To make it actually send messages, replace the simulation block in `handleSubmit` with one of these:

**Formspree** (simplest — free tier available):
1. Create a form at [formspree.io](https://formspree.io)
2. Copy your form ID and uncomment the Formspree block in `Contact.jsx`

**EmailJS** (no backend needed):
1. Create an account at [emailjs.com](https://www.emailjs.com)
2. Install: `npm install emailjs-com`
3. Uncomment the EmailJS block in `Contact.jsx` and fill in your IDs

**Custom backend API**: Uncomment the fetch block and point it at your endpoint.

---

## Theme Toggle

- Dark/light mode is toggled via the button in the navbar
- The preference is saved in `localStorage` under the key `dm-theme`
- A small inline script in `index.html` applies the saved theme before React loads, preventing a flash of the wrong theme

---

## Adding Team Photos

In `Team.jsx`, each member has an `initials` field used for the avatar placeholder. When photos are ready, replace the `<div className="team-avatar">` with:

```jsx
<img src={member.photo} alt={member.name} className="team-photo" />
```

Add a `photo` field to each member object pointing to the image path.
