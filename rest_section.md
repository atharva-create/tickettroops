# TicketTroops - Convert "Our Offerings" Section to Dark Purple Theme

## 🎯 OBJECTIVE
Replace the white background in the "Our Offerings" section (and subsequent sections) with a dark purple theme that seamlessly continues the immersive atmosphere from the hero section. This maintains visual flow and aligns with the brand identity shown in the corporate deck.

---

## 🎨 COLOR PALETTE FOR DARK SECTIONS

Based on the TicketTroops brand deck, use these colors:

```css
:root {
  /* Background Colors - Dark to Light Purple Spectrum */
  --tt-bg-darkest: #0F0E17;         /* Deepest background (near black with purple tint) */
  --tt-bg-dark: #1A1824;            /* Primary dark section background */
  --tt-bg-purple: #2D2A4A;          /* Brand purple (matches navbar) */
  --tt-bg-purple-mid: #3D3A5C;      /* Mid purple for cards/elevated elements */
  --tt-bg-purple-light: #4A4670;    /* Lighter purple for hover states */
  
  /* Accent Colors */
  --tt-gold: #C9A227;               /* Primary gold */
  --tt-gold-light: #D4AF37;         /* Light gold for gradients */
  
  /* Text Colors for Dark Backgrounds */
  --tt-text-white: #FFFFFF;
  --tt-text-muted: rgba(255, 255, 255, 0.7);
  --tt-text-subtle: rgba(255, 255, 255, 0.5);
  
  /* Borders & Dividers */
  --tt-border-subtle: rgba(255, 255, 255, 0.08);
  --tt-border-gold: rgba(201, 162, 39, 0.3);
}
```

---

## 🔧 SECTION-BY-SECTION CHANGES

### 1. OUR OFFERINGS SECTION

**Current:** White background with dark text
**Target:** Dark purple gradient with light text

```css
.offerings-section,
#services,
.services-section {
  /* Dark gradient background */
  background: linear-gradient(180deg, #2D2A4A 0%, #1A1824 100%);
  padding: 80px 0;
  position: relative;
}

/* Top border accent */
.offerings-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(201, 162, 39, 0.4) 50%, 
    transparent 100%
  );
}

/* Section label - "OUR OFFERINGS" */
.offerings-section .section-label,
.offerings-section h2:first-of-type {
  color: #C9A227;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
}

/* Main heading - "BEYOND THE TICKETS" */
.offerings-section .section-title,
.offerings-section h3,
.offerings-section h2 {
  color: #FFFFFF;
  text-align: center;
}

/* Description text */
.offerings-section .section-description,
.offerings-section > p {
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
}
```

---

### 2. SERVICE CARDS (Event Tickets, Accommodation, etc.)

```css
.service-card,
.offering-card {
  background: linear-gradient(135deg, #3D3A5C 0%, #2D2A4A 100%);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* Hover effect */
.service-card:hover,
.offering-card:hover {
  transform: translateY(-5px);
  border-color: rgba(201, 162, 39, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Gold accent line on hover */
.service-card::after,
.offering-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #C9A227, #D4AF37);
  transition: width 0.3s ease;
}

.service-card:hover::after,
.offering-card:hover::after {
  width: 60%;
}

/* Card icon */
.service-card .icon,
.offering-card .icon,
.service-card img,
.offering-card img {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  /* If using colored icons, add gold tint */
  filter: brightness(0) saturate(100%) invert(73%) sepia(47%) saturate(600%) hue-rotate(10deg);
}

/* Card title */
.service-card h4,
.offering-card h4,
.service-card .card-title {
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Card description */
.service-card p,
.offering-card p,
.service-card .card-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.6;
}
```

---

### 3. UPCOMING EVENTS SECTION

```css
.events-section,
#events,
.upcoming-events {
  background: linear-gradient(180deg, #1A1824 0%, #0F0E17 100%);
  padding: 80px 0;
  position: relative;
}

/* Section heading */
.events-section h2 {
  color: #C9A227;
  text-align: center;
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 40px;
}

/* Tab buttons */
.events-tabs .tab-btn,
.event-filter-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
  padding: 12px 24px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.events-tabs .tab-btn:hover,
.event-filter-btn:hover {
  border-color: rgba(201, 162, 39, 0.5);
  color: #FFFFFF;
}

.events-tabs .tab-btn.active,
.event-filter-btn.active {
  background: linear-gradient(135deg, #C9A227, #D4AF37);
  border-color: transparent;
  color: #2D2A4A;
  font-weight: 600;
}

/* Events table */
.events-table,
.events-list table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
}

.events-table thead th {
  color: #C9A227;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: left;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(201, 162, 39, 0.2);
}

.events-table tbody tr {
  background: rgba(61, 58, 92, 0.3);
  transition: all 0.3s ease;
}

.events-table tbody tr:hover {
  background: rgba(61, 58, 92, 0.6);
  transform: translateX(5px);
}

.events-table tbody td {
  color: #FFFFFF;
  padding: 20px;
  font-size: 15px;
}

.events-table tbody td:first-child {
  border-radius: 8px 0 0 8px;
  font-weight: 500;
}

.events-table tbody td:last-child {
  border-radius: 0 8px 8px 0;
  color: rgba(255, 255, 255, 0.7);
}
```

---

### 4. CONTACT / CTA SECTION

```css
.contact-section,
#contact,
.cta-section {
  background: linear-gradient(180deg, #2D2A4A 0%, #1A1824 100%);
  padding: 80px 0;
  position: relative;
}

/* Top decorative line */
.contact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(201, 162, 39, 0.3), transparent);
}

/* Heading */
.contact-section h2 {
  color: #FFFFFF;
}

.contact-section h2 span,
.contact-section .highlight {
  color: #C9A227;
}

/* Subheading */
.contact-section h3,
.contact-section .subtitle {
  color: rgba(255, 255, 255, 0.8);
}

/* Contact info text */
.contact-section p,
.contact-info p {
  color: rgba(255, 255, 255, 0.7);
}

/* Contact links (email, phone) */
.contact-section a,
.contact-info a {
  color: #C9A227;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-section a:hover {
  color: #D4AF37;
}

/* Form inputs */
.contact-form input,
.contact-form textarea,
.contact-form select {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 16px 20px;
  color: #FFFFFF;
  font-size: 15px;
  width: 100%;
  transition: all 0.3s ease;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.contact-form input:focus,
.contact-form textarea:focus,
.contact-form select:focus {
  outline: none;
  border-color: #C9A227;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(201, 162, 39, 0.1);
}

/* Select dropdown */
.contact-form select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23C9A227' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
  padding-right: 48px;
}

.contact-form select option {
  background: #2D2A4A;
  color: #FFFFFF;
}

/* Submit button */
.contact-form button,
.contact-form input[type="submit"],
.btn-primary {
  background: linear-gradient(135deg, #C9A227 0%, #D4AF37 100%);
  border: none;
  border-radius: 8px;
  padding: 16px 40px;
  color: #2D2A4A;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(201, 162, 39, 0.3);
}

.contact-form button:hover,
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(201, 162, 39, 0.4);
}
```

---

### 5. FOOTER

```css
footer,
.site-footer {
  background: #0F0E17;
  padding: 60px 0 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* Logo in footer */
footer .logo img {
  height: 50px;
}

/* Tagline */
footer .tagline,
footer p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

/* Footer headings */
footer h4 {
  color: #C9A227;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

/* Footer links */
footer a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

footer a:hover {
  color: #C9A227;
}

/* Copyright */
footer .copyright {
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  text-align: center;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
```

---

## 🌊 SECTION FLOW & TRANSITIONS

Ensure smooth visual transitions between sections:

```css
/* Alternating section backgrounds for depth */
.section-dark {
  background: linear-gradient(180deg, #1A1824 0%, #0F0E17 100%);
}

.section-purple {
  background: linear-gradient(180deg, #2D2A4A 0%, #1A1824 100%);
}

/* Use this pattern:
   - Hero → fades to purple (#2D2A4A)
   - Offerings → purple to dark (#2D2A4A → #1A1824)
   - Events → dark to darker (#1A1824 → #0F0E17)
   - Contact → back to purple (#2D2A4A → #1A1824)
   - Footer → darkest (#0F0E17)
*/

/* Subtle section dividers */
section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(201, 162, 39, 0.2), transparent);
}
```

---

## 📱 RESPONSIVE CONSIDERATIONS

```css
@media (max-width: 768px) {
  .offerings-section,
  .events-section,
  .contact-section {
    padding: 60px 20px;
  }
  
  .service-card,
  .offering-card {
    padding: 24px;
    margin-bottom: 16px;
  }
  
  /* Stack table on mobile */
  .events-table thead {
    display: none;
  }
  
  .events-table tbody tr {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 12px;
    border-radius: 12px;
  }
  
  .events-table tbody td {
    padding: 8px 0;
    border-radius: 0 !important;
  }
  
  .events-table tbody td:first-child {
    font-size: 18px;
    color: #C9A227;
  }
}
```

---

## ✅ IMPLEMENTATION CHECKLIST

1. [ ] Update `.offerings-section` / `#services` background to purple gradient
2. [ ] Convert all section headings: gold for labels, white for titles
3. [ ] Update service cards to dark purple with hover effects
4. [ ] Convert events section and table to dark theme
5. [ ] Update tab buttons with gold active state
6. [ ] Convert contact form inputs to dark style with gold focus states
7. [ ] Update submit button to gold gradient
8. [ ] Convert footer to darkest purple
9. [ ] Add subtle gold accent lines between sections
10. [ ] Test all hover states and focus states
11. [ ] Verify text contrast meets accessibility standards (WCAG AA)
12. [ ] Test on mobile devices

---

## 🎯 QUICK REFERENCE - Background Colors by Section

| Section | Start Color | End Color |
|---------|-------------|-----------|
| Hero (bottom) | transparent | `#2D2A4A` |
| Offerings | `#2D2A4A` | `#1A1824` |
| Events | `#1A1824` | `#0F0E17` |
| Contact | `#2D2A4A` | `#1A1824` |
| Footer | `#0F0E17` | `#0F0E17` |

---

## ⚠️ IMPORTANT: Remove White Backgrounds

Search your CSS for any of these and replace:

```css
/* FIND AND REPLACE THESE */
background: #FFFFFF;        → background: #1A1824;
background: white;          → background: #1A1824;
background: #fff;           → background: #1A1824;
background-color: #FFFFFF;  → background-color: #1A1824;
color: #000000;             → color: #FFFFFF;
color: black;               → color: #FFFFFF;
color: #333;                → color: rgba(255, 255, 255, 0.9);
color: #666;                → color: rgba(255, 255, 255, 0.7);
color: #999;                → color: rgba(255, 255, 255, 0.5);
```

This will ensure no white backgrounds remain and all text is properly visible on dark backgrounds.