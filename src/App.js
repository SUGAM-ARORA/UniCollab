import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./configs/router";
import Footer from "./Components/Footer";
import Helmet from "react-helmet";
import GoToTop from './Components/gototop';
import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext(null)
function App() {

    const getTheme = ()=>{
        return  localStorage.getItem("theme")
    }

    const [theme, setTheme] = useState(getTheme)

    useEffect(() => {
        const saveItem = localStorage.getItem("theme")
        if(saveItem) {
            setTheme(saveItem)
        }
        // else {
        //     const defaultTheme = window.matchMedia('prefers-color-scheme: dark').matches ? 'dark' : 'light';
        //     setTheme(defaultTheme)
        // }
        // const bckground = document.getElementById("container")
        // if(bckground){
        //     bckground.classList.add(theme)
        // }
        // console.log(bckground.className)
    }, []);

    useEffect(()=>{
        localStorage.setItem("theme" , theme)
        const bckground = document.getElementById("container")
        let existingTheme = bckground?.className
        // let existingTheme = existingClass.trim().split(' ')
        existingTheme = existingTheme?.substring(0,existingTheme.lastIndexOf(' '))
        console.log(existingTheme)
        if(bckground){
            bckground.setAttribute('class' , `${existingTheme} ${theme}`)
        }
        // console.log(existingClass)

    },[theme])

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    }

  return (
    <>
      <Helmet>
        <meta name="description" content="Welcome to UniCollab, the ultimate platform for student collaboration. Connect with peers from various universities and colleges to innovate and elevate your projects. UniCollab: where ideas flow, knowledge is shared, and learning transcends classrooms." />
        <meta name="language" content="English" />
        <meta name="keywords" content="Collab, Education, Students, Student Collaboration, University Collaboration, College Projects, Innovative Learning, Peer Networking, Academic Collaboration, Project Sharing, Knowledge Sharing, Student Innovation, Collaborative Learning, University Networking, Inter-University Projects, Academic Networking, Collaborative Projects, Student Platform" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Sugma Arora" />
        <meta property="og:title" content="Unicollab" />
        <meta property="og:description" content="Welcome to UniCollab, the ultimate platform for student collaboration. Connect with peers from various universities and colleges to innovate and elevate your projects. UniCollab: where ideas flow, knowledge is shared, and learning transcends classrooms." />
        <meta property="og:image" content="https://github.com/SUGAM-ARORA/UniCollab/blob/main/image.png" />
        <meta property="og:url" content="https://uni-collab.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
          <div className="App">
            <div className="App-content"></div>
            <div>
              <RouterProvider router={router} />
            </div>
            <GoToTop />
            <Footer />
            <a href="/feedback" style={{ position: 'fixed', bottom: '20px', left: '30px', zIndex: '1000' }}>
              <button
                style={{
                  backgroundColor: '#ff21bc',
                  fontSize: '17px', // Optional: sets text size
                  width: '180px',  // Adjust width as needed
                  height: '45px',  // Adjust height as needed
                  padding: '0',    // Reset padding if needed
                  border: 'none',  // Remove border if any
                  borderRadius: '5px', // Optional: adds rounded corners
                }}
              >
                Help Us Improve!
              </button>
            </a>
          </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;