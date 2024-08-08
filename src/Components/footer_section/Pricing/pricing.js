// pricing.js
import React from "react";
import './pricing.css';
import { Link } from "react-router-dom";
import homeIcon from '../../../img/homeicon.png';

function Pricing() {
    return (
        <div className="pricing">
            <div className="header">
            <Link to="/" className="home-link">
              <img src={homeIcon} alt="Home" className="home-icon" style={{ height: '60px', width: '60px' }} />
            </Link>
                <div className="headingHeader">Start your 7 day free trial today</div>
                <div className="description">Unlock Advanced Features and Maximize Your Potential with UniCollab Pro.</div>
            </div>
            <div className="cards_price">
                <div className="price1">
                    <div className="topic_head">UniCollab</div>
                    <div className="topic_description">Showcase your projects, collaborate with peers, and explore new opportunities. Join the world's largest academic collaboration network and unlock your potential.</div>
                    <div className="topic_price">Free</div>
                    <div className="topic_features">
                        <ul>
                            <li>✅ Create and join projects.</li>
                            <li>✅ Basic file sharing (limited storage).</li>
                            <li>✅ Task assignment and tracking.</li>
                            <li>✅ Access to public forums and discussion boards.</li>
                            <li>✅ Participation in public groups and communities.</li>
                            <li>✅ Viewing public profiles.</li>
                            <li>✅ Access to free articles, tutorials, and guides.</li>
                            <li>✅ Limited access to webinars and online events.</li>
                            <li>✅ Basic templates for project planning and management.</li>
                            <li>✅ Integration with popular educational tools (e.g., Google Docs, Microsoft Office Online).</li>
                            <li>✅ Email notifications and reminders.</li>
                            <li>✅ Create a personal profile.</li>
                            <li>✅ Showcase a limited number of projects in a portfolio.</li>
                        </ul>
                    </div>
                </div>
                <div className="price2">
                    <div className="topic_head">UniCollab <div className="Pro">Pro</div></div>
                    <div className="topic_description">Unlock advanced tools to elevate your projects, understand your audience, and maximize your impact. With UniCollab Pro, take your collaboration to the next level and achieve your academic and professional goals.</div>
                    <div className="topic_price">₹999/month</div>
                    <div className="topic_features">
                        <ul>
                            <li className="prev">← Everything included in Free</li>
                            <li>✅ Unlimited storage for file sharing.</li>
                            <li>✅ Advanced project management tools (Gantt charts, Kanban boards, etc.)</li>
                            <li>✅ Customizable workflows and automation.</li>
                            <li>✅ Access to exclusive premium groups and communities.</li>
                            <li>✅ Ability to create private groups.</li>
                            <li>✅ Direct messaging with mentors and industry experts.</li>
                            <li>✅ Access to all webinars, online courses, and exclusive content.</li>
                            <li>✅ Premium templates and project planning tools.</li>
                            <li>✅ Detailed tutorials and advanced guides.</li>
                            <li>✅ Integration with advanced third-party tools (e.g., Slack, Trello).</li>
                            <li>✅ Advanced analytics on profile and project views.</li>
                            <li>✅ Unlimited projects in portfolio.</li>
                            <li>✅ Highlighted profiles in searches and suggestions.</li>
                            <li>✅ Priority customer support.</li>
                            <li>✅ Enhanced security features (e.g., two-factor authentication, data encryption).</li>
                            <li>✅ Data backup and recovery options.</li>
                            <li>✅ Featured in UniCollab’s spotlight or newsletter.</li>
                            <li>✅ Invitations to exclusive networking events.</li>
                            <li>✅ Priority listing in project collaboration opportunities.</li>
                        </ul>
                    </div>
                    <button className="free_trial">Start your Free Trial Now!</button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
