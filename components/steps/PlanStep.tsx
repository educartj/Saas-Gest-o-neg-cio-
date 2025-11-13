
import React from 'react';

interface PlanStepProps {
    onBack: () => void;
    onComplete: () => void;
}

export const PlanStep: React.FC<PlanStepProps> = ({ onBack, onComplete }) => {
    return (
        <>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-white">Selecione seu Plano</h1>
                <p className="mt-2 text-gray-400">Passo 2 de 2 - Confirmação</p>
            </div>

            <div className="mt-8 space-y-6">
                <div className="border-2 border-primary rounded-lg p-6 bg-gray-700/50">
                    <h3 className="text-xl font-bold text-white">Plano Gratuito</h3>
                    <p className="text-3xl font-bold text-white my-4">
                        $0<span className="text-base font-medium text-gray-400">/mês</span>
                    </p>
                    <ul className="text-gray-300 space-y-2 text-sm">
                        <li className="flex items-center">
                             <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Acesso total por 30 dias.
                        </li>
                        <li className="flex items-center">
                             <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                           Após 30 dias, apenas administradores podem acessar.
                        </li>
                         <li className="flex items-center">
                             <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                           Usuários não-administradores serão desativados.
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row-reverse gap-4">
                    <button onClick={onComplete} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-hover focus:ring-offset-gray-800">
                        Concluir Cadastro
                    </button>
                     <button onClick={onBack} className="group relative w-full flex justify-center py-3 px-4 border border-gray-600 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-offset-gray-800">
                        Voltar
                    </button>
                </div>
            </div>
        </>
    );
};
