import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, Users, Calendar, Stethoscope, BarChart3, Sparkles, BadgeCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './StaffPortal.css';

const StaffPortal = ({ setIsStaffMode }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
      setIsStaffMode(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsStaffMode(false);
    setUsername('');
    setPassword('');
    navigate('/');
  };

  if (!isLoggedIn) {
    return (
      <div className="staff-login-container">
        <motion.div
          className="login-card surface-strong"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="login-icon">
            <Stethoscope size={26} />
          </div>
          <div className="eyebrow">
            <Sparkles size={14} />
            Staff access
          </div>
          <h1>Staff Portal</h1>
          <p>Healthcare Professional Login</p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              Login
            </button>
          </form>

          <div className="login-note">
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <BadgeCheck size={14} />
              Demo credentials
            </p>
            <p>Username: <strong>doctor</strong></p>
            <p>Password: <strong>123456</strong></p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="staff-dashboard">
      <div className="staff-header">
        <div>
          <div className="eyebrow">
            <Sparkles size={14} />
            Staff dashboard
          </div>
          <h1>Dashboard</h1>
          <p>Welcome back, Dr. Professional!</p>
        </div>
        <button onClick={handleLogout} className="btn btn-outline">
          <LogOut size={18} />
          Logout
        </button>
      </div>

      <div className="dashboard-grid">
        {[
          { icon: <Users size={32} />, title: 'Patients', value: '342', color: '#0F7AE8' },
          { icon: <Calendar size={32} />, title: 'Appointments Today', value: '12', color: '#3FA86D' },
          { icon: <Stethoscope size={32} />, title: 'Consultations', value: '28', color: '#D94F5C' },
          { icon: <BarChart3 size={32} />, title: 'Reports Pending', value: '5', color: '#B8860B' },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="dashboard-card surface-strong"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            style={{ borderLeftColor: card.color }}
          >
            <div className="card-icon" style={{ color: card.color }}>
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <div className="card-value">{card.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="staff-content surface-strong">
        <h2>Recent Appointments</h2>
        <div className="appointments-table">
          {[
            { patient: 'John Doe', time: '09:30 AM', status: 'Completed' },
            { patient: 'Jane Smith', time: '11:00 AM', status: 'In Progress' },
            { patient: 'Mike Johnson', time: '02:00 PM', status: 'Scheduled' },
          ].map((apt, index) => (
            <motion.div
              key={index}
              className="table-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <span>{apt.patient}</span>
              <span>{apt.time}</span>
              <span className={`status ${apt.status.toLowerCase().replace(' ', '-')}`}>
                {apt.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;
