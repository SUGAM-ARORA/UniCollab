

import './Services.css'; // Importing the CSS file for styling

const Services = () => {
    return (
        <div>
            <div className="services-header"><h1><br></br>Our Services</h1></div>
            <div className="service">
                <h2 className="service-title">Project Collaborations</h2>
                <p className="service-description">Collaborate with other students and faculty members on various projects. Whether it's a group assignment, research project, or extracurricular initiative, our platform provides the tools and space for seamless collaboration. Share ideas, assign tasks, track progress, and communicate effectively to achieve your project goals</p>
            </div>
            <div className="service">
                <h2 className="service-title">Resource Sharing</h2>
                <p className="service-description">Share educational resources, documents, and study materials with your peers. Our platform facilitates the easy exchange of notes, lecture recordings, textbooks, and other resources to support your learning journey. Access a wealth of shared knowledge contributed by fellow students and educators to enhance your academic experience.</p>
            </div>
            <div className="service">
                <h2 className="service-title">Communication</h2>
                <p className="service-description">Communicate with other members through messaging and discussion forums. Stay connected with your peers and mentors to ask questions, seek advice, and engage in meaningful discussions. Our platform offers private messaging, group chats, and topic-based forums to foster collaboration, networking, and community building within the academic community.</p>
            </div>
            <div className="service">
                <h2 className="service-title">Event Management</h2>
                <p className="service-description">Organize and manage academic and extracurricular events seamlessly with our event management service. Whether it's a conference, seminar, workshop, or student club activity, our platform provides tools for event planning, promotion, registration, and attendee management. Collaborate with event organizers, share event details, and engage participants to create memorable and impactful events.</p>
            </div>
            <div className="service">
                <h2 className="service-title">Feedback & Evaluation</h2>
                <p className="service-description">Receive valuable feedback and evaluations from peers and instructors to improve your academic performance and personal development. Our platform facilitates peer-to-peer feedback, instructor feedback, and self-assessment tools to support continuous learning and growth. Gain insights into your strengths and areas for improvement, and take actionable steps towards achieving your academic and professional goals</p>
            </div>
            {/* Add more services as needed */}
        </div>
    );
}

export default Services;
