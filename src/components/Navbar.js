import  Button from './Button';
import Dropdown from './Dropdown';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Navbar () {

    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
        
    return (
        <>
            <nav className='navbar'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    PRACTICE DIARY
                </Link>

                
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>

                        <Link to='/practice' className='nav-links' onClick={closeMobileMenu}>
                            Practice <i className='fas fa-caret-down'/>  {/*dropdown icon*/}
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    
                    {/* <li className='nav-item'>
                        <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li> */}

                </ul>
                <Button />
            </nav>
        </>
    )
}

export default Navbar;