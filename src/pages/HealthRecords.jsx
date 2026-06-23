import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Lock, Upload, Sparkles } from 'lucide-react';
import '../App.css';
import './HealthRecords.css';

const HealthRecords = () => {
  const records = [
    { id: 1, type: 'Medical Report', date: '2026-06-20', doctor: 'Dr. Rajesh Kumar', file: 'Cardiac_Report_June2026.pdf' },
    { id: 2, type: 'Lab Test Results', date: '2026-06-15', doctor: 'Lab Center', file: 'Blood_Test_Results.pdf' },
    { id: 3, type: 'Prescription', date: '2026-06-10', doctor: 'Dr. Priya Singh', file: 'Prescription_June2026.pdf' },
    { id: 4, type: 'X-Ray Report', date: '2026-05-28', doctor: 'Radiology', file: 'Chest_XRay_Report.pdf' },
  ];

  return (
    <div className="health-records">
      <motion.div
        className="records-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="eyebrow">
          <Sparkles size={14} />
          Secure archive
        </div>
        <h1>Health Records</h1>
        <p>Secure access to all your medical documents and reports</p>
      </motion.div>

      <div className="records-container">
        <div className="upload-section">
          <motion.div
            className="upload-area"
            whileHover={{ scale: 1.02 }}
          >
            <Upload size={40} />
            <h3>Upload Documents</h3>
            <p>Drag and drop your medical records here</p>
            <button className="btn btn-primary btn-sm">Choose File</button>
          </motion.div>
        </div>

        <div className="records-list">
          {records.map((record, index) => (
            <motion.div
              key={record.id}
              className="record-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="record-icon">
                <FileText size={24} />
              </div>
              <div className="record-info">
                <h4>{record.type}</h4>
                <p>{record.file}</p>
                <span className="meta">{record.date} • {record.doctor}</span>
              </div>
              <div className="record-actions">
                <button className="action-btn"><Eye size={18} /></button>
                <button className="action-btn"><Download size={18} /></button>
                <button className="action-btn"><Lock size={18} /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthRecords;
