import React, { useEffect, useRef, useState } from 'react';
import Ho from './Home.module.css';
import Navbar from './components/Navbar/Navbar';
import Techevent from './components/Eventlist/Techevent';
import Nonevents from './components/Eventlist/Nonevents';
import Footer from './components/Footer/Footer';
import Poster from './components/images/poster.png';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className={Ho.home}>
      
      <div className={Ho.main}>
        <div className={Ho.fx}>
        <Navbar/>
        </div>
        <div className={Ho.homepage}>
          <h1 style={{ "--i": 1 }}>Cognissance</h1>
          <div className={Ho.kk}>
            <h2 style={{ "--i": 2 }}>2K24</h2>
          </div>
             <div className={Ho.homepagetxt}>
              <p style={{ "--i": 3 }}>An Intra-College Technical Symposium conducted every year by the Computer Science and Engineering Association in association with CSE Coding Club</p>
             </div>
             <div className={Ho.lk1}>
               <Link to='tech' smooth={true} duration={800} style={{ "--i": 4 }} className={Ho.lk11}>Tech Events</Link>
               <Link to='ntech' smooth={true} duration={800} style={{ "--i": 5 }} className={Ho.lk12}>Non Tech Events</Link>
             </div>
        </div>
        <div className={Ho.voice1}>
        <div className={Ho.voice}>
          <h2>Our Voices Reaches Beyond The Fest</h2><br/>
          <p>"Born with the motto of promoting technology, creative thinking, and innovation, COGNIZANCE is the most celebrated Tech-Symposium of Computer Science Department KEC. It creates an unmatched amalgam of technology, creativity, and festivity. It brings you immense opportunities to showcase your talent and skills. With an enormous number of enthusiasts facing off under one roof, it is a spark created by the meet of exuberance and technology." </p>
        </div>
        </div>
        <div className={Ho.poster}>
          <img src={Poster} alt="Poster Image" className={Ho.pos} />
        </div>
        <div id='tech' className={Ho.event} >
          <Techevent/>
        </div>
        <div id='ntech' className={Ho.event1}>
          <Nonevents/>
        </div>
        
         <div className={Ho.announce} >
           <div className={Ho.announce1} >
           <h1>Announcements</h1><br/>
           <p>Registration is open now</p>
           <p>Last Date for Registration :4th March 2023</p>
           <p>Only one participant need to fill the form (for Team Events)</p>
           <p>A Participant can participate in any number of Events</p>
           </div>
         </div>
         <div className={Ho.shedule1}>
         <div className={Ho.shedule}>
          <h1>Shedule</h1><br/>
          <p> • Event Timings will be intimated later</p>
          <p> • Last Date for Registration : 28 Feb 2023</p>
         </div>
         </div>
         <div className={Ho.footer}>
          <Footer/>
         </div>
      </div>
    </div>
  )
}

export default Home