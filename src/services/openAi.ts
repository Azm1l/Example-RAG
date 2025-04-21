import OpenAI from "openai";

const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export const chat = async (messages: string) => {
    const response = await openAi.chat.completions.create({
        model: 'gpt-4o',
        messages: [{
            role: 'user',
            content: messages
        }]
    })
    return response.choices[0].message.content;
}

export const embedText = async (texts: string[]) => {
    const response = await openAi.embeddings.create({
        model: 'text-embedding-3-small',
        input: texts
    })
    return response.data.map(d => d.embedding);
}

export const embedTextUser = async (texts: string) => {
    const response = await openAi.embeddings.create({
        model: 'text-embedding-3-small',
        input: texts
    })
    return response.data[0].embedding;
}

export async function buildOpenAiPromt(userQuery: string, matches: { metadata?: { text?: string } }[]) {
    const context = matches.map(match => match.metadata.text).join("\n\n");

    const prompt = `
  Gunakan konteks di bawah ini untuk menjawab pertanyaan pengguna.
  
  Konteks:
  ${context}
  
  Pertanyaan:
  ${userQuery}
  
  Jawaban:
  `;

    return prompt;

}