import React, { useState, useEffect, useRef } from 'react';
import '../styles/dropdown.css';

interface DropdownProps {
    options: string[];
    placeholder?: string;
    onChange?: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder = "Selecione uma opção", onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const node = useRef<HTMLDivElement>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onChange) {
            onChange(option);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (node.current && !node.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={node}>
            <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedOption || placeholder}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor" className="dropdown-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            {isOpen && (
                <div className="dropdown-list">
                    {options.map(option => (
                        <div key={option} className="dropdown-list-item" onClick={() => handleOptionClick(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
