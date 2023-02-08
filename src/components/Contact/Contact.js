import React from 'react';
import styles from './Contact.css.js';
import { Footer } from '../HomePage/Footer/Footer.js';
import {Info} from './Info/Info.js'
import FlexNav from '../ResponsiveLayout/FlexNav.js';
import contactImage from '../../resources/contactImage.png'



export class Contact extends React.Component {
    render() { 
  return (
    <div className="Contact">
        <div className="colorContainer" style={styles.colorContainer}>
          <FlexNav />
          <div className="splashContainer" style={styles.splashContainer}>
            <h1 className="splashText" style={styles.splashText}>Contact.</h1>
            <img src={contactImage} style={styles.splashStack} alt='phone'/>
          </div>
        </div>
        <div classNamee='transitionContainer' style={styles.transitionContainer}>
          <Info />
          <div style={styles.blend}>
            <div style={styles.map}></div>
          </div>
        </div>
        
        
        <Footer />
    </div>
  );
}
}