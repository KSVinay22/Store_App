import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
        <div className="top">
            <h3>sneak in</h3>
            <h1>Your account for everything</h1>
        </div>
        <div className="bottom">
            <form method='POST' className='input-form'>
                <input
                    type='email'
                    placeholder='Enter your email address'
                />
                <input
                    type='text'
                    placeholder='Enter your password'
                />
                <button type='submit'>Login</button>
            </form>
            <div className="register">
                <span>Not a member? <Link className='join-link' to='/register'>Join us</Link></span>
            </div>
        </div>
    </div>
  )
}

export default Login