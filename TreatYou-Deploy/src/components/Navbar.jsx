import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Activity, ShieldAlert, Stethoscope } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ setIsStaffMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Hospitals', path: '/hospitals' },
    { label: 'Book', path: '/appointment' },
    { label: 'Doctors', path: '/doctors' },
    { label: 'Appointments', path: '/my-appointments' },
    { label: 'Records', path: '/health-records' },
  ];

  return (
    <nav className="navbar" style={scrolled ? { boxShadow: 'var(--shadow-sm)' } : {}}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="nav-logo-icon">
            <Activity size={18} strokeWidth={2.5} />
          </span>
          <span>Treat<em>You</em></span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/staff" className="nav-btn-staff">
            <Stethoscope size={15} />
            Staff
          </Link>
          <Link to="/hospitals" className="btn btn-emergency" style={{ fontSize: '0.78rem', padding: '0.5rem 0.9rem' }}>
            <ShieldAlert size={13} />
            SOS
          </Link>
          <button className="nav-toggle" onClick={() => setIsOpen(o => !o)} aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
