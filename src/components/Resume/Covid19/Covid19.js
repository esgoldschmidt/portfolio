import styles from './Covid19.css.js';
import React from 'react';
import mask from '../../../resources/mask.png';

export class Covid19 extends React.Component {
    render() {
           return (
             <div className='Covid' style={styles.covidContainer}>
                    <h1 style={styles.covidHead}>Covid-19 Update !</h1>
                    <img src={mask} alt='mask' style={styles.covidImg}/>
                    <ul style={styles.covidList}>
                           <li>Virtual or in-person interview flexibility</li>
                           <li>Willing to work from home or in office </li>
                           <li>Covid-19 Booster: 03/12/22</li>
                    </ul>
             </div>   
           )
       }
    }
