// src/components/Navbar.js
import React from "react";
import styled from "styled-components";
import { FaUser, FaHeart, FaShoppingCart, FaCheckSquare, FaStore } from "react-icons/fa";
import Logo from "../assets/logo.png"
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";


const Navbar = () => {
  return (
    <NavContainer>
      <TopNav>
        <img className="image" src={Logo} style={{height:"65px", width:"83px", paddingLeft:"100px"}} alt="HarmaiG Logo" />
        <SearchBar>
          <input type="text" placeholder="Search for Gold Jewellery, Jewellery and more..." />
          <SearchButton><IoIosSearch size={24} />
          </SearchButton>
        </SearchBar>
        <IconContainer>
          <FiUser size={25} />
          <IconWrapper>
            <FaRegHeart size={25} />
            <NotificationBadge>0</NotificationBadge>
          </IconWrapper>
          <IconWrapper>
            <FaShoppingCart size={25} />
            <NotificationBadge>0</NotificationBadge>
          </IconWrapper>
          <FaCheckSquare size={25} />
          <FaStore size={25} />
        </IconContainer>
      </TopNav>
      <SubNav>
        <SubNavItem>All Jewellery</SubNavItem>
        <SubNavItem>Earrings</SubNavItem>
        <SubNavItem>Rings</SubNavItem>
        <SubNavItem>Digital Gold</SubNavItem>
        <SubNavItem>Collections</SubNavItem>
        <SubNavItem>Wedding</SubNavItem>
        <SubNavItem>More</SubNavItem>
      </SubNav>
    </NavContainer>
  );
};

export default Navbar;

// Styled Components
const NavContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const TopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #F5DDDD;
`;

const image = styled.img`
  height: 20px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 750px;
  margin: 0;
  background-color: #f0f0f0;
  border-radius: 25px;
  overflow: hidden;

  input {
    flex: 1;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    background: transparent;
    font-size: 1rem;
    color: #666;
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  position: relative;
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 0.7rem;
  border-radius: 50%;
  padding: 2px 6px;
`;

const SubNav = styled.div`
  display: flex;
  justify-content: center;
  background-color: #a0a0a5;
  padding: 0.5rem 0;
`;

const SubNavItem = styled.div`
  margin: 0 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  cursor: pointer;

  &:hover {
    color: rgb(63 63 70);
  }
`;
