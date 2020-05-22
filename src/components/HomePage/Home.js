import React from 'react';
import styles from './Home.css.js';
import { NavBar } from './NavBar/NavBar.js';
import { Experience } from './Experience/Experience.js';
import { Bio } from './Bio/Bio.js';
import { Brands } from './Brands/Brands.js';
import { Footer } from './Footer/Footer.js';





export class Home extends React.Component {
    render() { 
  return (
    <div className="Home">
        <div className="colorContainer" style={styles.colorContainer}>
          <NavBar />
          <div className="splashContainer" style={styles.splashContainer}>
            <div className="textContainer" style={styles.textContainer}>
              <h1 className="splashText" style={styles.splashText}>Intro.</h1>
            </div>
          </div>
        </div>
        <div className='transitionContainer' style={styles.transitionContainer}>
          <Bio />
          <Experience />
        </div>
          <Brands />
          <Footer />
    </div>
  );
}
}
