import express from 'express'
import { generateSasUrlHandler } from '../controllers/azureController'

const router = express.Router()

router.get('/', generateSasUrlHandler)

export default router