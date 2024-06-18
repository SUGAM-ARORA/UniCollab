import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { features } from './projects'
import './Profile.css'
import Arrow from '../Components/projects/arrow.png'


const Profile = () => {
    const { id } = useParams();
    const feature = features.find((item) => item.id === parseInt(id));
  return (
    <div className='p-page'>
    <Link className='arrow' to="/"><img src={Arrow} alt="" /></Link>
    <div className='profile'>
        <div className="head">
        <img src={feature.pro} alt={feature.dev} className='icon' />
        <div className="head-text">
        <div className="dev">{feature.dev}</div>
        <div className="role">{feature.role}</div>
        <div className="about">{feature.about}</div>
        <button className="btn">Follow Me</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Profile