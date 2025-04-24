import { askRag } from "../services/askRag";
import { Request, Response } from "express";

export async function askRagHandler(req: Request, res: Response) {
    const { text, title, section } = req.body;

    if (!text) {
        res.status(400).json({
            error: 'text must be have some value'
        })
        return
    }

    if (!title) {
        res.status(400).json({
            error: 'title must be have some value'
        })
        return
    }

    if (!section) {
        res.status(400).json({
            error: 'section must be have some value'
        })
        return
    }


    const reply = await askRag(text, title, section);
    res.json({
        reply
    })
}