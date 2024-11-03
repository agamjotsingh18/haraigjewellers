// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import BigCarousel from "./components/BigCarousel";
import Divider from "./assets/divider.png"
import ShopByCategory from "./components/ShopByCategory";
import Emotions from "./components/Emotions";
import Guides from "./components/Guides";
import Products from "./components/Products";
import Pagination from "./components/Pagination";

function App() {
  return (
    <Router>
      <Navbar />
      <Carousel />
      <BigCarousel />
      <img src={Divider} alt="Divider" style={{ width:"280px", display:"flex", justifyContent:"center", margin:"-35px auto", padding:"0px"}} />
      <ShopByCategory />
      <img src={Divider} alt="Divider" style={{ width:"280px", display:"flex", justifyContent:"center", margin:"-35px auto", padding:"0px"}} />
      <div className="header">
        <h1 style={{textAlign:"center", display:"flex", margin:"0 auto"}}>Shop By Collection</h1>
      </div>
      <hr style={{  padding: "0px", margin:"0px", marginBottom:"38px"}}/>
      <BigCarousel />
      <img src={Divider} alt="Divider" style={{ width:"280px", display:"flex", justifyContent:"center", margin:"-35px auto", padding:"0px"}} />
      <div className="header">
        <h1 style={{textAlign:"center", display:"flex", margin:"0 auto"}}>Shop By Emotions</h1>
      </div>
      <hr style={{  padding: "0px", margin:"0px", marginBottom:"38px", width:"60%", margin:"0 auto"}}/>
      <Emotions />
      <div className="header">
        <h1 style={{textAlign:"center", display:"flex", margin:"0 auto"}}>JWELLERY GUIDES</h1>
      </div>
      <hr style={{  padding: "0px", margin:"0px", marginBottom:"38px", width:"60%", margin:"0 auto"}}/>
      <Guides />
      <img src={Divider} alt="Divider" style={{ width:"280px", display:"flex", justifyContent:"center", margin:"-35px auto", padding:"0px"}} />
  <Products />
  <Pagination />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Footer />
    </Router>
  );
}

export default App;
