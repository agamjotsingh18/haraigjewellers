// CustomArrow.js
import React from 'react';
import './BigCarousel.css'; // Ensure that your CSS file includes custom styles for the arrows

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      &#9664; {/* Left arrow symbol */}
    </div>
  );
}

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      &#9654; {/* Right arrow symbol */}
    </div>
  );
}
