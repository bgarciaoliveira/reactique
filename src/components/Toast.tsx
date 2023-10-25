import React, { useEffect } from 'react';
import '../styles/toast.css';

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    duration?: number; // Miliseconds
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 5000, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);

        return () => {
            clearTimeout(timer);
        };
    }, [duration, onClose]);

    const getToastStyles = () => {
        switch (type) {
            case 'success':
                return {
                    background: 'linear-gradient(0deg, #D1FADF, #D1FADF), linear-gradient(0deg, #027A48, #027A48)',
                    color: '#055F3A',
                    border: '1px solid #027A48'
                };
            case 'error':
                return {
                    backgroundColor: '#FCA19B',
                    color: '#7A2619',
                    borderColor: '#7A2619'
                };
            default:
                return {};
        }
    };

    return (
        <div className="toast" style={getToastStyles()}>
            {message}
        </div>
    );
}

export default Toast;
