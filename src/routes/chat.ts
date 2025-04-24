/**
 * @swagger
 * /chat:
 *   post:
 *     summary: Kirim pertanyaan ke AI
 *     tags: [Chat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               messages:
 *                 type: string
 *                 example: "Halo, siapa kamu?"
 *     responses:
 *       200:
 *         description: Jawaban dari AI
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reply:
 *                   type: string
 *                   example: "Saya adalah AI yang ganteng dan berguna 😎"
 */

import express from 'express';
import { chatGPT } from '../controllers/chat';
const router = express.Router();
router.post('/', chatGPT)

export default router;


