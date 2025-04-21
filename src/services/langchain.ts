import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 100,
    chunkOverlap: 0,
});

export async function textSplit(text) {
    const texts = await textSplitter.splitText(text);
    return texts
}