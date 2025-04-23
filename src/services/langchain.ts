import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: parseInt(process.env.CHUNK_SIZE),
    chunkOverlap: parseInt(process.env.CHUNK_OVERLAP),
});

export async function textSplit(text: string) {
    const texts = await textSplitter.splitText(text);
    return texts
}