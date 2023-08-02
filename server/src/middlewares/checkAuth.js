import { CustomError, verifyToken } from '../helpers/index.js';

const checkAuth = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    next(new CustomError(401, 'forbidden'));
    return;
  }
  verifyToken(token)
    .then((decodedToken) => {
      req.userData = decodedToken;
      next();
    })
    .catch(() => {
      next(new CustomError(498, 'Invalid Token'));
    });
};

export default checkAuth;
