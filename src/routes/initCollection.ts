/**
 * @swagger
 * /init-collection:
 *   get:
 *     summary: Initial collection for vector db
 *     tags: [Internal RAG API]
 *     responses:
 *       200:
 *         description: Response from server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Collection created successfully"
 */

import express from 'express'
import { initCollectionHandler } from '../controllers/qdrant'

const router = express.Router();
router.post('/', initCollectionHandler)

export default router;