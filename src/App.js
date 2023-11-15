import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: 'grid', justifyContent: 'center', textAlign: 'center'
    }}>
      <h4>Progress Bar</h4>
      <div style={{ border: '1px solid Grey', borderRadius: '15px', padding: '2px', width: '500px', height: '22px', }}>
        <div
          style={{
            width: `${progress}%`,
            height: '20px',
            backgroundColor: 'Green',
            borderRadius: '10px'

          }}
        >{`${progress}%`}</div>
      </div>

      <p>Loading...</p>

    </div>
  );
};

export default ProgressBar;
