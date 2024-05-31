import './NewProject.css'
import Menu from '../../Menu';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft, FaTimes } from 'react-icons/fa';
import { useState } from 'react';


const Skills = ['HTML', 'CSS', 'Javascript', 'Python', 'Java', 'React js', 'Angular', 'PHP', 'TypeScript', 'Spring boot']

function NewProject() {

    const [data, setData] = useState({ name: "", github: "", description: "", image: null, skill: "" });
    const [skillSuggestions, setSuggestions] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])
    const [error, setError] = useState([])

    const onInputChange = (e) => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }));
        setError([])
    }

    const onSkillChange = (e) => {
        const { value } = e.target
        if (value === "") {
            setSuggestions([])
        }
        else {
            const arr = Skills.filter(skill => skill.toLowerCase().startsWith(value.toLowerCase())).slice(0, 5)
            setSuggestions(arr);
        }
        setData(prev => ({ ...prev, "skill": value }));
    }

    const addSkill = (val) => {
        if (selectedSkills.length === 5) return;
        const existing = selectedSkills.filter(skill => val === skill)
        if (existing.length === 0) {
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
        setData(prev => ({ ...prev, "image": e.target.files[0] }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const err = validateData(data, selectedSkills);
        setError(err)
        if (err.length !== 0) {
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
                        (error.length !== 0) && (
                            <div
                                className='error'
                            >
                                {
                                    error.map(err => {
                                        return <small>ERROR: &nbsp;  {err} <br /></small>
                                    })
                                }
                            </div>
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
                                onChange={onInputChange}
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
                                onChange={onInputChange}
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
                                onChange={onInputChange}
                            />
                        </label>
                    </div>
                    <div className='input-box'>
                        <label>
                            Image: <span>*</span>
                            <input
                                type='file'
                                onChange={onImageChange}
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
                                onChange={onSkillChange}
                                disabled={selectedSkills.length === 5}
                            />
                            {
                                (skillSuggestions.length > 0) && (
                                    <ul className='suggesion-list'>
                                        {
                                            skillSuggestions.slice(0, 5).map(sug => {
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
    let errors = [];
    const ImageMaxSize = 10 * 1024 * 1024;

    if (data.name.trim() === "") errors.push("Project name is required.")
    if (data.github.trim() === "") errors.push("Github repo link is required.")
    if (data.description.trim() === "") errors.push("Description is required.")
    if (skills.length === 0) errors.push("Select atleast one skill.")
    if (!data.image) errors.push("Project image is required.")
    else if (data.image.size > ImageMaxSize) errors.push("Select an image, not exceeding 10MB. ")

    return errors;
}