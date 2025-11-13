import React, { useState, useCallback } from 'react';
import { generateInsight } from '../services/geminiService';

interface AiInsightGeneratorProps {
    sampleData: object;
}

const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
);

export const AiInsightGenerator: React.FC<AiInsightGeneratorProps> = ({ sampleData }) => {
    const [prompt, setPrompt] = useState<string>('Resuma as principais métricas e a atividade recente dos usuários.');
    const [insight, setInsight] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateInsight = useCallback(async () => {
        if (!prompt) {
            setError('Por favor, insira um comando.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setInsight('');
        try {
            const result = await generateInsight(prompt, sampleData);
            setInsight(result);
        } catch (err: any) {
            setError(err.message || 'Falha ao gerar o insight.');
        } finally {
            setIsLoading(false);
        }
    }, [prompt, sampleData]);

    return (
        <div className="flex flex-col h-full">
            <h3 className="text-xl font-semibold text-white">Insights de Negócios com IA</h3>
            <p className="text-sm text-gray-400 mt-1 mb-4">Faça uma pergunta sobre seus dados.</p>
            
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-24 p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-primary focus:border-primary"
                placeholder="ex: Existem tendências nas inscrições de usuários?"
                disabled={isLoading}
            />
            
            <button
                onClick={handleGenerateInsight}
                disabled={isLoading}
                className="mt-4 w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-hover transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
                {isLoading ? 'Gerando...' : 'Gerar Insight'}
            </button>
            
            <div className="mt-4 flex-1 overflow-y-auto bg-gray-900 p-4 rounded-md min-h-[150px]">
                {isLoading && <LoadingSpinner />}
                {error && <p className="text-red-400">{error}</p>}
                {insight && <p className="text-gray-300 whitespace-pre-wrap">{insight}</p>}
                 {!isLoading && !error && !insight && <p className="text-gray-500">Seu insight gerado aparecerá aqui.</p>}
            </div>
        </div>
    );
};