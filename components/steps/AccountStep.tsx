
import React, { useState } from 'react';

interface AccountStepProps {
  onNext: (data: any) => void;
  onNavigateToLogin: () => void;
}

export const AccountStep: React.FC<AccountStepProps> = ({ onNext, onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Criar sua Conta</h1>
        <p className="mt-2 text-gray-400">Passo 1 de 2 - Detalhes da conta</p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm space-y-4">
          <input name="fullName" type="text" required value={formData.fullName} onChange={handleChange} className="appearance-none relative block w-full px-3 py-3 border border-gray-500 bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md" placeholder="Nome Completo" />
          <input name="companyName" type="text" required value={formData.companyName} onChange={handleChange} className="appearance-none relative block w-full px-3 py-3 border border-gray-500 bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md" placeholder="Nome da Empresa" />
          <input name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="appearance-none relative block w-full px-3 py-3 border border-gray-500 bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md" placeholder="Endereço de E-mail" />
          <input name="password" type="password" autoComplete="current-password" required value={formData.password} onChange={handleChange} className="appearance-none relative block w-full px-3 py-3 border border-gray-500 bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md" placeholder="Senha" />
        </div>
        
        <div>
          <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-hover focus:ring-offset-gray-800">
            Continuar
          </button>
        </div>
      </form>
       <p className="mt-4 text-center text-sm text-gray-400">
        Já tem uma conta?{' '}
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToLogin(); }} className="font-medium text-primary hover:text-primary-hover">
            Faça login
        </a>
      </p>
    </>
  );
};