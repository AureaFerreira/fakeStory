import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div id='slide1'>
          </div>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
