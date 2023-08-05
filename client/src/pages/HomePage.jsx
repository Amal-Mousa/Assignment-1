import { useEffect, useState } from 'react';
import '../assets/styles/layout.css';
import ProductCard from '../Components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../store/actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [category, setCategory] = useState(0);
  const [price, setPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const itemsPerPage = 6;
  const categoryOptions = [
    'All',
    ' shoes',
    ' shirts',
    ' jacket',
    ' trousers ',
    ' sweater'
  ];

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);

  const filterData = products
    .filter((product) => product.category_id === +category || +category === 0)
    .filter((product) => +product.price > +price);
  const totalPages = Math.ceil(filterData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);
  if (search) {
    currentItems = products.filter((product) =>
      product.name.startsWith(search)
    );
  }

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    dispatch(fetchProducts(pageNumber));
  };

  return (
    <div className='parent'>
      <aside className='sidebar'>
        <p className='filter-title'>Filters</p>
        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <fieldset className='price-filter'>
          <legend>Price</legend>
          <input
            type='range'
            min={0}
            max={200}
            step={5}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </fieldset>
        <fieldset className='category-filter'>
          <legend>Category</legend>
          <div className='radio-container'>
            {categoryOptions.map((option, index) => (
              <label htmlFor={option} className='radio-label' key={index}>
                <input
                  className='cat-input'
                  id={option}
                  name='category'
                  type='radio'
                  value={index}
                  onChange={(e) => handleCategory(e)}
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      </aside>
      <div className='small-container'>
        <div className='row row-2'>
          <h2 className='product-title'>All Products</h2>
        </div>
        {currentItems.length ? (
          <div className='product-list'>
            {currentItems.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <div className='lds-ring'>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
          </div>
        )}
        <div className='page-btn' id='pagination'>
          {Array(totalPages)
            .fill()
            .map((page, i) => (
              <span key={i} onClick={() => handlePageChange(i + 1)}>
                {i + 1}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
