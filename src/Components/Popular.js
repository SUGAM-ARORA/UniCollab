import Card1 from "./projects/card1.jpg";
import Card2 from "./projects/card7.png";
import Card3 from "./projects/card8.png";
import Card4 from "./projects/card9.png";
import Card5 from "./projects/card10.png";
import Card6 from "./projects/card11.png";
import Card7 from "./projects/card12.png";
import Cardcontainer from "./Cardcontainer";

const Popularitems = [
  {
    id: 1,
    title: "StockIT",
    developer: "X",
    uploadedOn: "dd:mm:yy",
    dev: "JaneSmith",
    likes: 83,
    img: Card1,
  },
  {
    id: 2,
    title: "TypingTest",
    developer: "X",
    uploadedOn: "dd:mm:yy",
    dev: "SophiaWilson",
    likes: 90,
    img: Card2,
  },
  {
    id: 3,
    title: "Artisan",
    developer: "X",
    uploadedOn: "dd:mm:yy",
    dev: "DavidMartinez",
    likes: 95,
    img: Card3,
  },
  {
    id: 4,
    title: "BBlocks",
    developer: "X",
    uploadedOn: "dd:mm:yy",
    dev: "RachelGreen",
    likes: 110,
    img: Card4,
  },
  {
    id: 5,
    title: "ZzShoes",
    developer: "X",
    uploadedOn: "dd:mm:yy",
    dev: "ChrisMiller",
    likes: 83,
    img: Card5,
  },
  {
    id: 6,
    title: "SearchEngine",
    developer: "X",
    uploadedOn: "dd:mm:yy",
    dev: "LauraKing",
    likes: 86,
    img: Card6,
  },
  {
    id: 7,
    title: "Aliimg",
    developer: "X",
    uploadedOn: "dd:mm:yy",
    dev: "OliviaTaylor",
    likes: 90,
    img: Card7,
  },
];

function Popular() {
  return <Cardcontainer features={Popularitems} />;
}


export default Popular;
