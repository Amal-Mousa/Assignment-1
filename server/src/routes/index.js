import express from 'express';
import authRouter from './auth.js';
import productRouter from './product.js';
import { checkAuth, errHandler, clientError } from '../middlewares/index.js';

const router = express.Router();

router.use(authRouter);
router.use(checkAuth, productRouter);
router.use(clientError);
router.use(errHandler);

export default router;
