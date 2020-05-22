import React from 'react';
import styles from './Brands.css.js';
import olay from '../../../resources/olay.png';
import always from '../../../resources/always.png';
import rentingBk from '../../../resources/rentingBk.png';
import crest from '../../../resources/crest.png';
import gillette from '../../../resources/gillette.png';
import herbal from '../../../resources/herbalEssences.png';
import pinecroft from '../../../resources/pinecroft.png';
import secret from '../../../resources/secret.png';
import subway from '../../../resources/subway.png';



export class Brands extends React.Component {
    render() {
           return (
               <div className='Brands' style={styles.brandsContainer}>
                   <h2 style={styles.brandsHead}>Corporate Experience</h2>
                   <h3 style={styles.brandsSub}>Brand collaboration along the way</h3>
                   <div className='Brands' style={styles.logoContainer}>
                       <div style={styles.logoRow}>
                            <img src={olay}style={styles.logo} alt='Olay' />
                            <img src={secret}style={styles.logo} alt='Secret' />
                            <img src={pinecroft}style={styles.logo} alt='Pinecroft at Crosley Estate' />
                       </div>
                       <div style={styles.logoRow}>
                            <img src={subway}style={styles.logo} alt='Subway' />
                            <img src={gillette}style={styles.logo} alt='Gillette' />
                            <img src={crest}style={styles.logo} alt='Crest' />
                       </div>
                       <div style={styles.logoBottom}>
                            <img src={always}style={styles.logo} alt='Always' />
                            <img src={rentingBk}style={styles.logo} alt='Renting Brooklyn' />
                            <img src={herbal}style={styles.logo} alt='Herbal Essences' />
                       </div>
                       
                   </div>
                   
               </div>     
           )
       }
    }