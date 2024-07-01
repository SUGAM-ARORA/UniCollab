import './Mail.css';

export default function SubscribeMail(){
    return(
        <div className='subscribe-mail'>
            <p>Subscribe to our newsletter</p>
            <form >
                <input type='text' placeholder='Enter your email address' required className="inputmail" />
                <button type='submit' className='btn1'>Subscribe</button>
            </form>
        </div>
    )
}