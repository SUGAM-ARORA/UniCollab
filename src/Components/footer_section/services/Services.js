import React, { useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import homeIcon from '../../../img/homeicon.png';
import { FaProjectDiagram, FaShareAlt, FaCommentDots, FaCalendarAlt, FaStar, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

const services = [
    {
        title: "Project Collaborations -- Yeah!!",
        icon: <FaProjectDiagram size={40}/>,
        content: `Collaborate with other students and faculty members on various projects. Whether it's a group assignment, research project, or extracurricular initiative, our platform provides the tools and space for seamless collaboration. Share ideas, assign tasks, track progress, and communicate effectively to achieve your project goals.`
    },
    {
        title: "Welcome to Resource Sharing!!",
        icon: <FaShareAlt size={40}/>,
        content: `Share educational resources, documents, and study materials with your peers. Our platform facilitates the easy exchange of notes, lecture recordings, textbooks, and other resources to support your learning journey. Access a wealth of shared knowledge contributed by fellow students and educators to enhance your academic experience.`
    },
    {
        title: "What's new!! -- *Communication*",
        icon: <FaCommentDots size={40}/>,
        content: `Communicate with other members through messaging and discussion forums. Stay connected with your peers and mentors to ask questions, seek advice, and engage in meaningful discussions. Our platform offers private messaging, group chats, and topic-based forums to foster collaboration, networking, and community building within the academic community.`
    },
    {
        title: "What's in here -- Event management!!",
        icon: <FaCalendarAlt size={40}/>,
        content: `Organize and manage academic and extracurricular events seamlessly with our event management service. Whether it's a conference, seminar, workshop, or student club activity, our platform provides tools for event planning, promotion, registration, and attendee management. Collaborate with event organizers, share event details, and engage participants to create memorable and impactful events.`
    },
    {
        title: "Can have Feedback & Evaluation !!",
        icon: <FaStar size={40}/>,
        content: `Receive valuable feedback and evaluations from peers and instructors to improve your academic performance and personal development. Our platform facilitates peer-to-peer feedback, instructor feedback, and self-assessment tools to support continuous learning and growth. Gain insights into your strengths and areas for improvement, and take actionable steps towards achieving your academic and professional goals.`
    },
    {
        title: "Just enjoy Mentorship Programs!!",
        icon: <FaChalkboardTeacher size={40}/>,
        content: `Connect with experienced mentors who can guide you through your academic and career journey. Our mentorship programs pair students with professionals and alumni who provide advice, support, and networking opportunities. Benefit from one-on-one mentoring sessions, group mentoring, and workshops to help you achieve your goals.`
    },
    {
        title: "Study Groups -- Available now !!",
        icon: <FaUsers size={40}/>,
        content: `Join or form study groups to prepare for exams, work on assignments, and enhance your understanding of course materials. Our platform makes it easy to find and connect with peers who share your academic interests and goals. Collaborate in real-time, share resources, and support each other in a structured and productive study environment.`
    }
];

const Services = () => {

    return (
        <div className="services-page">
            <Link to="/">
                <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
            <h1>Our Services</h1>
            <div className="services">
                {services.map((service, index) => (
                    <React.Fragment key={index}>
                        <div
                            className={`service-post ${activeIndex === index ? 'active' : ''}`}
                        >
                            {service.icon}
                            <h2>
                                {service.title}
                            </h2>
                            <div className={`content expand`}>
                                {service.content}
                            </div>
                        </div>

                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Services;
