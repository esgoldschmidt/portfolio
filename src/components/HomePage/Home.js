import React from 'react';
import styles from './Home.css.js';
import { Experience } from './Experience/Experience.js';
import { Bio } from './Bio/Bio.js';
import { Brands } from './Brands/Brands.js';
import { Footer } from './Footer/Footer.js';
import FlexNav from '../ResponsiveLayout/FlexNav.js'
import hello from '../../resources/helloImage.png'





export class Home extends React.Component {
    render() { 
  return (
    <div className="Home">
        <div className="colorContainer" style={styles.colorContainer}>
          <FlexNav />
          <div className="splashContainer" style={styles.splashContainer}>
              <h1 className="splashText" style={styles.splashText}>Intro.</h1>
              <img src={hello} alt='hello' style={styles.splashStack}/>
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
