import {Link} from 'react-router-dom'
import React from 'react';
import logo from '../../assets/Stack_Overflow_logo.png'
import search from '../../assets/searchlogo.svg'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import './Navbar.css'

const Navbar = () => {

    var User = null

    return (
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt ="logo" height={30} />
                </Link>
                <Link to = '/' className='nav-item nav-btn'>About</Link>
                <Link to = '/' className='nav-item nav-btn'>Products</Link>
                <Link to = '/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type= "text" placeholder='Search...'/>
                    <img src={search} className='Searchicon'alt="search" width={18}/>
                </form>
                { User === null ?
                <Link to ='/Auth' className='nav-item nav-links'>Log in</Link>:
                 <>
                 <Avatar backgroundColor='#009dff' px = "10px" py = "7px" borderRadius="50%" color='white'><Link to = '/User' style={{color:"white", textDecoration:'none' }} >M</Link></Avatar>
                 <button className='nav-item nav-links'>Log Out</button>
                 </>
                } 
            </div>
        </nav>
    )
}
export default Navbar;
