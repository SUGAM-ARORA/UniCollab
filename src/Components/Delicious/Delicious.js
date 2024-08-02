import React from 'react';
import { Link } from "react-router-dom";
import homeIcon from '../../img/homeicon.png';
import Card1 from "../../img/card1.jpg";
import Card2 from "../../img/card2.jpg";
import Card3 from "../../img/card3.jpg";
import Card4 from "../../img/card4.jpg";
import Card5 from "../../img/card5.jpg";
import Card6 from "../../img/card6.jpg";

const Delicious = () => {
  const items = [
    { id: 1, name: 'StockIT', price: 10, image: Card1, soldInRegion: 'most of the times', purchases: 125, likes: 300, icon: '📈' },
    { id: 2, name: 'TakeNote', price: 12, image: Card2, soldInRegion: 'often', purchases: 150, likes: 350, icon: '📝' },
    { id: 3, name: 'TaRct', price: 21, image: Card3, soldInRegion: 'sometimes', purchases: 75, likes: 200, icon: '🔍' },
    { id: 4, name: 'To Do', price: 13, image: Card4, soldInRegion: 'often', purchases: 140, likes: 320, icon: '✅' },
    { id: 5, name: 'ArchiTect', price: 15, image: Card5, soldInRegion: 'most of the times', purchases: 180, likes: 400, icon: '🏛️' },
    { id: 6, name: 'WeatherLy', price: 17, image: Card6, soldInRegion: 'sometimes', purchases: 90, likes: 220, icon: '🌦️' },
    { id: 7, name: 'TypingTest', price: 11, image: '/static/media/card7.b25b2be8caee889d6ad4.png', soldInRegion: 'often', purchases: 110, likes: 280, icon: '⌨️' },
    { id: 8, name: 'Artisan', price: 18, image: '/static/media/card8.5c7a98cedad9864c46b7.png', soldInRegion: 'most of the times', purchases: 200, likes: 450, icon: '🎨' },
    { id: 9, name: 'BBlocks', price: 25, image: '/static/media/card9.6d96022c8f0793e6dd91.png', soldInRegion: 'sometimes', purchases: 95, likes: 230, icon: '🧱' },
    { id: 10, name: 'ZzShoes', price: 19, image: '/static/media/card10.a53e1291e52ef0a4c11c.png', soldInRegion: 'often', purchases: 160, likes: 360, icon: '👟' },
    { id: 11, name: 'SearchImage', price: 13, image: '/static/media/card11.e2371ccc231824202cda.png', soldInRegion: 'most of the times', purchases: 185, likes: 420, icon: '🔎' },
    { id: 12, name: 'Alimage', price: 20, image: '/static/media/card12.093d95181352dfd0126b.png', soldInRegion: 'sometimes', purchases: 130, likes: 290, icon: '🖼️' },
  ];

  return (
    <div className="delicious-page">
      <style>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #1f1c35;
          color: white;
        }

        .delicious-page {
          text-align: center;
          margin-top: 50px;
        }

        .header {
          margin-bottom: 40px;
          color: #fff;
        }

        .header h1 {
          font-size: 2.5em;
          margin: 10px 0;
          color: #ff21bc;
        }

        .header p {
          font-size: 1.2em;
          color: #bbb;
        }

        .items-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .item-card {
          background-color: #2a2551;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          margin: 20px;
          padding: 20px;
          width: 300px;
          color: white;
          text-align: center;
          position: relative;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          gap: 10px;
          text-decoration: none;
        }

        .item-card:hover {
          box-shadow: 7px 7px 32px 20px #362c9f;
          transform: scale(1.09);
        }

        .item-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px 10px 0 0;
        }

        .item-info {
          padding: 10px 0;
        }

        .item-name {
          font-size: 1.5em;
          margin: 10px 0;
          color: #ff21bc;
        }

        .item-price {
          font-size: 1.2em;
          color: #ff21bc;
          margin-bottom: 10px;
        }

        .item-sold,
        .item-purchases,
        .item-likes {
          font-size: 1em;
          color: #bbb;
          margin-bottom: 5px;
        }

        .item-icon {
          margin-right: 5px;
        }
      `}</style>

      <header className="header">
        <h1>Welcome to UniCollab's Delicious Page</h1>
        <p>Explore our amazing collection of tools and apps!</p>
      </header>

      <div className="items-container">
        <Link to="/" className="home-link" style={{ marginRight: '10px', marginTop: '30px' }}>
          <img src={homeIcon} alt="Home" className="home-icon" />
        </Link>
        {items.map(item => (
          <Link to={`/readmore/${item.id}`} className="item-card" key={item.id}>
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-info">
              <h2 className="item-name">
                <span className="item-icon" role="img" aria-label={item.name}>{item.icon}</span>
                {item.name}
              </h2>
              <p className="item-price">${item.price}</p>
              <p className="item-sold">
                <span className="item-icon" role="img" aria-label="sold">📦</span>
                Sold: {item.soldInRegion}
              </p>
              <p className="item-purchases">
                <span className="item-icon" role="img" aria-label="purchases">🛒</span>
                Purchases: {item.purchases}
              </p>
              <p className="item-likes">
                <span className="item-icon" role="img" aria-label="likes">🤍</span>
                Likes: {item.likes}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Delicious;
