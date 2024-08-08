import React from 'react';
import './PortFolio.css';
import logo from "../PortFolio/logo.png";
import homeIcon from '../FreeLancer/homeicon.png';
import { Link } from 'react-router-dom';
import Top from "./UniCollab-Top.png";
import Bottom from "./UniCollab-Bottom.png";

const PortFolio = () => {
    return (
        <div className="container2">
            <Link to="/" className="home-link">
              <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
            <img src={Top} alt="Logo" className="top1" style={{ width: '550px' }} />
            <img src={Bottom} alt="Logo" className="bottom1" style={{ width: '550px' }} />
            <header className="header">
                <h1>UniCollab</h1>
                <img 
    src={logo} 
    alt="Logo" 
    className="logo" 
    style={{ 
        width: '150px', 
        display: 'block', 
        margin: '0 auto', 
        border: '5px solid darkturquoise' /* Border around the image */
    }} 
/>

            </header>
            <img 
                    src="https://readme-typing-svg.herokuapp.com/?color=00FFFF&size=40&width=900&height=80&lines=UniCollab:%20Unleashing%20Collaborative%20Learning" 
                    alt="UniCollab Typing Animation"
                    style={{ display: 'block', margin: '0 auto' }}
                />
            <section className="section">
                <h2>About UniCollab</h2>
                <p>
                    UniCollab is more than just a platform; it's a gateway to a world where students from different universities/colleges converge to collaborate, innovate, and elevate their projects. Imagine a space where ideas flow freely, where knowledge is shared effortlessly, and where learning transcends classrooms. That's UniCollab for you.
                </p>
            </section>
            <section className="section">
                <h2>Scope of the Project</h2>
                <p>
                    To actively contribute to UniCollab, I encourage you to delve into the PROPOSED-AIM file which provides a comprehensive outline of our project's overarching goals and feature set. If you identify features that are needed but not yet implemented (as mostly are), please create an issue outlining the feature request for discussion and implementation. Your input will drive UniCollab's evolution as a dynamic and impactful platform for student collaboration.
                </p>
            </section>
            <section className="section">
                <h2>Tech Stack</h2>
                <ul>
                    <li>Node.js with Express.js for the server</li>
                    <li>MongoDB for the database (using Mongoose for object modeling)</li>
                    <li>Firebase Authentication for user authentication and authorization</li>
                    <li>Firebase Cloud Functions for serverless backend logic</li>
                    <li>React.js for a dynamic and responsive user interface</li>
                    <li>HTML5, CSS3, JavaScript for elegant and modern design</li>
                    <li>Firebase Hosting for fast and secure web hosting</li>
                    <li>Firebase Realtime Database for real-time data synchronization</li>
                    <li>GitLab CI/CD for automated testing and deployment</li>
                    <li>Docker for efficient and scalable deployment</li>
                    <li>Kubernetes for managing containerized applications</li>
                    <li>AWS for reliable and scalable hosting</li>
                    <li>AWS Lambda for cost-effective and scalable backend services</li>
                    <li>AWS S3 for secure and scalable storage solutions</li>
                    <li>TensorFlow and PyTorch for advanced machine learning capabilities</li>
                    <li>scikit-learn, pandas, NumPy for data manipulation and analysis</li>
                    <li>Docker containers for easy deployment of machine learning models</li>
                    <li>JWT for secure authentication and authorization</li>
                    <li>D3.js or Chart.js for interactive and visually appealing data representation</li>
                    <li>Jest for React.js unit testing, Selenium for end-to-end testing</li>
                </ul>
            </section>
            <section className="section key-features">
    <h2>Key Features</h2>
    <ul>
        <li>Project Showcase: Showcase your projects and discover what other students are working on.</li>
        <li>Collaborative Tools: Work together seamlessly with integrated collaboration tools.</li>
        <li>Knowledge Sharing: Share insights, tips, and tricks with a community passionate about learning.</li>
        <li>Career Opportunities: Explore internship and job opportunities from our partner organizations.</li>
    </ul>
</section>

<section className="section why-choose">
    <h2>Why Choose UniCollab?</h2>
    <ul>
        <li>Enhanced Learning: Learn from peers, mentors, and a wealth of shared resources.</li>
        <li>Networking Opportunities: Connect with students, professionals, and potential employers.</li>
        <li>Project Visibility: Showcase your projects and gain recognition for your work.</li>
        <li>Collaboration: Work with a diverse group of students on innovative projects.</li>
        <li>Career Growth: Discover job and internship opportunities tailored to your skills and interests.</li>
        <li>Community Support: Be part of a supportive and engaging community.</li>
    </ul>
</section>

<section className="section key-benefits">
    <h2>Key Benefits</h2>
    <ul>
        <li>Knowledge Sharing: Access a wide range of tutorials, articles, and learning materials.</li>
        <li>Real-Time Collaboration: Use integrated tools for seamless teamwork.</li>
        <li>Skill Development: Participate in events, workshops, and collaborative projects to enhance your skills.</li>
        <li>Recognition: Get recognized for your contributions and projects.</li>
    </ul>
</section>

        </div>
    );
}

export default PortFolio;
