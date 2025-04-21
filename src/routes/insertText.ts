import express from 'express'
import { inserTextVectore } from '../controllers/vectorPipeline';
const router = express.Router()

router.post('/', inserTextVectore)

export default router;