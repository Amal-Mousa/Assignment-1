const fetchProducts = (page) => {
  return (dispatch) => {
    Promise.all([
      fetch(`/api/products?page=${page}`),
      fetch('/api/products/count')
    ])
      .then(([productsResponse, countResponse]) =>
        Promise.all([productsResponse.json(), countResponse.json()])
      )
      .then(([productsData, countData]) => {
        dispatch({
          type: 'SET_PRODUCTS',
          payload: productsData.data,
          totalProducts: countData.count,
        });
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };
};

export default fetchProducts;
