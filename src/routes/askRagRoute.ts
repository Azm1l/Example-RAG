/**
 * @swagger
 * /ask:
 *   post:
 *     summary: Kirim pertanyaan ke AI dari sumber data pribadi
 *     tags: [Internal RAG API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "Rata rata jam masuk karyawan A?"
 *               title:
 *                 type: string
 *                 example: "Daftar Absensi Karyawan A bulan Maret 2025"
 *               section:
 *                 type: string
 *                 example: "20"
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
 *                   example: "Rata-rata jam masuk kerja karyawan A adalah 07:35"
 */


import express from 'express'
import { askRagHandler } from '../controllers/askRagController';

const router = express.Router();

router.post('/', askRagHandler)

export default router