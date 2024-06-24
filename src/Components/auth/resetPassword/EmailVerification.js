import { useState } from 'react';
import './resetPassword.css'
import { Link, useNavigate } from 'react-router-dom';

function EmailVerification() {

    const [email, setEmail] = useState("")
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const onInputChange = (e) => {
        setEmail(e.target.value)
    }


    const onVerify = (e) => {
        e.preventDefault();

        console.log(email);
        
        // call backend api  to verify the email
        // if sucess, redirect to otp verification
        // navigate(`/otpVerification/${email}`)
        // if fails, update the error => setError()

    }

    return (
        <section className="auth-container">

            <form onSubmit={onVerify}>
                <h2>Email verification</h2>
                <p>To secure your account security, we need to verify your identity.</p>
                <p>Please enter the email registered with us.</p>
                { error && <div className='err'>{error}</div> }
                <input 
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={onInputChange}
                />
                <button>Verify Email</button>
                <p><Link to="/login" className='link'>Back to Login</Link></p>
            </form>

        </section>
    );

}

export default EmailVerification;