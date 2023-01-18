import React, { useState, useEffect } from 'react';

const ProgressBar = (props) => {
  const [filled, settIsFilled] = useState(0);
  const [running, setIsRunning] = useState(true);
  useEffect(() => {
    if (filled < 100 && running) {
      setTimeout(() => {
        settIsFilled((prev) => prev + 1);
      }, 200);
    } else if (filled >= 100 && running) {
      settIsFilled(0);
    } else {
      settIsFilled(filled);
    }
  }, [filled, running]);
  return (
    <div className="progressbar">
      <div
        style={{
          height: '100%',
          width: `${filled}%`,
          backgroundColor: 'blue',
        }}
      >
        <span>{filled}</span>
      </div>

      <button
        style={{ textAlign: 'center' }}
        onClick={() => {
          setIsRunning((prev) => !prev);
        }}
      >
        {running ? 'stop' : 'resume'}
      </button>
    </div>
  );
};

export default ProgressBar;
