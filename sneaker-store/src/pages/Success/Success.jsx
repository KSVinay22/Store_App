import { Link } from 'react-router-dom';
import './Success.scss';

const Success = () => {
  return (
    <div className="success">
        <h1 className='title'>Your payment was successful</h1>
        <p className='desc'>Your order is placed. Delivered in 10-15 days. Check orders to track</p>
        <Link className='link' to='/'>
            <button className='btn'>Go to home</button>
        </Link>
    </div>
  )
}

export default Success