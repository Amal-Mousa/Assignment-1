import express from 'express';
import authRouter from './auth';
import { errHandler, clientError } from '../middlewares';

const router = express.Router();

router.use(authRouter);
router.use(clientError);
router.use(errHandler);

export default router;
