import { embedTextUser, buildOpenAiPromt, chat } from "./openAi";
import { queryPinecone } from "./pinecone";

export async function queryVectore(text: string) {
    const embedQuestionUser = await embedTextUser(text)
    const result = await queryPinecone(embedQuestionUser); 
    const prompt = await buildOpenAiPromt(text, result)
    const reply = await chat(prompt)
    return reply
}