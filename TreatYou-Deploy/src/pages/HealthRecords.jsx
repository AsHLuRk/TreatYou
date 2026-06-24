import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, FlaskConical, ScanLine, Pill, Download, Eye, Calendar, User } from 'lucide-react';
import '../App.css';
import './HealthRecords.css';

const initialRecords = [
  { id: 1, name: 'Blood Panel Report', doctor: 'Dr. Rajesh Kumar', date: 'Jun 15, 2025', type: 'lab', size: '1.2 MB' },
  { id: 2, name: 'MRI Brain Scan', doctor: 'Dr. Priya Singh', date: 'May 28, 2025', type: 'scan', size: '8.4 MB' },
  { id: 3, name: 'Prescription — Cardiology', doctor: 'Dr. Rajesh Kumar', date: 'Jun 15, 2025', type: 'rx', size: '0.3 MB' },
  { id: 4, name: 'Discharge Summary', doctor: 'Dr. Amit Patel', date: 'Apr 10, 2025', type: 'report', size: '0.8 MB' },
];

const typeIcon = { lab: <FlaskConical size={18} />, scan: <ScanLine size={18} />, rx: <Pill size={18} />, report: <FileText size={18} /> };

const HealthRecords = () => {
  const [records, setRecords] = useState(initialRecords);
  const fileRef = React.useRef();

  const handleDrop = e => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer?.files || e.target.files || []);
    const newRecords = files.map((f, i) => ({
      id: Date.now() + i,
      name: f.name,
      doctor: 'You',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      type: 'report',
      size: `${(f.size / 1024 / 1024).toFixed(1)} MB`,
    }));
    setRecords(prev => [...newRecords, ...prev]);
  };

  return (
    <div className="health-records">
      <div className="container" style={{ maxWidth: 820 }}>
        <motion.div className="records-header"
          initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        >
          <span className="eyebrow" style={{ marginBottom: 14, display: 'inline-flex' }}>
            <span className="eyebrow-dot" />
            Your health archive
          </span>
          <h1>Health records</h1>
          <p>Store reports, prescriptions, and scan results — organised and always accessible.</p>
        </motion.div>

        <div className="records-summary">
          {[
            { count: records.length, label: 'Total documents' },
            { count: records.filter(r => r.type === 'rx').length, label: 'Prescriptions' },
            { count: records.filter(r => r.type === 'lab' || r.type === 'scan').length, label: 'Lab & scans' },
          ].map(s => (
            <div key={s.label} className="summary-card">
              <div className="summary-card-count">{s.count}</div>
              <div className="summary-card-label">{s.label}</div>
            </div>
          ))}
        </div>

        <label
          className="upload-zone"
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
        >
          <input type="file" ref={fileRef} multiple onChange={handleDrop} />
          <div className="upload-zone-icon"><Upload size={22} /></div>
          <h3>Upload a document</h3>
          <p>Drag & drop or click to browse. PDF, JPG, or PNG accepted.</p>
          <span className="btn btn-ghost btn-sm">Choose files</span>
        </label>

        <div className="records-grid">
          {records.map((r, i) => (
            <motion.div key={r.id} className="record-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <div className={`record-type-icon ${r.type}`}>{typeIcon[r.type]}</div>
              <div className="record-info">
                <div className="record-name">{r.name}</div>
                <div className="record-meta">
                  <span className="record-meta-item"><User size={11} />{r.doctor}</span>
                  <span className="record-meta-item"><Calendar size={11} />{r.date}</span>
                  <span className="record-meta-item"><FileText size={11} />{r.size}</span>
                </div>
              </div>
              <div className="record-actions">
                <button className="btn btn-ghost btn-xs"><Eye size={13} /> View</button>
                <button className="btn btn-outline btn-xs"><Download size={13} /></button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HealthRecords;
