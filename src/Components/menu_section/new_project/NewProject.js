import './NewProject.css'
import Menu from '../../Menu';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft, FaTimes } from 'react-icons/fa';
import { useState } from 'react';


const Skills = ['HTML', 'CSS', 'Javascript', 'Python', 'Java', 'React js', 'Angular', 'PHP', 'TypeScript', 'Spring boot']

function NewProject() {

    const [data, setData] = useState({name: "", github: "", description: "", image: null, skill: ""});
    const [suggestions, setSuggestions] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])
    const [error, setError] = useState("")

    const onInputChange = (name, value) => {
        setData(prev => ({...prev, [name]: value}));
        console.log(data)
    }

    const onSkillChange = (val) => {
        if (val === "") {
            setSuggestions([])
        }
        else {
            const arr = Skills.filter(skill => skill.toLowerCase().startsWith(val.toLowerCase())).slice(0, 5)
            setSuggestions(arr);
        }
        onInputChange("skill", val)
    }

    const addSkill = (val) => {
        if (selectedSkills.length ===5) return;
        const existing = selectedSkills.filter(skill => val===skill)
        if (existing.length===0) {
            setSelectedSkills(prev => [...prev, val])
        }
        setSuggestions([])
        onInputChange("skill", "")
    }

    const removeSkill = (val) => {
        const newSkills = selectedSkills.filter(skill => skill !== val)
        setSelectedSkills(newSkills)
    }

    const onImageChange = (e) => {
        setData(prev => ({...prev, "image": e.target.files[0]}));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const err = validateData(data, selectedSkills);
        setError(err)
        if (err!=="") {
            window.scroll(0, 0)
        }
    }


    return (
        <div className="container my-projects-wrapper">
            <Menu />
            <div className="content">
                <div className='top fromTop'>
                    <h1>New Project</h1>
                    <Link to='/projects'><button><FaArrowCircleLeft size={15} /> Back to projects</button></Link>
                </div>

                <form onSubmit={handleSubmit}>

                    {
                        (error !== "") && (
                            <small 
                                className='error'
                            >
                                <FaTimes />
                                {error}
                            </small>
                        )
                    }
                    <div className='input-box'>
                        <label>
                            Project Name: <span>*</span>
                            <input 
                                type='text' 
                                placeholder='Eg. Weather app' 
                                name="name"
                                value={data.name}
                                onChange={(e) => onInputChange(e.target.name, e.target.value)}
                            />
                        </label>
                    </div>
                    <div className='input-box'>
                        <label>
                            GitHub Repository Link: <span>*</span>
                            <input 
                                type='url' 
                                name="github"
                                value={data.github}
                                placeholder='Eg. https://github.com/your-username/repository-name' 
                                onChange={(e) => onInputChange(e.target.name, e.target.value)}
                            />
                            
                        </label>
                    </div>
                    <div className='input-box'>
                        <label>
                            Description: <span>*</span>
                            <textarea 
                                placeholder='Share about what makes your project special?' 
                                rows={15} 
                                name="description"
                                value={data.description}
                                onChange={(e) => onInputChange(e.target.name, e.target.value)}
                            />
                        </label>
                    </div>
                    <div className='input-box'>
                        <label>
                            Image: <span>*</span>
                            <input 
                                type='file' 
                                onChange={(e) => onImageChange(e)}
                                accept='image/*'
                            />
                        </label>
                    </div>
                    <div className='input-box'>
                        <label>
                            Skills (Add skills upto to 5, so users can know what your project about.): <span>*</span>
                            <input 
                                type='text' 
                                placeholder='Eg. JAVA, React js...'
                                name='skill'
                                value={data.skill}
                                onChange={e => onSkillChange(e.target.value)}
                                disabled={selectedSkills.length===5}
                            />
                            {
                                (suggestions.length > 0) && (
                                    <ul className='suggesion-list'>
                                        {
                                            suggestions.slice(0, 5).map(sug => {
                                                return (
                                                    <li 
                                                        key={sug}
                                                        onClick={() => addSkill(sug)}
                                                    >
                                                        {sug}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                            <ul className='selected'>
                                {
                                    selectedSkills.map(skill => {
                                        return (
                                            <li 
                                                key={skill}
                                            >
                                                {skill}
                                                <FaTimes 
                                                    size={13} 
                                                    onClick={() => removeSkill(skill)}
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </label>
                    </div>
                    <div className='input-box'>
                        <button>Publish</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default NewProject;


function validateData(data, skills) {
    let error = "";
    const ImageMaxSize = 10 * 1024 * 1024;

    if (data.name.trim() === "" ) error+="Project name is required! "
    if (data.github.trim() === "")  error+="Github repo link is required! "
    if (data.description.trim() === "")  error+="Description is required! "
    if (skills.length === 0)  error+="Select atleast one skill! "
    if (!data.image)  error+="Project image is required! "
    else if (data.image.size > ImageMaxSize)  error+="Select an image, not exceeding 10MB! "

    return error;
}