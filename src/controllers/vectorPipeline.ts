import { processAndStoreTexts } from "../services/vectorPipeline";
import { Request, Response } from "express";

export async function inserTextVectore (req: Request, res: Response) {
    const {text} = req.body;
    if (!text) res.status(400).json({
        error: "text must be have some value"
    })
    const result = await processAndStoreTexts(text)
    res.json({
        result
    })
}