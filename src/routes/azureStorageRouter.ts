import express from 'express'
import multer from 'multer'
import { uploadToAzureHandler } from '../controllers/azureController';

const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() });
router.post('/', upload.single("file"), uploadToAzureHandler)

export default router