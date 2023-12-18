import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={`url-to-product-image/${product.id}.jpg`} alt={product.name} />
      <h3>{product.name}</h3>

      <p>{`$${product.price}`}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default Product;