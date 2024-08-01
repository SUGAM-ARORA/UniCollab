import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Testimonials.css";
import homeIcon from '../../img/homeicon.png'; // Home icon

// Using existing images from About_us.jsx
import collaborate from '../../img/collaboration.png';
import collaboratehover from '../../img/collaborationhover.png';

const testimonials = [
    {
        name: "JohnDoe",
        feedback: "UniCollab has been a game-changer for my academic projects. The collaboration tools are top-notch, and I've been able to work seamlessly with students from different universities."
    },
    {
        name: "JaneSmith",
        feedback: "Thanks to UniCollab, I found the perfect study group that helped me ace my exams. The resource sharing feature is incredibly useful."
    },
    {
        name: "SophiaWilson",
        feedback: "The mentorship programs on UniCollab connected me with industry professionals who guided me through my career path. I highly recommend it!"
    },
    {
        name: "EmilyDavis",
        feedback: "Event management on UniCollab made organizing our college seminar a breeze. The platform's tools are very user-friendly and efficient."
    },
    {
        name: "AliceBrown",
        feedback: "Receiving feedback and evaluations through UniCollab has significantly improved my academic performance. The platform fosters a supportive community."
    },
    {
        name: "Chris Miller",
        feedback: "UniCollab's resources have been invaluable in my research projects. The platform has a wide range of tools that make collaboration easy and efficient."
    }
];

const Testimonials = () => {
    const [hover, setHover] = useState(false);

    return (
        <div id='testimonials' style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem'}}>
            <Link to="/">
                <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
            <h1 className='testimonials-heading'>Testimonials</h1>
            <div className='testimonials-block'>
                {testimonials.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className='testimonial-item' 
                        onMouseOver={() => setHover(true)} 
                        onMouseLeave={() => setHover(false)}
                    >
                        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                            <img 
                                src={hover ? collaboratehover : collaborate} 
                                alt="User Icon" 
                                style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}} 
                            />
                            <div className='testimonial-name'>{testimonial.name}</div>
                        </div>
                        <p className='testimonial-feedback'>{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
