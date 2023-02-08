import React from 'react';
import styles from './Who.css.js';
import { Footer } from '../HomePage/Footer/Footer.js';
import FlexNav from '../ResponsiveLayout/FlexNav.js';
import {AboutEric} from './AboutEric/AboutEric.js';
import Game from './Game/Game.js'
import wisk from '../../resources/frosting.png'



export class Who extends React.Component {
    render() { 
  return (
    <div className="Who">
        <div className="colorContainer" style={styles.colorContainer}>
          <FlexNav />
          <div className="splashContainer" style={styles.splashContainer}>
            <h1 className="splashText" style={styles.splashText}>Who.</h1>
            <img src={wisk} style={styles.splashStack} alt='wisk'/>
          </div>
        </div>
        <div className='transitionContainer' style={styles.transitionContainer}>
          <AboutEric />
          <Game />
        </div>
        <Footer />
    </div>
  );
}
}