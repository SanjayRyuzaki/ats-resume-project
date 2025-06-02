import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ATS Resume Checker
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get your resume ATS-ready with instant scoring
          </p>
          <div className="space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Get Started
            </button>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold border border-indigo-600 hover:bg-indigo-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
