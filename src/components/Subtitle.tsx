import React from 'react';
import '../styles/subtitle.css';

interface SubtitleProps {
    text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
    return <h1 className="subtitle">{text}</h1>;
}

export default Subtitle;
