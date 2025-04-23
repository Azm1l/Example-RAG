import express from 'express'
import { getCollectionsHandler } from '../controllers/qdrant'

const router = express.Router();
router.get('/', getCollectionsHandler)

export default router;