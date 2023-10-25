import React from 'react';
import '../styles/label.css';

interface LabelProps {
    text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
    return <label className="label">{text}</label>;
}

export default Label;
