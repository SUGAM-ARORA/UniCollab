import React, { useState } from 'react';
import './FAQPage.css'; // Ensure the CSS file is created and imported

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
        answer: "You can edit or delete a project by going to the project's page and clicking on the 'Edit' or 'Delete' button..."
    },
    {
        question: "How can I collaborate with other students?",
        answer: "You can collaborate with other students by sending a collaboration request from the project's page..."
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
        <div className="page-container">
            <h1>FAQs</h1>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'expanded' : ''}`}
                        onClick={() => toggleFaq(index)}
                    >
                        <h2 className="question">{faq.question}</h2>
                        {activeIndex === index && <p className="answer">{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
