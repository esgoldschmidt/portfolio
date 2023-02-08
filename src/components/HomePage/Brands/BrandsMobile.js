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


export class BrandsMobile extends React.Component {
    render() {
           return (
               <div className='BrandsMobile' style={styles.mobileBrandsContainer}>
                    <h2 style={styles.brandsHead}>Corporate Experience</h2>
                    <div style={styles.slash}></div>
                    <h3 style={styles.brandsSub}>Brand collaboration along the way</h3>
                   <div className='Brands' style={styles.mobileLogoContainer}>
                       <div style={styles.logoRow}>
                            <img src={olay}style={styles.mobileLogo} alt='Olay' />
                            <img src={secret}style={styles.mobileLogo} alt='Secret' />
                            <img src={pinecroft}style={styles.mobileLogo} alt='Pinecroft at Crosley Estate' />
                       </div>
                       <div style={styles.logoRow}>
                            <img src={subway}style={styles.mobileLogo} alt='Subway' />
                            <img src={gillette}style={styles.mobileLogo} alt='Gillette' />
                            <img src={crest}style={styles.mobileLogo} alt='Crest' />
                       </div>
                       <div style={styles.logoBottom}>
                            <img src={always}style={styles.mobileLogo} alt='Always' />
                            <img src={rentingBk}style={styles.mobileLogo} alt='Renting Brooklyn' />
                            <img src={herbal}style={styles.mobileLogo} alt='Herbal Essences' />
                       </div>
                   </div>
               </div>     
           )
       }
    }