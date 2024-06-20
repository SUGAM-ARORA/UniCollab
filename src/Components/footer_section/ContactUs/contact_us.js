import './contact_us.css';
import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../../img/homeicon.png';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContactUs() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form validation or any other logic here

        // Show success toast notification
        toast.success('Sent Successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }


    return (
        <div className='box'>
            <Link to="/">
            <img src={homeIcon} alt="Home" className="home-icon" />
            </Link>
            <div className='containerContact'>
                <div className='general'>
                    <div className='box1'>
                        <h2>Business Hours</h2>
                        <div className='contentInside'>
                            <p>Monday to Friday</p>
                            <p>9am-5pm IST</p>
                        </div>
                    </div>
                    <div className='box2'>
                        <h2>Contact Number</h2>
                        <div className='contentInside'>
                            <p>Contact us at :</p>
                            <a href="tel:1234567890">+91 1234567890</a>
                        </div>
                    </div>
                    <div className='box3'>
                        <h2>Email</h2>
                        <div className='contentInside'>
                            <p>Mail us at :</p>
                            <a href='mailto:recipient@example.com'>recipient@example.com</a>
                        </div>
                    </div>
                    <div className='box4'>
                        <h2>Address</h2>
                        <div className='contentInside'>
                            <p>123, Main Street</p>
                            <p>City, State, Zip-Code</p>
                            <p>Country</p>
                        </div>
                    </div>
                </div>
                <div className='form'>
                    <h2>Facing any Issue? Help Us Improve!</h2>
                    <p>Use the form below to get in touch. We attempt to respond to support requests within 1 business day.</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="flname">Name :</label>
                        <input type='text' id='flname' name='flname' required></input>
                        <label htmlFor="email">Email :</label>
                        <input type='email' id='email' name='email' required></input>
                        <label htmlFor="issue">Issue Type:</label>
                        <select name='issue' id='issue' required>
                            <option value='Bug'>Bug</option>
                            <option value='Suggestion'>Suggestion</option>
                            <option value='Other'>Other</option>
                        </select>
                        <label htmlFor="message">Message :</label>
                        <textarea id='message' name='message' required></textarea>
                        <label htmlFor="attachments">Any Attachments :</label>
                        <input type='file' id='attachments' name='attachments'></input>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
                transition={Bounce}
            />
        </div>
    );
}

export default ContactUs;
