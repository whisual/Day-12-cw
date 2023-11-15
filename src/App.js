import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate progress increment
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <div>
      <h2>Loading...</h2>
      <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '5px', width: '300px' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '20px',
            backgroundColor: '#4CAF50',
            borderRadius: '5px',
          }}
        />
      </div>
      <p>{`${progress}%`}</p>
    </div>
  );
};

export default ProgressBar;
