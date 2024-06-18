import React from 'react'
import MyProjects from '../menu_section/my_projects/MyProjects'
import './profile.css'

const profile = () => {
    const handleClick = (event) => {
        const buttons = document.getElementsByClassName('btnProfile');
        for (const button of buttons) {
            button.classList.remove('active');
        }
        event.target.classList.add('active');
        if (document.querySelector(".visible")) {
            document.querySelector(".visible").classList.remove('visible');
        }
        if (document.querySelector(".active").innerHTML === "ABOUT") {
            document.querySelector(".aboutPageProfile").classList.add('visible');
        }
        if (document.querySelector(".active").innerHTML === "PROJECTS") {
            document.querySelector(".projectsPageProfile").classList.add('visible');
        }
    };

    return (
        <div className='boxProfile'>
            <div className="first">
                <div className="profilephoto"></div>
                <div className="Name">SUGAM ARORA</div>
                <div className="usernameProfile">@sugamarora</div>
                <div className="descriptionProfile">Pre-Final Year @PEC, Chandigarh</div>
                <div className="locationProfile">
                    <div className="locationIcon"></div>
                    <div className="locationActual">India</div>
                </div>
                <div className="socialProfile">
                    <div className="linkedinProfile">
                        <div className="linkedinIcon"></div>
                        <a href="https://www.linkedin.com/in/sugamarora23/">Sugam Arora</a>
                    </div>
                    <div className="instaProfile">
                        <div className="instaIcon"></div>
                        <a href="https://github.com/SUGAM-ARORA">SUGAM-ARORA</a>
                    </div>
                </div>
                <button className='editProfile'>Edit Profile</button>
                <div className="memberProfile">MEMBER SINCE: AUGUST 5, 2023</div>
            </div>
            <div className="second">
                <div className="navProfile">
                    <ul>
                        <li className='btnProfile aboutProfile active' onClick={handleClick}>ABOUT</li>
                        <li className='btnProfile projectsProfile' onClick={handleClick}>PROJECTS</li>
                        <li className="btnProfile cartProfile" onClick={handleClick}>CART</li>
                        <li className="btnProfile walletProfile" onClick={handleClick}>WALLET</li>
                    </ul>
                </div>
                <div className="aboutPageProfile visible">
                    <h1>Hi there, I'm <span id='name'>SUGAM ARORA</span></h1>
                    <h1> Know more about me: </h1>
                    <div className="descriptionProfileabout">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, deserunt ipsum perferendis laboriosam molestias possimus nisi dolor fugiat magnam aspernatur reiciendis tenetur sapiente itaque impedit non optio? Deserunt, delectus exercitationem?
                    </div>
                    <ul className='aboutDetails'>
                        <li className='headingAbout'>Educational Details</li>
                        <ol>
                            <li><span className='headAbout'>Heading: </span>Enter your university Educational details</li>
                            <li><span className='headAbout'>Heading: </span>Enter your High School Educational details</li>
                        </ol>
                        <li className='headingAbout'>Skills</li>
                        <ol>
                            <li>Skill 1</li>
                            <li>Skill 2</li>
                        </ol>
                        <li className='headingAbout'>Projects</li>
                        <ol>
                            <li><span className='headAbout'>Heading: </span>Enter details of Project 1</li>
                            <li><span className='headAbout'>Heading: </span>Enter details of Project 2</li>
                        </ol>
                        <li className='headingAbout'>UniCollab Stats</li>
                        <ol>
                            <li><span className='headAbout'>Total Active Days :</span> X days</li>
                            <li><span className='headAbout'>Current Streak : </span>X days</li>
                            <li><span className='headAbout'>Longest Streak :  </span>X days</li>
                        </ol>
                        <li className='headingAbout'>Achievements</li>
                        <ol>
                            <li><span className='headAbout'>Heading: </span>Enter your achievement 1</li>
                            <li><span className='headAbout'>Heading: </span>Enter your achievement 2</li>
                        </ol>
                    </ul>
                </div>
                <div className="projectsPageProfile">
                    <MyProjects showMenu={false} />
                </div>
            </div>
        </div>
    )
}

export default profile
