import React from 'react';
import '../styles/textbox.css';

interface TextboxProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const Textbox: React.FC<TextboxProps> = ({ placeholder, value, onChange }) => {
    return (
        <input
            type="text"
            className="textbox"
            placeholder={placeholder}
            value={value}
            onChange={e => onChange && onChange(e.target.value)}
        />
    );
}

export default Textbox;
