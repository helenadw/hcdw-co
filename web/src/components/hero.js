import React from 'react'
import { Link } from 'gatsby'
import heroStyles from './hero.module.css'


export default function Hero(){


    return(
      <div className={heroStyles.heroContainer}>
             <div className={heroStyles.copyContainer}>
              <h1 className={heroStyles.heroCopy}>websites your customers will love.</h1>
              <Link to='/contact' className={heroStyles.heroButton}><div>start a project</div></Link>
            </div>
            <div className={heroStyles.imgContainer}>
                  
            </div>
              
      </div>
      )
}