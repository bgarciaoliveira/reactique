import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dropdown from '../components/Dropdown';
import RadioButton from '../components/RadioButton';
import StepProgress from '../components/StepProgress';
import Textbox from '../components/Textbox'
import Label from '../components/Label'
import Title from '../components/Title';
import Button from '../components/Button';
import Toast from '../components/Toast';

import '../styles/dashboard.css';
import '../styles/grid.css';

const Main: React.FC = () => {
    const [radio, setRadio] = useState<string>('Não');
    const [currentStep, setCurrentStep] = useState(0);
    const [textbox, setTextbox] = useState('');
    const [isLoading, setIsLoading] = useState([false, false, false]);

    const [toasts, setToasts] = useState<Array<{ id: number, message: string, type: 'success' | 'error' }>>([]);
    let toastId = 0;

    const handleButtonClick = (index: number) => {
        if (isLoading[index]) return;

        const newLoadingState = [...isLoading];
        newLoadingState[index] = true;
        setIsLoading(newLoadingState);

        setTimeout(() => {
            const updatedLoadingState = [...newLoadingState];
            updatedLoadingState[index] = false;
            setIsLoading(updatedLoadingState);
        }, 2000);
    }

    const handleButtonToast = (type: 'success' | 'error') => {
        const message = type === 'success' ? 'Success toast!' : 'Error toast!';
        setToasts(prevToasts => [...prevToasts, { id: toastId++, message, type }]);
    }

    const removeToast = (id: number) => {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    }

    return (
        <div className="main-wrapper">
            <Sidebar />

            <div className="container">

                <Title text="Reactique components"></Title>

                <div className="row">
                    <div className="col-4">
                        <Label text="Dropdown" />
                        <Dropdown
                            options={['Option 1', 'Option 2', 'Option 3']}
                            placeholder="Select an option"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <Label text="Radio button" />
                        <RadioButton
                            options={['Option 1', 'Option 2', 'Option 3']}
                            displayMode="inline"
                            selectedOption={radio}
                            onChange={setRadio}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Label text="Step Progress" />

                        <StepProgress
                            steps={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
                            onStepChange={(step) => setCurrentStep(step)}
                        />

                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Label text="TextBox" />
                        <Textbox
                            placeholder="Placeholder textbox"
                            value={textbox}
                            onChange={setTextbox}
                        />
                    </div>

                </div>

                <div className="row">
                    <div className="col-12">
                        <Label text="Buttons" />

                        <div className="row">
                            <div className="col-2">
                                <Button label="Primary" onClick={() => handleButtonClick(0)} variant="primary" width={200} isLoading={isLoading[0]} />
                            </div>

                            <div className="col-2">
                                <Button label="Neutral" onClick={() => handleButtonClick(1)} variant="neutral" width={200} isLoading={isLoading[1]} />
                            </div>

                            <div className="col-2">
                                <Button label="Danger" onClick={() => handleButtonClick(2)} variant="danger" width={200} isLoading={isLoading[2]} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Label text="Toast" />

                        <div className="row">
                            <div className="col-2">
                                <Button label="Success" onClick={() => handleButtonToast('success')} variant="primary" width={200} />
                            </div>

                            <div className="col-2">
                                <Button label="Error" onClick={() => handleButtonToast('error')} variant="neutral" width={200} />
                            </div>
                        </div>

                        {toasts.map(toast => (
                            <Toast key={toast.id} message={toast.message} type={toast.type} duration={2000} onClose={() => removeToast(toast.id)} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;
