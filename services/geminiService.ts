import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Chave da API Gemini não encontrada. Por favor, configure a variável de ambiente API_KEY.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export async function generateInsight(prompt: string, data: object): Promise<string> {
    if (!API_KEY) {
        return Promise.reject(new Error("A Chave de API para o Gemini não está configurada. O recurso de IA está desativado."));
    }

    const model = 'gemini-2.5-flash';
    
    const fullPrompt = `
      Você é um analista de dados sênior de uma empresa SaaS. Sua tarefa é fornecer um resumo conciso e perspicaz com base nos dados fornecidos e na solicitação do usuário.

      **Solicitação do Usuário:** "${prompt}"

      **Dados JSON:**
      ${JSON.stringify(data, null, 2)}

      **Sua Análise:**
    `;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: fullPrompt,
            config: {
                systemInstruction: "Você é um analista de dados SaaS prestativo e perspicaz. Responda em uma linguagem clara e de negócios. Não use markdown.",
                temperature: 0.5,
                topP: 0.95,
            }
        });

        if (!response.text) {
          throw new Error("Recebida uma resposta vazia do modelo de IA.");
        }

        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Falha ao gerar insight do modelo de IA. Verifique sua conexão ou chave de API.");
    }
}