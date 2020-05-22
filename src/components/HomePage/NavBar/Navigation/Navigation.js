import React from 'react';
import styles from './Navigation.css.js';



export class Navigation extends React.Component {
    render() {
    return <nav style={styles.pagesContainer}>
            <a href= '#/who' className='links' style={styles.linkDetails}>Who</a>
            <a href= '#/resume' className='links' style={styles.linkDetails}>Resume</a>
            <a href= '#/' className='links' style={styles.linkDetails}>Intro</a>
            <a href= '#/development' className='links' style={styles.linkDetails}>&#60; Dev &#62;</a>
            <a href= '#/brand' className='links' style={styles.linkDetails}>Brand</a>
        </nav>
    }
}