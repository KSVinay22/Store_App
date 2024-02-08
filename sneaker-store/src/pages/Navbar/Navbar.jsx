import './Navbar.scss';
import { Link } from 'react-router-dom';
import {MdFavoriteBorder} from 'react-icons/md';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import { useAuth0 } from '@auth0/auth0-react'; 

const Navbar = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="left">
                <div className="logo">
                    <Link className='link' to='/'>SNEAK IN</Link>
                </div>
            </div>
            <div className="mid">
                <div className="item">
                    <Link className='link' to='/products/new releases'>New releases</Link>
                </div>
                <div className="item">
                    <Link className='link' to='/products/men'>Men</Link>
                </div>
                <div className="item">
                    <Link className='link' to='/products/women'>Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to='/products/kids'>Kids</Link>
                </div>
            </div>
            <div className="right">
                <div className="icon">
                    {
                        isAuthenticated? (
                            <Link className='link' to='/'><MdFavoriteBorder/></Link>
                        ): null
                    }
                </div>
                <div className="icon">
                    {
                        isAuthenticated? (
                            <Link className='link' to='/cart'><HiOutlineShoppingBag/></Link>
                        ): null
                    }
                </div>
                {
                    isAuthenticated? (
                        <div className='item'>
                            <button className='nav-btn' onClick={() => logout()}>Logout</button>
                        </div>
                    ):
                    (
                        <>
                            <div className="item">
                                <button className='nav-btn' onClick={() => loginWithRedirect()}>Login</button>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar