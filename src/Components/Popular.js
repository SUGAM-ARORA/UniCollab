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
      uploadedOn: 'dd:mm:yy',
      author: 'JaneSmith',
      likes: 83,
      image: Card1,
    },
    {
      id: 2,
      name: 'TypingTest',
      developer: 'X',
      uploadedOn: 'dd:mm:yy',
      author: 'SophiaWilson',
      likes: 90,
      image: Card2,
    },
    {
      id: 3,
      name: 'Artisan',
      developer: 'X',
      uploadedOn: 'dd:mm:yy',
      author: 'DavidMartinez',
      likes: 95,
      image: Card3,
    },
    {
      id: 4,
      name: 'BBlocks',
      developer: 'X',
      uploadedOn: 'dd:mm:yy',
      author: 'RachelGreen',
      likes: 110,
      image: Card4,
    },
    {
      id: 5,
      name: 'ZzShoes',
      developer: 'X',
      uploadedOn: 'dd:mm:yy',
      author: 'ChrisMiller',
      likes: 83,
      image: Card5,
    },
    {
      id: 6,
      name: 'SearchEngine',
      developer: 'X',
      uploadedOn: 'dd:mm:yy',
      author: 'LauraKing',
      likes: 86,
      image: Card6,
    },
    {
      id: 7,
      name: 'AliImage',
      developer: 'X',
      uploadedOn: 'dd:mm:yy',
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
          justify-content: left;
          margin-top: 5px;
        }

        .popular-card {
          background-color: #2a2551;
          border-radius: 10px;
          margin: 10px;
          padding: 20px;
          width: 270px;
          color: white;
          text-align: left;
          position: relative;
          height: 330px;
          transition: transform 0.3s ease-in-out;
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
        }

        .popular-card .developer {
          font-size: 13px;
          color: grey;
          font-weight: bold;
        }
        .popular-card .uploadedOn {
          font-size: 13px;
          color: grey;
          text-align: right;
          margin-top: -48px;
          font-weight: bold;
        }

        .popular-card .developer span {
          display: block;
          color: darkturquoise;
          padding: 0 24px;
        }
        .popular-card .uploadedOn span {
          display: block;
          color: darkturquoise;
          padding: 0 12px;
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
              Developer:
              <span>{item.developer}</span>
            </div>
            <div className="uploadedOn">
              Uploaded On:
              <span>{item.uploadedOn}</span>
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
