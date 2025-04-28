/**
 * @swagger
 * /delete-file:
 *   delete:
 *     summary: Delete File in Azure
 *     tags: [Internal RAG API]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               blobName:
 *                 type: string
 *                 example: "File example"
 *     responses:
 *       200:
 *         description: Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reply:
 *                   type: string
 *                   example: "File deleted"
 */


import express from 'express'
import { deleteFile } from '../controllers/azureController'

const router = express.Router()

router.delete('/', deleteFile)

export default router