import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../../img/homeicon.png';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact_us.css';

function ContactUs() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        const email = document.getElementById("email").value;
        const name = document.getElementById("flname").value;
        const issue = document.getElementById("issue").value;
        const message = document.getElementById("message").value;
        const attachment = document.getElementById("attachments").files[0];

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        } else if (name.length < 2 || name.length > 40) {
            toast.error("Name should be within 2 - 40 characters only.");
            return;
        }

        // Append data to FormData object
        formData.append('name', name);
        formData.append('email', email);
        formData.append('issue', issue);
        formData.append('message', message);
        if (attachment) {
            formData.append('attachments', attachment);
        }

        const sendButton = document.querySelector('button[type="submit"]');
        sendButton.disabled = true;
        sendButton.textContent = 'Sending...';

        try {
            const response = await fetch('http://localhost:3000/send', {
                method: 'POST',
                body: formData, // Send FormData object
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (result.success) {
                toast.success("Sent Successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            } else {
                toast.error("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            sendButton.disabled = false;
            sendButton.textContent = 'Submit';
        }
    };

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
                        <input type='text' placeholder='Name' id='flname' name='flname' required></input>
                        <label htmlFor="email">Email :</label>
                        <input type='email' placeholder='Email' id='email' name='email' required></input>
                        <label htmlFor="issue">Issue Type:</label>
                        <select name='issue' id='issue' required>
                            <option value='Bug'>Bug</option>
                            <option value='Suggestion'>Suggestion</option>
                            <option value='Other'>Other</option>
                        </select>
                        <label htmlFor="message">Message :</label>
                        <textarea id='message' placeholder='Message' name='message' required></textarea>
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
