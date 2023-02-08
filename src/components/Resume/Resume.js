import React from 'react';
import styles from './Resume.css.js';
import { Footer } from '../HomePage/Footer/Footer.js';
import FlexNav from '../ResponsiveLayout/FlexNav.js' ;
import resume from '../../resources/full_stack_resume_3_26.png';
import {Covid19} from './Covid19/Covid19.js'
import pencils from '../../resources/pencils.png'



export class Resume extends React.Component {
    render() { 
  return (
    <div className="Resume">
        <div className="colorContainer" style={styles.colorContainer}>
          <FlexNav />
          <div className="splashContainer" style={styles.splashContainer}>
            <h1 className="splashText" style={styles.splashText}>Resume.</h1>
            <img src={pencils} style={styles.splashStack} alt='pencils'/>

          </div>
        </div>
        <div classNamee='transitionContainer' style={styles.transitionContainer}>
          <img src={resume} alt='resume' style={styles.resume}></img>
          <Covid19 />
        </div>
        <Footer />
    </div>
  );
}
}