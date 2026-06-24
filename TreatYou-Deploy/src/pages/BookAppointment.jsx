import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft, CalendarDays, Clock, Hospital, User } from 'lucide-react';
import '../App.css';
import './BookAppointment.css';

const hospitals = [
  { name: 'City Medical Center', sub: 'General & Emergency' },
  { name: 'Apollo Hospital', sub: 'Multi-specialty' },
  { name: 'Max Healthcare', sub: 'Surgery & Oncology' },
  { name: 'Fortis Hospital', sub: 'Pediatrics & Cardiology' },
];
const specialties = ['Cardiology', 'Neurology', 'General Surgery', 'Pediatrics', 'Orthopedics'];
const timeSlots = ['09:00 AM', '10:30 AM', '11:00 AM', '02:00 PM', '03:30 PM', '04:00 PM'];

const STEPS = [
  { label: 'Step 1', name: 'Hospital' },
  { label: 'Step 2', name: 'Schedule' },
  { label: 'Step 3', name: 'Your Info' },
];

const slide = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
  transition: { duration: 0.32, ease: [0.22,1,0.36,1] },
};

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    hospital: '', specialty: '', date: '', time: '',
    fullName: '', phone: '', email: '', symptoms: '',
  });

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const canNext = () => {
    if (step === 1) return form.hospital && form.specialty;
    if (step === 2) return form.date && form.time;
    if (step === 3) return form.fullName && form.phone && form.email;
    return false;
  };

  const submit = e => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <div className="book-appointment">
      <div className="container">
        <div className="booking-wrap">

          <motion.div className="booking-header"
            initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <span className="eyebrow-dot" />
              Appointment booking
            </span>
            <h1>Book your appointment</h1>
            <p>Three easy steps — choose a hospital, pick a time, and confirm your details.</p>
          </motion.div>

          {/* Stepper */}
          {!done && (
            <div className="stepper">
              {STEPS.map((s, i) => {
                const idx = i + 1;
                const status = step > idx ? 'completed' : step === idx ? 'active' : '';
                return (
                  <div key={s.name} className={`stepper-item ${status}`}>
                    <div className="step-dot">
                      {step > idx ? <CheckCircle2 size={14} /> : idx}
                    </div>
                    <div className="step-info">
                      <div className="step-info-label">{s.label}</div>
                      <div className="step-info-name">{s.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="booking-card">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div key="success" className="booking-success" {...slide}>
                  <div className="success-icon"><CheckCircle2 size={32} /></div>
                  <h2>Appointment confirmed!</h2>
                  <p>A confirmation has been sent to <strong>{form.email}</strong>.<br />
                     {form.hospital} · {form.date} · {form.time}</p>
                  <button className="btn btn-primary" onClick={() => { setDone(false); setStep(1); setForm({ hospital:'', specialty:'', date:'', time:'', fullName:'', phone:'', email:'', symptoms:'' }); }}>
                    Book another
                  </button>
                </motion.div>
              ) : step === 1 ? (
                <motion.div key="step1" {...slide}>
                  <div className="booking-step-title">Choose a hospital</div>
                  <p className="booking-step-sub">Select where you'd like to be seen and the department.</p>
                  <div className="booking-fields">
                    <div className="form-group">
                      <label className="form-label">Hospital</label>
                      <div className="hospital-select-grid">
                        {hospitals.map(h => (
                          <button key={h.name} type="button"
                            className={`hospital-opt ${form.hospital === h.name ? 'selected' : ''}`}
                            onClick={() => set('hospital', h.name)}
                          >
                            <div className="hospital-opt-name">{h.name}</div>
                            <div className="hospital-opt-sub">{h.sub}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Specialty</label>
                      <select className="form-select" value={form.specialty} onChange={e => set('specialty', e.target.value)}>
                        <option value="">Select specialty…</option>
                        {specialties.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="booking-nav">
                    <div />
                    <button className="btn btn-primary" disabled={!canNext()} onClick={() => setStep(2)}>
                      Next <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ) : step === 2 ? (
                <motion.div key="step2" {...slide}>
                  <div className="booking-step-title">Pick a date & time</div>
                  <p className="booking-step-sub">Choose when you'd like your appointment.</p>
                  <div className="booking-fields">
                    <div className="form-group">
                      <label className="form-label">Date</label>
                      <input type="date" className="form-input" value={form.date}
                        onChange={e => set('date', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Time slot</label>
                      <div className="time-slots">
                        {timeSlots.map(t => (
                          <button key={t} type="button"
                            className={`time-slot-btn ${form.time === t ? 'selected' : ''}`}
                            onClick={() => set('time', t)}
                          >{t}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="booking-nav">
                    <button className="btn btn-outline" onClick={() => setStep(1)}><ArrowLeft size={15} /> Back</button>
                    <button className="btn btn-primary" disabled={!canNext()} onClick={() => setStep(3)}>
                      Next <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="step3" {...slide}>
                  <div className="booking-step-title">Your details</div>
                  <p className="booking-step-sub">We'll use this to confirm your appointment.</p>
                  <form onSubmit={submit}>
                    <div className="booking-fields">
                      <div className="booking-fields booking-fields-2col">
                        <div className="form-group">
                          <label className="form-label">Full name</label>
                          <input className="form-input" value={form.fullName} onChange={e => set('fullName', e.target.value)} placeholder="Your name" required />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Phone</label>
                          <input className="form-input" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91…" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-input" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@email.com" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Symptoms or notes <span style={{color:'var(--muted-light)',fontWeight:400,textTransform:'none',letterSpacing:0}}>(optional)</span></label>
                        <textarea className="form-textarea" value={form.symptoms} onChange={e => set('symptoms', e.target.value)} placeholder="Describe what you're experiencing…" />
                      </div>
                    </div>
                    <div className="booking-nav">
                      <button type="button" className="btn btn-outline" onClick={() => setStep(2)}><ArrowLeft size={15} /> Back</button>
                      <button type="submit" className="btn btn-primary" disabled={!canNext()}>
                        Confirm booking <CheckCircle2 size={16} />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
