import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/step-progress.css';

interface StepProgressProps {
    steps: string[];
    initialStep?: number;
    onStepChange?: (currentStep: number) => void;
}

const StepProgress: React.FC<StepProgressProps> = ({ steps, initialStep = 0, onStepChange }) => {
    const [currentStep, setCurrentStep] = useState(initialStep);
    const navigate = useNavigate();

    const handleStepClick = (index: number) => {
        setCurrentStep(index);
        if (onStepChange) {
            onStepChange(index);
        }
    };

    return (
        <div className="step-progress">
            <button onClick={() => handleStepClick(currentStep - 1)} className="back-button" disabled={currentStep === 0}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor" className="back-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>
            <div className="steps-container">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className={`step-number ${index === currentStep ? 'active' : ''}`}>
                            {index + 1}
                        </div>
                        <div className={`step ${index === currentStep ? 'active' : ''}`} onClick={() => handleStepClick(index)}>
                            {step}
                        </div>
                        {index !== steps.length - 1 && <div className="step-divider"></div>}
                    </React.Fragment>
                ))}
            </div>
            <button onClick={() => navigate('/main')} className="close-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor" className="close-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}

export default StepProgress;
