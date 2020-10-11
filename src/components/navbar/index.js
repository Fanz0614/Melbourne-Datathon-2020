import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './style.css';


function Navbar(){
    const [click, setClick] =useState(false);
    const handleClick=()=>setClick(!click);
    const closeMenu=()=>setClick(false);
    return(
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        Datathon <i className='fas fa-bolt' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeMenu}>
                                Home
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link to='/report' className='nav-links' onClick={closeMenu}>
                                Report
                            </Link>
                            
                        </li>
                        <li className='nav-item'>
                            <Link to='/Team' className='nav-links' onClick={closeMenu}>
                                Team
                            </Link>
                            
                        </li>
                    </ul>

                </div>

            </nav>
        </div>
    )
}

export default Navbar