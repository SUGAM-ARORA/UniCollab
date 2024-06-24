import { useEffect, useState } from 'react';
import './resetPassword.css'
import { useNavigate, useParams } from 'react-router-dom';

function OTPVerification() {

    const { email } = useParams()
    const [OTP, setOTP] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(60);
    const [noOfAttempts, setNoOfAttempts] = useState(1);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const onInputChange = (e) => {
        setOTP(e.target.value)
    }

    useEffect(() => {
        if (noOfAttempts > 3) {
            return;
        }
        if (timeRemaining >= 1) {
            setTimeout(() => {
                setTimeRemaining(prev => prev - 1)
            }, 1000)
        }
    }, [noOfAttempts, timeRemaining])

    const onResend = () => {

        // call backend api to send otp again
        // in backend if number of attempts <= 3 send the otp or
        // send a bad request.
        // if success,
        // update the no of attempts and time remaining 
        // setNoOfAttempts()
        // setTimeRemaining(60)
        // if fails, update the error => setError()
    }


    const onVerify = (e) => {
        e.preventDefault();

        console.log(OTP);

        // call backend api  to verify the otp
        // if otp is valid redirect to reset password
        // navigate(`/resetPassword/${email}`)
        // if fails, update the error => setError()

    }

    return (
        <section className="auth-container">

            <form onSubmit={onVerify}>
                <h2>OTP verification</h2>
                <p>In order to verify your identity, we have sent an one time code to your email <strong>{email}</strong>. </p>
                
                { error && <div className='err'>{error}</div> }
                
                <input
                    type='text'
                    placeholder='Enter OTP code'
                    value={OTP}
                    onChange={onInputChange}
                />
                <button>Verify Code</button>
                <p>
                    {
                        noOfAttempts > 3 ? <>You have tried maximum no of attempts.</> :

                            timeRemaining >= 1 ? <>Resend OTP in {timeRemaining} seconds</> :

                                <span 
                                    className='link'
                                    onClick={onResend}
                                >Resend OTP</span>
                    }
                </p>
            </form>

        </section>
    );

}

export default OTPVerification;