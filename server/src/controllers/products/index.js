import { getProductsQuery } from '../../database/index.js';
import { CustomError } from '../../helpers/index.js';

const productPerPage = 5;

const getProductsController = (req, res, next) => {
  const { page } = req.query;
  const pageNumber = parseInt(page) || 1;
  const offset = (pageNumber - 1) * productPerPage;

  getProductsQuery(productPerPage, offset)
    .then((products) => {
      res.status(200).json({
        message: 'Products Retrieved Successfully',
        data: products.rows,
        totalPages: Math.ceil(products.count / productPerPage),
      });
    })
    .catch(() => next(new CustomError(500, 'Serrver Error')));
};

export default getProductsController;
