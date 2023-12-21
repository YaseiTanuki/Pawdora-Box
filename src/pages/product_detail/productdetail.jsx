import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './productdetail.scss';
import Header from '../../components/big_components/header/header';
import Footer from '../../components/big_components/footer/footer';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = ({ product, onAddToCart, onBuyNow}) => {
  const { id, name, price, price2, discountPrice, img, description, additionalInfo, img1, rating, numSold, numReviews, detail1, detail2, detail3 } = product;
  const [showAddedToCartMessage, setShowAddedToCartMessage] = useState(false);
  const [newReviewContent, setNewReviewContent] = useState('');
  const handleAddToCart = () => {
    // Thực hiện thêm vào giỏ hàng
    onAddToCart(id);

    // Hiển thị thông báo
    setShowAddedToCartMessage(true);

    // Ẩn thông báo sau một khoảng thời gian (ví dụ: 3 giây)
    setTimeout(() => {
      setShowAddedToCartMessage(false);
    }, 3000);
  };
  // Trạng thái cho đánh giá

  const [reviews, setReviews] = useState([
    {
      author: 'Trần Thị Hải',
      rating: 5,
      date: '02-12-2023 14:27',
      classification: 'Hồng - 350ml',
      content: 'Sản phẩm tốt lắm shop.',
    },
    {
      author: 'Diệp Hương Giang',
      rating: 5,
      date: '12-11-2023 18:27',
      classification: 'Cam - 510ml',
      content: 'Sản phẩm tốt lắm shop!',
    },
    {
      author: 'Phan Công Hậu',
      rating: 4,
      date: '24-05-2022 09:12',
      classification: 'Tím - 510ml',
      content: 'Sản phẩm cũng oke.',
    },
  ]);

  const handleBuyNow = () => {
    onBuyNow(id);
  };

  const addReview = () => {
    const newReview = {
      author: 'Người dùng mới',
      rating: 5, // Có thể lấy từ người dùng
      date: new Date().toLocaleString(),
      classification: 'Loại sản phẩm', // Có thể lấy từ người dùng
      content: newReviewContent,
    };

    setReviews([...reviews, newReview]);
    setNewReviewContent(''); // Reset nội dung đánh giá sau khi thêm
  };
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

  const [selectedColor, setSelectedColor] = useState('Cam'); // Default color
  const [selectedVolume, setSelectedVolume] = useState('350ml'); // Default volume

  // Handle color change
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  // Handle volume change
  const handleVolumeChange = (event) => {
    setSelectedVolume(event.target.value);
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
            <span className='rat'>{rating}</span>
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className={`star-icon ${index < rating ? 'filled' : ''}`} />
            ))}
          </div>
          <div className="num-reviews">{numReviews} Đánh giá</div>
          <div className="num-sold">{numSold} Đã bán</div>
          <div className="options">
          <p>Màu sắc</p>
            <label>
               
              <input
                type="radio"
                value="Vàng"
                checked={selectedColor === 'Vàng'}
                onChange={handleColorChange}
              />
              Vàng
            </label>
            <label>
              <input
                type="radio"
                value="Hồng"
                checked={selectedColor === 'Hồng'}
                onChange={handleColorChange}
              />
              Hồng
            </label>
            <label>
              <input
                type="radio"
                value="Tím"
                checked={selectedColor === 'Tím'}
                onChange={handleColorChange}
              />
              Tím
            </label>
            <label>
              <input
                type="radio"
                value="Cam"
                checked={selectedColor === 'Cam'}
                onChange={handleColorChange}
              />
              Cam
            </label> 
            <p>Thể tích</p> 
            <label>
              <input
                type="radio"
                value="350ml"
                checked={selectedVolume === '350ml'}
                onChange={handleVolumeChange}
              />
              350ml
            </label>
            <label>
              <input
                type="radio"
                value="510ml"
                checked={selectedVolume === '510ml'}
                onChange={handleVolumeChange}
              />
              510ml
            </label>
          </div>
          <div className="price-container">
            {discountPrice && (
              <p className="discount-price">
                <span className="discounted">{formatPrice(discountPrice)}</span>
                <span className='gach'>-</span>
                <span className="original">{formatPrice(price2)}</span>
              </p>
            )}
            {!discountPrice && <p>{formatPrice(price2)}</p>}
          </div>
          <div className='quantity'>
            <p>Số lượng</p>
            {/* Nút giảm số lượng */}
            <button className="quantity-button" onClick={handleDecrease}>-</button>

            {/* Hiển thị số lượng */}
            <div className="quantity-info">{quantity}</div>

            {/* Nút tăng số lượng */}
            <button className="quantity-button" onClick={handleIncrease}>+</button>
          </div>
          <article>
            <button onClick={handleAddToCart} className="add-to-cart-button">
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <Link to={`/product/${id}`} onClick={handleBuyNow}>
              <button className="buy-now-button">Mua ngay</button>
            </Link>
            {showAddedToCartMessage && (
              <div className="added-to-cart-message">Đã thêm vào giỏ hàng!</div>
            )}
            </article>
        </div>
        
      </div>
        <div className="details">
            <h3>Mô tả sản phẩm</h3>
            <ul>
              <li>{detail1}</li>
              <li>{detail2}</li>
              <li>{detail3}</li>
            </ul>
       </div>
       <div className="reviews">
        <h3>Đánh giá sản phẩm</h3>
        <div className="rating-summary">
          <div className='hd'>
          <p>{product.rating}/5</p>
          {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className={`star-icon ${index < rating ? 'filled' : ''}`} />
            ))}
          </div>
          <div className='ft'> 
          <div className='danhgia'>
          <p>Tất cả</p>
          <p>5 Sao (1k8)</p>
          <p>4 Sao (200)</p>
          <p>3 Sao (30)</p>
          <p>2 Sao (0)</p>
          <p>1 Sao (0)</p>
          <p>Có bình luận (500)</p>
          </div>
          <div className='video'>
          <p >Có ảnh/video (200)</p></div>
          </div>
        </div>
        {reviews.length > 0 && (
          <ul>
            {reviews.slice(0, 3).map((review, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faUser} className="user-icon" />
                <strong>{review.author}</strong>
                <p>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`star-icon ${i < review.rating ? 'filled' : ''}`}
                  />
                ))}</p>
                <p className='reviewdate'>{review.date} | Phân loại hàng: {review.classification}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="add-review">
          <textarea
            placeholder="Nhập đánh giá của bạn..."
            rows="2"
            cols="150" className='text'></textarea>
          <button onClick={() => addReview("Nội dung đánh giá mới")}>
            Thêm đánh giá
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};
ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onBuyNow: PropTypes.func.isRequired,
};

export default ProductDetail;
