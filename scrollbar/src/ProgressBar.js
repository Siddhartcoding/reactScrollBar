import { useState, useEffect } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [progress, setProgress] = useState(value);
  useEffect(() => {
    setProgress(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="progress-bar">
      <span className="progress-bar__fill">{progress.toFixed()}%</span>
      <div id="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
export default ProgressBar;
