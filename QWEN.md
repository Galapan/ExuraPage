# Exura Studio - Project Context

## Project Overview

**Exura Studio** is a professional web development agency portfolio website. It showcases services, portfolio projects, technologies, team members, and provides a contact form for potential clients.

**Purpose:** Marketing/landing page for a web development studio specializing in custom web platforms, modular architecture, and business management systems.

**Tech Stack:**
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (no frameworks)
- **Styling:** Custom CSS with CSS Variables, CSS Grid, Flexbox
- **Icons:** Font Awesome 6.4.0 (CDN)
- **Images:** Unsplash (CDN)

## Project Structure

```
C:\ExuraPage\
├── index.html          # Main landing page
├── team-member.html    # Dynamic team member profile page
├── styles.css          # Global styles (shared across pages)
├── script.js           # Main JavaScript (navbar, modals, animations, forms)
├── team.js             # Team member data and profile page logic
└── QWEN.md             # This file
```

## Key Features

### Landing Page (`index.html`)
- **Navbar:** Fixed header with scroll effect (blur backdrop on scroll)
- **Mobile Menu:** Slide-in menu for responsive design
- **Hero Section:** Animated introduction with call-to-action buttons
- **Services Section:** 5 service cards (Web Development, Modular Architecture, Custom Modules, Digital Management Systems, Integrations)
- **Portfolio Section:** 3 project showcases with hover effects
- **Technologies Section:** Tabbed interface (Frontend/Backend/Data) showing tech stack
- **Team Section:** Grid of team member cards linking to individual profiles
- **Contact Form:** Functional form with simulated submission
- **Login Modal:** Popup modal for user authentication (simulated)

### Team Member Page (`team-member.html`)
- Dynamic content loaded via URL parameter (`?id=1`, `?id=2`, `?id=3`)
- Displays member profile image, bio, technologies, specializations, and certifications
- Data sourced from `team.js` mock database

## Building and Running

This is a **static website** with no build process required.

### To Run Locally

1. **Option 1 - Direct File Open:**
   - Open `index.html` directly in a web browser

2. **Option 2 - Local Server (Recommended):**
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (npx)
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```
   Then navigate to `http://localhost:8000`

### No Dependencies
- All external resources (Font Awesome, Unsplash images) are loaded via CDN
- No `package.json`, `requirements.txt`, or other dependency files

## Development Conventions

### CSS Architecture
- **CSS Variables:** Defined in `:root` for theming (colors, fonts, transitions)
- **Color Palette:**
  - Background: `#0d0d0d` (deep black)
  - Surface: `#141414` (dark grey for cards)
  - Primary: `#0E665B` (emerald/teal green)
  - Text: `#ffffff` (white) and `#999999` (muted grey)
- **Naming:** BEM-inspired (`.section-title`, `.service-card`, `.btn-primary`)
- **Responsive:** Mobile-first with `@media` queries at 768px and 900px breakpoints

### JavaScript Patterns
- **DOM Ready:** All code wrapped in `DOMContentLoaded` event
- **Event Listeners:** Attached via `addEventListener` (no inline handlers)
- **Animations:** IntersectionObserver for scroll-triggered animations
- **Modularity:** Separate `team.js` for team-related logic

### Code Style
- **HTML:** Semantic tags (`<header>`, `<section>`, `<nav>`, `<footer>`)
- **CSS:** Organized by component (variables, reset, typography, utilities, components)
- **JS:** Vanilla ES6+ (arrow functions, template literals, destructuring)

## Customization Points

### Adding Team Members
Edit `team.js` `teamData` object:
```javascript
4: {
    name: "New Member",
    role: "Their Role",
    image: "image-url",
    bio: "Description...",
    techs: ["Tech1", "Tech2"],
    specs: ["Specialty 1"],
    certs: ["Certification"]
}
```

### Updating Colors
Modify CSS variables in `styles.css` `:root`:
```css
:root {
    --color-primary: #YOUR_COLOR;
    --color-bg: #YOUR_BACKGROUND;
}
```

### Adding Services/Portfolio
Duplicate card HTML in `index.html` and update content.

## Known Limitations

1. **Forms:** Contact and login forms simulate submission (no backend integration)
2. **Team Data:** Hardcoded mock data in `team.js` (no database/API)
3. **Authentication:** Login modal is UI-only (no actual authentication)

## Future Enhancements

- Backend integration for contact form (email service)
- Real authentication system
- CMS for dynamic content management
- Additional pages (About, Case Studies, Blog)
