const fetchProducts = (page) => {
  return (dispatch) => {
    fetch(`/api/products?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: 'SET_PRODUCTS', payload: data.data });
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };
};

export default fetchProducts;
