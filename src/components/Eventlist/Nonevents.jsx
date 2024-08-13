import React from 'react';
import Eo from './Event.module.css'
import { Link } from 'react-router-dom';

function Nonevents() {
  return (
    <div>
        <h1 className={Eo.h1}><span>Non Tech</span> Events</h1>
    <div className={Eo.cardmain1}>
    <div className={Eo.card}>
       <p className={Eo.cardtitle}>Scan and Win</p>
       <p className={Eo.smalldesc}>
       Unravel the mystery and race against time as you decode clues and scan your way to victory. With each scan, uncover thrilling surprises and stake your claim as the ultimate treasure hunter!
       </p>
       <Link className={Eo.llk}>Click to register</Link>
       <div className={Eo.gocorner}>
         <div className={Eo.goarrow}>→</div>
       </div>
    </div>
    <div className={Eo.card}>
      <p className={Eo.cardtitle}>Kollywood</p>
      <p className={Eo.smalldesc}>
         Welcome to our Paper Presentation event, where knowledge meets innovation and ideas take center stage! Are you ready to showcase your research prowess and make a lasting impact? Join us for an exhilarating journey of exploration,
         discovery, and intellectual exchange.
      </p>
      <Link className={Eo.llk}>Click to register</Link>
      <div className={Eo.gocorner}>
        <div className={Eo.goarrow}>→</div>
      </div>
    </div>
    <div className={Eo.card}>
      <p className={Eo.cardtitle}>White VS Black</p>
      <p className={Eo.smalldesc}>
         Welcome to our Paper Presentation event, where knowledge meets innovation and ideas take center stage! Are you ready to showcase your research prowess and make a lasting impact? Join us for an exhilarating journey of exploration,
         discovery, and intellectual exchange.
      </p>
      <Link className={Eo.llk}>Click to register</Link>
      <div className={Eo.gocorner}>
        <div className={Eo.goarrow}>→</div>
      </div>
    </div>
    <div className={Eo.card}>
      <p className={Eo.cardtitle}>Curiosity Casket</p>
      <p className={Eo.smalldesc}>
         Welcome to our Paper Presentation event, where knowledge meets innovation and ideas take center stage! Are you ready to showcase your research prowess and make a lasting impact? Join us for an exhilarating journey of exploration,
         discovery, and intellectual exchange.
      </p>
      <Link className={Eo.llk}>Click to register</Link>
      <div className={Eo.gocorner}>
        <div className={Eo.goarrow}>→</div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Nonevents