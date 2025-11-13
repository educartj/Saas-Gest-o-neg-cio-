import { User } from '../types';

export const initialUsers: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', avatar: `https://picsum.photos/seed/1/40`, role: 'Administrador', status: 'Ativo', lastLogin: '2023-10-26' },
    { id: 2, name: 'Bob Williams', email: 'bob@example.com', avatar: `https://picsum.photos/seed/2/40`, role: 'Editor', status: 'Ativo', lastLogin: '2023-10-25' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', avatar: `https://picsum.photos/seed/3/40`, role: 'Visualizador', status: 'Inativo', lastLogin: '2023-09-15' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', avatar: `https://picsum.photos/seed/4/40`, role: 'Editor', status: 'Ativo', lastLogin: '2023-10-27' },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', avatar: `https://picsum.photos/seed/5/40`, role: 'Visualizador', status: 'Ativo', lastLogin: '2023-10-20' },
    { id: 6, name: 'Fiona Glenanne', email: 'fiona@example.com', avatar: `https://picsum.photos/seed/6/40`, role: 'Administrador', status: 'Inativo', lastLogin: '2023-08-01' },
];
