import './Mail.css';

export default function SubscribeMail(){
    return(
        <div className='subscribe-mail'>
            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
            <form className='mail'>
                <input type='text' placeholder='Enter your email address' required className="inputmail" />
                <button type='submit' className='btn1'>Subscribe</button>
            </form>
        </div>
    )
}