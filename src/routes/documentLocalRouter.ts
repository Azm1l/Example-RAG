import express from 'express'
import multer from 'multer'
import { processPdfHandler } from '../controllers/documentLocalController'

const router = express.Router()
const upload = multer({storage: multer.memoryStorage()})

router.post('/',upload.single("file"), processPdfHandler)

export default router