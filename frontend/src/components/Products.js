import React from 'react';
import './Products.css';
import Bangles from "../assets/Bangles.png"
import WomenRings from "../assets/WomenRings.png"
import MenBracelet from "../assets/MenBracelet.png"
import MenLuck from "../assets/MenLuck.png"
import MenRing from "../assets/MenRing.png"
import AntiqueDohiya from "../assets/AntiqueDohiya.png"
import AntiqueLuck from "../assets/AntiqueLuck.png"
import AntiqueMala from "../assets/AntiqueMala.png"
import AntiqueSet from "../assets/AntiqueSet.png"





const products = [

    { id: 1, title: "Antique Doiya", price: 220.00, image: AntiqueDohiya,},
    { id: 2, title: "Antique Lucky", price: 220.00, image: AntiqueLuck },
    { id: 3, title: "Antique Mala", price: 220.00, image: AntiqueMala, },
    { id: 4, title: "Antique Set", price: 220.00, image: AntiqueSet, },
    { id: 5, title: "Bangles", price: 220.00, image: Bangles, },
    { id: 6, title: "Women's Rings", price: 220.00, image: WomenRings },
    { id: 7, title: "Men's Bracelets", price: 220.00, image: MenBracelet },
    { id: 8, title: "Men's Lucky", price: 220.00, image: MenLuck },
    { id: 9, title: "Men's Rings", price: 220.00, image: MenRing },
    { id: 10, title: "Men's Rings", price: 220.00, image: MenRing },
  // Add more products as needed
];

const Products = () => {
  return (
    <div className='all-products'>
  <div className="header">
        <h1>Shop By Category</h1>
        <a href="#viewAll">View All Categories</a>
      </div>
      <hr style={{  padding: "0px", margin:"0px", marginBottom:"38px"}}/>
    <div className="products-container">
        
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image-container">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="overlay-icons">
              <span className="icon">☆</span>
              <span className="icon">👁</span>
            </div>
          </div>
          <h3 className="product-title">{product.title}</h3>
          <div className="product-rating">☆☆☆☆☆</div>
          <p className="product-price">₹{product.price.toFixed(2)}</p>
          <button className="add-to-cart-button">ADD TO CART</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Products;
