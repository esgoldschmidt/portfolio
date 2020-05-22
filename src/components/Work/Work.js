import React from 'react';
import styles from './Work.css.js';
import { NavBar } from '../HomePage/NavBar/NavBar.js'
import { Footer } from '../HomePage/Footer/Footer.js'



export class Work extends React.Component {
    render() { 
  return (
    <div className="Work">
        <div className="colorContainer" style={styles.colorContainer}>
          <NavBar />
          <div className="splashContainer" style={styles.splashContainer}>
            <h1 className="splashText" style={styles.splashText}>Work.</h1>
          </div>
        </div>
        <div className='projects' style={styles.projects}>
              <h2 className='projectsHead' style={styles.projectsHead}>Select Projects</h2>
              <a href='' style={styles.project}>Lett'r</a>
              <a href='' style={styles.project}>Renting Brooklyn</a>
              <a href='' style={styles.project}>Curious Pursuit</a>
              <a href='' style={styles.project}>Subway Realty Group</a>
              <a href='' style={styles.project}>Pinecroft at Crosley Estate</a>

          </div>
          <Footer />
    </div>
  );
}
}