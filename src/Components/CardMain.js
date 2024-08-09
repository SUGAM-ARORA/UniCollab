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
import icon from './projects/profile.png';
import icon1 from './projects/profile1.png'
import Cardcontainer from "./Cardcontainer";


const features = [
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
    img: Card2,
    pro: icon1,
    hearts: 65,
    title: "TakeNote",
    dev: "JohnDoe",
    type: "Productivity",
    role: "Full Stack Developer, Cloud Engineer",
    about: "I'm a versatile professional skilled in full stack development and cloud engineering, building robust applications and scalable cloud solutions.",
    text: "TakeNote is a powerful and intuitive note-taking app specifically designed for developers. It combines the simplicity of traditional note-taking with advanced features tailored to the unique needs of coding professionals. With TakeNote, developers can effortlessly organize their thoughts, code snippets, project documentation, and technical diagrams in one centralized location. The app supports syntax highlighting for multiple programming languages, making it easy to write and review code within notes. Markdown support allows for seamless formatting, while integrated version control ensures that all changes are tracked and recoverable. TakeNote also offers robust search functionality, enabling users to quickly find specific notes or code snippets. Collaboration features allow team members to share and edit notes in real-time, fostering better communication and project coordination. Whether used for brainstorming sessions, meeting notes, or personal code repositories, TakeNote is the ideal companion for developers seeking to enhance productivity and organization in their workflow."
  },
  {
    id: 3,
    img: Card3,
    pro: icon,
    hearts: 32,
    title: "TaRct",
    dev: "AliceBrown",
    type: "Web Development",
    role: "Front-End Developer, Graphic Designer",
    about: "I'm a versatile professional skilled in front-end development and graphic design, crafting visually compelling and user-friendly web interfaces.",
    text: "TaRct is a cutting-edge web development platform that combines the power of Tailwind CSS and React to deliver a seamless and efficient development experience. Tailored for modern developers, TaRct simplifies the process of building responsive and highly customizable user interfaces. With Tailwind CSS, users can leverage utility-first CSS classes to create visually stunning and consistent designs without writing extensive custom CSS. React's component-based Architecture complements this by allowing developers to build dynamic and interactive user interfaces with ease. TaRct offers an intuitive and user-friendly interface that streamlines the development workflow. Developers can quickly prototype and iterate on designs, thanks to the live-reloading and modular structure provided by React. The platform supports a wide range of pre-built components and templates, enabling users to kickstart their projects and maintain a high level of productivity. Whether you are building a single-page application, a complex web app, or a sleek corporate website, TaRct equips you with the tools and flexibility to bring your vision to life. Its robust documentation and active community support ensure that developers of all skill levels can harness the full potential of Tailwind CSS and React, making TaRct the ultimate solution for modern web development."
  },
  {
    id: 4,
    img: Card4,
    pro: icon1,
    hearts: 51,
    title: "To Do",
    dev: "MichaelJones",
    type: "Task Management",
    role: "Back-End Developer, Database Administrator",
    about: "I'm a versatile professional skilled in back-end development and database administration, ensuring efficient server-side operations and data management.",
    text: "Todo is a sleek and intuitive web-based to-do app designed to help you streamline your tasks, manage your time efficiently, and enhance your productivity. With a clean and user-friendly interface, Todo allows you to easily create, edit, and prioritize your tasks. You can organize tasks into different projects, set due dates, and add detailed descriptions to keep all your information centralized and accessible. Todo features smart notifications and reminders to keep you on track, ensuring you never miss an important deadline. The app supports recurring tasks, enabling you to automate repetitive activities and focus on more critical tasks. With real-time synchronization across all your devices, Todo ensures your task lists are always up-to-date, whether you're at your desk or on the move. Advanced search and filter options in Todo make it simple to find specific tasks or view tasks by project, priority, or due date. Collaboration tools allow you to share tasks and lists with colleagues, friends, or family, facilitating teamwork and collective productivity. Todo's elegant design and robust capabilities make it the perfect web-based solution for staying organized, managing your workload, and achieving your goals."
  },
  {
    id: 5,
    img: Card5,
    pro: icon,
    hearts: 47,
    title: "ArchiTect",
    dev: "EmilyDavis",
    type: "Business Management",
    role: "Mobile App Developer, QA Tester",
    about: "I'm a versatile professional skilled in Mobile App development and database administration, ensuring efficient server-side operations and data management.",
    text: "ArchiTect is a sophisticated web platform designed for comprehensive business management and analytics. It features a robust dashboard that provides real-time insights into key business metrics, making it an essential tool for decision-makers and managers. The ArchiTect dashboard showcases critical data points including the number of followers, products sold, total orders, and dynamic tables, all in one convenient interface. With ArchiTect, you can monitor the growth of your customer base through the followers' section, track sales performance with up-to-date figures on products sold, and oversee order fulfillment with the total orders' metric. The dynamic tables allow for interactive data analysis, enabling you to sort, filter, and examine your data from various angles, providing deep insights into your business operations. ArchiTect's user-friendly design ensures that all these features are accessible and easy to navigate, offering a seamless experience whether you're on a desktop or mobile device. The platform's powerful analytics and real-time data presentation help you make informed decisions, optimize operations, and drive business growth. ArchiTect is the ultimate tool for businesses looking to harness the power of data to enhance performance and achieve their strategic goals."
  },
  {
    id: 6,
    img: Card6,
    pro: icon1,
    hearts: 77,
    title: "WeatherLy",
    dev: "AlexJohnson",
    type: "Weather",
    role: "Full Stack Developer, UX Specialist",
    about: "I'm a dynamic professional skilled in both front-end and back-end development, with a keen eye for designing intuitive user interfaces and user experiences.",
    text: "WeatherLy is your ultimate destination for accurate and up-to-date weather information. This sleek and user-friendly website offers comprehensive weather forecasts and real-time data to help you plan your day with confidence. With WeatherLy, you can quickly access current conditions, including temperature, humidity, wind speed, and visibility. Detailed hourly, daily, and weekly forecasts keep you prepared for any weather changes. The platform also provides timely severe weather alerts, ensuring your safety during extreme conditions. Interactive maps let you explore weather patterns with dynamic radar visuals showing precipitation, cloud cover, and temperature variations. Additionally, WeatherLy allows you to save custom locations, making it easy to check the weather for your favorite places. Whether on a desktop or mobile device, WeatherLy delivers reliable and precise weather data, helping you make informed decisions and stay prepared for whatever the weather brings."
  },
  {
    id: 7,
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
    id: 8,
    img: Card8,
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
    id: 9,
    img: Card9,
    pro: icon,
    hearts: 55,
    title: "GameOn",
    dev: "ChrisClark",
    type: "Gaming",
    role: "Game Developer, Animator",
    about: "I'm a game developer and animator passionate about creating immersive and engaging gaming experiences. My expertise spans game design, development, and animation, bringing virtual worlds to life.",
    text: "GameOn is an exciting platform for gamers, offering the latest news, reviews, and insights on popular games and gaming trends. With a vibrant community of gaming enthusiasts, GameOn provides a space for users to share their experiences, discuss strategies, and stay informed about upcoming releases. The platform features in-depth game reviews, detailed guides, and exclusive interviews with game developers. Whether you're a casual gamer or a hardcore enthusiast, GameOn is your go-to source for all things gaming. Stay updated with the latest updates, explore new games, and connect with fellow gamers on GameOn."
  },
{
  id: 10,
  img: Card10,
  pro:icon1,
  hearts: 83,
  title: "ZzShoes",
  dev: "ChrisMiller",
  role:"Full Stack Developer, Cloud Specialist",
  type:"Inventory Management",
  about:"I'm a full stack developer and cloud specialist, skilled in both client-side and server-side development. My expertise includes deploying applications on cloud platforms and ensuring they are scalable and efficient.",
  text: "ZzShoes is a comprehensive platform designed to streamline inventory management and enhance supply chain efficiency for businesses of all sizes. It offers a user-friendly interface with robust features that cater to the diverse needs of retail, manufacturing, and e-commerce sectors. Key functionalities include real-time inventory tracking, automated restocking alerts, and detailed analytics for informed decision-making. StockIT integrates seamlessly with existing ERP and accounting systems, ensuring smooth data flow across various business operations. With advanced reporting tools, businesses can monitor stock levels, forecast demand, and minimize the risks of overstocking or stockouts. StockIT's cloud-based solution provides secure access from any device, enabling teams to manage inventory on the go. Dedicated customer support and regular software updates ensure that users have the latest tools to maintain optimal inventory levels and maximize profitability.",
},
{
  id: 11,
  img: Card11,
  pro:icon,
  hearts: 86,
  title: "SearchEngine",
  dev: "LauraKing",
  role:"Web Developer, Content Strategist",
  type:"Search Engine Optimization",
  about:"I'm a web developer and content strategist, focused on building websites that are not only functional but also content-rich and user-friendly. I ensure that the website's structure and content align with user needs and business goals.",
  text: "SearchEngine is a comprehensive platform designed to streamline inventory management and enhance supply chain efficiency for businesses of all sizes. It offers a user-friendly interface with robust features that cater to the diverse needs of retail, manufacturing, and e-commerce sectors. Key functionalities include real-time inventory tracking, automated restocking alerts, and detailed analytics for informed decision-making. StockIT integrates seamlessly with existing ERP and accounting systems, ensuring smooth data flow across various business operations. With advanced reporting tools, businesses can monitor stock levels, forecast demand, and minimize the risks of overstocking or stockouts. StockIT's cloud-based solution provides secure access from any device, enabling teams to manage inventory on the go. Dedicated customer support and regular software updates ensure that users have the latest tools to maintain optimal inventory levels and maximize profitability.",
},
{
  id: 12,
  img: Card12,
  pro:icon1,
  hearts: 90,
  title: "AIimage",
  dev: "OliviaTaylor",
  role:"Back-End Developer, API Integrator",
  type:"AI Image Processing",
  about:"I'm a back-end developer and API integrator, specializing in creating secure and efficient server-side logic and integrating third-party APIs. My work ensures that web and mobile applications have reliable back-end support.",
  text: "AIimage is a comprehensive platform designed to streamline inventory management and enhance supply chain efficiency for businesses of all sizes. It offers a user-friendly interface with robust features that cater to the diverse needs of retail, manufacturing, and e-commerce sectors. Key functionalities include real-time inventory tracking, automated restocking alerts, and detailed analytics for informed decision-making. StockIT integrates seamlessly with existing ERP and accounting systems, ensuring smooth data flow across various business operations. With advanced reporting tools, businesses can monitor stock levels, forecast demand, and minimize the risks of overstocking or stockouts. StockIT's cloud-based solution provides secure access from any device, enabling teams to manage inventory on the go. Dedicated customer support and regular software updates ensure that users have the latest tools to maintain optimal inventory levels and maximize profitability.",
},
];

function CardMain() {
  return(
    <Cardcontainer features={features}/>
  )
}

export default CardMain;
