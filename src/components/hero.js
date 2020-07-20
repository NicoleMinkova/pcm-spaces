import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'
import hero from '../../static/hero.jpg'

export default () => (
  <div className={styles.hero}>
    <img
      className={styles.heroImage}
      src={hero}
    />
    <div className={styles.heroDetails}>
      <p className={styles.heroTitle}>Community news and events from the PCM team at Exane</p>
    </div>
  </div>
)
