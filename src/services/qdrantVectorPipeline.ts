import { embedText } from "./openAi";
import { textSplit } from "./langchain";
import { insertToQdrant } from "./qdrant";
import { buildVectorQdrant } from "./vectorBuilder";

export async function insertVectorQdrant(text: string, section: number, title: string) {
    try {
        const splitText = await textSplit(text)
        const embedding = await embedText(splitText);
        const vectors = buildVectorQdrant(embedding, splitText, section, title)
        await insertToQdrant(process.env.QDRANT_COLLECTION, vectors)
        return 'data saved'
    } catch (e) {
        console.log(e)
        return 'somethin wrong'
    }
}