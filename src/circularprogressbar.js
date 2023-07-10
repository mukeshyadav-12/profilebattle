import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProblemCircle = ({ problemsSolved, totalProblems }) => {
  const [showSuccessRate, setShowSuccessRate] = useState(false);
  const successRate = Math.round((problemsSolved / totalProblems) * 100);
  const percentage = Math.round((problemsSolved / totalProblems) * 100);

  const toggleSuccessRate = () => {
    setShowSuccessRate(!showSuccessRate);
  };

  const renderCenterText = () => {
    if (showSuccessRate) {
      return  `${successRate}%`;
    } else {
      return `${problemsSolved} / ${totalProblems}`;
    }
  };
  

  return (
    <div style={{ width: '200px' }}
    onMouseEnter={toggleSuccessRate}
        onMouseLeave={toggleSuccessRate}>
      <CircularProgressbar
        value={percentage}
        text={renderCenterText()}
        strokeWidth={10}
        styles={buildStyles({
          textSize: '15px',
          pathColor: '#28a745',
          trailColor: '#d3d3d3',
          textColor: '#28a745',
        })}
        
      />
    </div>
  );
};

export default ProblemCircle;
