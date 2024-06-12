import React from 'react'
import { useParams } from 'react-router-dom'
import { features } from './projects'
import './Readmore.css'
import { Link } from 'react-router-dom'
import Arrow from '../Components/projects/arrow.png'

const Readmore = () => {
    const { id } = useParams();
    const feature = features.find((item) => item.id === parseInt(id));
  return (
    <div className='readmore'>
      <Link className='arrow' to="/"><img src={Arrow} alt="back" /></Link>
      <div className="title">{feature.title}</div>
      <div className="image">
      <img src={feature.img} height={480} alt={feature.title} />
      </div>

      <div className="head">
        <span className='upload'>Uploaded On:</span><br />
        dd:mm:yy
      </div>
      <div className="head">
        <span className='upload'>By:</span><br />
        <div className='abc'>
          <div className="dp"></div>
          <div className="details1">
            <p className="name">@Abc</p>
            <p className="occupation">Web Designer, Video Editor</p>
          </div>
        </div>
          <div className="dtex">
            I'm a versatile professional skilled in web development and video
            editing, creating seamless online experiences and high-quality
            multimedia content.
          </div>
      </div>
      <div className="text">
        <span className='description'>Description:</span><br />
        <div className='dtex'>{feature.text}</div>
      </div>
      <div className="developer">
        Developer-X
      </div>

    </div>
  )
}

export default Readmore