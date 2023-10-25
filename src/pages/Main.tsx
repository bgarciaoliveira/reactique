import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dropdown from '../components/Dropdown';
import RadioButton from '../components/RadioButton';
import StepProgress from '../components/StepProgress';
import Textbox from '../components/Textbox'
import Label from '../components/Label'
import Title from '../components/Title';

import '../styles/dashboard.css';
import '../styles/grid.css';

const Main: React.FC = () => {
    const [radio, setRadio] = useState<string>('Não');
    const [currentStep, setCurrentStep] = useState(0);
    const [textbox, setTextbox] = useState('');

    return (
        <div className="main-wrapper">
            <Sidebar />

            <div className="container">

                <Title text="Reactique components"></Title>

                <div className="row">
                    <div className="col-4">
                        <Label text="Dropdown" />
                        <Dropdown
                            options={['Opção 1', 'Opção 2', 'Opção 3']}
                            placeholder="Selecione uma opção"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <Label text="Radio button" />
                        <RadioButton
                            options={['Opção 1', 'Opção 2', 'Opção 3']}
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
            </div>
        </div>
    );
}

export default Main;
