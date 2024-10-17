// src/components/ProductGallery.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductGallery = ({ products, addToCart }) => (
  <div className="product-gallery">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductGallery;
