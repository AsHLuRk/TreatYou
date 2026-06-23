import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Activity, ShieldAlert, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ setIsStaffMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Find Hospitals', path: '/hospitals' },
    { label: 'Book Appointment', path: '/appointment' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'My Appointments', path: '/my-appointments' },
    { label: 'Health Records', path: '/health-records' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Activity size={28} />
          <span>TreatYou</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/staff" className="nav-btn nav-btn-soft">
            <Stethoscope size={16} />
            Staff Portal
          </Link>
          <Link to="/hospitals" className="nav-btn nav-btn-emergency">
            <ShieldAlert size={16} />
            Emergency
          </Link>
          <button className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
