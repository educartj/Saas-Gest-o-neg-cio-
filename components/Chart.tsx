import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', inscricoes: 400 },
  { name: 'Fev', inscricoes: 300 },
  { name: 'Mar', inscricoes: 600 },
  { name: 'Abr', inscricoes: 800 },
  { name: 'Mai', inscricoes: 500 },
  { name: 'Jun', inscricoes: 700 },
  { name: 'Jul', inscricoes: 900 },
];

export const Chart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 20, left: -10, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
          <Legend />
          <Line type="monotone" dataKey="inscricoes" stroke="#6366F1" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};