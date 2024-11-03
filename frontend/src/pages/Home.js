// src/pages/Home.js
import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeSection>
      <h1>Welcome to Harmai Jewellers</h1>
      <p>Explore our exclusive collection of fine jewelry</p>
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled.section`
  text-align: center;
  padding: 2rem;
  background: #f5f5f5;
  color: #333;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;
