import express from 'express';
import {
  getProductsController,
  productCountControlelr
} from '../controllers/index.js';
const productRouter = express.Router();

productRouter.get('/products', getProductsController);
productRouter.get('/products/count', productCountControlelr);

export default productRouter;
