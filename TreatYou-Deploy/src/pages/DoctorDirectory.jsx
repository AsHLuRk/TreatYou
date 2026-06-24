import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Award, Briefcase, Search, ArrowRight, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../App.css';
import './DoctorDirectory.css';

const doctors = [
  { id: 1, name: 'Dr. Rajesh Kumar', specialty: 'Cardiology', rating: 4.9, reviews: 324, experience: '15+ years', hospital: 'City Medical Center', fee: 800, availability: 'Mon–Sat' },
  { id: 2, name: 'Dr. Priya Singh', specialty: 'Neurology', rating: 4.8, reviews: 287, experience: '12+ years', hospital: 'Apollo Hospital', fee: 1000, availability: 'Tue–Sun' },
  { id: 3, name: 'Dr. Amit Patel', specialty: 'General Surgery', rating: 4.7, reviews: 156, experience: '10+ years', hospital: 'Max Healthcare', fee: 600, availability: 'Mon–Fri' },
  { id: 4, name: 'Dr. Meera Sharma', specialty: 'Pediatrics', rating: 4.9, reviews: 412, experience: '18+ years', hospital: 'Fortis Hospital', fee: 700, availability: '24/7' },
  { id: 5, name: 'Dr. Vikram Singh', specialty: 'Orthopedics', rating: 4.6, reviews: 234, experience: '14+ years', hospital: 'City Medical Center', fee: 750, availability: 'Mon–Sat' },
  { id: 6, name: 'Dr. Ananya Gupta', specialty: 'Oncology', rating: 4.8, reviews: 198, experience: '16+ years', hospital: 'Apollo Hospital', fee: 1200, availability: 'Wed–Sun' },
];

const specialties = ['All', 'Cardiology', 'Neurology', 'General Surgery', 'Pediatrics', 'Orthopedics', 'Oncology'];

const avatarColors = [
  'linear-gradient(135deg,#0a5c87,#1b8fb8)',
  'linear-gradient(135deg,#1d3a6f,#0a5c87)',
  'linear-gradient(135deg,#1e9d6b,#22b57c)',
  'linear-gradient(135deg,#e05c6b,#e87a50)',
  'linear-gradient(135deg,#6d42c8,#8b5cf6)',
  'linear-gradient(135deg,#d97706,#f59e0b)',
];

const DoctorDirectory = () => {
  const [search, setSearch] = useState('');
  const [spec, setSpec] = useState('');

  const filtered = doctors.filter(d => {
    const matchName = d.name.toLowerCase().includes(search.toLowerCase());
    const matchSpec = !spec || spec === 'All' || d.specialty === spec;
    return matchName && matchSpec;
  });

  return (
    <div className="doctor-directory">
      <div className="container">

        <motion.div className="dir-header"
          initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        >
          <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
            <span className="eyebrow-dot" />
            Find specialists
          </span>
          <h1>Doctors you can trust.</h1>
          <p>Filter by specialty, check availability, and move directly into booking.</p>
        </motion.div>

        <motion.div className="dir-controls"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="dir-search-wrap">
            <Search size={16} className="dir-search-icon" />
            <input
              type="text"
              className="dir-search-input"
              placeholder="Search by doctor name…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="specialty-filter">
            {specialties.map(s => (
              <button
                key={s}
                className={`spec-btn ${spec === s || (s === 'All' && !spec) ? 'active' : ''}`}
                onClick={() => setSpec(s === 'All' ? '' : s)}
              >
                {s}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="doctors-grid">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <div className="dir-empty">No doctors match your search.</div>
            ) : filtered.map((doc, i) => (
              <motion.div key={doc.id} className="doctor-card"
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.38, delay: i * 0.06 }}
              >
                <div className="doctor-avatar" style={{ background: avatarColors[doc.id - 1] }}>
                  {doc.name.charAt(0)}
                </div>
                <div className="doctor-name">{doc.name}</div>
                <div className="doctor-specialty">{doc.specialty}</div>

                <div className="doctor-rating">
                  <Star size={14} fill="currentColor" />
                  {doc.rating}
                  <span className="reviews-count">({doc.reviews} reviews)</span>
                </div>

                <div className="doctor-meta">
                  <div className="doctor-meta-item"><Award size={13} />{doc.experience}</div>
                  <div className="doctor-meta-item"><Briefcase size={13} />{doc.hospital}</div>
                  <div className="doctor-meta-item"><Clock size={13} />{doc.availability}</div>
                </div>

                <div className="doctor-fee-row">
                  <div>
                    <div className="doctor-fee">₹{doc.fee}</div>
                    <div className="doctor-fee-label">Consultation fee</div>
                  </div>
                  <span className="doctor-avail-badge">Available</span>
                </div>

                <div className="doctor-actions">
                  <Link to="/appointment" className="btn btn-primary btn-sm">
                    Book now
                  </Link>
                  <button className="btn btn-outline btn-sm">View profile</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default DoctorDirectory;
