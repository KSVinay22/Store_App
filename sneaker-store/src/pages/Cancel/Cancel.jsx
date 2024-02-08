import './Cancel.scss';
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div className="cancel">
        <h1 className='title'>Your payment has been failed</h1>
        <Link className='link' to='/'>
            <button className='btn'>Go to home</button>
        </Link>
    </div>
  )
}

export default Cancel