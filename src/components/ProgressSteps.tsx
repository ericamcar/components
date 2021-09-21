import React, { useState, useEffect, useRef } from "react";
import "./ProgressSteps.css";

const ProgressSteps = () => {
  const [step, setStep] = useState(1);
  const progressRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    progressRef.current.style.width = `${33.3333 * (step - 1)}%`;
  }, [step]);

  const incrementStep = () => {
    setStep((prev) => prev + 1);
  };

  const decrementStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="container">
      <div className="progress-container">
        <div ref={progressRef} className="progress"></div>
        <div className={`circle ${step === 1 && "active"}`}>1</div>
        <div className={`circle ${step === 2 && "active"}`}>2</div>
        <div className={`circle ${step === 3 && "active"}`}>3</div>
        <div className={`circle ${step === 4 && "active"}`}>4</div>
      </div>

      <button className="btn" onClick={decrementStep} disabled={step === 1}>
        Previous
      </button>
      <button className="btn" onClick={incrementStep}>
        Next
      </button>
    </div>
  );
};

export default ProgressSteps;
