import OpenAI from "openai";

const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const azureApiKey = process.env.AZURE_OPENAI_KEY;
const azureResource = process.env.AZURE_RESOURCE;
const azureModel = process.env.AZURE_OPENAI_MODEL;
const azureApiVersion = process.env.AZURE_API_VERSION;
const azureEmbedModel = process.env.AZURE_EMBED_MODEL;
const azureEmbedVersion = process.env.AZURE_EMBED_VERSION;


const azureOpenAi = new OpenAI({
    apiKey: azureApiKey,
    baseURL: `${azureResource}/openai/deployments/${azureModel}`,
    defaultQuery: {'api-version': azureApiVersion},
    defaultHeaders: {'api-key': azureApiKey}
})

const azureEmbedText = new OpenAI({
    apiKey: azureApiKey,
    baseURL: `${azureResource}/openai/deployments/${azureEmbedModel}`,
    defaultQuery: {'api-version': azureEmbedVersion},
    defaultHeaders: {'api-key': azureApiKey}
})

export const chat = async (messages: string) => {
    const response = await azureOpenAi.chat.completions.create({
        model: '',
        messages: [{
            role: 'user',
            content: messages
        }]
    })
    return response.choices[0].message.content;
}

export const embedText = async (texts: string[]) => {
    const response = await azureEmbedText.embeddings.create({
        model: '',
        input: texts
    })
    return response.data.map(d => d.embedding);
}

export const embedTextUser = async (texts: string) => {
    const response = await azureEmbedText.embeddings.create({
        model: '',
        input: texts
    })
    return response.data[0].embedding;
}


export const chatOpenAi = async (messages: string) => {
    const response = await openAi.chat.completions.create({
        model: 'gpt-4o',
        messages: [{
            role: 'user',
            content: messages
        }]
    })
    return response.choices[0].message.content;
}

export const embedTextOpenAi = async (texts: string[]) => {
    const response = await openAi.embeddings.create({
        model: 'text-embedding-ada-002',
        input: texts
    })
    return response.data.map(d => d.embedding);
}

export const embedTextUserOpenAi = async (texts: string) => {
    const response = await openAi.embeddings.create({
        model: 'text-embedding-ada-002',
        input: texts
    })
    return response.data[0].embedding;
}


export function promtRag(userQuestion: string, queryResult: {payload: {text: string}}[]) {
    const context = queryResult.map(res => res.payload.text).join("\n\n");
    const prompt = `
    Gunakan konteks di bawah ini untuk menjawab pertanyaan pengguna.
    
    Konteks:
    ${context}
    
    Pertanyaan:
    ${userQuestion}
    
    Jawaban:
    `;
  
      return prompt;
} 