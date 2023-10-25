import React from 'react';
import '../styles/RadioButton.css';

interface RadioButtonProps {
    options: string[];
    selectedOption: string;
    onChange: (selected: string) => void;
    displayMode?: 'inline' | 'block';
}

const RadioButton: React.FC<RadioButtonProps> = ({ options, selectedOption, onChange, displayMode = 'block' }) => {
    return (
        <div className={`radio-group ${displayMode}`}>
            {options.map((option, index) => (
                <div key={index} className="radio-container">
                    <input
                        type="radio"
                        id={`radio-${index}`}
                        name="radio-group"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => onChange(option)}
                        className="radio-input"
                    />
                    <label htmlFor={`radio-${index}`} className="radio-label-wrapper">
                        <span className="radio-button"></span>
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default RadioButton;
