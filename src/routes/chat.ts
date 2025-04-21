import express from 'express';
import { chatGPT } from '../controllers/chat';
const router = express.Router();
router.post('/', chatGPT)

export default router;


