import express from 'express'
import { askRagHandler } from '../controllers/askRagController';

const router = express.Router();

router.post('/', askRagHandler)

export default router