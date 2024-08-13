import React from 'react';
import Fo from './Footer.module.css';

function Footer() {
  return (
    <div >
      <div className={Fo.foot}>
        <h2><i>Contact: csea@kongu.edu</i></h2>
         <p><i>© CSEA 2022. All Rights Reserved.<br/>Computer Science and Engineering Association,<br/> Department of Computer Science and Engineering,<br/> Kongu Engineering College</i></p>
         <br/><br/><p>Developed and maintained by Karthickrajan S , Sharvitha D</p>
      </div>
    </div>
  )
}

export default Footer