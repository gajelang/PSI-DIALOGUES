import React from 'react';

const Dropdown = ({ categories, selectedCategory, onChangeCategory }) => {
  return (
    <select 
      className="p-2 border rounded-md bg-black text-white" 
      value={selectedCategory} 
      onChange={(e) => onChangeCategory(e.target.value)}
    >
      {categories.map((category, index) => (
        <option key={index} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default Dropdown;
