import express from 'express';
import authRouter from './auth.js';
import { errHandler, clientError } from '../middlewares/index.js';

const router = express.Router();

router.use(authRouter);
router.use(clientError);
router.use(errHandler);

export default router;
