import React from 'react';
import styles from './Bio.css.js';


export class Bio extends React.Component {
    render() {
           return (
               <div className='Bio' style={styles.bioContainer}>
                   <h2 style={styles.bioHead}>Curious Pursuit</h2>
                   <h3 style={styles.bioSub}>always learning  |  never satisfied</h3>
                   <center><p style={styles.bioBody}> I design and develop experiences that simplify lives. I am excited to creatively collaborate with your brand deploying <span style={styles.special}>web development</span> and <span style={styles.special}>design</span> to produce memorable consumer experiences.
                     I hope to partner with your business to develop software with a real community impact and directly help others. I bring  a fresh perspective, insatiable curiousity and tenacious determination toward any project where we collaborate.</p> </center>
               </div>     
           )
       }
    }
