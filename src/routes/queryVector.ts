import express from 'express'
import { queryVectorUser } from '../controllers/queryVector'
const router = express.Router()

router.post('/', queryVectorUser);

export default router