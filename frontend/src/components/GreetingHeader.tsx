import React from 'react';

interface GreetingHeaderProps {
  name?: string;
}

const GreetingHeader: React.FC<GreetingHeaderProps> = ({ name }) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold text-gray-800">
        {name ? `Welcome, ${name}!` : 'Welcome!'}
      </h2>
      <p className="text-gray-500 mt-2">Check your resume scores and history below.</p>
    </div>
  );
};

export default GreetingHeader;
