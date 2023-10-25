import { FC, CSSProperties } from 'react';
import '../styles/button.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'neutral' | 'danger';
    isLoading?: boolean;
    className?: string;
    width?: string | number;
}

const Button: FC<ButtonProps> = ({ label, onClick, type = 'button', variant = 'primary', isLoading = false, className = '', width, ...props }) => {
    const classNames = `btn btn-${variant} ${isLoading ? 'loading' : ''} ${className}`;

    const style: CSSProperties = width ? { width: typeof width === 'number' ? `${width}px` : width } : {};

    return (
        <button type={type} className={classNames} onClick={onClick} style={style} {...props} disabled={isLoading}>
            {isLoading ? <LoadingIcon /> : label}
        </button>
    );
}

const LoadingIcon: FC = () => {
    return (
        <svg className="spin" width="24" height="24" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" stroke="#fafafa" strokeLinecap="round" />
        </svg>
    );
}

export default Button;
