// src/pages/Products.js
import React from "react";
import styled from "styled-components";

const Products = () => {
  const productList = [
    { id: 1, name: "Gold Ring", price: "$500" },
    { id: 2, name: "Diamond Necklace", price: "$1500" },
    { id: 3, name: "Silver Bracelet", price: "$300" },
  ];

  return (
    <ProductSection>
      <h2>Our Products</h2>
      <ProductGrid>
        {productList.map((product) => (
          <ProductCard key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductSection>
  );
};

export default Products;

const ProductSection = styled.section`
  text-align: center;
  padding: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const ProductCard = styled.div`
  padding: 1rem;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }
`;
