import React, { useEffect, useState } from 'react';

export default function Score() {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    // Try to get score from localStorage (set after upload)
    const stored = localStorage.getItem('ats_score');
    if (stored) {
      setScore(Number(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Your ATS Score
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            {score !== null ? (
              <>
                <div className="text-6xl font-bold text-indigo-600 mb-4">
                  {score}%
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  {score >= 80
                    ? 'Great job! Your resume matches well with the job description.'
                    : score >= 50
                    ? 'Decent match. Consider improving your resume for a better fit.'
                    : 'Low match. Try to tailor your resume more closely to the job.'}
                </p>
              </>
            ) : (
              <p className="text-lg text-gray-500 mb-6">No score available. Please upload your resume and job description first.</p>
            )}
            <div className="space-x-4">
              <a href="/upload" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Upload Another
              </a>
              <a href="/dashboard" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border border-indigo-600 hover:bg-indigo-50 transition">
                View History
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
