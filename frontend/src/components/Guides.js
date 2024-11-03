import React, { useState } from 'react';
import './Emotions.css';

const Guides = () => {
  const [active, setActive] = useState('Size');
  const categories = ['Size', 'Blog'];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${active === category ? 'active' : ''}`}
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Guides;
