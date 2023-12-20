import React, { useState } from 'react';
import './product_page.scss';
import Product from './product';
import Filter from './filter';
import Header from '../../components/big_components/header/header';
import Footer from '../../components/big_components/footer/footer';
import productImage from '../../../public/img/home-product/meo.png'
import main1_1 from '../../../public/img/home-product/meo.png'
import main1 from '../../../public/img/home-product/hatkho.jpg'

const productsData = [
  { id: 1, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 30000, img: productImage, discountPrice: 40000, img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0, detail1:'Sữa tắm cho chó mèo DORRIKEY với tinh dầu chiết xuất từ hoa hồng, sản phẩm này đóng vai trò của các chức năng da trong việc khử mùi hôi của chó mèo một cách hiệu quả nhất.', detail2:'Khử mùi và lưu lại hương thơm, giữ ẩm cho bộ lông mềm mượt, chiết xuất tinh chất thực vật, an toàn cho sức khỏe. 100% sử dụng thành phần chiết xuất tự nhiên: hoa hồng, tinh dầu dừa, lá bạc hà và vỏ cam.',detail3:'Tuyệt đối an toàn khi sử dụng, không gây kích ứng da của các boss.' },
  { id: 2, name: 'Sữa tắm DORRIKEY cho chó', category: 'Phụ kiện', price: 50000, price2:85000, img: main1, discountPrice: 40000, img1: main1_1, rating: 4.8, numReviews: 2000, numSold: 1000, quantity: 0 },
  { id: 3, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 4, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 5, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 6, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 7, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 8, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 9, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 10, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 11, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 12, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 13, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 14, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 15, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 16, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 17, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 18, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 19, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 20, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 21, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 22, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 23, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 24, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 25, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 26, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 27, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 28, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
  { id: 29, name: 'Bánh sữa dê bổ sung dinh dưỡng cho mèo', category: 'Thức ăn', price: 50000, img: productImage, discountPrice: 40000 },
];

const categories = [
  'Tất cả',
  'Thức ăn',
  'Đồ uống',
  'Snack',
  'Phụ kiện',
  'Thuốc và dinh dưỡng', 
  'Kiểm tra',
  'Tỉa lông',
  'Tắm',
  'Trừ bọ chét, ve',
  'Tiêm ngừa',
  'Khách sạn thú cưng',
];

const midpoint = Math.ceil(categories.length / 2);

const categories1 = categories.slice(0, midpoint);
const categories2 = categories.slice(midpoint);

const ProductPage = () => {
  const [filteredCategory, setFilteredCategory] = useState('Tất cả');
  const [sortBy, setSortBy] = useState('Giá tăng dần');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const sortedProducts = [...productsData].sort((a, b) => {
    switch (sortBy) {
      case 'Giá tăng dần':
        return a.price - b.price;
      case 'Giá giảm dần':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const filteredAndSortedProducts = sortedProducts.filter(
    (product) =>
      filteredCategory === 'Tất cả' || product.category === filteredCategory
  );

  const totalProducts = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalProducts - 1);
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex + 1);

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
    setCurrentPage(1); // Reset to the first page when the category changes
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(1); // Reset to the first page when the sorting changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (productId) => {
    // Thêm logic để xử lý thêm vào giỏ hàng
    console.log(`Thêm sản phẩm có ID ${productId} vào giỏ hàng`);
  };

  const handleBuyNow = (productId) => {
    // Thêm logic để xử lý mua ngay
    console.log(`Mua ngay sản phẩm có ID ${productId}`);
  };

  return (
    <>
      <Header showNav={true} />
      <div className="app">
        <div className="filter_container">
          <Filter
            categories1={categories1}
            categories2={categories2}
            onChange={handleFilterChange}
            onSortChange={handleSortChange}
          />
        </div>
        <div className="products">
          <div className='sort_container'>
            <select className='list' onChange={(e) => handleSortChange(e.target.value)}>
              <option value="Giá tăng dần">Giá tăng dần</option>
              <option value="Giá giảm dần">Giá giảm dần</option>
            </select>
          </div>
          <div className='product_list2'>
            {currentProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            ))}
          </div>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={page === currentPage ? 'active' : ''}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;

export { productsData };