import React from 'react';
import styles from './Navigation.css.js';
import {NavLink} from 'react-router-dom';



export class Navigation extends React.Component {
    render() {
    return <nav style={styles.pagesContainer}>
            <NavLink to='/who' className='links' activeClassName="selected" activeStyle={styles.activeMenu} style={styles.linkDetails}>Who</NavLink>
            <NavLink to= '/resume' className='links' activeClassName="selected" activeStyle={styles.activeMenu} style={styles.linkDetails}>Resume</NavLink>
            <NavLink exact to='/' className='links' activeClassName="selected" activeStyle={styles.activeMenu} style={styles.linkDetails}>Intro</NavLink>
            <NavLink to='/development' className='links' activeClassName="selected" activeStyle={styles.activeMenu} style={styles.linkDetails}>&#60; Dev &#62;</NavLink>
            <NavLink to='/brand' className='links' activeClassName="selected" activeStyle={styles.activeMenu} style={styles.linkDetails}>Brand</NavLink>
        </nav>
    }
}