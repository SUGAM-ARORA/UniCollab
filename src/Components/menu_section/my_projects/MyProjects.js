import {FaPlus} from 'react-icons/fa';
import Menu from '../../Menu';
import './MyProjects.css'
import {Link} from 'react-router-dom';
import {features} from '../../projects/index.js';
import { BsHeartFill } from 'react-icons/bs';
import homeIcon from '../../../img/homeicon.png';
import {useContext} from "react";
import {ThemeContext} from "../../../App";


function MyProjects({showMenu = true}) {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`container my-projects-wrapper ${theme}`}>
            {showMenu && <Menu/>}
            <div className="content">
                <div className='nav'>
                <div className='top fromTop'>
                    <h2 className='main-title'><a href='#'>Projects</a></h2>
                    <h2><a href='#'>My Projects</a></h2> {/*In future, Based on User Login, data can be added here in "href"*/}
                </div>
                <Link to="/">
                    <img src={homeIcon} alt="Home" className="home-icon"/>
                </Link>
                <Link to='/new/project'>
                        <button className='button-np'><FaPlus size={15}/> New Project</button>
                </Link>
                </div>
                <div className='projects-wrapper zoomIn'>
                    {
                        features.map(project => {
                            return(
                                <MyProjectCard project={project}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MyProjects;


function MyProjectCard({project}) {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`project-card ${theme}`}>
            <img src={project.img} alt={project.title}/>
            <div className='details'>
                <div className="top">
                    <h2>{project.title}</h2>
                    <div className="likes">
                        <i>
                            <BsHeartFill/> <span>{project.hearts}</span>
                        </i>
                    </div>
                </div>
                <p>{project.about}</p>
                <div className="btn-wrapper">
                    <Link to="/">
                        <button className='edit-btn'>Edit</button>
                    </Link>
                    <Link to={project.github}>
                        <button className='github-btn'>GitHub</button>
                    </Link>
                </div>
            </div>

        </div>
    );
}