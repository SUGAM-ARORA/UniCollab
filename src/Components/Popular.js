import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card1 from "./projects/card1.jpg";
import Card2 from "./projects/card7.png";
import Card3 from "./projects/card8.png";
import Card4 from "./projects/card9.png";
import Card5 from "./projects/card10.png";
import Card6 from "./projects/card11.png";
import Card7 from "./projects/card12.png";

const Popular = () => {
  const [popularItems, setPopularItems] = useState([
    {
      id: 1,
      name: 'StockIT',
      developer: 'X',
      type: 'DevOps',
      author: 'JaneSmith',
      likes: 83,
      image: Card1,
    },
    {
      id: 2,
      name: 'TypingTest',
      developer: 'X',
      type: 'Education',
      author: 'SophiaWilson',
      likes: 90,
      image: Card2,
    },
    {
      id: 3,
      name: 'Artisan',
      developer: 'X',
      type: 'Art & Design',
      author: 'DavidMartinez',
      likes: 95,
      image: Card3,
    },
    {
      id: 4,
      name: 'BBlocks',
      developer: 'X',
      type: 'Gaming',
      author: 'RachelGreen',
      likes: 110,
      image: Card4,
    },
    {
      id: 5,
      name: 'ZzShoes',
      developer: 'X',
      type: 'Inventory Management',
      author: 'ChrisMiller',
      likes: 83,
      image: Card5,
    },
    {
      id: 6,
      name: 'SearchEngine',
      developer: 'X',
      type: 'Search Engine Optimization',
      author: 'LauraKing',
      likes: 86,
      image: Card6,
    },
    {
      id: 7,
      name: 'AliImage',
      developer: 'X',
      type: 'AI Image Processing',
      author: 'OliviaTaylor',
      likes: 90,
      image: Card7,
    },
  ]);

  return (
    <div className="popular-container">
      <style>{`
        .popular-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px; /* Gap between cards */
          margin-top: 5px;
        }
.popular-card {
  background-color: #171238;
  border-radius: 10px;
  padding: 20px;
  width: calc(25% - 10px); /* Adjusted width for 4 cards per row, accounting for gap */
  color: white;
  text-align: justify;
  position: relative;
  height: 330px;
  transition: transform 0.3s ease-in-out;
  border: 2px solid black; /* Added black border */
}

        .popular-card:hover {
          transform: scale(1.05);
        }

        .popular-card img {
          margin-left: -10px;
          margin-top: -20px;
          width: 260px;
          height: 110px;
          object-fit: cover;
        }

        .popular-card h3 {
          margin: 10px;
          font-size: 20px;
          color: #fff;
        }

        .popular-card .likes {
          position: absolute;
          top: 125px;
          right: 20px;
          font-size: 16px;
          color: white;
        }

        .popular-card .details {
          display: flex;
          justify-content: space-between;
          margin-top: -12px;
          padding: 0 10px;
          align-items: flex-start; /* Aligns the items at the start */
        }

        .popular-card .developer,
        .popular-card .type {
          flex: 1; /* Both sections take equal space */
          font-size: 13px;
          color: grey;
          font-weight: bold;
        }

        .popular-card .developer span,
        .popular-card .type span {
          display: block;
          color: darkturquoise;
          padding: 0 12px;
        }

        .popular-card .type {
          text-align: right;
          margin-top: 0; /* Reset the margin */
          max-width: 50%; /* Limits the width of the type section */
          white-space: normal; /* Allows the text to wrap */
          margin-top:-38px;
          margin-left:105px;
        }

        .popular-card .developer {
          padding-right: 10px; /* Adds a bit more space on the right */
        }

        .popular-card .type {
          padding-left: 10px; /* Adds a bit more space on the left */
        }

        .popular-card .author {
          font-size: 18px;
          color: white;
          margin: 10px 0;
          padding: 0 12px;
          display: flex;
          align-items: center;
          font-weight: bold;
        }

        .popular-card .author p {
          margin: 0;
          margin-right: 15px; /* Gap between "By:" and the name */
        }

        .popular-card .author span {
          color: #00c6ff;
          font-weight: bold;
        }

        .popular-card .actions {
          display: flex;
          justify-content: space-between;
          margin-top: 28px;
        }

        .popular-card .read-more,
        .popular-card .source-code {
          background-color: #ff21bc;
          color: white;
          border: none;
          padding: 0 12px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 10px;
          font-weight: bold;
          width: 45%;
          text-align: center;
          text-decoration: none;
          height: 24px;
          line-height: 24px;
        }

        .popular-card .source-code {
          background-color: #00c6ff;
        }
      `}</style>

      {popularItems.map((item) => (
        <div className="popular-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <div className="likes">🤍 {item.likes}</div>
          <div className="details">
            <div className="developer">
              Developer
              <span>{item.developer}</span>
            </div>
            <div className="type">
              Type of Project
              <span>{item.type}</span>
            </div>
          </div>
          <div className="author">
            <p>By:</p>
            <span>{item.author}</span>
          </div>
          <div className="actions">
            <Link to={`/readmore/${item.id}`} className="read-more">READ MORE</Link>
            <a href="#" className="source-code">SOURCE CODE</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Popular;
