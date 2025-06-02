import React from 'react';

export default function Upload() {
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
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6">
              <p className="text-gray-500">Drag and drop files here or click to browse</p>
            </div>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Upload Files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
