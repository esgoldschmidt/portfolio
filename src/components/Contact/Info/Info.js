import React from 'react';
import styles from './Info.css.js'; 
import Media from 'react-media';
import {InfoDesktop} from './InfoDesktop.js';
import {InfoMobile} from './InfoMobile.js'

export class Info extends React.Component {
    render() {
           return (
                <div className='BrandsBackground' style={styles.brandsBackground}>
                    <Media queries={{ small: { maxWidth: 800 } }}>
                     {matches =>
                         matches.small ? (
                             <InfoMobile />
                         ) : (
                             <InfoDesktop />
                         )
                     }
                     </Media>    
 
                </div>   
           )
       }
    }