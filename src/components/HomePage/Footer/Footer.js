import React from 'react';
import styles from './Footer.css.js';
import instagram from '../../../resources/instagram.png';
import linkedIn from '../../../resources/linkedIn.png';
import mail from '../../../resources/mail.png';
import signature from '../../../resources/signature.png'


export class Footer extends React.Component {
    render() {
           return (
               <div className='Footer' style={styles.footerContainer}>
                   <div className="footerSplash" style={styles.footerSplash}>
                        <img src={signature} alt='signature' style={styles.signature}/>
                   </div>
                   <div className="footerBar" style={styles.footerBar}>
                       <p style={styles.footerCopy}>E. Goldschmidt — New York, NY</p>
                       <div className='socialBar' style={styles.socialBar}>
                            <a href='mailto:esgoldschmidt@gmail.com'><img src={mail} alt='E-Mail' style={styles.socialIcon}/></a>  
                            <a href='https://www.instagram.com/ericgold/' target='_blank' rel="noopener noreferrer"><img src={instagram} alt='Instagram' style={styles.socialIcon}/></a>
                            <a href='https://www.linkedin.com/in/ericgoldschmidt' target='_blank' rel="noopener noreferrer"><img src={linkedIn} alt='Linked In' style={styles.socialIcon}/></a>
                       </div>
                   </div>
                   
               </div>     
           )
       }
    }