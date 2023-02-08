import React from 'react'
import {Card} from '../../Card/Card.js'
import styles from './MobileView.css.js'

const MobileView = ({ items }) => (
  <div className='container box' style={styles.box}>
    <Card />
  </div>
)

export default MobileView