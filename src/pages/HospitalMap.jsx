import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MapPinIcon, Star, DollarSign, Clock, Sparkles } from 'lucide-react';
import './HospitalMap.css';

const HospitalMap = ({ userLocation }) => {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listView, setListView] = useState(false);

  // Mock hospital data - Replace with actual API calls
  const mockHospitals = [
    {
      id: 1,
      name: 'City Medical Center',
      lat: userLocation?.lat || 30.7333,
      lng: userLocation?.lng || 76.7794,
      address: '123 Main Street, Chandigarh',
      phone: '+91-98765-43210',
      rating: 4.8,
      reviews: 342,
      specialties: ['Cardiology', 'Neurology', 'Emergency'],
      beds: 250,
      experience: '15+ years',
      avgCost: '₹5000-15000',
      distance: '0.5 km',
      hours: '24/7 Open'
    },
    {
      id: 2,
      name: 'Apollo Hospital',
      lat: (userLocation?.lat || 30.7333) + 0.01,
      lng: (userLocation?.lng || 76.7794) + 0.01,
      address: '456 Hospital Road, Chandigarh',
      phone: '+91-98765-43211',
      rating: 4.9,
      reviews: 521,
      specialties: ['Oncology', 'Orthopedics', 'Pediatrics'],
      beds: 400,
      experience: '25+ years',
      avgCost: '₹8000-20000',
      distance: '1.2 km',
      hours: '24/7 Open'
    },
    {
      id: 3,
      name: 'Max Healthcare',
      lat: (userLocation?.lat || 30.7333) + 0.02,
      lng: (userLocation?.lng || 76.7794) - 0.01,
      address: '789 Health Street, Chandigarh',
      phone: '+91-98765-43212',
      rating: 4.7,
      reviews: 298,
      specialties: ['General Surgery', 'Gynecology', 'Urology'],
      beds: 180,
      experience: '12+ years',
      avgCost: '₹4000-12000',
      distance: '2.1 km',
      hours: '24/7 Open'
    },
    {
      id: 4,
      name: 'Fortis Hospital',
      lat: (userLocation?.lat || 30.7333) - 0.015,
      lng: (userLocation?.lng || 76.7794) + 0.015,
      address: '321 Medical Plaza, Chandigarh',
      phone: '+91-98765-43213',
      rating: 4.6,
      reviews: 187,
      specialties: ['Trauma Center', 'Burns Unit', 'ICU'],
      beds: 320,
      experience: '18+ years',
      avgCost: '₹6000-18000',
      distance: '1.8 km',
      hours: '24/7 Open'
    },
    {
      id: 5,
      name: 'Primus Hospital',
      lat: (userLocation?.lat || 30.7333) + 0.018,
      lng: (userLocation?.lng || 76.7794) - 0.02,
      address: '654 Super Specialty, Chandigarh',
      phone: '+91-98765-43214',
      rating: 4.5,
      reviews: 156,
      specialties: ['Ophthalmology', 'ENT', 'Dermatology'],
      beds: 120,
      experience: '10+ years',
      avgCost: '₹3000-10000',
      distance: '2.5 km',
      hours: '24/7 Open'
    }
  ];

  useEffect(() => {
    // Simulate loading hospitals
    setTimeout(() => {
      setHospitals(mockHospitals);
      setLoading(false);
    }, 1500);
  }, []);

  const mapContainerStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '16px',
    overflow: 'hidden'
  };

  const defaultCenter = {
    lat: userLocation?.lat || 30.7333,
    lng: userLocation?.lng || 76.7794,
  };

  const mapOptions = {
    zoom: 14,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  };

  if (loading) {
    return (
      <div className="hospital-map-container">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading nearby hospitals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="hospital-map-container">
      <div className="map-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="header-content"
        >
          <div className="eyebrow">
            <Sparkles size={14} />
            Nearby care
          </div>
          <h1>Find Hospitals Near You</h1>
          <p>Discover the best healthcare facilities in your area</p>
        </motion.div>
        <div className="view-toggle">
          <button
            className={`toggle-btn ${!listView ? 'active' : ''}`}
            onClick={() => setListView(false)}
          >
            Map View
          </button>
          <button
            className={`toggle-btn ${listView ? 'active' : ''}`}
            onClick={() => setListView(true)}
          >
            List View
          </button>
        </div>
      </div>

      <div className="map-content">
        {!listView && (
          <motion.div
            className="map-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={defaultCenter}
                zoom={14}
                options={mapOptions}
              >
                {/* User location marker */}
                {userLocation && (
                  <Marker
                    position={userLocation}
                    title="Your Location"
                    icon={{
                      url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230F7AE8"%3E%3Ccircle cx="12" cy="12" r="8"%3E%3C/circle%3E%3Ccircle cx="12" cy="12" r="3" fill="white"/%3E%3C/svg%3E',
                      scaledSize: new window.google.maps.Size(32, 32)
                    }}
                  />
                )}

                {/* Hospital markers */}
                {hospitals.map((hospital) => (
                  <Marker
                    key={hospital.id}
                    position={{ lat: hospital.lat, lng: hospital.lng }}
                    title={hospital.name}
                    onClick={() => setSelectedHospital(hospital)}
                    icon={{
                      url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FF5456"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/%3E%3C/svg%3E',
                      scaledSize: new window.google.maps.Size(40, 40)
                    }}
                  />
                ))}

                {/* Info window for selected hospital */}
                {selectedHospital && (
                  <InfoWindow
                    position={{ lat: selectedHospital.lat, lng: selectedHospital.lng }}
                    onCloseClick={() => setSelectedHospital(null)}
                  >
                    <div className="info-window">
                      <h3>{selectedHospital.name}</h3>
                      <p>{selectedHospital.address}</p>
                      <div className="info-rating">
                        <Star size={16} fill="currentColor" />
                        <span>{selectedHospital.rating}</span>
                      </div>
                      <button className="btn btn-primary btn-sm">Book Now</button>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          </motion.div>
        )}

        {/* Hospital List */}
        <motion.div
          className={`hospitals-list ${listView ? 'visible' : ''}`}
          initial={listView ? { opacity: 0 } : { opacity: 0 }}
          animate={listView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {hospitals.map((hospital, index) => (
              <motion.div
                key={hospital.id}
                className={`hospital-card ${selectedHospital?.id === hospital.id ? 'selected' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedHospital(hospital)}
              >
                <div className="hospital-header">
                  <h3>{hospital.name}</h3>
                  <div className="hospital-rating">
                    <Star size={18} fill="currentColor" />
                    <span>{hospital.rating}</span>
                    <span className="review-count">({hospital.reviews})</span>
                  </div>
                </div>

                <p className="hospital-address">
                  <MapPin size={16} />
                  {hospital.address}
                </p>

                <div className="hospital-info-grid">
                  <div className="info-item">
                    <Clock size={16} />
                    <span>{hospital.hours}</span>
                  </div>
                  <div className="info-item">
                    <MapPinIcon size={16} />
                    <span>{hospital.distance}</span>
                  </div>
                  <div className="info-item">
                    <DollarSign size={16} />
                    <span>{hospital.avgCost}</span>
                  </div>
                </div>

                <div className="hospital-specialties">
                  {hospital.specialties.map((specialty, i) => (
                    <span key={i} className="specialty-badge">
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="hospital-meta">
                  <span>👨‍⚕️ {hospital.experience}</span>
                  <span>🏥 {hospital.beds} beds</span>
                </div>

                <div className="hospital-actions">
                  <button className="btn btn-primary flex-1">Book Appointment</button>
                  <button className="btn btn-outline flex-1">
                    <Phone size={16} />
                    Call
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Quick Stats */}
      <motion.div
        className="quick-stats"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="stat-card">
          <div className="stat-icon">🏥</div>
          <div className="stat-info">
            <div className="stat-number">{hospitals.length}</div>
            <div className="stat-text">Hospitals Found</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-info">
            <div className="stat-number">4.7</div>
            <div className="stat-text">Average Rating</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👨‍⚕️</div>
          <div className="stat-info">
            <div className="stat-number">500+</div>
            <div className="stat-text">Expert Doctors</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HospitalMap;
