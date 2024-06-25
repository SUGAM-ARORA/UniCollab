import { useState } from 'react';
import './resetPassword.css'
import { useNavigate, useParams } from 'react-router-dom';

function ResetPassword() {

    const { email } = useParams()
    const [inputs, setInputs] = useState({ password: "", cpassword: "" })
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const onInputChange = (e) => {
        const { name, value } = e.target;

        setInputs(prev => {
            return { ...prev, [name]: value }
        });
    }

    const onReset = (e) => {
        e.preventDefault()
        console.log(inputs)
        const err = validateInputs(inputs)
        setError(err)
        if (err) {
            return
        }
        console.log("valid")

        // call backend api to reset password
        // is success redirect to login
        // navigate("/login")
        // if fails, set the error by => setError()
    }

    return (
        <section className="auth-container">

            <form onSubmit={onReset}>
                <h2>Reset Password</h2>
                <p>Your account has been verified! You can reset your password.</p>
                {error && <div className='err'>{error}</div>}
                <input
                    type='password'
                    placeholder='Enter new password'
                    name='password'
                    value={inputs.password}
                    onChange={onInputChange}
                />
                <input
                    type='password'
                    placeholder='Re enter new password'
                    name='cpassword'
                    value={inputs.cpassword}
                    onChange={onInputChange}
                />
                <button>Reset password</button>
            </form>

        </section>
    );

}

export default ResetPassword;


function validateInputs({password, cpassword}) {
    if (password.trim().length < 6) {
        return "Password must have atleat 6 characters!"
    }
    if (password.trim() !== cpassword.trim()) {
        return "Passwords do not match"
    }
    return null
}