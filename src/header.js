import React, {useState} from 'react';
import {Link} from 'react-router-dom';
  
function Header(){
    //for open and close nav burger icon
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    //for scrolling navbar changing color background
    const [navbar,setNavbar] = useState(false);
    const changeBackground = () =>{
        //console.log(window.scrollY);
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };

    //for checking scroll working 
    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={navbar ? 'nav-bar active' : 'nav-bar'}>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
            </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li className="logo-name">
                    <a><Link to="/jmloportfolio"><img src={require('./img/ologo.png')} /></Link></a>
                </li>
                <li >
                    <a><Link to="/contact">contact me<span className='white-name'>.</span></Link></a>
                </li>
                
            </ul>
        </nav>
        );
    };
    
export default Header;
    