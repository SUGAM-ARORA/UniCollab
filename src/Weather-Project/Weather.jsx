import React,{useState} from 'react'
import axios from 'axios'
import './Weather.css'

const Weather = () => {
    const [data,setData] = useState({})
    const [location,setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fbfc842f4be412581e49d69e18c4551d`

    const searchLocation = (event) =>{
        if (event.key === 'Enter'){
            axios.get(url).then((response)=>{
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
        
    }
  return (
    <div className='weather'>
        <div className="head">
            <h2>WeatherLy</h2>
        </div>
        <div className="search">
            <input
            value={location}
            type='text'
            onChange={event => setLocation(event.target.value)}
            placeholder = 'Enter Location'
            onKeyDown={searchLocation}

             />
        </div>
        <div className="weather-container">
            <div className="top">
                <div className="location">
                    <p>{data.name}</p>
                </div>
                <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
                </div>
                <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
                </div>
            </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
        </div>      
    </div>
  )
}

export default Weather
