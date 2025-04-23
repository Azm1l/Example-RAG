import { Request, Response } from 'express';
import { uploadToAzure, generateSasUrl } from '../services/azureBlobStorage';

export async function uploadToAzureHandler(req: Request, res: Response) {
    try {
        const { blobName } = req.body
        if (!blobName) {
            res.status(400).json({ error: "blob name are required" });
            return;
        }

        const result = await uploadToAzure(req.file, blobName);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function generateSasUrlHandler(req: Request, res: Response) {
    try {
        const { blobName, expiryTime } = req.query;
        if (!blobName || !expiryTime) {
            res.status(400).json({ error: "Container name, blob name, and expiry time are required" });
            return;
        }

        const sasUrl = await generateSasUrl(
            blobName as string,
            expiryTime as string
        );
        res.json({ sasUrl });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} 
