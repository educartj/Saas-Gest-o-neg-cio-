
import React, { useState } from 'react';
import { AccountStep } from './steps/AccountStep';
import { PlanStep } from './steps/PlanStep';
import { SuccessStep } from './steps/SuccessStep';

interface RegisterProps {
    onRegisterSuccess: () => void;
    onNavigateToLogin: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onRegisterSuccess, onNavigateToLogin }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        password: '',
    });

    const handleAccountSubmit = (data: typeof formData) => {
        setFormData(data);
        setStep(2);
    };
    
    const handlePlanSubmit = () => {
        // Em um aplicativo real, você enviaria os dados do formulário para o seu backend aqui.
        console.log("Registration data:", formData);
        setStep(3);
    };


    const renderStep = () => {
        switch(step) {
            case 1:
                return <AccountStep onNext={handleAccountSubmit} onNavigateToLogin={onNavigateToLogin} />;
            case 2:
                return <PlanStep onBack={() => setStep(1)} onComplete={handlePlanSubmit} />;
            case 3:
                return <SuccessStep onComplete={onRegisterSuccess} />;
            default:
                return <AccountStep onNext={handleAccountSubmit} onNavigateToLogin={onNavigateToLogin} />;
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
                {renderStep()}
            </div>
        </div>
    );
};