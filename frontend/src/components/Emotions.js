import React, { useState } from 'react';
import './Emotions.css';

const Emotions = () => {
  const [active, setActive] = useState('Weddings');
  const categories = ['Weddings', 'Parents', 'Brother', 'Love', 'Friends', 'Family'];

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

export default Emotions;
