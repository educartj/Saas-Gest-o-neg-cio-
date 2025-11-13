import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const trafficData = [
  { source: 'Busca Orgânica', users: 4000 },
  { source: 'Direto', users: 3000 },
  { source: 'Referência', users: 2000 },
  { source: 'Mídia Social', users: 2780 },
];

const deviceData = [
  { name: 'Desktop', value: 400 },
  { name: 'Celular', value: 300 },
  { name: 'Tablet', value: 300 },
];

const COLORS = ['#6366F1', '#818CF8', '#A5B4FC'];

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">Fontes de Tráfego</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="source" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                <Legend />
                <Bar dataKey="users" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-white">Uso por Dispositivo</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={deviceData} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value">
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
       <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
           <h3 className="text-xl font-semibold mb-4 text-white">Mais Análises em Breve...</h3>
            <p className="text-gray-400">
                Relatórios detalhados sobre retenção de usuários, adoção de recursos e métricas de desempenho estarão disponíveis aqui.
            </p>
       </div>
    </div>
  );
};