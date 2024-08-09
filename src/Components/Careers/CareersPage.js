import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRocket, faHeart } from '@fortawesome/free-solid-svg-icons';
import './careers.css'
import homeIcon from '../../img/homeicon.png';
import { Link } from 'react-router-dom';
import {ThemeContext} from "../../App";



const Careers = () => {
  const handleResume = () => {
    var link = "mailto:abc@unicollab.com"
    window.location.href = link;
  }

  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme}>
      <Link to="/">
        <img src={homeIcon} alt="Home" className="home-icon" />
      </Link>
      <div className='body'>

        <div className="container1Careers">
          <div className={`headingCareers1 ${theme}`}>Let's build from here, together</div>
          <div className={`descriptionCareers1 ${theme}`}>Join our team and accelerate human progress through innovative developer collaboration.</div>
          <div className="searchCareers1">
            <input type="text" placeholder='Search for jobs by keyword' />
            <button>Search</button>
          </div>
        </div>
        <div className="container3Careers">
          <div className={`headingCareers2 ${theme}`}><span className='textCareers'>Who we are.</span> What we believe.</div>
          <div className="boxes2Careers">
            <div className="box2aCareers">
              <div className="Careers2aa">
                <div className="Careers2abHeading">
                  <FontAwesomeIcon icon={faRocket} style={{ color: "#ffffff", fontSize: "30px" }} />
                  <span className='text2Careers'>What</span>
                </div>
                <div className={`Careeers2abdesc ${theme}`}>The premier developer platform for fostering collaboration and innovation.</div>
              </div>
              <div className="Careers2aa">
                <div className="Careers2abHeading">
                  <FontAwesomeIcon icon={faSearch} style={{ color: "#ffffff", fontSize: "30px" }} />
                  <span className='text2Careers'>Why</span>
                </div>
                <div className={`Careeers2abdesc ${theme}`}>Accelerate human progress through developer collaboration.</div>
              </div>
            </div>
            <div className="box2bCareers">
              <div className="Careers2aa">
                <div className="Careers2abHeading">
                  <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", fontSize: "30px" }} />
                  <span className='text2Careers'>How</span>
                </div>
                <div className={`Careeers2abdesc ${theme}`}>Our values guide our interactions, decision-making, and how we engage with each other.</div>
              </div>
            </div>
          </div>
          <div className="boxes3Careers">
            <div className="boxes3aCareers">
              <div className={`headingCareers3 ${theme}`}>UniCollab Values</div>
              <div className="box3adesc">
                <ul >
                  <li className={theme}>Students-obsessed</li>
                  <li className={theme}>Ship to learn</li>
                  <li className={theme}>Growth mindset</li>
                  <li className={theme}>Own the outcome</li>
                  <li className={theme}>Better together</li>
                  <li className={theme}>Diverse and inclusive</li>
                </ul>
              </div>
            </div>
            <div className="boxes3aCareers">
              <div className={`headingCareers3 ${theme}`}>Manager fundamentals</div>
              <div className="box3adesc">
                <ul>
                  <li className={theme}>Model</li>
                  <li className={theme}>Coach</li>
                  <li className={theme}>Care</li>
                </ul>
              </div>
            </div>
            <div className="boxes3aCareers">
              <div className={`headingCareers3 ${theme}`}>Leadership principles</div>
              <div className="box3adesc">
                <ul>
                  <li className={theme}>Create clarity</li>
                  <li className={theme}>Generate energy</li>
                  <li className={theme}>Deliver success</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container2Careers">
          <div className={`headingCareers2 ${theme}`}><span className='textCareers'>UniCollab</span> is where the future works</div>
          <div className={`descriptionCareers2 ${theme}`}>Every day, we refine, iterate, and explore ways to improve work for everyone. Join us in creating a better future of work—one that is more connected, inclusive, and flexible.</div>
          <div className="boxes1Careers">
            <div className="box1Careers">
              <svg  fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path d="m29.976 46.4039c9.0928 0 16.464-7.3711 16.464-16.4639 0-9.0929-7.3712-16.464-16.464-16.464s-16.464 7.3711-16.464 16.464c0 9.0928 7.3712 16.4639 16.464 16.4639z"></path><path d="m26.46 1.52405h-21.396c-1.93521 0-3.504 1.56879-3.504 3.504v21.39595c0 1.9353 1.56879 3.504 3.504 3.504h21.396c1.9352 0 3.504-1.5687 3.504-3.504v-21.39595c0-1.93521-1.5688-3.504-3.504-3.504z"></path></g></svg>
              <div className={`headingCareers3 ${theme}`}>Connected</div>
              <div className={`descriptionCareers3 ${theme}`}>We come together wherever we are - across time zones, regions, offices and screens.</div>
            </div>
            <div className="box1Careers">
              <svg width="48" height="48" fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="m27.29 8.2a1 1 0 0 0 .33.05 1 1 0 0 0 .94-.66l1.19-3.44a1 1 0 0 0 -.05-.76.92.92 0 0 0 -.56-.5 1 1 0 0 0 -1.27.61l-1.19 3.43a1 1 0 0 0 0 .76 1 1 0 0 0 .61.51z" fill="#FFF"></path>
                <path d="m23.65 7.93h.07a1 1 0 0 0 .68-.34 1 1 0 0 0 .24-.72l-.27-3.87a1 1 0 0 0 -1.06-.92 1 1 0 0 0 -.68.34 1 1 0 0 0 -.24.72l.27 3.86a1 1 0 0 0 .99.93z" fill="#FFF"></path>
                <path d="m30.93 10.46a1 1 0 0 0 .74-.33l2.6-2.85a1 1 0 0 0 -.07-1.41 1 1 0 0 0 -1.4.07l-2.6 2.85a1 1 0 0 0 .06 1.41 1 1 0 0 0 .67.26z" fill="#FFF"></path>
                <path d="m39.92 26.94a3.69 3.69 0 0 0 -3.7-3.2 5.81 5.81 0 0 0 -2.48.64v-7.5a3.71 3.71 0 0 0 -2.88-3.65 3.82 3.82 0 0 0 -.89-.07 3.64 3.64 0 0 0 -6.2.27 3.82 3.82 0 0 0 -.85.13v-1.8a3.72 3.72 0 0 0 -3.05-3.68h-.11a3.64 3.64 0 0 0 -3.58-3.31 3.64 3.64 0 0 0 -6.18-.29 4.53 4.53 0 0 0 -.89.08 3.7 3.7 0 0 0 -2.9 3.65v7.5a5.88 5.88 0 0 0 -2.48-.64 3.69 3.69 0 0 0 -3.73 3.19 3.85 3.85 0 0 0 3.1 4.23c1.12.31 3.42 2.71 4.65 4.31a8.34 8.34 0 0 0 7.3 3.51 8 8 0 0 0 2-.37v.48a8.49 8.49 0 0 0 7.85 8.58h.49a8.37 8.37 0 0 0 6.8-3.52c1.42-1.85 3.6-4 4.66-4.32a3.85 3.85 0 0 0 3.07-4.22zm-37.7-8.38a1.49 1.49 0 0 1 1.51-1.29 6.56 6.56 0 0 1 3.12 1.38 1 1 0 0 0 1 .07 1 1 0 0 0 .54-.89v-9.62a1.5 1.5 0 0 1 1.17-1.5 1 1 0 0 1 .39 0v8.29a1 1 0 0 0 2 0v-9.47a1.43 1.43 0 0 1 2-.08v9.76a1 1 0 1 0 2 0v-8.21a1.57 1.57 0 0 1 .53 0 1.37 1.37 0 0 1 1 .8v6.86a1 1 0 1 0 2 0v-4.42h.12a1.49 1.49 0 0 1 1.18 1.5v3.46a3.66 3.66 0 0 0 -.52 1.54l-.29.05a3.71 3.71 0 0 0 -2.97 3.65v7.15a6 6 0 0 1 -2.11.52h-.36a6.15 6.15 0 0 1 -5-2.62c-.14-.18-3.42-4.46-5.84-5.14-1.22-.35-1.56-1.14-1.47-1.79zm17 1.88a1.5 1.5 0 0 1 1.12-1.5v5.94a1 1 0 1 0 2 0v-7.8a1.43 1.43 0 0 1 1.44-1.44h.21v9.22a1 1 0 1 0 2 0v-10.75a1.44 1.44 0 0 1 1.79-.06v10.83a1 1 0 1 0 2 0v-9.49a1.57 1.57 0 0 1 .61 0 1.5 1.5 0 0 1 1.13 1.49v9.63a1 1 0 0 0 1 1 1 1 0 0 0 .56-.18 6.45 6.45 0 0 1 3.12-1.39 1.49 1.49 0 0 1 1.51 1.3c.09.64-.25 1.46-1.47 1.8-2.42.67-5.7 5-5.84 5.14a6.15 6.15 0 0 1 -5.4 2.61 6.28 6.28 0 0 1 -5.79-6.37z" fill="#FFF"></path>
              </svg>

              <div className={`headingCareers3 ${theme}`}>Inclusive</div>
              <div className={`descriptionCareers3 ${theme}`}>Our teams reflect the rich diversity of our world, with equitable access to opportunity for everyone.</div>
            </div>
            <div className="box1Careers">
              <svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#a)" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                  <path d="m24 1.5c-4.4501 0-8.8002 1.3196-12.5003 3.79194-3.70013 2.47233-6.58401 5.98636-8.28698 10.09766-1.70297 4.1114-2.14855 8.6354-1.28038 12.9999.86817 4.3646 3.01109 8.3737 6.15777 11.5204 3.14669 3.1467 7.15579 5.2896 11.52039 6.1578 4.3646.8681 8.8885.4226 12.9999-1.2804 4.1113-1.703 7.6253-4.5869 10.0977-8.287 2.4723-3.7001 3.7919-8.0502 3.7919-12.5003.0016-2.9552-.5793-5.8817-1.7095-8.6122-1.1302-2.7306-2.7874-5.2116-4.8771-7.30122-2.0896-2.08963-4.5706-3.74691-7.3011-4.87708-2.7306-1.13017-5.6571-1.71107-8.6123-1.7095z"></path>
                  <path d="m24 8.86804v2.29196"></path>
                  <path d="m13.296 13.2959 1.632 1.632"></path>
                  <path d="m8.86804 24h2.29196"></path>
                  <path d="m13.296 34.704 1.632-1.632"></path>
                  <path d="m24 39.132v-2.292"></path>
                  <path d="m34.704 34.704-1.632-1.632"></path>
                  <path d="m39.132 24h-2.292"></path>
                  <path d="m19.596 19.5959 4.404 4.404 10.704-10.704"></path>
                </g>
              </svg>

              <div className={`headingCareers3 ${theme}`}>Flexible</div>
              <div className={`descriptionCareers3 ${theme}`}>We believe in your freedom to work when and how you work best, to help us all thrive.</div>
            </div>
          </div>
        </div>
        <div className="container4Careers">
          <div className="boxes4Careers">
            <div className="box4desc">"Working at UniCollab has been transformative. The platform's commitment to fostering collaboration among students from different universities is inspiring. UniCollab values innovation and nurtures a supportive environment where ideas flourish. It's a privilege to shape the future of student collaboration here."</div>
            <div className="writerCareers">- Taylor, Engineer</div>
          </div>
          <div className="boxes4Careers">
            <div className="box4desc">"Joining UniCollab has been rewarding. The platform's dedication to breaking down barriers between universities and promoting knowledge sharing is unmatched. UniCollab's emphasis on creativity and teamwork has empowered me to grow both personally and professionally. It's exciting to contribute to revolutionizing how students learn and innovate together."</div>
            <div className="writerCareers">- Stanley, Designer</div>
          </div>
        </div>
        <div className="container5Careers">
          <div className={`headingCareers2 ${theme}`}><span className='textCareers'>Open</span> Positions</div>
          <div className={`descriptionCareers1 ${theme}`}>Explore our open roles for working totally remotely, from the office or somewhere in between.</div>
          <div className="openingsCareers">
            <div className="openCareers">
              <span className={theme}>1. Software Engineer</span>
              <span className={theme}>-</span>
              <div className={`location ${theme}`}>Mumbai, India / Remote</div>
            </div>
            <div className="openCareers">
              <span className={theme} >2. Graphic Designer</span>
              <span className={theme}>-</span>
              <div className={`location ${theme}`}>Gurgaon, India / Remote</div>
            </div>
            <div className="openCareers">
              <span className={theme}>3. Data Analyst</span>
              <span className={theme}>-</span>
              <div className={`location ${theme}`}>Banglore, India / Remote</div>
            </div>
          </div>
        </div>
        <button className='submitCareers' onClick={handleResume}>Send Your Job-Application @UniCollab</button>
      </div>
    </div>
  )
}

export default Careers
