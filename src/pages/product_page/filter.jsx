import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import filter_icon from '../../../public/img/filter.svg';

const Filter = ({ categories1, categories2, onChange }) => {
  return (
    <div className="filter">
      
      <div className="category-group">
      <div>
        <p>Trang chủ &#10093; chó</p>
        <img src={filter_icon} /> <h2>Danh mục:</h2>
      </div>
        {categories1.map((category) => (
          <label key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              onChange={() => onChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
      <div className="category-group">
        <h3>Dịch vụ</h3>
        {categories2.map((category) => (
          <label key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              onChange={() => onChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
