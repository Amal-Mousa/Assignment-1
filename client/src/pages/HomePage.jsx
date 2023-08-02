import '../assets/styles/layout.css';
import { ProductCard } from '../components';

const HomePage = () => {
  const categoryOptions = [
    'All',
    ' shoes',
    ' shirts',
    ' jacket',
    ' trousers ',
    ' sweater'
  ];

  return (
    <div className='parent'>
      <aside className='sidebar'>
        <p className='filter-title'>Filters</p>
        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value='Search'
        />
        <fieldset className='price-filter'>
          <legend>Price</legend>
          <input type='range' min={0} max={200} step={5} value='Price' />
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
        <div className='product-list'>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
