# 🚀 Quick Start Guide

## ⚡ 5-Minute Setup

### 1️⃣ Install & Configure (1 min)
```bash
# Already done! Just set your Google Maps API key
cp .env.example .env

# Edit .env and add your key:
# VITE_REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSy...
```

### 2️⃣ Install Dependencies (if not done)
```bash
npm install
```

### 3️⃣ Start Development Server (30 sec)
```bash
npm run dev
```

Browser opens at: **http://localhost:5173** ✅

---

## 📍 Key Pages

| Page | Route | Features |
|------|-------|----------|
| **Home** | `/` | Featured sections, quick stats |
| **Hospitals** | `/hospitals` | Google Maps, nearby hospitals, filtering |
| **Book Appointment** | `/appointment` | 3-step booking wizard |
| **Doctors** | `/doctors` | Search, filter by specialty |
| **My Appointments** | `/my-appointments` | View & manage appointments |
| **Health Records** | `/health-records` | Upload & access documents |
| **Staff** | `/staff` | Doctor dashboard (Demo: doctor/123456) |

---

## 🎨 Try These Features

### 1. **Interactive Map** 
- Go to `/hospitals`
- See your location + nearby hospitals
- Click hospital cards for details
- Toggle between map and list view

### 2. **Book Appointment**
- Click "Book Appointment" 
- Select hospital, doctor, date, time
- Fill in your details
- See booking summary

### 3. **Doctor Search**
- Go to `/doctors`
- Search by name or filter by specialty
- View doctor ratings and experience

### 4. **Staff Portal**
- Go to `/staff`
- Demo Login: `doctor` / `123456`
- View dashboard and appointments

---

## 🛠️ Development Commands

```bash
npm run dev      # Start dev server with hot reload
npm run build    # Production build
npm run preview  # Preview production build
```

---

## 📦 What's Included

✅ Modern React 19 setup  
✅ Vite for lightning-fast builds  
✅ Framer Motion animations  
✅ Google Maps integration  
✅ Responsive design (mobile-first)  
✅ Healthcare-specific UI/UX  
✅ Dark-compatible color system  

---

## 🎯 Next Steps

1. **Get Google Maps API Key**
   - Read: [GOOGLE_MAPS_SETUP.md](./GOOGLE_MAPS_SETUP.md)

2. **Customize Content**
   - Edit hospital data in `HospitalMap.jsx`
   - Update doctor list in `DoctorDirectory.jsx`
   - Modify hospital list in `BookAppointment.jsx`

3. **Deploy**
   - Build: `npm run build`
   - Deploy `dist/` folder to Vercel/Netlify

4. **Connect Real APIs**
   - Replace mock data with actual API calls
   - Update hospital search with real locations
   - Connect to your backend

---

## 🎨 Customization Tips

### Change Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary: #0F7AE8;        /* Main color */
  --accent: #00D9A3;         /* Accent color */
  --danger: #FF5456;         /* Error/Alert */
  /* ... more variables */
}
```

### Change Fonts
Edit Google Fonts link in `index.html`:
```html
<!-- Current: Plus Jakarta Sans + Inter -->
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet"/>
```

### Add New Pages
1. Create `src/pages/NewPage.jsx`
2. Create `src/pages/NewPage.css`
3. Add route in `App.jsx`:
```jsx
<Route path="/new-page" element={<NewPage />} />
```

---

## 🐛 Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Google Maps not loading?
- Check `.env` file has API key
- Verify API key is correct
- Check browser console for errors

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run build
```

---

## 📞 Support

Need help? Check:
- [README.md](./README.md) - Full documentation
- [GOOGLE_MAPS_SETUP.md](./GOOGLE_MAPS_SETUP.md) - Maps API setup
- Console errors (F12 in browser)

---

## ✅ You're All Set!

Start building amazing healthcare features! 🏥💻

**Happy coding!** 🚀
