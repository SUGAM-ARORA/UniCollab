import Card1 from "./projects/card1.jpg";
import Card2 from "./projects/card7.png";
import Card3 from "./projects/card8.png";
import Card4 from "./projects/card9.png";
import Card5 from "./projects/card10.png";
import Card6 from "./projects/card11.png";
import Card7 from "./projects/card12.png";
import icon from './projects/profile.png';
import icon1 from './projects/profile1.png'
import Cardcontainer from "./Cardcontainer";

const Popularitems = [
  {
    id: 1,
        img: Card1,
        pro: icon,
        hearts: 83,
        title: "StockIT",
        dev: "JaneSmith",
        type: "Devops",
        role: "Web Designer, UX Specialist",
        about: "I'm a versatile professional skilled in web design and user experience, creating intuitive and visually appealing interfaces that enhance user interaction.",
        text: "StockIT is a comprehensive platform designed to streamline inventory management and enhance supply chain efficiency for businesses of all sizes. It offers a user-friendly interface with robust features that cater to the diverse needs of retail, manufacturing, and e-commerce sectors. Key functionalities include real-time inventory tracking, automated restocking alerts, and detailed analytics for informed decision-making. StockIT integrates seamlessly with existing ERP and accounting systems, ensuring smooth data flow across various business operations. With advanced reporting tools, businesses can monitor stock levels, forecast demand, and minimize the risks of overstocking or stockouts. StockIT's cloud-based solution provides secure access from any device, enabling teams to manage inventory on the go. Dedicated customer support and regular software updates ensure that users have the latest tools to maintain optimal inventory levels and maximize profitability."
  },
  {
    id: 2,
    img: Card7,
        pro: icon,
        hearts: 90,
        title: "TypingTest",
        dev: "SophiaWilson",
        type: "Education",
        role: "Web Developer, SEO Specialist",
        about: "I'm a proficient web developer and SEO specialist, dedicated to creating optimized, high-performance websites. I focus on both the technical and strategic aspects of web development to enhance visibility and user engagement.",
        text: "TypingTest is a comprehensive platform designed to help users improve their typing speed and accuracy. This intuitive and user-friendly application offers a range of typing tests and practice exercises to suit different skill levels. With TypingTest, users can track their progress over time, identify areas for improvement, and achieve their typing goals. The platform features real-time feedback, detailed performance analytics, and personalized training plans to enhance the learning experience. TypingTest supports multiple languages and keyboard layouts, making it accessible to a global audience. Whether you're a beginner looking to learn touch typing or an experienced typist aiming to increase your speed, TypingTest provides the tools and resources to help you succeed."
  },
  {
    id: 3,
    img: Card3,
        pro: icon1,
        hearts: 95,
        title: "Artisan",
        dev: "DavidMartinez",
        type: "Art & Design",
        role: "Graphic Designer, Illustrator",
        about: "I'm a creative professional with expertise in graphic design and illustration, dedicated to bringing visual concepts to life through innovative and artistic solutions.",
        text: "Artisan is a vibrant online platform dedicated to showcasing and celebrating the work of artists and designers from around the world. This dynamic community allows creators to share their portfolios, connect with peers, and gain exposure for their work. Artisan offers a user-friendly interface where artists can upload their projects, receive feedback, and participate in collaborative opportunities. The platform features a variety of art forms, including digital art, traditional painting, sculpture, and more. With Artisan, users can explore curated galleries, stay updated on the latest trends in art and design, and discover new talent. Whether you're an artist looking to build your online presence or an art enthusiast seeking inspiration, Artisan is the perfect place to explore and engage with the creative community."
  },
  {
    id: 4,
    pro: icon,
    img: Card4,
    hearts: 110,
    title: "BBlocks",
    dev: "ChrisClark",
    type: "Gaming",
    role: "Game Developer, Animator",
    about: "I'm a game developer and animator passionate about creating immersive and engaging gaming experiences. My expertise spans game design, development, and animation, bringing virtual worlds to life.",
    text: "GameOn is an exciting platform for gamers, offering the latest news, reviews, and insights on popular games and gaming trends. With a vibrant community of gaming enthusiasts, GameOn provides a space for users to share their experiences, discuss strategies, and stay informed about upcoming releases. The platform features in-depth game reviews, detailed guides, and exclusive interviews with game developers. Whether you're a casual gamer or a hardcore enthusiast, GameOn is your go-to source for all things gaming. Stay updated with the latest updates, explore new games, and connect with fellow gamers on GameOn."
  
  },
  {
    id: 5,
    pro: icon1,
    hearts: 83,
    img: Card5,
    title: "ZzShoes",
    dev: "ChrisMiller",
    role: "Full Stack Developer, Cloud Specialist",
    type: "Inventory Management",
    about: "I'm a full stack developer and cloud specialist, skilled in both client-side and server-side development. My expertise includes deploying applications on cloud platforms and ensuring they are scalable and efficient.",
    text: "ZzShoes is a comprehensive platform designed to streamline inventory management and enhance supply chain efficiency for businesses of all sizes. It offers a user-friendly interface with robust features that cater to the diverse needs of retail, manufacturing, and e-commerce sectors. Key functionalities include real-time inventory tracking, automated restocking alerts, and detailed analytics for informed decision-making. StockIT integrates seamlessly with existing ERP and accounting systems, ensuring smooth data flow across various business operations. With advanced reporting tools, businesses can monitor stock levels, forecast demand, and minimize the risks of overstocking or stockouts. StockIT's cloud-based solution provides secure access from any device, enabling teams to manage inventory on the go. Dedicated customer support and regular software updates ensure that users have the latest tools to maintain optimal inventory levels and maximize profitability.",
   
  },
  {
    id: 6,
    pro: icon,
    hearts: 86,
    img: Card6,
    title: "SearchEngine",
    dev: "LauraKing",
    role: "Web Developer, Content Strategist",
    type: "Search Engine Optimization",
    about: "I'm a web developer and content strategist, focused on building websites that are not only functional but also content-rich and user-friendly. I ensure that the website's structure and content align with user needs and business goals.",
    text: "SearchEngine is a comprehensive platform designed to streamline inventory management and enhance supply chain efficiency for businesses of all sizes. It offers a user-friendly interface with robust features that cater to the diverse needs of retail, manufacturing, and e-commerce sectors. Key functionalities include real-time inventory tracking, automated restocking alerts, and detailed analytics for informed decision-making. StockIT integrates seamlessly with existing ERP and accounting systems, ensuring smooth data flow across various business operations. With advanced reporting tools, businesses can monitor stock levels, forecast demand, and minimize the risks of overstocking or stockouts. StockIT's cloud-based solution provides secure access from any device, enabling teams to manage inventory on the go. Dedicated customer support and regular software updates ensure that users have the latest tools to maintain optimal inventory levels and maximize profitability.",
    
  },
  {
    id: 7,
    title: "AIimage",
    developer: "X",
    type: "AI Image Processing",
    dev: "OliviaTaylor",
    hearts: 90,
    img: Card7,
    about: "I'm a back-end developer and API integrator, specializing in creating secure and efficient server-side logic and integrating third-party APIs. My work ensures that web and mobile applications have reliable back-end support.",
    text: "AIimage is a comprehensive platform designed to streamline inventory management and enhance supply chain efficiency for businesses of all sizes. It offers a user-friendly interface with robust features that cater to the diverse needs of retail, manufacturing, and e-commerce sectors. Key functionalities include real-time inventory tracking, automated restocking alerts, and detailed analytics for informed decision-making. StockIT integrates seamlessly with existing ERP and accounting systems, ensuring smooth data flow across various business operations. With advanced reporting tools, businesses can monitor stock levels, forecast demand, and minimize the risks of overstocking or stockouts. StockIT's cloud-based solution provides secure access from any device, enabling teams to manage inventory on the go. Dedicated customer support and regular software updates ensure that users have the latest tools to maintain optimal inventory levels and maximize profitability.",
  },
];

function Popular() {
  return <Cardcontainer features={Popularitems} />;
}


export default Popular;
