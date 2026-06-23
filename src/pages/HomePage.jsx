import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  CalendarDays,
  HeartPulse,
  ShieldAlert,
  Sparkles,
  MapPinned,
  Stethoscope,
  UserRound,
  Hospital,
  Clock3,
  BadgeCheck,
  PhoneCall,
} from 'lucide-react';
import '../App.css';
import './HomePage.css';

const HomePage = ({ userLocation }) => {
  const cards = [
    {
      icon: <Hospital size={22} />,
      title: 'Nearby hospitals',
      description: 'Find trusted care with clear distance, hours, and live availability.',
      link: '/hospitals',
      accent: 'teal',
    },
    {
      icon: <CalendarDays size={22} />,
      title: 'Book in minutes',
      description: 'Choose a doctor, pick a time, and keep everything in one place.',
      link: '/appointment',
      accent: 'navy',
    },
    {
      icon: <Stethoscope size={22} />,
      title: 'Specialists by need',
      description: 'Browse clinicians by specialty, rating, and appointment window.',
      link: '/doctors',
      accent: 'sage',
    },
    {
      icon: <HeartPulse size={22} />,
      title: 'Health records',
      description: 'Store reports and prescriptions in a calm, organized archive.',
      link: '/health-records',
      accent: 'coral',
    },
    {
      icon: <ShieldAlert size={22} />,
      title: 'Emergency help',
      description: 'Small, direct access to urgent care and closest facilities.',
      link: '/hospitals',
      accent: 'alert',
      compact: true,
    },
    {
      icon: <UserRound size={22} />,
      title: 'Appointments',
      description: 'Track what is confirmed, pending, and already completed.',
      link: '/my-appointments',
      accent: 'gold',
    },
  ];

  const highlights = [
    { icon: <BadgeCheck size={18} />, label: 'Trusted care' },
    { icon: <MapPinned size={18} />, label: 'Location aware' },
    { icon: <Clock3 size={18} />, label: 'Fast booking' },
    { icon: <Brain size={18} />, label: 'Smart search' },
  ];

  const stats = [
    { value: '4.8/5', label: 'patient satisfaction' },
    { value: '120+', label: 'partner hospitals' },
    { value: '24/7', label: 'support availability' },
    { value: '6 min', label: 'average booking time' },
  ];

  const featureVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.08 },
    }),
  };

  return (
    <div className="home-page page-shell">
      <section className="hero-band">
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">
              <Sparkles size={14} />
              Modern care, closer to home
            </div>
            <h1>Healthcare that feels calm, clear, and beautifully easy to use.</h1>
            <p className="hero-text">
              TreatYou helps people find care, book appointments, and keep records without the usual clutter.
              It is built to feel trustworthy, human, and quick when the moment matters.
            </p>

            <div className="hero-actions">
              <Link to="/hospitals" className="btn btn-primary btn-lg">
                Find Hospitals
                <ArrowRight size={18} />
              </Link>
              <Link to="/appointment" className="btn btn-secondary btn-lg">
                Book Appointment
              </Link>
            </div>

            <div className="hero-highlights">
              {highlights.map((item) => (
                <span key={item.label} className="pill">
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>

            <div className="emergency-row">
              <Link to="/hospitals" className="btn btn-emergency btn-sm emergency-pill">
                <ShieldAlert size={16} />
                Emergency help
              </Link>
              <span className="emergency-note">
                Small, direct access to nearby urgent care and available beds.
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-panel surface"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="panel-orb panel-orb-one" />
            <div className="panel-orb panel-orb-two" />

            <div className="panel-topline">
              <span className="panel-kicker">Live care snapshot</span>
              <span className="pill">Updated now</span>
            </div>

            <div className="snapshot-card snapshot-primary">
              <div>
                <p className="snapshot-label">Nearest care</p>
                <h3>City Medical Center</h3>
              </div>
              <div className="snapshot-value">0.5 km</div>
            </div>

            <div className="snapshot-grid">
              <div className="snapshot-card">
                <p className="snapshot-label">Next open slot</p>
                <h4>10:30 AM</h4>
                <span className="snapshot-subtle">Cardiology</span>
              </div>
              <div className="snapshot-card">
                <p className="snapshot-label">Today</p>
                <h4>12 bookings</h4>
                <span className="snapshot-subtle">Confirmed</span>
              </div>
            </div>

            <div className="panel-list">
              <div className="panel-list-item">
                <span className="panel-dot teal" />
                <div>
                  <strong>Secure records</strong>
                  <p>Reports and prescriptions stay organized.</p>
                </div>
              </div>
              <div className="panel-list-item">
                <span className="panel-dot coral" />
                <div>
                  <strong>Fast contact</strong>
                  <p>Call or book without digging through menus.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card stat-card-tight">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-band">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <Sparkles size={14} />
                Core experiences
              </div>
              <h2 className="section-title">Built to feel thoughtful on first use.</h2>
            </div>
            <p className="section-copy">
              The layout stays grounded, the motion is subtle, and every call to action is meant to feel
              reassuring instead of loud.
            </p>
          </div>

          <div className="feature-grid">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                className={`feature-card surface-strong ${card.compact ? 'feature-card-compact' : ''} accent-${card.accent}`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={featureVariants}
                whileHover={{ y: -6 }}
              >
                <Link to={card.link} className="feature-link">
                  <div className="feature-icon">{card.icon}</div>
                  <div className="feature-copy">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                  <ArrowRight size={18} className="feature-arrow" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-band workflow-band">
        <div className="container workflow-grid">
          <div>
            <div className="eyebrow">
              <MapPinned size={14} />
              What users do next
            </div>
            <h2 className="section-title">A short path from concern to care.</h2>
          </div>
          <div className="workflow-steps">
            {[
              {
                title: 'Locate',
                text: 'See nearby hospitals, current distance, and whether they are open.',
              },
              {
                title: 'Choose',
                text: 'Pick a doctor, slot, or department from a clean, skimmable view.',
              },
              {
                title: 'Confirm',
                text: 'Finish the booking and keep the receipt, records, and details together.',
              },
            ].map((step, index) => (
              <div key={step.title} className="workflow-step surface">
                <span className="workflow-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {userLocation && (
        <section className="page-band">
          <div className="container">
            <div className="location-banner surface-strong">
              <div>
                <div className="eyebrow">
                  <MapPinned size={14} />
                  Location aware
                </div>
                <h2 className="section-title">We can tailor results to where you are.</h2>
                <p className="section-copy">
                  Your browser location helps surface nearby facilities first, so the next step feels immediate.
                </p>
              </div>
              <div className="location-coordinates">
                <strong>{userLocation.lat.toFixed(4)}°, {userLocation.lng.toFixed(4)}°</strong>
                <span className="muted">Detected location</span>
              </div>
              <Link to="/hospitals" className="btn btn-primary">
                Open nearby hospitals
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="page-band cta-band">
        <div className="container cta-card surface">
          <div>
            <div className="eyebrow">
              <PhoneCall size={14} />
              Ready when you are
            </div>
            <h2 className="section-title">Make the next health decision feel simpler.</h2>
            <p className="section-copy">
              TreatYou keeps the experience practical and calm, with enough warmth to feel human and enough
              clarity to move quickly.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/appointment" className="btn btn-primary">
              Start booking
            </Link>
            <Link to="/health-records" className="btn btn-outline">
              Review records
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
