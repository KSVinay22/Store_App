import './Register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register">
        <div className="top">
            <h3>sneak in</h3>
            <h1>Become a member</h1>
        </div>
        <div className="bottom">
            <form method='POST' className='register-form'>
                <input
                    type='email'
                    placeholder='Enter your email address'
                />
                <input
                    type='text'
                    placeholder='Your full name'
                />
                <input
                    type='text'
                    placeholder='Enter your password'
                />
                <button type='submit'>Join us</button>
            </form>
            <div className="login">
                <span>Already a member? <Link className='join-link' to='/login'>Login</Link></span>
            </div>
        </div>
    </div>
  )
}

export default Register