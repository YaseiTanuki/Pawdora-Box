import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ categories, onChange, onSortChange }) => {
  return (
    <div className="filter">
      <h2>
        <FontAwesomeIcon icon={faFilter} /> Danh mục:
      </h2>
      {categories.map((category) => (
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
  );
};

export default Filter;
