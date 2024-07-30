import React, { useState } from 'react';
import './FAQPage.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import homeIcon from '../../../img/homeicon.png';

const faqs = [
    {
        question: "What is UniCollab?",
        answer: "UniCollab is an integrated platform for students from various universities to showcase their projects, collaborate with peers, and gain insights into different areas of study and innovation. It combines features from LinkedIn, GitHub, Twitter, and Amazon to provide a comprehensive project-sharing and networking experience."
    },
    {
        question: "How can I join UniCollab?",
        answer: "Joining UniCollab is easy! Simply sign up using your university email address to ensure you're part of a verified academic community. Once registered, you can start adding your projects and interacting with others."
    },
    {
        question: "How do I add my project to UniCollab?",
        answer: "You can add a project by clicking on the 'Add Project' button on your dashboard and filling out the necessary details."
    },
    {
        question: "How can I collaborate with other students?",
        answer: "You can collaborate with other students by sending a collaboration request from the project's page. If the project owner accepts your request, you can start working together."
    },
    {
        question: "Is UniCollab free to use?",
        answer: "Yes, UniCollab is free to use. You can create an account, add projects, and collaborate with other students without any cost."
    },
    {
        question: "What types of projects can be added to UniCollab?",
        answer: "You can add any academic or personal project to UniCollab, including software development, research, design, and more. Projects should be appropriate and relevant to the student community."
    },
    {
        question: "How does the feedback mechanism work?",
        answer: "The feedback mechanism allows users to provide constructive feedback on your projects. This can include comments, suggestions for improvement, or appreciation. Feedback helps you improve your projects and gain insights from others."
    },
    {
        question: "Can I see who viewed my project?",
        answer: "Yes, UniCollab provides insights into your project's visibility, including the number of views and interactions. You can see who viewed your project from the project's analytics page."
    },
    {
        question: "How do I earn experience points on UniCollab?",
        answer: "You earn experience points by participating in activities such as adding projects, collaborating with others, and receiving likes or feedback on your projects. The points system encourages active engagement on the platform."
    },
    {
        question: "Can I follow other users on UniCollab?",
        answer: "Yes, you can follow other users to stay updated on their latest projects and activities. Following allows you to build a network and collaborate more effectively."
    }
];

const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <Link to="/">
                <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
            <h1>FAQs</h1>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <>
                        <div
                            key={index}
                            className={activeIndex === index ? "faq-item active" : "faq-item"}
                            onClick={() => toggleFaq(index)}
                        >
                            <h2>
                                {faq.question}
                                <span>{activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}</span>
                            </h2>
                        </div>
                        <p
                            className={activeIndex === index ? "answer expand" : "answer"}
                        >{activeIndex === index ? faq.answer : ""}</p>
                    </>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
