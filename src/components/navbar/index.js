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
                    <Link to='/' className='navbar-logo' style={{ textDecoration:'none'}}>
                        Datathon <i className='fas fa-bolt' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMenu} style={{ textDecoration:'none'}}>
                            Home
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/charts' className='nav-links' onClick={closeMenu} style={{ textDecoration:'none'}}>
                            Charts
                        </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/report' className='nav-links' onClick={closeMenu} style={{ textDecoration:'none'}}>
                                Report
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link to='/Video' className='nav-links' onClick={closeMenu} style={{ textDecoration:'none'}}>
                                Video
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Team' className='nav-links' onClick={closeMenu} style={{ textDecoration:'none'}}>
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