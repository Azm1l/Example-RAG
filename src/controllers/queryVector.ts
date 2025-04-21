
import { queryVectore } from "../services/queryVector";
import { Request, Response } from "express";

export async function queryVectorUser(req: Request, res:Response) {
    const {messages} = req.body
    if(!messages) res.status(400).json({
        error: 'messaga must be have some value'
    })

    const reply = await queryVectore(messages)
    res.json({reply}) 
}