import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Edit, Trash2, CheckCircle, Sparkles } from 'lucide-react';
import '../App.css';
import './MyAppointments.css';

const MyAppointments = () => {
  const appointments = [
    { id: 1, doctor: 'Dr. Rajesh Kumar', hospital: 'City Medical Center', date: '2026-07-15', time: '10:30 AM', status: 'confirmed', specialty: 'Cardiology' },
    { id: 2, doctor: 'Dr. Priya Singh', hospital: 'Apollo Hospital', date: '2026-06-25', time: '02:00 PM', status: 'pending', specialty: 'Neurology' },
    { id: 3, doctor: 'Dr. Meera Sharma', hospital: 'Fortis Hospital', date: '2026-05-20', time: '09:00 AM', status: 'completed', specialty: 'Pediatrics' },
  ];

  return (
    <div className="my-appointments">
      <motion.div
        className="appointments-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="eyebrow">
          <Sparkles size={14} />
          Appointment history
        </div>
        <h1>My Appointments</h1>
        <p>Track and manage all your medical appointments</p>
      </motion.div>

      <div className="appointments-container">
        {appointments.map((apt, index) => (
          <motion.div
            key={apt.id}
            className={`appointment-card ${apt.status}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="appointment-status">
              {apt.status === 'confirmed' && <CheckCircle size={20} color="#4CAF50" />}
              {apt.status === 'pending' && <Clock size={20} color="#FFA726" />}
              {apt.status === 'completed' && <CheckCircle size={20} color="#2196F3" />}
            </div>
            
            <div className="appointment-details">
              <h3>{apt.doctor}</h3>
              <p className="specialty">{apt.specialty}</p>
              
              <div className="appointment-info">
                <div className="info-item">
                  <Calendar size={16} />
                  <span>{apt.date}</span>
                </div>
                <div className="info-item">
                  <Clock size={16} />
                  <span>{apt.time}</span>
                </div>
                <div className="info-item">
                  <MapPin size={16} />
                  <span>{apt.hospital}</span>
                </div>
              </div>
            </div>

            <div className="appointment-actions">
              {apt.status === 'confirmed' && (
                <>
                  <button className="action-btn edit">
                    <Edit size={16} />
                  </button>
                  <button className="action-btn cancel">
                    <Trash2 size={16} />
                  </button>
                </>
              )}
              {apt.status === 'completed' && (
                <button className="btn btn-sm btn-outline">Rate & Review</button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
