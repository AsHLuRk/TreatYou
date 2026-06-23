import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import './BookAppointment.css';

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    hospital: '',
    doctor: '',
    specialty: '',
    date: '',
    time: '',
    fullName: '',
    phone: '',
    email: '',
    symptoms: ''
  });

  const hospitals = ['City Medical Center', 'Apollo Hospital', 'Max Healthcare', 'Fortis Hospital'];
  const specialties = ['Cardiology', 'Neurology', 'General Surgery', 'Pediatrics', 'Orthopedics'];
  const timeSlots = ['09:00 AM', '10:30 AM', '11:00 AM', '02:00 PM', '03:30 PM', '04:00 PM'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    alert('Appointment booked successfully. Check your email for confirmation.');
  };

  return (
    <div className="book-appointment-container">
      <motion.div
        className="booking-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Book Your Appointment</h1>
        <p>Schedule a consultation with our expert doctors</p>
      </motion.div>

      <div className="booking-content">
        <div className="progress-bar">
          {[1, 2, 3].map((s) => (
            <motion.div
              key={s}
              className={`progress-step ${step >= s ? 'active' : ''}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <div className="step-number">{s}</div>
              <div className="step-label">
                {s === 1 && 'Choose Hospital'}
                {s === 2 && 'Select Time'}
                {s === 3 && 'Your Details'}
              </div>
            </motion.div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Hospital & Doctor Selection */}
            {step === 1 && (
              <div className="form-step">
                <h2>Choose Hospital & Specialty</h2>
                
                <div className="form-group">
                  <label className="form-label">Select Hospital</label>
                  <select
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">-- Choose Hospital --</option>
                    {hospitals.map(h => <option key={h} value={h}>{h}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Specialty</label>
                  <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">-- Choose Specialty --</option>
                    {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Doctor</label>
                  <input
                    type="text"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter doctor name or select from list"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <div className="form-step">
                <h2>Choose Date & Time</h2>

                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Available Time Slots</label>
                  <div className="time-slots">
                    {timeSlots.map(slot => (
                      <motion.button
                        key={slot}
                        type="button"
                        className={`time-slot ${formData.time === slot ? 'selected' : ''}`}
                        onClick={() => setFormData(prev => ({ ...prev, time: slot }))}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Clock size={16} />
                        {slot}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Any Symptoms or Concerns?</label>
                  <textarea
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Describe your symptoms..."
                  ></textarea>
                </div>
              </div>
            )}

            {/* Step 3: Personal Details */}
            {step === 3 && (
              <div className="form-step">
                <h2>Your Contact Information</h2>

                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91-XXXXX-XXXXX"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Booking Summary */}
                <div className="booking-summary">
                  <h3>Booking Summary</h3>
                  <div className="summary-item">
                    <span>Hospital:</span>
                    <strong>{formData.hospital}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Specialty:</span>
                    <strong>{formData.specialty}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Date & Time:</span>
                    <strong>{formData.date} at {formData.time}</strong>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <div className="form-navigation">
            <button
              type="button"
              onClick={handleBack}
              className="btn btn-outline"
              style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
            >
              Back
            </button>
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
              >
                Confirm Appointment
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
