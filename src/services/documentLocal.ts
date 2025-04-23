import PDFParser from 'pdf-parse'
import { textSplit } from './langchain';
import { embedText } from './openAi';
import { buildVectorQdrant } from './vectorBuilder';
import { insertToQdrant } from './qdrant';

export async function processPdf(file: Express.Multer.File, title: string, section: number) {
    try {
    const data = await PDFParser(file.buffer)
    const splitText = await textSplit(data.text);
    const embedding = await embedText(splitText);
    const vectors = buildVectorQdrant(embedding, splitText, section, title)
    await insertToQdrant(process.env.QDRANT_COLLECTION, vectors)
    return 'data saved'
    } catch (error) {
        console.log(error)
        return 'something wrong'
    }
}