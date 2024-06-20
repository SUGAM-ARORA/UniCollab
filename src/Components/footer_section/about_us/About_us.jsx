import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./About_us.css";
import collaborate from '../../../img/collaboration.png';
import collaboratehover from '../../../img/collaborationhover.png';
import knowledge from '../../../img/knowledge.png';
import knowledgehover from '../../../img/knowledgehover.png';
import project from '../../../img/project.png';
import projecthover from '../../../img/projecthover.png';
import event from '../../../img/event.png';
import eventhover from '../../../img/eventhover.png';
import homeIcon from '../../../img/homeicon.png';


const AboutUs = () => {
    const [collaborateHover, setCollaborateHover] = useState(false);
    const [projectHover, setProjectHover] = useState(false);
    const [eventHover, setEventHover] = useState(false);
    const [knowledgeHover, setKnowledgeHover] = useState(false);

  return (
    <div id='about-us' style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem'}}>
    <Link to="/">
    <img src={homeIcon} alt="Home" className="home-icon" />
    </Link>
    <h1 className='about-us-heading'>About Us</h1>
    <div className='about-us-block'>
        <div className='about-us-community' onMouseOver={()=>setCollaborateHover(true)} onMouseLeave={()=>setCollaborateHover(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={collaborateHover ? collaboratehover : collaborate} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Collaboration Hub</div>
            </div>
            <p className='about-us-blk-para'>A central space where students can form teams, share resources, and brainstorm ideas seamlessly. It includes features like group chats, file sharing, and task management to foster effective collaboration regardless of physical distance or university affiliation.</p>
        </div>
        <div className='about-us-product' onMouseOver={()=>setKnowledgeHover(true)} onMouseLeave={()=>setKnowledgeHover(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={knowledgeHover ? knowledgehover : knowledge} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Knowledge Exchange Forum</div>
            </div>
            <p className='about-us-blk-para'>An interactive forum where students can engage in discussions, ask questions, and share insights on various topics related to their fields of study. It encourages a culture of learning beyond traditional classroom boundaries by facilitating peer-to-peer knowledge exchange.</p>
        </div>
    </div>
    <div className='about-us-block'>
        <div className='about-us-location' onMouseOver={()=>setProjectHover(true)} onMouseLeave={()=>setProjectHover(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={projectHover ? projecthover : project} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Project Showcase</div>
            </div>
            <p className='about-us-blk-para'>A platform for students to showcase their completed projects, research papers, and innovative solutions. It provides visibility to their work, fosters recognition, and facilitates networking opportunities with peers, educators, and potential collaborators or employers.</p>
        </div>
        <div className='about-us-event' onMouseOver={()=>setEventHover(true)} onMouseLeave={()=>setEventHover(false)}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <img src={eventHover ? eventhover : event} alt="" style={{marginLeft: '1rem', marginTop: '1rem', width: '3rem'}}/>
                <div className='about-us-blk-text'>Virtual Events Space</div>
            </div>
            <p className='about-us-blk-para'>A virtual environment where universities can host seminars, workshops and other collaborative events. It enables students to participate in enriching experiences, interact with industry experts, and broaden their perspectives without the limitations of physical attendance.</p>
        </div>
    </div>
    </div>
  )
}

export default AboutUs