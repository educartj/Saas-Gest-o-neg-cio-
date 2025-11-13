import React, { useState } from 'react';
import { User } from '../types';
import { UserModal } from './UserModal';
import { DeleteUserModal } from './DeleteUserModal';

interface UsersProps {
    users: User[];
    onAddUser: (user: Omit<User, 'id' | 'avatar' | 'lastLogin'>) => void;
    onUpdateUser: (user: User) => void;
    onDeleteUser: (userId: number) => void;
}

export const Users: React.FC<UsersProps> = ({ users, onAddUser, onUpdateUser, onDeleteUser }) => {
    const [isUserModalOpen, setUserModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleOpenAddModal = () => {
        setSelectedUser(null);
        setUserModalOpen(true);
    };

    const handleOpenEditModal = (user: User) => {
        setSelectedUser(user);
        setUserModalOpen(true);
    };

    const handleOpenDeleteModal = (user: User) => {
        setSelectedUser(user);
        setDeleteModalOpen(true);
    };

    const handleUserSubmit = (user: User | Omit<User, 'id' | 'avatar' | 'lastLogin'>) => {
        if ('id' in user) {
            onUpdateUser(user as User);
        } else {
            onAddUser(user);
        }
        setUserModalOpen(false);
    };

    const confirmDelete = () => {
        if (selectedUser) {
            onDeleteUser(selectedUser.id);
            setDeleteModalOpen(false);
        }
    };

    return (
        <>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-white">Usuários</h2>
                    <button onClick={handleOpenAddModal} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
                        Adicionar Usuário
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs text-gray-300 uppercase bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3">Nome</th>
                                <th scope="col" className="px-6 py-3">Função</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Último Login</th>
                                <th scope="col" className="px-6 py-3 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap flex items-center">
                                        <img className="w-10 h-10 rounded-full mr-4" src={user.avatar} alt={`${user.name} avatar`} />
                                        <div>
                                            <div>{user.name}</div>
                                            <div className="text-xs text-gray-500">{user.email}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">{user.role}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'Ativo' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{user.lastLogin}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => handleOpenEditModal(user)} className="font-medium text-primary hover:underline">Editar</button>
                                        <button onClick={() => handleOpenDeleteModal(user)} className="font-medium text-red-500 hover:underline ml-4">Excluir</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <UserModal 
                isOpen={isUserModalOpen} 
                onClose={() => setUserModalOpen(false)} 
                onSubmit={handleUserSubmit} 
                user={selectedUser} 
            />
            <DeleteUserModal
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                user={selectedUser}
            />
        </>
    );
};