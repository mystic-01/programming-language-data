import express from 'express';

import { getLanguages, addLanguages } from '../controllers/language.js';

const router = express.Router();

router.get('/', getLanguages);
router.post('/post', addLanguages);

export default router;