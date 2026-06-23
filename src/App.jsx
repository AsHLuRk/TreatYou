import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import HospitalMap from './pages/HospitalMap';
import BookAppointment from './pages/BookAppointment';
import DoctorDirectory from './pages/DoctorDirectory';
import MyAppointments from './pages/MyAppointments';
import HealthRecords from './pages/HealthRecords';
import StaffPortal from './pages/StaffPortal';
import './App.css';

function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [isStaffMode, setIsStaffMode] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.log('Location error:', error)
      );
    }
  }, []);

  return (
    <Router>
      {!isStaffMode && <Navbar setIsStaffMode={setIsStaffMode} />}
      <Routes>
        <Route path="/" element={<HomePage userLocation={userLocation} />} />
        <Route path="/hospitals" element={<HospitalMap userLocation={userLocation} />} />
        <Route path="/appointment" element={<BookAppointment />} />
        <Route path="/doctors" element={<DoctorDirectory />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/health-records" element={<HealthRecords />} />
        <Route path="/staff" element={<StaffPortal setIsStaffMode={setIsStaffMode} isStaffMode={isStaffMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
