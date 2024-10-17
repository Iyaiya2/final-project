// src/components/ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  // Calculer le total des produits dans le panier
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price.toFixed(2)}€</p> {/* Formatage du prix */}
            </div>
          ))}
          <hr />
          <h3>Total: {totalPrice.toFixed(2)}€</h3> {/* Affichage du total */}
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
