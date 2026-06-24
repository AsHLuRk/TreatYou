import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Star, Clock, BedDouble, Search, List, Map, ArrowRight, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HospitalMap.css';

const buildHospitals = (loc) => [
  { id:1, name:'City Medical Center', address:'123 Main Street, Sector 17', phone:'+91-98765-43210', rating:4.8, reviews:342, specialties:['Cardiology','Neurology','Emergency'], beds:250, cost:'₹5,000–15,000', distance:'0.5 km', hours:'24/7 Open', lat:loc.lat, lng:loc.lng },
  { id:2, name:'Apollo Hospital', address:'456 Hospital Road, Sector 22', phone:'+91-98765-43211', rating:4.9, reviews:521, specialties:['Oncology','Orthopedics','Pediatrics'], beds:400, cost:'₹8,000–20,000', distance:'1.2 km', hours:'24/7 Open', lat:loc.lat+0.01, lng:loc.lng+0.01 },
  { id:3, name:'Max Healthcare', address:'789 Health Street, Phase 1', phone:'+91-98765-43212', rating:4.7, reviews:298, specialties:['General Surgery','Gynecology','Urology'], beds:180, cost:'₹4,000–12,000', distance:'2.1 km', hours:'24/7 Open', lat:loc.lat+0.02, lng:loc.lng-0.01 },
  { id:4, name:'Fortis Hospital', address:'321 Medical Plaza, Sector 44', phone:'+91-98765-43213', rating:4.6, reviews:187, specialties:['Trauma','Burns Unit','ICU'], beds:320, cost:'₹6,000–18,000', distance:'1.8 km', hours:'24/7 Open', lat:loc.lat-0.015, lng:loc.lng+0.015 },
  { id:5, name:'Primus Hospital', address:'654 Super Specialty, Sector 56', phone:'+91-98765-43214', rating:4.5, reviews:156, specialties:['Ophthalmology','ENT','Dermatology'], beds:120, cost:'₹3,000–10,000', distance:'2.5 km', hours:'Mon–Sat 8am–10pm', lat:loc.lat+0.018, lng:loc.lng-0.02 },
];

const DEFAULT_LOC = { lat: 28.4089, lng: 77.3178 };

const HospitalMap = ({ userLocation }) => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState('list');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const loc = userLocation || DEFAULT_LOC;
      setHospitals(buildHospitals(loc));
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [userLocation]);

  const filtered = hospitals.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase()) ||
    h.specialties.some(s => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="hospital-map-page">
      <div className="container">
        <motion.div className="map-header"
          initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        >
          <span className="eyebrow" style={{ marginBottom: 14, display: 'inline-flex' }}>
            <span className="eyebrow-dot" />
            {userLocation ? 'Near your location' : 'All hospitals'}
          </span>
          <h1>Find hospitals nearby</h1>
          <p>Real-time availability, distance, and specialties — all in one view.</p>
        </motion.div>

        <div className="map-controls-row">
          <div className="map-search-wrap">
            <Search size={15} className="map-search-icon" />
            <input className="map-search-input" placeholder="Search by name or specialty…"
              value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="view-toggle">
            <button className={`view-btn ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>
              <List size={15} /> List
            </button>
            <button className={`view-btn ${view === 'map' ? 'active' : ''}`} onClick={() => setView('map')}>
              <Map size={15} /> Map
            </button>
          </div>
        </div>

        {loading ? (
          <div className="map-loading">
            <div className="loading-spinner" />
            <span>Finding nearby hospitals…</span>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {view === 'map' ? (
              <motion.div key="map"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="map-placeholder">
                  <div className="map-pin-cluster">
                    <div className="map-pin"><Navigation size={14} /></div>
                    <div className="map-pin"><Navigation size={14} /></div>
                    <div className="map-pin"><Navigation size={14} /></div>
                  </div>
                  <div className="map-placeholder-icon"><MapPin size={26} /></div>
                  <h3>Interactive map view</h3>
                  <p>Add your Google Maps API key in <code>.env</code> to enable live map. Hospitals are shown in list view below.</p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        )}

        {!loading && (
          <div className="hospitals-list">
            {filtered.map((h, i) => (
              <motion.div key={h.id} className={`hospital-card ${selected?.id === h.id ? 'selected' : ''}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: i * 0.06 }}
                onClick={() => setSelected(s => s?.id === h.id ? null : h)}
              >
                <div className="hosp-main">
                  <div className="hosp-top">
                    <span className="hosp-name">{h.name}</span>
                    <span className="hosp-open-badge">Open</span>
                  </div>
                  <div className="hosp-addr"><MapPin size={12} />{h.address}</div>
                  <div className="hosp-chips">
                    {h.specialties.map(s => <span key={s} className="hosp-chip">{s}</span>)}
                  </div>
                  <div className="hosp-meta">
                    <span className="hosp-meta-item"><BedDouble size={13} />{h.beds} beds</span>
                    <span className="hosp-meta-item"><Clock size={13} />{h.hours}</span>
                    <span className="hosp-meta-item"><Phone size={13} />{h.phone}</span>
                  </div>
                </div>

                <div className="hosp-side">
                  <div className="hosp-dist">{h.distance}</div>
                  <div className="hosp-rating">
                    <Star size={12} fill="currentColor" />
                    {h.rating}
                    <span style={{ color:'var(--muted)', fontWeight:500 }}>({h.reviews})</span>
                  </div>
                  <Link to="/appointment" className="btn btn-primary btn-sm hosp-book-btn" onClick={e => e.stopPropagation()}>
                    Book <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default HospitalMap;
