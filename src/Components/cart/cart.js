// src/components/ShoppingCart.js
import React, { useState, useEffect } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);

    let itemsCount = 0;
    let priceTotal = 0;

    items.forEach(item => {
      itemsCount += item.quantity;
      priceTotal += item.price * item.quantity;
    });

    setTotalItems(itemsCount);
    setTotalPrice(priceTotal);
  }, []);

  const checkout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <div className="container">
      <div className="shopping-cart">
        <h1>Your Cart</h1>
        <div id="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-info">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <p className="cart-item-price">Price: ${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <p>Total Items: <span id="total-items">{totalItems}</span></p>
          <p>Total Price: $<span id="total-price">{totalPrice.toFixed(2)}</span></p>
          <button className="checkout-button" onClick={checkout}>Proceed to Checkout</button>
        </div>
      </div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .shopping-cart {
            background: #252041;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 100%;
          }
          .shopping-cart h1 {
            font-size: 24px;
            margin-bottom: 20px;
          }
          .cart-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;
          }
          .cart-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }
          .cart-item img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 4px;
          }
          .cart-item-info {
            flex: 1;
            margin-left: 20px;
          }
          .cart-item-name {
            font-size: 18px;
            margin: 0 0 5px 0;
          }
          .cart-item-quantity,
          .cart-item-price {
            font-size: 14px;
            color: #777;
          }
          .cart-summary {
            margin-top: 20px;
            text-align: right;
          }
          .cart-summary p {
            font-size: 18px;
            margin: 5px 0;
          }
          .checkout-button {
            background-color: #ff21bc;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 18px;
            border-radius: 4px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default ShoppingCart;
