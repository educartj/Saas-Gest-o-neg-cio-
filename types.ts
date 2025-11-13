export enum Page {
  DASHBOARD = 'Painel',
  USERS = 'Usuários',
  ANALYTICS = 'Análises',
  SETTINGS = 'Configurações',
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: 'Administrador' | 'Editor' | 'Visualizador';
  status: 'Ativo' | 'Inativo';
  lastLogin: string;
}

export interface Metric {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}