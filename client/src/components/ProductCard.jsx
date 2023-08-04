/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../assets/styles/cards.css';

const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
      <div className='product-tumb'>
        <Link to={`product/${product.id}`}>
          <img src={product.image} width='100%' alt='product' />
        </Link>
      </div>
      <div className='product-details'>
        <span className='product-catagory'>{product.name}</span>
        <h4>{product.description}</h4>
        <p>{product.details}</p>
        <div className='product-bottom-details'>
          <div className='product-price'>{product.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
