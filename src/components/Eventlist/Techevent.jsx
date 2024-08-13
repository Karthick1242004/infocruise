import React from 'react';
import Eo from './Event.module.css'
import { Link } from 'react-router-dom';

function Techevent() {
  return (
    <div>
        <h1 className={Eo.h1}><span>Tech</span> Events</h1>
    <div className={Eo.cardmain}>
    <div className={Eo.card}>
       <p className={Eo.cardtitle}>Tech Summit</p>
       <p className={Eo.smalldesc}>
          Welcome to our Paper Presentation event, where knowledge meets innovation and ideas take center stage! Are you ready to showcase your research prowess and make a lasting impact? Join us for an exhilarating journey of exploration,
          discovery, and intellectual exchange.
       </p>
       <Link>Click to register</Link>
       <div className={Eo.gocorner}>
         <div className={Eo.goarrow}>→</div>
       </div>
    </div>
    <div className={Eo.card}>
      <p className={Eo.cardtitle}>Mine Scape</p>
      <p className={Eo.smalldesc}>
      Engage with fellow students as we delve into the latest advancements in technology. From AI breakthroughs to blockchain innovations, join us for insightful discussions and collaborative learning in the dynamic realm of tech. Welcome to the Tech Corner, where curiosity fuels discovery and ideas spark innovation.
      </p>
      <Link>Click to register</Link>
      <div className={Eo.gocorner}>
        <div className={Eo.goarrow}>→</div>
      </div>
    </div>
    <div className={Eo.card}>
      <p className={Eo.cardtitle}>Reciprocal</p>
      <p className={Eo.smalldesc}>
      Step into the realm of digital creativity with our Website Design event! Armed with a Figma file as your canvas, unleash your imagination and technical prowess to craft visually stunning and user-friendly websites.This event is your platform to showcase your skills. Join us as we celebrate innovation, aesthetics, and the power of effective digital communication.
      </p>
      <Link>Click to register</Link>
      <div className={Eo.gocorner}>
        <div className={Eo.goarrow}>→</div>
      </div>
    </div>
    <div className={Eo.card}>
      <p className={Eo.cardtitle}>Bit Realm (Circuit Branch)</p>
      <p className={Eo.smalldesc}>
      <b>Only for the mentioned departments : CSE,IT,CSD,AIML,AIDS,CT-UG,CT-PG,MBA,MCA</b><br/>Get ready for the coding challenge of a lifetime in Bit Realm! It's not just about code; it's a test of your problem-solving skills. This is your chance to shine. Step into the Bit Realm and emerge as the coding champion!.
      </p>
      <Link>Click to register</Link>
      <div className={Eo.gocorner}>
        <div className={Eo.goarrow}>→</div>
      </div>
    </div>
    <div className={Eo.card}>
      <p className={Eo.cardtitle}>Bit Wizard (Non Circuit Branch)</p>
      <p className={Eo.smalldesc}>
         <b>Only for the mentioned departments: AUTO, CHEM, CIVIL, EEE, ECE, EIE, FT, MECH and MTS</b>Get ready for the coding challenge of a lifetime in Bit Realm! It's not just about code; it's a test of your problem-solving skills, algorithmic finesse, and coding prowess. This is your chance to shine.
      </p>
      <Link>Click to register</Link>
      <div className={Eo.gocorner}>
        <div className={Eo.goarrow}>→</div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Techevent