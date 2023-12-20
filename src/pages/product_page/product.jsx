import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ProductContext from '../../../hooks/productContext';

const Product = ({ product, onAddToCart, onBuyNow }) => {
  const { id, name, price, discountPrice, img } = product;

  const {productID, setProductID} = useContext(ProductContext)

  const navigator = useNavigate()

  const [showAddedToCartMessage, setShowAddedToCartMessage] = useState(false);


  // Hàm để định dạng số có dấu phẩy và tiền tệ
  const formatPrice = (amount) => {
    return `đ${new Intl.NumberFormat('vi-VN').format(amount)}`;
  };

  // Hàm xử lý khi người dùng nhấp vào nút "Thêm vào giỏ hàng"
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

  const handleProductClick = () => {
    setProductID(productID + 1);
    navigator('/' + id + '/detail');
  };


  return (
    <div className="product">
      <article className="product-click" onClick={handleProductClick}>
      <img src={img} alt={name}/>
      <h4>{name}</h4>
      <div className="price-container">
        {discountPrice && (
          <p className="discount-price">
            <span className="discounted">{formatPrice(discountPrice)}</span>
            <span className="original">{formatPrice(price)}</span>
          </p>
        )}
        {!discountPrice && <p>{formatPrice(price)}</p>}
      </div>
      </article>
      <article>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
      <a href={`/product/${id}`} className="buy-now-button" onClick={() => onBuyNow(id)}>
        <button>
         Mua ngay
        </button>
      </a>

      {showAddedToCartMessage && (
        <div className="added-to-cart-message">Đã thêm vào giỏ hàng!</div>
      )}
      </article>
    </div>
  );
};

export default Product;
