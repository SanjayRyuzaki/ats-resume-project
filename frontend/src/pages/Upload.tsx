import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Upload() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobFile, setJobFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const resumeInputRef = useRef<HTMLInputElement>(null);
  const jobInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (f: File | null) => void) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!resumeFile || !jobFile) {
      setError('Please select both resume and job description files.');
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('resume', resumeFile);
      formData.append('job', jobFile);
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/score', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem('ats_score', res.data.score);
      setLoading(false);
      navigate('/score');
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.error || 'Upload failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Upload Your Resume
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Upload your resume and job description to get your ATS score
          </p>
          <motion.form
            className="bg-white rounded-lg shadow-lg p-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <label className="block text-left font-semibold mb-2">Resume (PDF or DOCX)</label>
              <input
                type="file"
                accept=".pdf,.docx"
                ref={resumeInputRef}
                onChange={e => handleFileChange(e, setResumeFile)}
                className="block w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-left font-semibold mb-2">Job Description (PDF or DOCX)</label>
              <input
                type="file"
                accept=".pdf,.docx"
                ref={jobInputRef}
                onChange={e => handleFileChange(e, setJobFile)}
                className="block w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            {error && <div className="text-red-600 mb-4">{error}</div>}
            <motion.button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition w-full"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
            >
              {loading ? 'Uploading...' : 'Upload & Score'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
