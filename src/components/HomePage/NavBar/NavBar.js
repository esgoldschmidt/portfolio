import React from 'react';
import styles from './NavBar.css.js';
import logo from '../../../resources/portfolioLogoWhite.png'
import { Navigation } from '../../HomePage/NavBar/Navigation/Navigation.js';
import {NavLink} from 'react-router-dom';

export class NavBar extends React.Component {
    render() {
           return (
               <div className='navBar' style={styles.navBar}>
                   <div className="logo">
                       <NavLink exact to='/'>
                       <img src={logo} style={styles.logo} alt='logo'/>
                       </NavLink>
                   </div>
                    <Navigation />
                    <div className="contact">
                        <NavLink to='/contact' activeClassName="selected" activeStyle={styles.activeMenu} style={styles.contact}>contact</NavLink>
                    </div>
                    
               </div>     
           )
       }
    }
