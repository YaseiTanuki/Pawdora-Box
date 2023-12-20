import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './productdetail.scss';
import Header from '../../components/big_components/header/header';
import Footer from '../../components/big_components/footer/footer';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductDetail = ({ product }) => {
  const { name, price, discountPrice, img, description, additionalInfo, img1, rating, numSold, numReviews } = product;

  const formatPrice = (amount) => {
    return `đ${new Intl.NumberFormat('vi-VN').format(amount)}`;
  };

  // Số lượng sản phẩm
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    // Giảm số lượng
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    // Tăng số lượng
    setQuantity(quantity + 1);
  };

  return (
    <>
      <Header showNav={true} />
      <div className="product-detail">
        <div className='img'>
          <img className='image' src={img} alt={name} />
          <img className='image1' src={img1} alt={name} />
        </div>
        <div className='content'>
          <h2>{name}</h2>
          <div className="rating">
            {rating}
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className={`star-icon ${index < rating ? 'filled' : ''}`} />
            ))}
          </div>
          <div className="num-reviews">{numReviews} đánh giá</div>
          <div className="num-sold">{numSold} đã bán</div>
          <div className='quantity'>
            <p>Số lượng</p>
            {/* Nút giảm số lượng */}
            <button className="quantity-button" onClick={handleDecrease}>-</button>

            {/* Hiển thị số lượng */}
            <div className="quantity-info">{quantity}</div>

            {/* Nút tăng số lượng */}
            <button className="quantity-button" onClick={handleIncrease}>+</button>
          </div>
          <div className="price-container">
            {discountPrice && (
              <p className="discount-price">
                <span className="discounted">{formatPrice(discountPrice)}</span>
                <span className="original">{formatPrice(price)}</span>
              </p>
            )}
            {!discountPrice && <p>{formatPrice(price)}</p>}
          </div>
          <p className="description">{description}</p>
          <div className="additional-info">{additionalInfo}</div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
