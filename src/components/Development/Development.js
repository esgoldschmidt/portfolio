import React from 'react';
import styles from './Development.css.js';
import { Footer } from '../HomePage/Footer/Footer.js';
import FlexNav from '../ResponsiveLayout/FlexNav.js';
import devImage from '../../resources/devImage.png';
import {Site} from './Site/Site.js'
import {FunFacts} from './FunFacts/FunFacts.js'
//import StackUtils from 'stack-utils';

export class Development extends React.Component {
    render() { 
  return (
    <div className="Development">
        <div className="colorContainer" style={styles.colorContainer}>
          <FlexNav />
          <div className="splashContainer" style={styles.splashContainer}>
            <h1 className="splashText" style={styles.splashText}> &#60;Dev&#62; </h1>
            <img src={devImage} style={styles.splashStack} alt='computer'/>
          </div>
        </div>
        <div classNamee='transitionContainer' style={styles.transitionContainer}>
          <div className='projects' style={styles.projects}>
                <h2 className='projectsHead' style={styles.projectsHead}>Select Recent Projects</h2>
                <div style={styles.slash}></div>
                <div style={styles.linkContainer}>
                  <a href='https://sparkspsychservices.com/' target='_blank' rel="noopener noreferrer" style={styles.link}>Sparks Psychological Services</a>
                  <a href='https://esgoldschmidt.github.io/rentingBrooklyn/#/' target='_blank' rel="noopener noreferrer" style={styles.link}>Renting Brooklyn</a>
                </div>
                <h2 className='projectsHead' style={styles.projectsHead}>Example Code</h2>
                <div style={styles.slash}></div>
                <div style={styles.headContainer}>
                  <h2 style={styles.codeHead}><span style={{color:'gray'}}>Portfolio |</span> Brand</h2>
                </div>
                <div className='CodeBlock' style={styles.codeBlock}>
                  <Site />
                </div>
                <div style={styles.headContainer}>
                  <h2 style={styles.codeHead}><span style={{color:'gray'}}>Portfolio |</span> Fun Facts</h2>
                </div>
                <div className='CodeBlock' style={styles.codeBlock}>
                  <FunFacts />
                </div>

                
          </div>
        </div>
          <Footer />
    </div>
  );
}
}