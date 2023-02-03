import React from "react";
import './Styles/App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import About from "./Components/About";
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
