import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Hospital, CalendarDays, Stethoscope, HeartPulse,
  UserRound, ShieldAlert, MapPinned, CheckCircle2, Clock, Star,
  BadgeCheck, Activity, PhoneCall
} from 'lucide-react';
import '../App.css';
import './HomePage.css';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const HomePage = ({ userLocation }) => {
  const features = [
    { icon: <Hospital size={22} />, title: 'Nearby Hospitals', desc: 'Distance, live hours, and bed availability — all at a glance.', link: '/hospitals', color: 'fc-teal' },
    { icon: <CalendarDays size={22} />, title: 'Book in Minutes', desc: 'Choose a doctor, pick your slot, keep everything in one place.', link: '/appointment', color: 'fc-navy' },
    { icon: <Stethoscope size={22} />, title: 'Find Specialists', desc: 'Browse by specialty, rating, and next available appointment.', link: '/doctors', color: 'fc-green' },
    { icon: <HeartPulse size={22} />, title: 'Health Records', desc: 'Your reports and prescriptions, organised and always accessible.', link: '/health-records', color: 'fc-coral' },
    { icon: <UserRound size={22} />, title: 'My Appointments', desc: 'Track confirmed, pending, and past visits effortlessly.', link: '/my-appointments', color: 'fc-violet' },
    { icon: <ShieldAlert size={22} />, title: 'Emergency Access', desc: 'One tap to the nearest open emergency department.', link: '/hospitals', color: 'fc-amber' },
  ];

  const stats = [
    { value: '4.8★', label: 'Patient satisfaction', color: '#0a5c87' },
    { value: '120+', label: 'Partner hospitals', color: '#1e9d6b' },
    { value: '24/7', label: 'Support availability', color: '#6d42c8' },
    { value: '6 min', label: 'Avg. booking time', color: '#e05c6b' },
  ];

  const steps = [
    { num: '01', title: 'Locate', text: 'See nearby hospitals with current distance and real-time open status.' },
    { num: '02', title: 'Choose', text: 'Pick a doctor or department from a clean, skimmable list.' },
    { num: '03', title: 'Confirm', text: 'Finish booking and keep your receipt, records, and details in one place.' },
  ];

  return (
    <div className="home-page">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" />
        </div>

        <div className="container hero-grid">
          {/* Copy */}
          <motion.div className="hero-copy" {...fade(0)}>
            <div className="hero-eyebrow-row">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Modern healthcare platform
              </span>
              <span className="hero-live-chip">
                <span className="live-dot" />
                Live
              </span>
            </div>

            <h1 className="hero-headline">
              Care that's<br />
              <span className="accent-word">clear</span>, calm<br />
              and close by.
            </h1>

            <p className="hero-sub">
              TreatYou connects you with trusted hospitals, top-rated doctors,
              and appointment booking — all in one place that actually feels good to use.
            </p>

            <div className="hero-cta-row">
              <Link to="/hospitals" className="btn btn-primary btn-lg">
                Find Hospitals
                <ArrowRight size={17} />
              </Link>
              <Link to="/appointment" className="btn btn-outline btn-lg">
                Book Appointment
              </Link>
            </div>

            <div className="hero-emergency-row">
              <Link to="/hospitals" className="btn btn-emergency">
                <ShieldAlert size={13} />
                Emergency Help
              </Link>
              <span className="hero-emergency-note">Quick access to nearest urgent care</span>
            </div>

            <div className="hero-trust-bar">
              <div className="trust-item"><CheckCircle2 size={14} /> Verified hospitals</div>
              <div className="trust-item"><BadgeCheck size={14} /> Licensed doctors</div>
              <div className="trust-item"><Clock size={14} /> 24/7 support</div>
              <div className="trust-item"><Star size={14} /> 4.8 rated</div>
            </div>
          </motion.div>

          {/* Visual panel */}
          <motion.div className="hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22,1,0.36,1] }}
          >
            <div className="hero-card-main">
              <div className="card-top-row">
                <span className="card-label">Live care snapshot</span>
                <span className="pill" style={{ fontSize: '0.72rem', padding: '4px 10px' }}>
                  <span className="live-dot" />
                  Updated now
                </span>
              </div>

              <div className="nearest-hospital-card">
                <div className="hospital-icon-wrap">
                  <Hospital size={18} />
                </div>
                <div>
                  <div className="hospital-name">City Medical Center</div>
                  <div className="hospital-dist">Open · Emergency available</div>
                </div>
                <div className="hospital-dist-badge">0.5 km</div>
              </div>

              <div className="mini-stats-row">
                <div className="mini-stat">
                  <div className="mini-stat-label">Next slot</div>
                  <div className="mini-stat-value">10:30</div>
                  <div className="mini-stat-sub">Cardiology</div>
                </div>
                <div className="mini-stat">
                  <div className="mini-stat-label">Today</div>
                  <div className="mini-stat-value">12</div>
                  <div className="mini-stat-sub">Confirmed</div>
                </div>
              </div>

              <div className="panel-feature-list">
                <div className="panel-feature">
                  <div className="panel-feature-icon teal"><HeartPulse size={14} /></div>
                  <div className="panel-feature-text">
                    <strong>Secure health records</strong>
                    <span>Reports and prescriptions, always organised</span>
                  </div>
                </div>
                <div className="panel-feature">
                  <div className="panel-feature-icon coral"><PhoneCall size={14} /></div>
                  <div className="panel-feature-text">
                    <strong>Fast contact</strong>
                    <span>Call or book without digging through menus</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="float-card float-card-1">
              <div className="float-card-inner">
                <div className="float-avatar">R</div>
                <div>
                  <div className="float-text-main">Dr. Rajesh Kumar</div>
                  <div className="float-text-sub">Confirmed · 11:00 AM</div>
                </div>
                <div className="float-check"><CheckCircle2 size={13} /></div>
              </div>
            </div>

            <div className="float-card float-card-2">
              <div className="float-card-inner">
                <Activity size={16} style={{ color: 'var(--primary)' }} />
                <div>
                  <div className="float-text-main">3 hospitals nearby</div>
                  <div className="float-text-sub">All accepting patients</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────── */}
      <section className="stats-strip page-band" style={{ paddingTop: 48, paddingBottom: 0 }}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <motion.div key={s.label} className="stat-card-v2"
                style={{ '--bar-color': s.color }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <div className="stat-number-v2">{s.value}</div>
                <div className="stat-label-v2">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────── */}
      <section className="features-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <span className="eyebrow-dot" />
              Core experiences
            </span>
            <h2 className="display-lg" style={{ marginBottom: 12 }}>Built to feel thoughtful<br />on first use.</h2>
            <p className="body-lg" style={{ maxWidth: '58ch' }}>
              Every feature is designed around reducing friction — so getting the care you need
              feels clear, not complicated.
            </p>
          </div>

          <div className="features-grid">
            {features.map((f, i) => (
              <motion.div key={f.title} className={`feature-card-v2 ${f.color}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.48, delay: i * 0.075 }}
              >
                <Link to={f.link} className="feature-card-body">
                  <div className="feature-card-icon">{f.icon}</div>
                  <div className="feature-card-title">{f.title}</div>
                  <p className="feature-card-desc">{f.desc}</p>
                  <div className="feature-card-cta">
                    Open <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────── */}
      <section className="how-section">
        <div className="container">
          <div className="how-grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <span className="eyebrow eyebrow-green" style={{ marginBottom: 18, display: 'inline-flex' }}>
                <span className="eyebrow-dot" />
                How it works
              </span>
              <h2 className="display-lg" style={{ marginBottom: 14 }}>A short path from concern to care.</h2>
              <p className="body-md" style={{ maxWidth: '38ch' }}>
                Three simple steps — no portals, no paperwork, no confusion.
              </p>
            </motion.div>

            <div className="how-steps">
              {steps.map((step, i) => (
                <motion.div key={step.num} className="how-step"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: i * 0.1 }}
                >
                  <div className="how-step-num">{step.num}</div>
                  <div>
                    <div className="how-step-title">{step.title}</div>
                    <p className="how-step-text">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION ──────────────────────────────── */}
      {userLocation && (
        <section className="page-band" style={{ paddingTop: 0 }}>
          <div className="container">
            <motion.div className="location-banner"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="location-banner-text">
                <span className="eyebrow" style={{ marginBottom: 14, display: 'inline-flex' }}>
                  <span className="eyebrow-dot" />
                  Location aware
                </span>
                <h2 className="display-md" style={{ color: 'white', marginBottom: 8 }}>
                  Results tailored to where you are.
                </h2>
                <p>Your location helps surface the nearest facilities first.</p>
              </div>
              <div className="location-coords">
                <strong>{userLocation.lat.toFixed(4)}°, {userLocation.lng.toFixed(4)}°</strong>
                <span>Detected location</span>
              </div>
              <div className="location-cta">
                <Link to="/hospitals" className="btn btn-lg">
                  Open nearby hospitals
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <motion.div className="cta-card-v2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div>
              <span className="eyebrow eyebrow-accent" style={{ marginBottom: 18, display: 'inline-flex' }}>
                <span className="eyebrow-dot" />
                Ready when you are
              </span>
              <h2 className="display-lg" style={{ marginBottom: 12 }}>
                Make the next health decision feel simpler.
              </h2>
              <p>
                TreatYou keeps things practical and calm — with enough warmth to feel human and enough
                clarity to move quickly when it matters.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/appointment" className="btn btn-primary btn-lg">
                Start booking
              </Link>
              <Link to="/health-records" className="btn btn-outline btn-lg">
                Review records
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
