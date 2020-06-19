import React from 'react'

import hero3Styles from './hero3.module.css'

export default function Hero3(){

    return(
        <div className={hero3Styles.heroWrapper}>
            <div className={hero3Styles.imageContainer}></div>
            <div className={hero3Styles.heroContent}>
              <h1>Websites &&</h1>
              <h1>Experiences </h1>
            </div>
            <h4>*</h4>
          
        </div>

    )
}