import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { features } from './projects'
import './Readmore.css'
import { Link } from 'react-router-dom'
import Arrow from '../Components/projects/arrow.png'
import {ThemeContext} from "../App";

const Readmore = () => {
    const { id } = useParams();
    const feature = features.find((item) => item.id === parseInt(id));

    const {theme} = useContext(ThemeContext)

  return (
    <div className={`readmore ${theme}`}>
      <Link className='arrow' to="/"><img src={Arrow} alt="back" /></Link>
      <div className="title">{feature.title}</div>
      <div className="image">
      <img src={feature.img} height={480} alt={feature.title} />
      </div>

      <div className="head">
        <span className='upload'>Uploaded On: </span>
         dd:mm:yy
      </div>
      <div className="head">
        <img src={feature.pro} alt={feature.dev} />
        <div className='abc'>
          <div className="details1">
            <p className="name">@{feature.dev}</p>
            <p className="occupation">{feature.role}</p>
          </div>
          <div className="dtex">
            {feature.about}
          </div>
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