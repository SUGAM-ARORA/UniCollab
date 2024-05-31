import React from "react";
import { FaArrowLeft, FaUserCircle } from "react-icons/fa";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';


const UserProfile = ({ user }) => {
    return (
        <div>
            <div className="profile-page">
                <Link to="/">
                    <button className="back-button">
                        <FaArrowLeft />
                    </button>
                </Link>

                <div className="profile-header">
                    {user.profilePicture ? (
                        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
                    ) : (
                        <FaUserCircle className="profile-icon" />
                    )}
                    <div className="profile-info">
                        <h1>{user.name}</h1>
                        <div className="profile-stats">
                            <div className="stats-item">
                                <h2>{user.projectsNum}</h2>
                                <p>Projects</p>
                            </div>
                            <div className="stats-item">
                                <h2>{user.followers}</h2>
                                <p>Followers</p>
                            </div>
                            <div className="stats-item">
                                <h2>{user.following}</h2>
                                <p>Following</p>
                            </div>
                        </div>
                        <p className="profile-bio">{user.bio}</p>
                        <button onClick={() => toast.success(`You're now following ${user.name}!`)} className="follow-button">Follow</button>
                    </div>
                </div>
                <div className="profile-section">
                    <h2>Projects</h2>
                    <ul>
                        {user.projects.map((project, index) => (
                            <li key={index}>{project}</li>
                        ))}
                    </ul>
                </div>
                <div className="profile-section">
                    <h2>Skills</h2>
                    <ul>
                        {user.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
};

const user = {
    name: "Jane Doe",
    profilePicture: "",
    bio: "Developer. Innovator. Creator.",
    projectsNum: 10,
    followers: 120,
    following: 80,
    projectsBuilt: 5,
    projects: ["Collaborative Platform", "E-Learning App", "Weather Dashboard", "Chat Application", "Task Manager"],
    skills: ["JavaScript", "React", "Node.js", "CSS", "Python"]
};

export default function App() {
    return <UserProfile user={user} />;
}
