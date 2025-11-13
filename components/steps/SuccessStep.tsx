
import React, { useEffect } from 'react';

interface SuccessStepProps {
  onComplete: () => void;
}

const CheckIcon = () => (
    <svg className="w-16 h-16 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);

export const SuccessStep: React.FC<SuccessStepProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="text-center py-8">
        <CheckIcon />
        <h1 className="text-3xl font-bold text-white mt-4">Conta Criada com Sucesso!</h1>
        <p className="mt-2 text-gray-400">Redirecionando para o seu painel...</p>
        <div className="flex justify-center items-center mt-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
    </div>
  );
};
