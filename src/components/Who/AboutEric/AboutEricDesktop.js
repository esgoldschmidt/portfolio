import React from 'react';
import styles from './AboutEric.css.js';
import photo from '../../../resources/smEric.png'


export class AboutEricDesktop extends React.Component {
    render() {
           return (

            <div className='copyPhotoContainer' style={styles.copyPhotoContainer}>
                <div className='photo' style={styles.photo} >
                   <img src={photo} style={styles.photo} alt='Eric' />
                </div>
               <div className='AboutEric' style={styles.aboutEricContainer}>
                   <h2 style={styles.aboutEricHead}>Meet Eric</h2>
                   <h3 style={styles.aboutEricSub}>Full Stack Developer, designer, strategist and amateur baker </h3>
                   <p style={styles.aboutEricBody}> 
                   Eric has spent the past decade garnering experience 
                   working with Luxury Brands, producing top notch content and experiences for Fortune 500 
                   corporations, small businesses and individuals alike. 
                   </p>
                   <p style={styles.aboutEricBody}> 
                    A detailed and hands-on creative responsible for bringing concepts to life for 
                    billion-dollar brands such as <span style={styles.special}>Olay</span>,  <span style={styles.special}>Gillette</span>, <span style={styles.special}>Secret
                    </span>, <span style={styles.special}>Crest</span>, <span style={styles.special}>Herbal 
                    Essences</span> and <span style={styles.special}>Always</span>. 
                    When not busy with
                    work, he can be found traveling the world using points, taking in a broadway musical or 
                    poorly performing karaoke in the West Village. 
                    </p>
                    <p style={styles.aboutEricBody}> 
                    Committed to continued learning, his time during quarantine has been spent taking online 
                    coding classes and getting hands on experience using <span style={styles.special}>CSS</span>, <span style={styles.special}>HTML</span>, <span style={styles.special}>Git Version Control</span>, <span style={styles.special}>PostgresSQL Database Management</span>, <span style={styles.special}>JavaScript</span> featuring <span style={styles.special}>React
                    </span>, <span style={styles.special}>Node</span> and <span style={styles.special}>Express</span> and <span style={styles.special}>Python</span> featuring <span style={styles.special}>Flask</span>.</p> 
               </div>    
            </div> 
           )
       }
    }