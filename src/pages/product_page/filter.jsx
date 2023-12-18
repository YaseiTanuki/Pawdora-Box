import React from 'react';

const Filter = ({ categories, onChange, onSortChange }) => {
  return (
    <div className="filter">

      <h2>Danh mục:</h2>
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