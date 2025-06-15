import React from 'react';

interface ResumeCardProps {
  title: string;
  uploadDate: string;
  score: number;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ title, uploadDate, score }) => {
  return (
    <div className="border rounded-lg p-6 shadow-sm bg-gray-50 flex flex-col justify-between">
      <div>
        <div className="text-lg font-semibold text-gray-800 mb-2">{title}</div>
        <div className="text-sm text-gray-500 mb-4">{new Date(uploadDate).toLocaleString()}</div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-2xl font-bold text-indigo-600">{score}%</span>
        <a href="/score" className="text-indigo-500 hover:underline text-sm">View</a>
      </div>
    </div>
  );
};

export default ResumeCard;
