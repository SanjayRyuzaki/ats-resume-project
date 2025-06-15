import React from 'react';

interface UploadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const UploadButton: React.FC<UploadButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
      {...props}
    >
      {children}
    </button>
  );
};

export default UploadButton;
