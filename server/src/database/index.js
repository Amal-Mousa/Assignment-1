import connection from './config/index.js';
import {
  signupQuery,
  getUserByEmailQuery,
  emailExistsQuery
} from './query/index.js';
import { getProductsQuery, countProductsQuery } from './query/index.js';

export {
  connection,
  signupQuery,
  getUserByEmailQuery,
  emailExistsQuery,
  getProductsQuery,
  countProductsQuery
};
