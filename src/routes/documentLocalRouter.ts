/**
 * @swagger
 * /upload-document:
 *   post:
 *     summary: Upload dokumen untuk dijadikan data AI
 *     tags: [Internal RAG API]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/from-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *                 example: "Daftar Absensi Karyawan A bulan Maret 2025"
 *               section:
 *                 type: string
 *                 example: "20"
 *     responses:
 *       200:
 *         description: Hasil Proses
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 blobName:
 *                   type: string
 *                   example: "file_blablabla..."
 */


import express from 'express'
import multer from 'multer'
import { processPdfHandler } from '../controllers/documentLocalController'

const router = express.Router()
const upload = multer({storage: multer.memoryStorage()})

router.post('/',upload.single("file"), processPdfHandler)

export default router