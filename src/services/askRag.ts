import { embedTextUser, chat } from "./openAi";
import { queryToQdrant } from "./qdrant";

export async function askRag(text: string) {
    const embedQuestionUser = await embedTextUser(text);
    const resultQuery = await queryToQdrant(process.env.QDRANT_COLLECTION, embedQuestionUser);
    return resultQuery
}