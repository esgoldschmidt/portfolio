import React from 'react';
import styles from './Bio.css.js';


export class Bio extends React.Component {
    render() {
           return (
               <div className='Bio' style={styles.bioContainer}>
                   <h2 style={styles.bioHead}>Curious Pursuit</h2>
                   <h3 style={styles.bioSub}>always learning  |  never satisfied</h3>
                   <p style={styles.bioBody}><center> I design and develop experiences that simplify users lives. Excited to creatively <br /> collaborate with your brand utilizing <span style={styles.special}>web development</span> and <span style={styles.special}>design</span> to <br /> produce memorable consumer experiences.
                     I aim to partner with your business <br /> to develop software with a real community impact and directly help others. I <br /> bring  a fresh perspective, relentless curiousity and unyielding determination <br /> toward any project where we collaborate.</center></p>
               </div>     
           )
       }
    }
