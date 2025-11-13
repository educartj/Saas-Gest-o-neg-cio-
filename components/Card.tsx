import React from 'react';
import { Metric } from '../types';

const ArrowUpIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
);
const ArrowDownIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
);


export const Card: React.FC<Metric> = ({ title, value, change, changeType }) => {
  const isIncrease = changeType === 'increase';
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
      <h3 className="text-sm font-medium text-gray-400">{title}</h3>
      <p className="text-3xl font-bold text-white mt-2">{value}</p>
      <div className={`mt-4 flex items-center text-sm ${isIncrease ? 'text-green-400' : 'text-red-400'}`}>
        {isIncrease ? <ArrowUpIcon /> : <ArrowDownIcon />}
        <span className="ml-1">{change} do último mês</span>
      </div>
    </div>
  );
};