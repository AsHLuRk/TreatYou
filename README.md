# 🏥 TreatYou - Modern Healthcare Application

A cutting-edge, fully responsive React-based healthcare platform with interactive UI, real-time hospital mapping, appointment booking, and staff management.

![React](https://img.shields.io/badge/React-19.2-blue)
![Vite](https://img.shields.io/badge/Vite-8.1-purple)
![License](https://img.shields.io/badge/License-ISC-green)

## ✨ Features

### 🎯 Core Features
- **🗺️ Interactive Hospital Locator**: Real-time map showing nearby hospitals with Google Maps integration
- **📅 Smart Appointment Booking**: Multi-step appointment booking with date/time selection
- **👨‍⚕️ Doctor Directory**: Search and filter doctors by specialty with detailed profiles
- **📋 Appointment Management**: Track, view, and manage all appointments
- **🏥 Health Records**: Secure storage and access to medical documents
- **👔 Staff Portal**: Dedicated dashboard for healthcare professionals

### 🎨 UI/UX Features
- **Modern Design**: Healthcare-specific UI inspired by Teladoc, Practo, Apollo
- **Smooth Animations**: Framer Motion powered interactions
- **Responsive Layout**: Works flawlessly on desktop, tablet, and mobile
- **Dark Mode Ready**: Modern color scheme with accessibility in mind
- **Interactive Components**: Cards, buttons, and forms with hover/click animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2
- **Build Tool**: Vite 8.1
- **Styling**: Custom CSS3 with Design System
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Mapping**: Google Maps API (@react-google-maps/api)
- **Routing**: React Router DOM v7
- **HTTP Client**: Axios

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm
- Google Maps API Key

### Setup Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AsHLuRk/TreatYou.git
   cd TreatYou
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Google Maps API**
   - Create `.env` file from `.env.example`:
     ```bash
     cp .env.example .env
     ```
   - Add your Google Maps API Key:
     ```
     VITE_REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
     ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Opens automatically at `http://localhost:5173`

## 📱 Project Structure

```
TreatYou/
├── src/
│   ├── components/
│   │   └── Navbar.jsx              # Navigation bar with routes
│   ├── pages/
│   │   ├── HomePage.jsx            # Landing page with features
│   │   ├── HospitalMap.jsx         # Hospital search with Google Maps
│   │   ├── BookAppointment.jsx     # 3-step appointment booking
│   │   ├── DoctorDirectory.jsx     # Doctor search and filtering
│   │   ├── MyAppointments.jsx      # Appointment management
│   │   ├── HealthRecords.jsx       # Medical documents storage
│   │   └── StaffPortal.jsx         # Staff dashboard
│   ├── utils/                      # Helper functions
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # Global design system
│   └── main.jsx                    # React DOM entry point
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── package.json                    # Dependencies
├── .env.example                    # Environment template
└── README.md                       # This file
```

## 🎨 Design System

### Colors
- **Primary**: #0F7AE8 (Healthcare Blue)
- **Accent**: #00D9A3 (Medical Green)
- **Danger**: #FF5456 (Alert Red)
- **Warning**: #FFA726 (Caution Orange)
- **Success**: #4CAF50 (Positive Green)

### Typography
- **Display Font**: Plus Jakarta Sans (headings)
- **Body Font**: Inter (content)

### Spacing System
- xs: 4px | sm: 8px | md: 16px | lg: 24px | xl: 32px | 2xl: 48px

### Border Radius
- sm: 8px | md: 12px | lg: 16px | xl: 20px | 2xl: 24px

## 🚀 Usage

### Hospital Map Page
```javascript
// Features:
- Real-time location detection
- Interactive Google Map
- Hospital list view with filtering
- Distance calculation
- Hospital ratings and reviews
- Quick call and booking buttons
```

### Appointment Booking
```javascript
// 3-Step Process:
1. Select Hospital & Doctor
2. Choose Date & Time
3. Enter Personal Information
```

### Staff Portal
```javascript
// Login Credentials (Demo):
Username: doctor
Password: 123456

// Dashboard Features:
- Patient management
- Appointment tracking
- Report generation
- Statistics dashboard
```

## 🌐 Environment Variables

Create `.env` file:
```env
VITE_REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyD...
```

## 📝 Scripts

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Components

### Navbar.jsx
- Responsive navigation
- Mobile menu toggle
- Active route highlighting
- Staff portal link

### HospitalMap.jsx
- Google Maps integration
- User location tracking
- Hospital markers with info windows
- List/Map view toggle
- Hospital filtering and sorting

### BookAppointment.jsx
- Multi-step form with validation
- Time slot selection
- Summary review before booking
- Responsive form layout

### DoctorDirectory.jsx
- Doctor search functionality
- Specialty filtering
- Doctor profiles with ratings
- Available appointment slots

## 🔒 Security Features

- Environment variable protection for API keys
- Secure form validation
- No sensitive data in code
- CORS-ready API structure

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
```
Deploy the `dist` folder to Vercel

### Netlify
```bash
npm run build
```
Deploy the `dist` folder to Netlify

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💼 Author

**AsHLuRk** - Healthcare App Developer

## 🙏 Acknowledgments

- Google Maps API documentation
- React community
- Framer Motion for animations
- Lucide React for icons

## 📞 Support

For support, email support@treatyou.com or open an issue on GitHub.

## 🗺️ Roadmap

- [ ] Video consultation feature
- [ ] Online prescription generation
- [ ] Pharmacy integration
- [ ] Insurance verification
- [ ] AI symptom checker
- [ ] Telemedicine support
- [ ] Prescription tracking
- [ ] Hospital bed availability

## ⭐ If you find this helpful, please give it a star!

---

**Built with ❤️ for healthcare professionals and patients**
