# Exura Studio - Project Context

## Project Overview

**Exura Studio** is a professional web development agency portfolio website built as a static multi-page site. It showcases services, portfolio projects, technologies, team members, and provides a contact form for potential clients.

**Purpose:** Marketing/landing page for a web development studio specializing in custom web platforms, modular architecture, and business management systems.

**Tech Stack:**
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (no frameworks)
- **Styling:** Custom CSS with CSS Variables, CSS Grid, Flexbox
- **Icons:** Font Awesome 6.4.0 (CDN)
- **Images:** Local images in `/img` directory (team photos)

## Project Structure

```
C:\ExuraPage\
├── index.html          # Main landing page
├── team-member.html    # Dynamic team member profile page
├── script.js           # Main JavaScript (navbar, modals, animations, forms)
├── team.js             # Team member data and profile page logic
├── team-styles.css     # Team member page specific styles
├── QWEN.md             # This file
├── WEB3FORMS_SETUP.md  # Web3Forms configuration guide
├── css/
│   ├── styles.css      # Main CSS file (imports all modules)
│   ├── 01-variables.css    # CSS Variables and Reset
│   ├── 02-utilities.css    # Utility classes and Buttons
│   ├── 03-navbar.css       # Navbar and Mobile Menu
│   ├── 04-hero.css         # Hero Section and Background Animations
│   ├── 05-modal-forms.css  # Login Modal and Forms
│   ├── 06-sections.css     # General Sections, Services, Portfolio
│   ├── 07-technologies.css # Technologies Section (Tabs and Grid)
│   ├── 08-team-contact.css # Team and Contact Sections
│   └── 09-footer-responsive.css # Footer and Responsive Design
└── img/
    ├── bocchi.jpg       # Team member profile image
    ├── team1.jpg        # Team member profile image
    ├── team2.jpg        # Team member profile image
    └── team3.jpg        # Team member profile image
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
- Features sticky sidebar, animated sections, and back navigation

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
- All external resources (Font Awesome) are loaded via CDN
- No `package.json`, `requirements.txt`, or other dependency files

## Development Conventions

### CSS Architecture

**Modular CSS Structure:**
- CSS dividido en 9 archivos modulares organizados por componente
- Archivo principal `css/styles.css` importa todos los módulos
- Cada archivo tiene un prefijo numérico para orden de carga

**File Organization:**
| Archivo | Propósito |
|---------|-----------|
| `01-variables.css` | Variables CSS, reset y tipografía base |
| `02-utilities.css` | Clases utilitarias y botones |
| `03-navbar.css` | Navbar y menú móvil |
| `04-hero.css` | Hero section y animaciones de fondo |
| `05-modal-forms.css` | Modales y formularios |
| `06-sections.css` | Secciones generales, servicios, portafolio |
| `07-technologies.css` | Sección de tecnologías |
| `08-team-contact.css` | Equipo y contacto |
| `09-footer-responsive.css` | Footer y media queries |

**Color Palette:**
- Background: `#0d0d0d` (deep black)
- Surface: `#141414` (dark grey for cards)
- Primary: `#0E665B` (emerald/teal green)
- Primary Light: `#1a8a7a`
- Text: `#ffffff` (white) and `#999999` (muted grey)
- Border: `#262626` and `#3a3a3a`

**Naming:** BEM-inspired (`.section-title`, `.service-card`, `.btn-primary`)

**Responsive:** Mobile-first with `@media` queries at 480px, 768px, 900px, and 1024px breakpoints

**Transitions:** Custom cubic-bezier easing variables for consistent animations

### Team Member Page Styles

**Separate Stylesheet:** `team-styles.css`
- Contains all styles specific to the team member profile page
- Imported only in `team-member.html`
- Keeps main CSS focused on landing page

### JavaScript Patterns
- **DOM Ready:** All code wrapped in `DOMContentLoaded` event
- **Event Listeners:** Attached via `addEventListener` (no inline handlers)
- **Animations:** IntersectionObserver for scroll-triggered animations
- **Modularity:** Separate `team.js` for team-related data and logic
- **State Management:** Class-based toggling for UI states (modals, menus)

### Code Style
- **HTML:** Semantic tags (`<header>`, `<section>`, `<nav>`, `<footer>`)
- **CSS:** Organized by component (variables, reset, typography, utilities, components, responsive)
- **JS:** Vanilla ES6+ (arrow functions, template literals, destructuring, spread operator)
- **Language:** Spanish content throughout the site

## Customization Points

### Adding Team Members
Edit `team.js` `teamData` object:
```javascript
4: {
    name: "New Member",
    role: "Their Role",
    image: "img/team4.jpg",
    bio: "Description...",
    techs: [
        { name: "Tech1", icon: "fa-brands fa-tech1" },
        { name: "Tech2", icon: "fa-solid fa-tech2" }
    ],
    specs: ["Specialty 1", "Specialty 2"],
    certs: ["Certification 1", "Certification 2"]
}
```

### Updating Colors
Modify CSS variables in `styles.css` `:root`:
```css
:root {
    --color-primary: #YOUR_COLOR;
    --color-bg: #YOUR_BACKGROUND;
    --color-surface: #YOUR_SURFACE_COLOR;
}
```

### Adding Services/Portfolio
Duplicate card HTML in `index.html` and update content. Ensure proper `view-animate` and `stagger-*` classes for animations.

### Adding New Sections
1. Add HTML structure in `index.html` following existing section patterns
2. Add corresponding CSS in `styles.css`
3. Include `view-animate` class for scroll animations
4. Ensure responsive styles are added within existing media queries

## Known Limitations

1. **Forms:** Contact and login forms simulate submission (no backend integration)
2. **Team Data:** Hardcoded mock data in `team.js` (no database/API)
3. **Authentication:** Login modal is UI-only (no actual authentication)
4. **Images:** Team member 1 has incomplete image path in `index.html` (line ~160)

## Future Enhancements

- Backend integration for contact form (email service)
- Real authentication system with JWT or session management
- CMS for dynamic content management
- Additional pages (About, Case Studies, Blog)
- Portfolio project detail pages
- Testimonials section
- Dark/light theme toggle
