import { embedText } from "./openAi";
import { textSplit } from "./langchain";
import { buildVectorObjects } from "./vectorBuilder";
import { insertToPinecone } from "./pinecone";

export async function processAndStoreTexts(text: string) {
    const splitText = await textSplit(text)
    const embedding = await embedText(splitText);
    const vectors = buildVectorObjects(embedding, splitText)
    await insertToPinecone(vectors)
    return  'data saved'
    
}