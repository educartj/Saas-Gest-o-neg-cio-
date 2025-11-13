import React from 'react';
import { User } from '../types';

interface DeleteUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    user: User | null;
}

export const DeleteUserModal: React.FC<DeleteUserModalProps> = ({ isOpen, onClose, onConfirm, user }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-4">Confirmar Exclusão</h2>
                <p className="text-gray-400 mb-6">
                    Você tem certeza que deseja excluir o usuário <span className="font-bold text-white">{user?.name}</span>? Esta ação não pode ser desfeita.
                </p>
                <div className="pt-4 flex justify-end space-x-4">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">
                        Cancelar
                    </button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                        Excluir Usuário
                    </button>
                </div>
            </div>
        </div>
    );
};
