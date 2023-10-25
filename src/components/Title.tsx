import React from 'react';
import '../styles/title.css';

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    return <h1 className="title">{text}</h1>;
}

export default Title;
