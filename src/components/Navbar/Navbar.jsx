import React from 'react';
import Logo from "../images/csealogo.png";
import No from './Navbar.module.css';
import { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Navbar() {
    const [showNavLinks, setShowNavLinks] = useState(false);
    const [mobileView, setMobileView] = useState(false);
   
    const handleToggleNav = () => {
      if (mobileView) {
        setShowNavLinks(!showNavLinks);
      }
    };
  
    const checkScreenSize = () => {
      setMobileView(window.innerWidth <= 750);
    };
  
    useEffect(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
  
    useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);
  return (
    <div>
         <div className={No.nav}>
          <div className={No.navb}>
            <div className={No.navb111}>
            <img style={{ "--i": 1 }} src={Logo} alt="CSEA Logo" className={No.image1}/>
            <button className={No.navicon} onClick={handleToggleNav}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            </div>
            <div
              className={`${No.navb1} ${mobileView ? 'flex-column' : ''}`}
              style={{ display: showNavLinks || !mobileView ? 'flex' : 'none' }}>
              <Link style={{ "--i": 2 }} className={No.lk} to="#">Home</Link>
              <Link style={{ "--i": 3 }} to='' smooth={true} duration={800} className={No.lk} >Newsletter</Link>
              <Link style={{ "--i": 4 }} to='#' smooth={true} duration={800} className={No.lk} >Coordinators</Link>
              <Link style={{ "--i": 5 }} to='' smooth={true} duration={2000} className={No.lk}>Contact</Link>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar