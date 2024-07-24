import React, { useState } from 'react';
import { Link } from "react-router-dom";
import homeIcon from '../../img/homeicon.png';
import carticon from './12.png';
import Card1 from "../../img/card1.jpg";
import Card2 from "../../img/card2.jpg";
import Card3 from "../../img/card3.jpg";
import Card4 from "../../img/card4.jpg";
import Card5 from "../../img/card5.jpg";
import Card6 from "../../img/card6.jpg";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const initialItems = [
    { id: 1, name: 'StockIT', price: 10, quantity: 0, image: Card1 },
    { id: 2, name: 'TakeNote', price: 12, quantity: 0, image: Card2 },
    { id: 3, name: 'TaRct', price: 21, quantity: 0, image: Card3 },
    { id: 4, name: 'To Do', price: 13, quantity: 0, image: Card4 },
    { id: 5, name: 'ArchiTect', price: 15, quantity: 0, image: Card5 },
    { id: 6, name: 'WeatherLy', price: 17, quantity: 0, image: Card6 },
    { id: 7, name: 'TypingTest', price: 11, quantity: 0, image: '/static/media/card7.b25b2be8caee889d6ad4.png' },
    { id: 8, name: 'Artisan', price: 18, quantity: 0, image: '/static/media/card8.5c7a98cedad9864c46b7.png' },
    { id: 9, name: 'BBlocks', price: 25, quantity: 0, image: '/static/media/card9.6d96022c8f0793e6dd91.png' },
    { id: 10, name: 'ZzShoes', price: 19, quantity: 0, image: '/static/media/card10.a53e1291e52ef0a4c11c.png' },
    { id: 11, name: 'SearchImage', price: 13, quantity: 0, image: '/static/media/card11.e2371ccc231824202cda.png' },
    { id: 12, name: 'Alimage', price: 20, quantity: 0, image: '/static/media/card12.093d95181352dfd0126b.png' },
  ];

  const [cartItems, setCartItems] = useState(initialItems);
  const [cartCount, setCartCount] = useState(
    initialItems.reduce((total, item) => total + item.quantity, 0)
  );

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

  const navigate = useNavigate();

  const signIn = () => {
    navigate('/login'); // Navigate to the login page
    window.scrollTo(0, 0); 
  };

  const signUp = () => {
    navigate('/login'); // Navigate to the login page
    window.scrollTo(0, 0); 
  };

  return (
    <div className="cart-container">
<style>{`
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
    color: #1f1c35;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    background-color: #2a2551;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 20px;
    padding: 20px;
    width: 300px;
    color: white;
    text-align: left;
    position: relative;
    box-shadow: 7px 7px 32px 20px #6052ff;
    gap:10px;
  }

  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  .card h3 {
    margin: 10px 0;
  }

  .card p {
    color: #bbb;
  }

  .price-quantity {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    gap:10px;
  }

  .price-quantity > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap:10px;
  }

  .price-quantity .heading {
    font-weight: bold;
    margin-bottom: 10px; /* Gap between heading and value */
    gap:10px;
  }

  .price-quantity .value {
    margin: 0;
    gap:10px;
  }

  .card .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    gap: 22px;
  }

  .card .buttons button {
    background-color: #ff21bc;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 10px; /* Rounded edges */
    cursor: pointer;
    align-items: center;
    font-size: 14px;
  }

  .cart-signin {
    display: flex;
    justify-content: space-between; /* Distributes buttons to the edges */
    align-items: center; /* Vertically centers the buttons */
    padding: 10px; /* Optional padding for the container */
  }

  .cart-signin button {
    background-color: #ff21bc;
    color: white;
    border: solid 2px white;
    padding: 10px;
    border-radius: 10px; /* Rounded edges */
    cursor: pointer;
    font-size: 16px;

  }
`}</style>

<div className="cart-top">
  <a href="/index.html">
    <img src={carticon} className="cart-icon" alt="Cart Icon" />
  </a>
  <span className="cart-count">{cartCount}</span>
</div>
      <div className="card-container">
        <Link to="/" className="home-link" style={{ marginRight: '10px', marginTop:'30px' }}>
          <img src={homeIcon} alt="Home" className="home-icon" />
        </Link>
        {cartItems.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="price-quantity">
              <div>
                <span>Price</span>
                <p>{item.price}</p>
              </div>
              <div>
                <span>Quantity</span>
                <p>{item.quantity}</p>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => addToCart(item.id)}>Add to Cart</button>
              <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-signin">
        <button onClick={signIn}>Enter Your UniCollab Portal</button>
        <button onClick={signUp}>Be Part of Our UniCollab Club</button>
      </div>
    </div>
  );
};

export default Cart;
