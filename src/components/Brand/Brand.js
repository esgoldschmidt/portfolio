import React from 'react';
import styles from './Brand.css.js'; 
import Media from 'react-media';
import {BrandDesktop} from './BrandDesktop.js';
import {BrandMobile} from './BrandMobile.js'

export class Brand extends React.Component {
    
    
    render() {
           return (
                <div className='BrandsBackground' style={styles.brandsBackground}>
                    <Media queries={{ small: { maxWidth: 780 } }}>
                     {matches =>
                         matches.small ? (
                             <BrandMobile />
                         ) : (
                             <BrandDesktop />
                         )
                     }
                     </Media>    
 
                </div>   
           )
       }
    }