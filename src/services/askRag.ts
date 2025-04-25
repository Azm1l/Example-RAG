import { embedTextUser, chat, promtRag } from "./openAi";
import { queryToQdrant } from "./qdrant";

export async function askRag(text: string, title: string, section: string) {
    const embedQuestionUser = await embedTextUser(text);
    return embedQuestionUser
    const resultQuery = await queryToQdrant(process.env.QDRANT_COLLECTION, embedQuestionUser, title, section);
    const prompt = promtRag(text, resultQuery)
    const reply = await chat(prompt)
    return reply
}