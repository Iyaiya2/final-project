// src/App.js
import React, { useState } from 'react';
import ProductGallery from './components/ProductGallery';
import ShoppingCart from './components/ShoppingCart';
import './index.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // List of products
  const products = [
    { id: 1, name: 'Barcelone Jersey', price: 79.99, image: 'https://faiscafashion.com/wp-content/uploads/2024/09/B36D6491-FDD9-5E23-5641-E96E9D40297D-2-768x768.webp' },
    { id: 2, name: 'barcelone black', price: 59.99, image: 'https://www.futbolemotion.com/imagesarticulos/258927/750/camiseta-nike-fc-barcelona-segunda-equipacion-2024-2025-black-university-red-hyper-royal-black-0.webp' },
    { id: 3, name: 'Real madrid', price: 79.99, image: 'https://faiscafashion.com/wp-content/uploads/2024/09/9E7B0E2E-0808-763F-0642-A90C760D6351-2.webp' },
    { id: 4, name: 'barcelone retro', price: 89.99, image: 'https://faiscafashion.com/wp-content/uploads/2024/09/FAC06F3B-7A87-32B3-DD94-D8EC7E744F7F-1.webp' },
  ];

  // Add product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app">
      <h1>Shop football player </h1>
      <ProductGallery products={products} addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
};

export default App;
