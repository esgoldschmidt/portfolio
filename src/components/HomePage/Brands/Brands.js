import React from 'react';
import styles from './Brands.css.js';
import Media from 'react-media';
import {BrandsDesktop} from './BrandsDesktop.js';
import {BrandsMobile} from './BrandsMobile.js'



export class Brands extends React.Component {
    render() {
           return (
               <div className='BrandsBackground' style={styles.brandsBackground}>
                   <Media queries={{ small: { maxWidth: 599 } }}>
                    {matches =>
                        matches.small ? (
                            <BrandsMobile />
                        ) : (
                            <BrandsDesktop />
                        )
                    }
                    </Media>    

               </div>
                
           )
       }
    }