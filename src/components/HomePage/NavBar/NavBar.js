import React from 'react';
import styles from './NavBar.css.js';
import logo from '/Users/eric/Coding/Projects/portfolio/src/resources/portfolioLogoWhite.png'
import { Navigation } from '/Users/eric/Coding/Projects/portfolio/src/components/HomePage/NavBar/Navigation/Navigation.js'

export class NavBar extends React.Component {
    render() {
           return (
               <div className='navBar' style={styles.navBar}>
                   <div className="logo">
                       <a href='#/'>
                       <img src={logo} style={styles.logo} alt='logo'/>
                       </a>
                   </div>
                    <Navigation />
                    <div className="contact">
                        <a href='#/contact' style={styles.contact}>contact</a>
                    </div>
                    
               </div>     
           )
       }
    }
