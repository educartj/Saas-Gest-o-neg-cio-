import React from 'react';
import { Metric, User } from '../types';
import { Card } from './Card';
import { Chart } from './Chart';
import { AiInsightGenerator } from './AiInsightGenerator';

const mockMetrics: Metric[] = [
  { title: 'Receita Total', value: '$45,231.89', change: '+20.1%', changeType: 'increase' },
  { title: 'Assinaturas', value: '+2350', change: '+180.1%', changeType: 'increase' },
  { title: 'Vendas', value: '+12,234', change: '+19%', changeType: 'increase' },
  { title: 'Ativos Agora', value: '98', change: '-2.5%', changeType: 'decrease' },
];

interface DashboardProps {
  users: User[];
}

export const Dashboard: React.FC<DashboardProps> = ({ users }) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {mockMetrics.map((metric, index) => (
          <Card key={index} {...metric} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">Visão Geral de Inscrições de Usuários</h3>
          <Chart />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <AiInsightGenerator sampleData={{ metrics: mockMetrics, recentUsers: users.slice(0, 2) }} />
        </div>
      </div>
    </div>
  );
};