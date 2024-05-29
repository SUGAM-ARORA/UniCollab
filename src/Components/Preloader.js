import React ,{useState,useEffect} from 'react';
import '../Components/Preloader.css';
import pre from '../lottie/pre.json';
import Lottie from 'lottie-react';
import App from '../App';
function Preloader() {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false)
        },2000)
    },[])
return (


            loading ?
            <div className='pre'>
                <div><Lottie className="preloader" animationData={pre}/></div>
            </div>

             :
            //Rest Code
                <App/>

  );
}
export default Preloader;