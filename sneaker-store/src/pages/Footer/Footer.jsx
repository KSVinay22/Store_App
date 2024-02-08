import './Footer.scss';
import {Link} from 'react-router-dom';
import {FaInstagramSquare, FaFacebook, FaYoutube, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="left">
          <div className="column">
            <span>Find a store</span>
            <span>Become a member</span>
            <span>Send us Feedback</span>
            <span>Discounts</span>
          </div>
          <div className="column">
            <span>Order status</span>
            <span>Returns</span>
            <span>Payment Options</span>
            <span>Contact us</span>
          </div>
          <div className="column">
            <span>About us</span>
            <span>News</span>
            <span>Careers</span>
            <span>Investors</span>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <span className='title'>sneak in</span>
            <span className='copyright'>© Copyright 2023. All Rights Reserved</span>
          </div>
          <div className="icons">
            <Link className='link'>
              <FaInstagramSquare/>
            </Link>
            <Link className='link'>
              <FaFacebook/>
            </Link>
            <Link className='link'>
              <FaYoutube/>
            </Link>
            <Link className='link'>
              <FaTwitter/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer