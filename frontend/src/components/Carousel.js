import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Bangles from "../assets/Bangles.png"
import WomenRings from "../assets/WomenRings.png"
import MenBracelet from "../assets/MenBracelet.png"
import MenLuck from "../assets/MenLuck.png"
import MenRing from "../assets/MenRing.png"
import AntiqueDohiya from "../assets/AntiqueDohiya.png"
import AntiqueLuck from "../assets/AntiqueLuck.png"
import AntiqueMala from "../assets/AntiqueMala.png"
import AntiqueSet from "../assets/AntiqueSet.png"


const items = [
  { id: 1, label: "Bangles", image: Bangles },
  { id: 2, label: "Women's Rings", image: WomenRings },
  { id: 3, label: "Men's Bracelets", image: MenBracelet },
  { id: 4, label: "Men's Lucky", image: MenLuck },
  { id: 5, label: "Men's Rings", image: MenRing },
  { id: 6, label: "Antique Dohiya", image: AntiqueDohiya },
  { id: 7, label: "Antique Lucky", image: AntiqueLuck },
  { id: 8, label: "Antique Mala", image: AntiqueMala },
  { id: 9, label: "Antique Set", image: AntiqueSet }
];

const Carousel = () => {
  const carouselRef = useRef(null);

  // Scroll to the left
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  // Scroll to the right
  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  // Auto-scroll effect with looping
  useEffect(() => {
    const carousel = carouselRef.current;

    // Function to reset scroll position when reaching the end
    const handleScroll = () => {
      // If we have scrolled to the end of the first duplicated list
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        // Reset the scroll position back to the start of the original list
        carousel.scrollLeft = 0;
      }
    };

    // Attach the scroll event listener
    carousel.addEventListener("scroll", handleScroll);

    // Auto-scroll interval
    const interval = setInterval(() => {
      carousel.scrollBy({ left: 200, behavior: "smooth" });
    }, 2000); 

    return () => {
      clearInterval(interval);
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CarouselContainer>
      <ArrowButton onClick={scrollLeft}>
        <FaChevronLeft />
      </ArrowButton>
      <ItemContainer ref={carouselRef}>
        {[...items, ...items].map((item, index) => (
          <Item key={`${item.id}-${index}`}>
            <ItemImage src={item.image} alt={item.label} />
            <ItemLabel>{item.label}</ItemLabel>
          </Item>
        ))}
      </ItemContainer>
      <ArrowButton onClick={scrollRight}>
        <FaChevronRight />
      </ArrowButton>
    </CarouselContainer>
  );
};

export default Carousel;

// Styled Components
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;

const ArrowButton = styled.button`
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0.5rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #f4f4f4;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  overflow-x: scroll;
  width: 80%; // Adjust this value to fit 6 items at once
  scroll-behavior: smooth;
  padding: 1rem ;
  scrollbar-width: none; // Hide scrollbar for Firefox
  -ms-overflow-style: none; // Hide scrollbar for IE and Edge
  &::-webkit-scrollbar {
    display: none; // Hide scrollbar for Chrome, Safari, and Opera
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px; 
  text-align: center;
  padding: 0.5rem;
`;

const ItemImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const ItemLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  padding-left: 0.5rem;
`;
