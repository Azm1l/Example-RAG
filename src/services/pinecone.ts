import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
  apiKey: process.env.PINECONE_KEY
});
const index = pc.index('trial');

export async function insertToPinecone(vectors: { id: string; values: number[]; metadata: any }[]) {
  await index.upsert(vectors)
}

export async function queryPinecone(vector: number[]) {
  try {
    const queryResponse = await index.query({
      vector,
      topK: 5,
      includeValues: false,
      includeMetadata: true,
    })
    return queryResponse.matches;
  }
  catch (error) {
    console.log(error)
    return null
  }
}

