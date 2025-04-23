import { getCollections, initCollection } from "../services/qdrant";
import { insertVectorQdrant } from "../services/qdrantVectorPipeline";
import { Request, Response } from "express";

export async function getCollectionsHandler(req: Request, res: Response) {
    const collections = await getCollections();
    res.json(collections);
}

export async function initCollectionHandler(req: Request, res: Response) {
    await initCollection(process.env.QDRANT_COLLECTION);
    res.json({ message: 'Collection created successfully' });
}

export async function insertToQdrantHandler(req: Request, res: Response) {
    const { text, section, title } = req.body;
    if (!text) {
         res.status(400).json({
            error: "text must be have a some value!"
        })
        return
    }

    if (!section) {
        res.status(400).json({
            error: "text must be have a some value!"
        })
        return
    }

    if (!title) {
        res.status(400).json({
            error: "title must be have a some value!"
        })
        return
    }
    const result = await insertVectorQdrant(text, section, title);
    res.json({ result });
}