import React from 'react';
import styles from './Contact.css.js';
import { NavBar } from '../HomePage/NavBar/NavBar.js'
import { Footer } from '../HomePage/Footer/Footer.js'



export class Contact extends React.Component {
    render() { 
  return (
    <div className="Contact">
        <div className="colorContainer" style={styles.colorContainer}>
          <NavBar />
          <div className="splashContainer" style={styles.splashContainer}>
            <h1 className="splashText" style={styles.splashText}>Contact.</h1>

          </div>
        </div>
        <div classNamee='transitionContainer' style={styles.transitionContainer}>

        </div>
        <Footer />
    </div>
  );
}
}