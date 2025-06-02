import React from 'react';

export default function Score() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Your ATS Score
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-6xl font-bold text-indigo-600 mb-4">
              85%
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Great job! Your resume matches well with the job description.
            </p>
            <div className="space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                View Details
              </button>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border border-indigo-600 hover:bg-indigo-50 transition">
                Upload Another
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
