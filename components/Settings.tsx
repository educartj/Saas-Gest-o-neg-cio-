import React from 'react';

export const Settings: React.FC = () => {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Configurações de Perfil</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-400">Nome</label>
                            <input type="text" id="firstName" defaultValue="SaaS" className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm text-white focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-400">Sobrenome</label>
                            <input type="text" id="lastName" defaultValue="Admin" className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm text-white focus:ring-primary focus:border-primary" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400">Endereço de E-mail</label>
                        <input type="email" id="email" defaultValue="admin@saascorp.io" className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm text-white focus:ring-primary focus:border-primary" />
                    </div>
                    <div className="pt-2 flex justify-end">
                        <button type="submit" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">Salvar Alterações</button>
                    </div>
                </form>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Configurações da API</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="apiKey" className="block text-sm font-medium text-gray-400">Sua Chave de API</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input type="text" id="apiKey" readOnly value="************************" className="flex-1 block w-full min-w-0 rounded-none rounded-l-md bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-primary" />
                            <button className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-600 bg-gray-600 text-gray-300 hover:bg-gray-500">Copiar</button>
                        </div>
                    </div>
                    <div className="pt-2 flex justify-end">
                        <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">Gerar Nova Chave</button>
                    </div>
                </div>
            </div>
        </div>
    );
};