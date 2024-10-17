import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import ShopDetails from './pages/ShopDetails';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Router>
        <ToastContainer theme="dark" />
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/keyword" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} />} />
          
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/shops" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopDetails cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={< Signup/>} />
          

          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
