import { Request, Response } from "express";
import { processPdf } from "../services/documentLocal";

export async function processPdfHandler(req: Request, res: Response) {
    try {
        const result = await processPdf(req.file);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}