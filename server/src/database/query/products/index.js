import connection from '../../config/index.js';

const getProductsQuery = (limit, offset) => {
  const query = {
    text: 'SELECT * FROM products ORDER BY id LIMIT $1 OFFSET $2',
    values: [limit, offset]
  };
  return connection.query(query);
};

export default getProductsQuery;
