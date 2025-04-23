import express from 'express'
import { initCollectionHandler } from '../controllers/qdrant'

const router = express.Router();
router.post('/', initCollectionHandler)

export default router;