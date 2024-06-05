import React from 'react';
import pre from '../404_page/404.json'
import Lottie from 'lottie-react';
import Container from '../Container'
import './Error.css'
function Error() {
    const home=()=>{
        return (
            <div> <Container/></div>
        )      
    }
    return (
        <div>
            <div className='error'>
                <div> <Lottie animationData={pre}/> </div>    
                <div className='prel'>
                   <a href='/'> <button className='homepage'>Return To Home Page</button> </a> 
                </div>                
            </div>
        </div>
    )
}   
export default Error;