import React from 'react';
import styles from './Info.css.js'; 
import workStation from '../../../resources/workStation.jpg';
import instagram from '../../../resources/instagram.png';
import linkedIn from '../../../resources/linkedIn.png';
import mail from '../../../resources/mail.png';

export class InfoDesktop extends React.Component {
    render() {
           return (
               <div className='InfoMain' style={styles.infoMain}>
                <div className='Info' style={styles.infoContainer}>
                    <h2 style={styles.infoHead}>Let's Create <br /> Something <br /> Amazing!</h2>
                    <h3 style={styles.infoSub}>Eric Goldschmidt</h3>
                    <p style={styles.infoBody}> New York City, New York <br /> 513.479.4465 <br /> <a href='mailto:esgoldschmidt@gmail.com' style={styles.link}> esgoldschmidt@gmail.com</a></p>
                    <div className='socialBar'>
                            <a href='mailto:esgoldschmidt@gmail.com'><img src={mail} alt='E-Mail' style={styles.socialIcon}/></a>  
                            <a href='https://www.instagram.com/ericgold/' target='_blank' rel="noopener noreferrer"><img src={instagram} alt='Instagram' style={styles.socialIcon}/></a>
                            <a href='https://www.linkedin.com/in/ericgoldschmidt' target='_blank' rel="noopener noreferrer"><img src={linkedIn} alt='Linked In' style={styles.socialIcon}/></a>
                       </div>
                </div> 
                <img src={workStation} alt='Work Station' style={styles.workStation}/>
               </div>    
           )
       }
    }