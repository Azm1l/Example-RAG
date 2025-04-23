import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: process.env.QDRANT_URL, port: parseInt(process.env.QDRANT_PORT) });

type QdrantPoint = {
    id: string | number;
    vector: number[];
    payload: Record<string, any>;
};

export async function getCollections() {
    const collections = await client.getCollections();
    return collections;
}

export async function initCollection(collectionName: string) {
    const { collections } = await client.getCollections();

    const exists = collections.some((col) => col.name === collectionName);
    if (!exists) {
        await client.createCollection(collectionName, {
            vectors: {
                size: 1536, distance: 'Cosine'
            }
        })
    }

}

export async function insertToQdrant(collectionName: string, points: QdrantPoint[]) {
    try {
        const operationInfo = await client.upsert(collectionName, {
            points
        })
        return operationInfo;
    } catch (e) {
        console.log(e)
        return {
            status: 'incompleted'
        }
    }
}

export async function queryToQdrant(collectionName: string, query: number[]) {
    try {
        const searchResult = await client.query(collectionName, {
            query: query,
            limit: parseInt(process.env.LIMIT_QUERY_QDRANT),
            with_payload: true
        })
        return searchResult.points;
    }
    catch (e) {
        console.log(e)
        return {
            status: 'error query'
        }
    }
}