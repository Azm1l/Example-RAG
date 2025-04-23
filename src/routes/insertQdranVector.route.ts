import express from 'express'
import { insertToQdrantHandler } from '../controllers/qdrant'

const router = express.Router()

router.post('/', insertToQdrantHandler)

export default router;