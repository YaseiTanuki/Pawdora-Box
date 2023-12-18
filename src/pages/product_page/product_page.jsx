import React, { useState } from 'react';
import './product_page.scss';
import Product from './product';
import Filter from './filter';
import Header from '../../components/big_components/header/header';
import Footer from '../../components/big_components/footer/footer';

const productsData = [
  { id: 1, name: 'Product 1', category: 'Thức ăn', price: 20 },
  { id: 2, name: 'Product 2', category: 'Đồ uống', price: 15 },
  { id: 3, name: 'Product 3', category: 'Snack', price: 10 },
  { id: 4, name: 'Product 4', category: 'Phụ kiện', price: 25 },
  { id: 5, name: 'Product 5', category: 'Quần áo', price: 30 },
  { id: 6, name: 'Product 6', category: 'Dịch vụ', price: 50 },
  { id: 7, name: 'Product 7', category: 'Tỉa lông', price: 15 },
  { id: 8, name: 'Product 8', category: 'Tắm', price: 18 },
  { id: 9, name: 'Product 9', category: 'Giặt ủi', price: 22 },
  { id: 10, name: 'Product 1', category: 'Thức ăn', price: 20 },
  { id: 11, name: 'Product 2', category: 'Đồ uống', price: 15 },
  { id: 12, name: 'Product 3', category: 'Snack', price: 10 },
  { id: 13, name: 'Product 4', category: 'Phụ kiện', price: 25 },
  { id: 14, name: 'Product 5', category: 'Quần áo', price: 30 },
  { id: 15, name: 'Product 6', category: 'Dịch vụ', price: 50 },
  { id: 16, name: 'Product 7', category: 'Tỉa lông', price: 15 },
  { id: 17, name: 'Product 8', category: 'Tắm', price: 18 },
  { id: 18, name: 'Product 9', category: 'Giặt ủi', price: 22 },
  { id: 19, name: 'Product 1', category: 'Thức ăn', price: 20 },
  { id: 20, name: 'Product 2', category: 'Đồ uống', price: 15 },
  { id: 21, name: 'Product 3', category: 'Snack', price: 10 },
  { id: 22, name: 'Product 4', category: 'Phụ kiện', price: 25 },
  { id: 23, name: 'Product 5', category: 'Quần áo', price: 30 },
  { id: 24, name: 'Product 6', category: 'Dịch vụ', price: 50 },
  { id: 25, name: 'Product 7', category: 'Tỉa lông', price: 15 },
  { id: 26, name: 'Product 8', category: 'Tắm', price: 18 },
  { id: 27, name: 'Product 9', category: 'Giặt ủi', price: 22 },
];

const categories = [
  'Tất cả',
  'Thức ăn',
  'Đồ uống',
  'Snack',
  'Phụ kiện',
  'Quần áo',
  'Dịch vụ',
  'Tỉa lông',
  'Tắm',
  'Giặt ủi',
];

const App = () => {
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

  return (
    <>
      <Header showNav={true} />
      <div className="app">
        <div className="filter_container">
          <Filter
            categories={categories}
            onChange={handleFilterChange}
            onSortChange={handleSortChange}
          />
        </div>
        <div className="products">
          <div className='sort_container'>
            <span>Sắp xếp theo:</span>
            <select onChange={(e) => handleSortChange(e.target.value)}>
              <option value="Giá tăng dần">Giá tăng dần</option>
              <option value="Giá giảm dần">Giá giảm dần</option>
            </select>
          </div>
          <div className='product_list2'>
            {currentProducts.map((product) => (
              <Product key={product.id} product={product} />
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

export default App;
