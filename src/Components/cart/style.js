import React, { useState, useEffect } from 'react';
import "./cart.css";

export const Cart = () => {
  const initialItems = [
    { id: 1, name: 'StockIT', price: 10, quantity: 2 },
    { id: 2, name: 'TakeNote', price: 12, quantity: 1 },
    { id: 3, name: 'TaRct', price: 21, quantity: 3 },
    { id: 4, name: 'To Do', price: 13, quantity: 4 },
    { id: 5, name: 'ArchiTect', price: 15, quantity: 6 },
    { id: 6, name: 'WeatherLy', price: 17, quantity: 2 },
    { id: 7, name: 'TypingTest', price: 11, quantity: 5 },
    { id: 8, name: 'Artisan', price: 18, quantity: 8 },
    { id: 9, name: 'BBlocks', price: 25, quantity: 3 },
    { id: 10, name: 'ZzShoes', price: 19, quantity: 5 },
    { id: 11, name: 'SerachImage', price: 13, quantity: 7 },
    { id: 12, name: 'Alimage', price: 20, quantity: 3 },
  ];

  const [cartItems, setCartItems] = useState(initialItems);
  const [cartCount, setCartCount] = useState(
    initialItems.reduce((total, item) => total + item.quantity, 0)
  );

  useEffect(() => {
    // Save cart items to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity > 0) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
      setCartCount(cartCount - 1);
    }
  };

  const signIn = () => {
    alert('Sign in functionality');
  };

  const signUp = () => {
    alert('Sign up functionality');
  };

  return (
    <div className="cart-container">
      <style>{
        `
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #1f1c35;
          color: white;
        }

        .cart-container {
          text-align: center;
          margin-top: 50px;
        }

        .cart-top {
          position: fixed;
          top: 10px;
          right: 10px;
          background-color: #ff21bc;
          padding: 10px;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .cart-icon {
          width: 24px;
          height: 24px;
          vertical-align: middle;
          margin-right: 10px;
        }

        .cart-count {
          margin-left: 5px;
          font-size: 16px;
        }

        .cart-item {
          border: 1px solid #ddd;
          padding: 10px;
          margin: 10px;
          display: inline-block;
          width: calc(33% - 40px);
          box-sizing: border-box;
          text-align: left;
          box-shadow: 7px 7px 32px 0 #6052ff;
          position: relative;
        }

        .add-to-cart,
        .remove-from-cart {
          background-color: #ff21bc;
          color: #fff;
          border: none;
          padding: 10px;
          position: absolute;
          bottom: 10px;
          left: 30%;
          transform: translateX(-50%);
          border-radius: 3px;
          cursor: pointer;
        }

        .remove-from-cart {
          left: 70%;
        }

        .shop-today a {
          color: #007185;
          text-decoration: none;
          font-weight: bold;
        }

        .cart-signin button {
          background-color: #ff21bc;
          border: 1px solid #a88734 #9c7e31 #846a29;
          color: #fff;
          padding: 10px 20px;
          margin: 10px;
          cursor: pointer;
          border-radius: 3px;
        }
      `
      }</style>

      <div className="cart-top" onClick={() => window.location.href = 'index2.html'}>
        <img src="image.png" className="cart-icon" alt="Cart Icon" />
        <span className="cart-count">{cartCount}</span>
      </div>
      <div className="cart-content">
        <h2>
          <img src="image.png" className="cart-icon" alt="Cart Icon" />
          Your UniCollab Cart
        </h2>
        <div className="cart-items" id="cart-items">
          {cartItems.length === 0 ? (
            <p>Your Cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <h4>{item.name}</h4>
                <p>
                  {item.quantity} x ${item.price}
                </p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(item.id)}
                >
                  Add to Cart
                </button>
                <button
                  className="remove-from-cart"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              </div>
            ))
          )}
        </div>
        <p className="shop-today">
          <a href="#">Shop today's deals</a>
        </p>
        <div className="cart-signin">
          <button onClick={signIn}>Sign in to your account</button>
          <button onClick={signUp}>Sign up now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
