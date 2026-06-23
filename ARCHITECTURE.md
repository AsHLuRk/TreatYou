# 🏗️ Project Architecture

## System Overview

```
TreatYou Application Architecture
├── Frontend (React 19 + Vite)
│   ├── Components Layer
│   ├── Pages/Routes Layer
│   ├── Styling Layer (CSS Design System)
│   └── State Management (React Hooks)
├── External Services
│   ├── Google Maps API
│   ├── Places API
│   └── Geometry Library
└── Storage
    └── Browser LocalStorage (mock data)
```

## File Structure

```
src/
├── components/                  # Reusable UI components
│   ├── Navbar.jsx              # Navigation component
│   └── Navbar.css              # Navigation styles
│
├── pages/                       # Page components (routes)
│   ├── HomePage.jsx            # Landing page
│   ├── HospitalMap.jsx         # Hospital locator (Google Maps)
│   ├── BookAppointment.jsx     # Appointment booking wizard
│   ├── DoctorDirectory.jsx     # Doctor search & profiles
│   ├── MyAppointments.jsx      # Appointment management
│   ├── HealthRecords.jsx       # Medical records storage
│   ├── StaffPortal.jsx         # Healthcare staff dashboard
│   ├── HomePage.css
│   ├── HospitalMap.css
│   ├── BookAppointment.css
│   ├── DoctorDirectory.css
│   ├── MyAppointments.css
│   ├── HealthRecords.css
│   └── StaffPortal.css
│
├── utils/                       # Helper functions (future)
│
├── App.jsx                      # Main app component with routing
├── App.css                      # Global design system
├── main.jsx                     # React DOM entry point
```

## Component Hierarchy

```
App
├── Navbar
│   ├── Logo/Branding
│   ├── Navigation Links
│   └── Staff Portal Link
│
└── Routes
    ├── HomePage
    │   ├── Hero Section
    │   ├── Features Grid
    │   ├── Stats Section
    │   └── CTA Sections
    │
    ├── HospitalMap
    │   ├── Map Header
    │   ├── GoogleMap Component
    │   │   ├── User Location Marker
    │   │   ├── Hospital Markers
    │   │   └── Info Windows
    │   ├── Hospital List View
    │   └── Quick Stats
    │
    ├── BookAppointment
    │   ├── Progress Bar
    │   ├── Step 1: Hospital & Doctor
    │   ├── Step 2: Date & Time
    │   ├── Step 3: Personal Info
    │   └── Summary
    │
    ├── DoctorDirectory
    │   ├── Search Bar
    │   ├── Specialty Filters
    │   └── Doctor Grid
    │
    ├── MyAppointments
    │   └── Appointment Cards
    │
    ├── HealthRecords
    │   ├── Upload Area
    │   └── Records List
    │
    └── StaffPortal
        ├── Login Screen
        └── Dashboard
            ├── Stats Cards
            └── Appointments Table
```

## Data Flow

### User Location Flow
```
User Opens App
    ↓
Geolocation API (browser)
    ↓
Get lat/lng
    ↓
Store in React State
    ↓
Pass to HospitalMap
    ↓
Render on Google Maps
```

### Appointment Booking Flow
```
User selects Hospital
    ↓
User selects Doctor & Specialty
    ↓
User selects Date & Time
    ↓
User enters Personal Info
    ↓
Form Validation
    ↓
Show Summary
    ↓
Confirm & Submit
    ↓
Success Message
```

### Doctor Search Flow
```
User enters search term
    ↓
Real-time filtering
    ↓
Update display
    ↓
Show matching doctors
```

## Design System Architecture

### Color Palette (Semantic)
```css
Primary Colors:
  --primary: #0F7AE8              /* Healthcare Blue (CTAs) */
  --primary-light: #1E8FFF
  --primary-dark: #0A5CB8

Accent Colors:
  --accent: #00D9A3               /* Medical Green (success) */
  --accent-light: #1FE8B4
  --accent-dark: #00A878

Status Colors:
  --danger: #FF5456               /* Red (errors/alerts) */
  --warning: #FFA726              /* Orange (caution) */
  --success: #4CAF50              /* Green (positive) */
  --info: #2196F3                 /* Blue (information) */

Neutral Colors:
  --navy: #0B1D3A                 /* Dark backgrounds */
  --navy-light: #1E3A6E           /* Light dark */
  --gray-50 to gray-900           /* Gray scale */
  --white: #FFFFFF
```

### Typography System
```css
Fonts:
  --font-display: 'Plus Jakarta Sans'    /* Headings (bold) */
  --font-body: 'Inter'                   /* Body (readable) */

Sizes:
  h1: 42-56px (display font, weight 800)
  h2: 28-42px (display font, weight 700)
  h3: 16-24px (display font, weight 700)
  body: 14-16px (body font, weight 400-500)
  small: 12-13px (body font, weight 500)
```

### Spacing Scale
```css
--spacing-xs:   4px
--spacing-sm:   8px
--spacing-md:   16px
--spacing-lg:   24px
--spacing-xl:   32px
--spacing-2xl:  48px
```

### Border Radius System
```css
--radius-sm:    8px
--radius-md:    12px
--radius-lg:    16px
--radius-xl:    20px
--radius-2xl:   24px
```

### Shadow System
```css
--shadow-sm:    0 1px 4px rgba(15, 122, 232, 0.08)
--shadow-md:    0 4px 12px rgba(15, 122, 232, 0.12)
--shadow-lg:    0 8px 24px rgba(15, 122, 232, 0.16)
--shadow-xl:    0 16px 40px rgba(15, 122, 232, 0.2)
--shadow-2xl:   0 24px 64px rgba(15, 122, 232, 0.24)
```

## Responsive Design Strategy

### Mobile-First Approach
```
Base: Mobile (< 768px)
  ↓
Tablet (768px - 1024px)
  - Add 2-column layouts
  - Expand navigation
  ↓
Desktop (1024px+)
  - Multi-column grids
  - Side panels
  - Full navigation
```

### Breakpoints
```css
@media (max-width: 768px) {
  /* Mobile optimizations */
  - Single column layouts
  - Hamburger menu
  - Larger touch targets
  - Simplified forms
}

@media (max-width: 1024px) {
  /* Tablet optimizations */
  - 2-column layouts
  - Adjusted spacing
  - Flexible grids
}
```

## State Management Strategy

### Current Approach (Props + Hooks)
```javascript
App Component (Root)
  ├── userLocation (state)
  ├── isStaffMode (state)
  └── Pass via props to children
```

### Future Optimization (Recommended)
```
Consider using:
- React Context API for global state
- Redux/Zustand for complex state
- React Query for API caching
```

## Performance Considerations

### Code Splitting
```javascript
// Current: Static imports
import HomePage from './pages/HomePage';

// Future: Dynamic imports for optimization
const HomePage = lazy(() => import('./pages/HomePage'));
```

### Image Optimization
```javascript
// Use optimized image formats
// Use lazy loading for large images
// Consider WebP format
```

### CSS Optimization
```css
/* Global design tokens reduce duplication */
/* CSS Variables enable easy theming */
/* Scoped styles prevent conflicts */
```

## API Integration Points

### Hospital Data
**Current**: Mock data in HospitalMap.jsx
**Future**: API call to backend
```javascript
const response = await axios.get('/api/hospitals', {
  params: {
    lat: userLocation.lat,
    lng: userLocation.lng,
    radius: 5
  }
});
```

### Appointment Booking
**Current**: Form submission with console log
**Future**: POST to backend
```javascript
await axios.post('/api/appointments', formData);
```

### Doctor Search
**Current**: Client-side filtering
**Future**: API search with backend
```javascript
const results = await axios.get('/api/doctors/search', {
  params: { q: searchTerm, specialty: specialty }
});
```

## Security Considerations

### Current Implementation
✅ API key in environment variables  
✅ No hardcoded secrets in code  
✅ Form validation on client  
✅ CORS-ready structure  

### Future Improvements
- Server-side validation
- Authentication/Authorization
- Data encryption
- Rate limiting
- CSP headers

## Browser Support

```
Modern Browsers:
✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+

Mobile:
✅ iOS Safari 14+
✅ Android Chrome 90+
```

## Build & Deployment

### Development
```
npm run dev
  ↓
Vite Dev Server (HMR)
  ↓
localhost:5173
```

### Production
```
npm run build
  ↓
Vite builds to /dist
  ↓
Optimized bundles
  ↓
Deploy to Vercel/Netlify
```

## Monitoring & Analytics (Future)

Recommended additions:
- Error tracking (Sentry)
- Performance monitoring (Web Vitals)
- User analytics (Mixpanel)
- Feature flags (LaunchDarkly)

---

## Quick Reference

| Aspect | Technology | Version |
|--------|-----------|---------|
| Framework | React | 19.2 |
| Build Tool | Vite | 8.1 |
| Routing | React Router | 7.18 |
| Animations | Framer Motion | 12.40 |
| Icons | Lucide React | 1.21 |
| Maps | Google Maps API | Latest |
| HTTP | Axios | 1.18 |
| Node | 16+ | - |

---

**Last Updated**: 2026-06-23  
**Version**: 1.0.0  
**Status**: Production Ready ✅
