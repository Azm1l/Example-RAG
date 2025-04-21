import { chat } from '../services/openAi'
import { Request, Response } from 'express'

export const chatGPT = async (req: Request, res: Response)=> {
    try {
        const { messages } = req.body;
        if (!messages) {
            res.status(400).json({
                error: 'message must have some value'
            })
        }
        const reply = await chat(messages);
        res.json({ reply })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: 'Something Wrong'
        })
    }

}

export const test = (req: Request, res: Response) => {
    res.send('oke')
}