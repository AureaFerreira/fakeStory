import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import PaginaInicial from "./containers/PaginaInicial";
import Header from "./containers/Header";
import "./App.css";
import ProdutoDetalhes from "./containers/ProdutoDetalhes ";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div id='slide1'>
          </div>
        <Routes>
          <Route path="/" element={<ProdutoInicial />} />
          <Route path="/product/:productId" element={<ProdutoDetalhes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
