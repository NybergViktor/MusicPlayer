import React, { useEffect, useState } from "react";
import "./PlayerTableStyle.css";
const PlayerTable = ({ isPlaying, restart, bpm }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 32;
  const stepDuration = (60 / bpm) * 1000;
  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % totalSteps);
      }, stepDuration);
    } else if (!isPlaying) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying, stepDuration, totalSteps]);

  useEffect(() => {
    if (restart) {
      setCurrentStep(0);
    }
  }, [restart]);

  return (
    <div className="player-table">
      <div className="indicator-bar">
        <div
          className="moving-dot"
          style={{ left: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>

      <div className="checkbox-grid">
        {[...Array(4)].map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {[...Array(totalSteps)].map((_, colIndex) => (
              <input type="checkbox" key={colIndex} className="checkbox" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerTable;
