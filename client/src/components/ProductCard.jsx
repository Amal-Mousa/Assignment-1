import '../assets/styles/cards.css';

const ProductCard = () => {
  return (
    <div className='product-card'>
      <div className='product-tumb'>
        <a href='#'>
          <img
            src='https://plus.unsplash.com/premium_photo-1670537994863-5ad53a3214e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
            width='100%'
            alt='product'
          />
        </a>
      </div>
      <div className='product-details'>
        <span className='product-catagory'>product 1</span>
        <h4>descriptionnnnnnnnnnnnnnnnnn</h4>
        <p>detailssssssssssssssss</p>
        <div className='product-bottom-details'>
          <div className='product-price'>34</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
