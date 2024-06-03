import { FaPlus } from 'react-icons/fa';
import Menu from '../../Menu';
import './MyProjects.css'
import { Link } from 'react-router-dom';
import Card1 from "../../../img/card1.jpg";
import Card2 from "../../../img/card2.jpg";
import Card3 from "../../../img/card3.jpg";
import Card4 from "../../../img/card4.jpg";
import Card5 from "../../../img/card5.jpg";
import Card6 from "../../../img/card6.jpg";
import Card7 from "../../../img/card7.png";
import Card8 from "../../../img/card8.png";
import Card9 from "../../../img/card9.png";

import CardMain from '../../CardMain';
import { BsHeartFill } from 'react-icons/bs';


const SampleData = [
    {
        id: 1,
        name: "ToDo app",
        noOfHearts: "10",
        github: "/",
        description: "This is an awesome project. I have used bla blaaaa. This is an awesome project. I have used bla blaaaa",
        skills: ['HTML', 'CSS', 'JavaScript'],
        uploadedDate: '2023-10-15',
        image: Card1
    },
    {
        id: 2,
        name: "Weather app",
        noOfHearts: "10",
        github: "/",
        description: "This is an awesome project. I have used bla blaaaa. This is an awesome project. I have used bla blaaaa",
        skills: ['HTML', 'CSS', 'JavaScript'],
        uploadedDate: '2023-10-15',
        image: Card2
    },
    {
        id: 3,
        name: "Expense tracker",
        noOfHearts: "10",
        github: "/",
        description: "This is an awesome project. I have used bla blaaaa. This is an awesome project. I have used bla blaaaa",
        skills: ['HTML', 'CSS', 'JavaScript'],
        uploadedDate: '2023-10-15',
        image: Card3
    },
    {
        id: 4,
        name: "E commerce website",
        noOfHearts: "10",
        github: "/",
        description: "This is an awesome project. I have used bla blaaaa. This is an awesome project. I have used bla blaaaa",
        skills: ['HTML', 'CSS', 'JavaScript'],
        uploadedDate: '2023-10-15',
        image: Card4
    },
    {
        id: 5,
        name: "E commerce website",
        noOfHearts: "10",
        github: "/",
        description: "This is an awesome project. I have used bla blaaaa. This is an awesome project. I have used bla blaaaa",
        skills: ['HTML', 'CSS', 'JavaScript'],
        uploadedDate: '2023-10-15',
        image: Card5
    },
    {
        id: 6,
        name: "E commerce website",
        noOfHearts: "10",
        github: "/",
        description: "This is an awesome project. I have used bla blaaaa. This is an awesome project. I have used bla blaaaa",
        skills: ['HTML', 'CSS', 'JavaScript'],
        uploadedDate: '2023-10-15',
        image: Card6
    },
    {
        id: 7,
        name: "E commerce website",
        noOfHearts: "10",
        github: "/",
        description: "This is an awesome project. I have used bla blaaaa. This is an awesome project. I have used bla blaaaa",
        skills: ['HTML', 'CSS', 'JavaScript'],
        uploadedDate: '2023-10-15',
        image: Card7
    },
    {
        id: 8,
        name: "E commerce website",
        noOfHearts: "10",
        github: "/",
        description: "This is an awesome project. I have used bla blaaaa. This is an awesome project. I have used bla blaaaa",
        skills: ['HTML', 'CSS', 'JavaScript'],
        uploadedDate: '2023-10-15',
        image: Card8
    },
    {
        id: 9,
        name: "E commerce website",
        noOfHearts: "10",
        github: "/",
        description: "This is an awesome project. I have used bla blaaaa. This is an awesome project. I have used bla blaaaa",
        skills: ['HTML', 'CSS', 'JavaScript'],
        uploadedDate: '2023-10-15',
        image: Card9
    }
]

function MyProjects() {
    return (
        <div className="container my-projects-wrapper">
            <Menu />
            <div className="content">
                <div className='top fromTop'>
                    <h1>My Projects</h1>
                    <Link to='/new/project'><button><FaPlus size={15} /> New Project</button></Link>
                </div>
                <div className='projects-wrapper zoomIn'>

                    {
                        SampleData.map(project => {
                            return (
                                <MyProjectCard project={project}/>
                            )
                        })
                    }
                    {
                        SampleData.map(project => {
                            return (
                                <MyProjectCard project={project}/>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default MyProjects;


function MyProjectCard({ project }) {
    return (
        <div className='project-card'>
            <img src={project.image} alt={project.name} />
            <div className='details'>
                <div className="top">
                    <h2>{project.name}</h2>
                    <div className="likes">
                        <i>
                            <BsHeartFill /> <span>{project.noOfHearts}</span>
                        </i>
                    </div>
                </div>
                <p>{project.description.substring(0, 75)}...</p>
                <small>{project.uploadedDate}</small>
                <div className="btn-wrapper">
                    <Link to="/"><button className='edit-btn'>Edit</button></Link>
                    <Link to={project.github}><button className='github-btn'>GitHub</button></Link>
                </div>
            </div>

        </div>
    )
}