// import { useState, useEffect } from "react";

// const ProgressBar = ({ value = 0 }) => {
//   const [progress, setProgress] = useState(value);
//   useEffect(() => {
//     setProgress(Math.min(100, Math.max(value, 0)));
//   }, [value]);

//   return (
//     <div className="progress-bar">
//       <span className="progress-bar__fill" style={{color: `${progress < 49 ? "black": "white" }`}}>{progress.toFixed()}%</span>
//       <div id="progress" style={{ width: `${progress}%` }}></div>
//     </div>
//   );
// };
// export default ProgressBar;



import { useEffect, useState } from "react";
import { MAX, MIN } from "./constants";

export default function ProgressBar({ value = 0, onComplete = () => {} }) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(Math.max(value, MIN), MAX));

    if (value >= MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progress">
      <span
        style={{
          color: percent > 49 ? "white" : "black"
        }}
      >
        {percent.toFixed()}%
      </span>
      <div
        // style={{ width: `${percent}%` }}
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left"
        }}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent}
        role="progressbar"
      />
    </div>
  );
}