import { Request, Response } from "express";
import { processPdf } from "../services/documentLocal";
import { uploadToAzure } from "../services/azureBlobStorage";

export async function processPdfHandler(req: Request, res: Response) {
    try {
        const {section, title} = req.body
        if (!req.file) {
            res.status(400).json({
                error: 'file is required'
            })
            return
        }

        if (req.file.mimetype !== 'application/pdf') {
            return res.status(400).json({
                error: 'file must be a PDF'
            });
        }
        
        if (!title) {
            res.status(400).json({
                error: 'title is required'
            })
            return
        }
        if (!section) {
            res.status(400).json({
                error: 'section is required'
            })
            return
        }
        const file = await uploadToAzure(req.file, title)
        const result = await processPdf(req.file, title, section);
        res.json({file});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}