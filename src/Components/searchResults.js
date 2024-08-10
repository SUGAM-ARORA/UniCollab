import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card1 from "../img/card1.jpg";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";
import Card5 from "../img/card5.jpg";
import Card6 from "../img/card6.jpg";
import Card7 from "./projects/card7.png";
import Card8 from "./projects/card8.png";
import Card9 from "./projects/card9.png";
import Card10 from "./projects/card10.png";
import Card11 from "./projects/card11.png";
import Card12 from "./projects/card12.png";

const search = [
    {id: 1, title: "StockIT", category: "Project", image: Card1 },
    {id: 2, title: "TakeNote", category: "Project", image: Card2 },
    {id: 3, title: "TaRct", category: "Project", image: Card3 },
    {id: 4, title: "To Do", category: "Project", image: Card4 },
    {id: 5, title: "ArchiTect", category: "Project", image: Card5 },
    {id: 6, title: "WeatherLy", category: "Project", image: Card6 },
    {id: 7, title: "Typing Test", category:"@JaneCooper", image: Card7 },
    {id: 8, title: "Artisan", category:  "@ArieneMcCoy", image: Card8 },
    {id: 9, title: "BBlocks", category: "@TheresaWebb", image: Card9 },
    {id: 10,title: "ZzShoes", category: "@RalphEdwards", image: Card10 },
    {id: 11,title: "SearchEngine", category: "@Raplhie", image: Card11 },
    {id: 12, title: "Alimage" , category: "Project", image: Card12 }
];

export default search;
