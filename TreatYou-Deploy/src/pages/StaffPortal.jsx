import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, Users, Calendar, Stethoscope, BarChart3, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './StaffPortal.css';

const appointments = [
  { patient: 'Amit Sharma', doctor: 'Dr. R. Kumar', time: '10:30 AM', dept: 'Cardiology', status: 'confirmed' },
  { patient: 'Sunita Patel', doctor: 'Dr. P. Singh', time: '11:00 AM', dept: 'Neurology', status: 'pending' },
  { patient: 'Rahul Verma', doctor: 'Dr. M. Sharma', time: '02:00 PM', dept: 'Pediatrics', status: 'confirmed' },
  { patient: 'Kavitha Nair', doctor: 'Dr. A. Patel', time: '03:30 PM', dept: 'Surgery', status: 'completed' },
];

const quickStats = [
  { label: 'Available beds', value: '42 / 120', color: 'var(--green)' },
  { label: 'ICU occupancy', value: '78%', color: 'var(--amber)' },
  { label: 'Emergency wait', value: '12 min', color: 'var(--primary)' },
  { label: 'Doctors on duty', value: '18', color: 'var(--violet)' },
];

const StaffPortal = ({ setIsStaffMode, isStaffMode }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = e => {
    e.preventDefault();
    if (username && password) { setLoggedIn(true); setIsStaffMode(true); }
  };

  const logout = () => {
    setLoggedIn(false); setIsStaffMode(false);
    setUsername(''); setPassword('');
    navigate('/');
  };

  if (!loggedIn) {
    return (
      <div className="staff-login-page">
        <motion.div className="login-card"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="login-icon"><Stethoscope size={24} /></div>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
            <span className="eyebrow-dot" />
            Staff access
          </span>
          <h1>Staff Portal</h1>
          <p>Sign in with your healthcare professional credentials.</p>

          <form className="login-form" onSubmit={login}>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input className="form-input" value={username} onChange={e => setUsername(e.target.value)} placeholder="staff@hospital.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" className="form-input" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: 4 }}>
              Sign in <CheckCircle2 size={16} />
            </button>
          </form>

          <div className="login-hint">
            <strong>Demo access</strong>
            Enter any username and password to continue.
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="staff-dashboard">
      <div className="container">
        <div className="staff-header">
          <div>
            <span className="eyebrow" style={{ marginBottom: 12, display: 'inline-flex' }}>
              <span className="eyebrow-dot" />
              Staff dashboard
            </span>
            <h1>Good morning, Dr. Staff</h1>
            <p>Here's today's overview for your team.</p>
          </div>
          <button className="btn btn-outline btn-sm" onClick={logout}>
            <LogOut size={15} /> Sign out
          </button>
        </div>

        {/* Stats strip */}
        <div className="staff-stats">
          {[
            { icon: <Calendar size={16} />, value: '24', label: "Today's appointments", color: 'var(--primary)', bg: 'var(--primary-light)' },
            { icon: <Users size={16} />, value: '8', label: 'Patients waiting', color: 'var(--amber)', bg: 'var(--amber-soft)' },
            { icon: <CheckCircle2 size={16} />, value: '16', label: 'Completed today', color: 'var(--green)', bg: 'var(--green-soft)' },
            { icon: <AlertCircle size={16} />, value: '3', label: 'Urgent cases', color: 'var(--accent)', bg: 'var(--accent-soft)' },
          ].map((s, i) => (
            <motion.div key={s.label} className="staff-stat"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
            >
              <div className="staff-stat-icon" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
              <div className="staff-stat-value">{s.value}</div>
              <div className="staff-stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="staff-grid">
          {/* Appointments table */}
          <div className="staff-panel">
            <div className="panel-title">
              <div className="panel-title-icon" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}><Calendar size={14} /></div>
              Today's appointments
            </div>
            <table className="staff-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(a => (
                  <tr key={a.patient + a.time}>
                    <td><strong style={{ color: 'var(--ink)' }}>{a.patient}</strong><br /><span style={{ fontSize: '0.74rem', color: 'var(--muted)' }}>{a.dept}</span></td>
                    <td>{a.doctor}</td>
                    <td><Clock size={11} style={{ display: 'inline', marginRight: 4, opacity: 0.5 }} />{a.time}</td>
                    <td><span className={`t-badge ${a.status}`}>{a.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick stats panel */}
          <div className="staff-panel">
            <div className="panel-title">
              <div className="panel-title-icon" style={{ background: 'var(--green-soft)', color: 'var(--green)' }}><BarChart3 size={14} /></div>
              Hospital status
            </div>
            <div className="quick-list">
              {quickStats.map(s => (
                <div key={s.label} className="quick-item">
                  <div className="quick-dot" style={{ background: s.color }} />
                  <span className="quick-item-label">{s.label}</span>
                  <span className="quick-item-value" style={{ color: s.color }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;
