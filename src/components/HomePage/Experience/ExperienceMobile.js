import React from 'react';
import styles from './Experience.css.js';

export class ExperienceMobile extends React.Component {
    render() {
           return (
               <div className='experienceMain' style={styles.experienceMain}>
                   <h2 style={styles.experienceHead}>Skills</h2>
                   <div style={styles.slash}></div>
                   <div className='experienceContainer' style={styles.mobileExperienceContainer}>
                        <div className='discover' style={styles.mobileRowContainer}>
                            <h2 style={styles.rowHead}>Discovery</h2>
                            <ul style={styles.mobileList}>
                                <li style={styles.listItem}>Research</li>
                                <li style={styles.listItem}>Strategy</li>
                                <li style={styles.listItem}>Ideation</li>
                                <li style={styles.listItem}>Logic Flow</li>
                            </ul>
                        </div>
                        <div className='develop' style={styles.mobileRowContainer}>
                            <h2 style={styles.rowHead}>Development</h2>
                            <div className='listContainer' style={styles.listContainer}>
                                <ul style={styles.mobileList}>
                                    <li style={styles.listItem}>React.js</li>
                                    <li style={styles.listItem}>Express.js</li>
                                    <li style={styles.listItem}>Node.js</li>
                                    <li style={styles.listItem}>Git</li>
                                    <li style={styles.listItem}>SQLite</li>
                                    <li style={styles.listItem}>CSS</li>
                                    <li style={styles.listItem}>HTML</li>
                                    <li style={styles.listItem}>Wordpress</li>
                                </ul>
                            </div>
                        </div>
                        <div className='design' style={styles.mobileRowContainer}>
                            <h2 style={styles.rowHead}>Design</h2>
                            <ul style={styles.mobileList}>
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
