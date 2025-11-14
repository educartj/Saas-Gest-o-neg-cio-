import React, { useState, useEffect } from 'react';
import { User } from '../types';

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (user: User | Omit<User, 'id' | 'avatar' | 'lastLogin'>) => void;
    user: User | null;
}

export const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit, user }) => {
    const [formData, setFormData] = useState({ name: '', email: '', role: 'Visualizador' as User['role'], status: 'Ativo' as User['status'] });

    useEffect(() => {
        if (user) {
            setFormData({ name: user.name, email: user.email, role: user.role, status: user.status });
        } else {
            setFormData({ name: '', email: '', role: 'Visualizador', status: 'Ativo' });
        }
    }, [user, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (user) {
            onSubmit({ ...user, ...formData });
        } else {
            onSubmit(formData);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6">{user ? 'Editar Usuário' : 'Adicionar Usuário'}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400">Nome Completo</label>
                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm text-white focus:ring-primary focus:border-primary" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400">Endereço de E-mail</label>
                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm text-white focus:ring-primary focus:border-primary" />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-400">Função</label>
                        <select name="role" id="role" value={formData.role} onChange={handleChange} className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm text-white focus:ring-primary focus:border-primary">
                            <option>Administrador</option>
                            <option>Editor</option>
                            <option>Visualizador</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-400">Status</label>
                        <select name="status" id="status" value={formData.status} onChange={handleChange} className="mt-1 block w-full bg-gray-600 border-gray-500 rounded-md shadow-sm text-white focus:ring-primary focus:border-primary">
                            <option>Ativo</option>
                            <option>Inativo</option>
                        </select>
                    </div>
                    <div className="pt-4 flex justify-end space-x-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">Cancelar</button>
                        <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">{user ? 'Salvar Alterações' : 'Adicionar Usuário'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};