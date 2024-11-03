import React from 'react';
import './Pagination.css';

const Pagination = () => {
  return (
    <div className="pagination-container">
      <div className="pagination-numbers">
        <span className="page-number active">1</span>
        <span className="page-number">2</span>
        <span className="page-number">3</span>
        <span className="page-dots">...</span>
        <span className="page-number">10</span>
        <span className="page-number">11</span>
      </div>
      <div className="pagination-info">
        Products from 1 to 15 of 155
      </div>
    </div>
  );
};

export default Pagination;
