import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Award, Briefcase, Search, ArrowRight } from 'lucide-react';
import '../App.css';
import './DoctorDirectory.css';

const DoctorDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const doctors = [
    { id: 1, name: 'Dr. Rajesh Kumar', specialty: 'Cardiology', rating: 4.9, reviews: 324, experience: '15+ years', hospital: 'City Medical Center', consultationFee: 800, availability: 'Mon-Sat' },
    { id: 2, name: 'Dr. Priya Singh', specialty: 'Neurology', rating: 4.8, reviews: 287, experience: '12+ years', hospital: 'Apollo Hospital', consultationFee: 1000, availability: 'Tue-Sun' },
    { id: 3, name: 'Dr. Amit Patel', specialty: 'General Surgery', rating: 4.7, reviews: 156, experience: '10+ years', hospital: 'Max Healthcare', consultationFee: 600, availability: 'Mon-Fri' },
    { id: 4, name: 'Dr. Meera Sharma', specialty: 'Pediatrics', rating: 4.9, reviews: 412, experience: '18+ years', hospital: 'Fortis Hospital', consultationFee: 700, availability: '24/7' },
    { id: 5, name: 'Dr. Vikram Singh', specialty: 'Orthopedics', rating: 4.6, reviews: 234, experience: '14+ years', hospital: 'City Medical Center', consultationFee: 750, availability: 'Mon-Sat' },
    { id: 6, name: 'Dr. Ananya Gupta', specialty: 'Oncology', rating: 4.8, reviews: 198, experience: '16+ years', hospital: 'Apollo Hospital', consultationFee: 1200, availability: 'Wed-Sun' },
  ];

  const specialties = ['All', 'Cardiology', 'Neurology', 'General Surgery', 'Pediatrics', 'Orthopedics', 'Oncology'];

  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === '' || selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="doctor-directory page-shell">
      <motion.div
        className="directory-header"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <div className="eyebrow">
            <Search size={14} />
            Find specialists
          </div>
          <h1>Doctors who feel easy to trust.</h1>
          <p>Search by name or specialty, then move into a cleaner booking flow.</p>
        </div>
      </motion.div>

      <div className="directory-controls surface">
        <input
          type="text"
          placeholder="Search doctors by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-input search-input"
        />
        <div className="specialty-filter">
          {specialties.map((spec) => (
            <motion.button
              key={spec}
              type="button"
              className={`filter-btn ${selectedSpecialty === spec ? 'active' : ''}`}
              onClick={() => setSelectedSpecialty(spec === 'All' ? '' : spec)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {spec}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="doctors-grid">
        {filteredDoctors.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            className="doctor-card surface-strong"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <div className="doctor-avatar">{doctor.name.charAt(0)}</div>
            <h3>{doctor.name}</h3>
            <p className="specialty">{doctor.specialty}</p>
            <div className="rating">
              <Star size={16} fill="currentColor" />
              <span>{doctor.rating}</span>
              <span className="reviews">({doctor.reviews})</span>
            </div>
            <div className="doctor-meta">
              <div className="meta-item">
                <Award size={14} />
                <span>{doctor.experience}</span>
              </div>
              <div className="meta-item">
                <Briefcase size={14} />
                <span>{doctor.hospital}</span>
              </div>
              <div className="meta-item">
                <Clock size={14} />
                <span>{doctor.availability}</span>
              </div>
            </div>
            <div className="consultation-fee">₹{doctor.consultationFee}</div>
            <button className="btn btn-primary" style={{ width: '100%' }}>
              Book Consultation
              <ArrowRight size={16} />
            </button>
          </motion.div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="no-results">
          <p>No doctors found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default DoctorDirectory;
