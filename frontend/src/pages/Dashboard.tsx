import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Dashboard
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome back! Here's your resume scoring history.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center text-gray-500 py-8">
              <p>No resume uploads yet.</p>
              <button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Upload Your First Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
