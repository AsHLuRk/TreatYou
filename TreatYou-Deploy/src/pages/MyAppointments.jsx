import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Stethoscope, MapPin, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../App.css';
import './MyAppointments.css';

const appointments = [
  { id: 1, doctor: 'Dr. Rajesh Kumar', specialty: 'Cardiology', hospital: 'City Medical Center', day: 28, mon: 'Jun', time: '10:30 AM', status: 'confirmed' },
  { id: 2, doctor: 'Dr. Priya Singh', specialty: 'Neurology', hospital: 'Apollo Hospital', day: 30, mon: 'Jun', time: '02:00 PM', status: 'pending' },
  { id: 3, doctor: 'Dr. Meera Sharma', specialty: 'Pediatrics', hospital: 'Fortis Hospital', day: 15, mon: 'Jun', time: '11:00 AM', status: 'completed' },
  { id: 4, doctor: 'Dr. Amit Patel', specialty: 'General Surgery', hospital: 'Max Healthcare', day: 10, mon: 'Jun', time: '09:00 AM', status: 'completed' },
];

const TABS = ['All', 'Confirmed', 'Pending', 'Completed'];

const MyAppointments = () => {
  const [tab, setTab] = useState('All');
  const filtered = appointments.filter(a => tab === 'All' || a.status === tab.toLowerCase());

  return (
    <div className="my-appointments">
      <div className="container" style={{ maxWidth: 820 }}>
        <motion.div className="appt-header"
          initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        >
          <span className="eyebrow" style={{ marginBottom: 14, display: 'inline-flex' }}>
            <span className="eyebrow-dot" />
            Your schedule
          </span>
          <h1>My appointments</h1>
          <p>Track upcoming visits, check status, and keep everything in one place.</p>
        </motion.div>

        <div className="appt-tabs">
          {TABS.map(t => (
            <button key={t} className={`appt-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <div className="appt-list">
            {filtered.length === 0 ? (
              <motion.div key="empty" className="appt-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <CalendarDays size={48} />
                <h3>No appointments here</h3>
                <p style={{ marginBottom: 20 }}>Nothing to show for this filter yet.</p>
                <Link to="/appointment" className="btn btn-primary">Book an appointment</Link>
              </motion.div>
            ) : filtered.map((a, i) => (
              <motion.div key={a.id} className={`appt-card ${a.status}`}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <div className="appt-date-badge">
                  <div className="appt-date-day">{a.day}</div>
                  <div className="appt-date-mon">{a.mon}</div>
                </div>

                <div className="appt-divider" />

                <div className="appt-info">
                  <div className="appt-doctor">{a.doctor}</div>
                  <div className="appt-meta">
                    <span className="appt-meta-item"><Stethoscope size={12} />{a.specialty}</span>
                    <span className="appt-meta-item"><MapPin size={12} />{a.hospital}</span>
                    <span className="appt-meta-item"><Clock size={12} />{a.time}</span>
                  </div>
                </div>

                <span className={`appt-status status-${a.status}`}>
                  {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

      </div>
    </div>
  );
};

export default MyAppointments;
