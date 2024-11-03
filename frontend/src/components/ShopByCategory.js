// ShopByCategory.js
import React from 'react';
import './ShopByCategory.css'; // Import the CSS file for styling
import Bangles from "../assets/Bangles.png"
import WomenRings from "../assets/WomenRings.png"
import MenBracelet from "../assets/MenBracelet.png"
import MenLuck from "../assets/MenLuck.png"
import MenRing from "../assets/MenRing.png"
import AntiqueDohiya from "../assets/AntiqueDohiya.png"
import AntiqueLuck from "../assets/AntiqueLuck.png"
import AntiqueMala from "../assets/AntiqueMala.png"
import AntiqueSet from "../assets/AntiqueSet.png"




const categories = [
  { id: 1, title: "Antique Doiya", image: AntiqueDohiya,},
  { id: 2, title: "Antique Lucky", image: AntiqueLuck },
  { id: 3, title: "Antique Mala", image: AntiqueMala, },
  { id: 4, title: "Antique Set", image: AntiqueSet, },
  { id: 5, title: "Bangles", image: Bangles, },
  { id: 6, title: "Women's Rings", image: WomenRings },
  { id: 7, title: "Men's Bracelets", image: MenBracelet },
  { id: 8, title: "Men's Lucky", image: MenLuck },
  { id: 9, title: "Men's Rings", image: MenRing }
];

const ShopByCategory = () => {
  return (
    <div className="shop-by-category">
      <div className="header">
        <h1>Shop By Category</h1>
        <a href="#viewAll">View All Categories</a>
      </div>
      <hr style={{  padding: "0px", margin:"0px", marginBottom:"38px"}}/>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.title} className="category-image" />
            {/* <div className="category-info">
              <span className="category-size">Size: {category.size}</span>
              <span className="category-amount">Amount: {category.amount}</span>
            </div> */}
            <h3 className="category-title">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
