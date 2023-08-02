import express from 'express';
import { getProductsController } from '../controllers/index.js';
const productRouter = express.Router();

productRouter.get('/products', getProductsController);

export default productRouter;
