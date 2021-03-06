import React from 'react';
import styles from './Experience.css.js';


export class Experience extends React.Component {
    render() {
           return (
               <div className='experienceMain' style={styles.experienceMain}>
                   <h2 style={styles.experienceHead}>Skills</h2>
                   <h2 style={styles.slash}>____</h2>
                   <div className='experienceContainer' style={styles.experienceContainer}>
                        <div className='discover' style={styles.rowContainer}>
                            <h2 style={styles.rowHead}>Discovery</h2>
                            <ul style={styles.list}>
                                <li style={styles.listItem}>Research</li>
                                <li style={styles.listItem}>Strategy</li>
                                <li style={styles.listItem}>Ideation</li>
                                <li style={styles.listItem}>Logic Flow</li>
                            </ul>
                        </div>
                        <div className='develop' style={styles.rowContainer}>
                            <h2 style={styles.rowHead}>Development</h2>
                            <div className='listContainer' style={styles.listContainer}>
                                <ul style={styles.list}>
                                    <li style={styles.listItem}>React.js</li>
                                    <li style={styles.listItem}>Express.js</li>
                                    <li style={styles.listItem}>Node.js</li>
                                    <li style={styles.listItem}>Git</li>
                                </ul>
                                <ul style={styles.list}>
                                    <li style={styles.listItem}>SQLite</li>
                                    <li style={styles.listItem}>CSS</li>
                                    <li style={styles.listItem}>HTML</li>
                                    <li style={styles.listItem}>Wordpress</li>
                                </ul>
                            </div>
                        </div>
                        <div className='design' style={styles.rowContainer}>
                            <h2 style={styles.rowHead}>Design</h2>
                            <ul style={styles.list}>
                                <li style={styles.listItem}>Branding</li>
                                <li style={styles.listItem}>UX</li>
                                <li style={styles.listItem}>Visual Design</li>
                                <li style={styles.listItem}>Illustration</li>
                            </ul>
                        </div>
                   </div>
               </div>     
           )
       }
    }
