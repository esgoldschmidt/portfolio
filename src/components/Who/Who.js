import React from 'react';
import styles from './Who.css.js';
import { NavBar } from '../HomePage/NavBar/NavBar.js'
import { Footer } from '../HomePage/Footer/Footer.js'



export class Who extends React.Component {
    render() { 
  return (
    <div className="Who">
        <div className="colorContainer" style={styles.colorContainer}>
          <NavBar />
          <div className="splashContainer" style={styles.splashContainer}>
            <h1 className="splashText" style={styles.splashText}>Who.</h1>

          </div>
        </div>
        <div classNamee='transitionContainer' style={styles.transitionContainer}>
          
        </div>
        <Footer />
    </div>
  );
}
}