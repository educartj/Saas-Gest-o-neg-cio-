
import React, { useState } from 'react';

interface LoginProps {
    onLogin: () => void;
    onNavigateToRegister: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin, onNavigateToRegister }) => {
    const [email, setEmail] = useState('admin@saascorp.io');
    const [password, setPassword] = useState('password');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Em um aplicativo real, você validaria as credenciais aqui.
        // Para esta demonstração, qualquer entrada permitirá o login.
        onLogin();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white">SaaS Corp</h1>
                    <p className="mt-2 text-gray-400">Faça login para acessar seu painel</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Endereço de E-mail</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm rounded-t-md"
                                placeholder="Endereço de E-mail"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Senha</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm rounded-b-md"
                                placeholder="Senha"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary bg-gray-700 border-gray-600 focus:ring-primary rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                                Lembrar-me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-primary hover:text-primary-hover">
                                Esqueceu sua senha?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-hover focus:ring-offset-gray-800">
                            Logar
                        </button>
                    </div>
                </form>
                 <p className="mt-4 text-center text-sm text-gray-400">
                    Não tem uma conta?{' '}
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToRegister(); }} className="font-medium text-primary hover:text-primary-hover">
                       Crie uma
                    </a>
                </p>
            </div>
        </div>
    );
};