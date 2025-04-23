import { askRag } from "../services/askRag";
import { Request, Response } from "express";

export async function askRagHandler (req: Request, res: Response) {
    const {text} = req.body;

    if(!text) res.status(400).json({
        error: 'text must be have some value'
    })

    const reply = await askRag(text);
    res.json({
        reply
    })
}