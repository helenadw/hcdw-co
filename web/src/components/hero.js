import React from 'react'
import { Link } from 'gatsby'
import heroStyles from './hero.module.css'


export default function Hero(){
    return(
        <div className={heroStyles.heroContainer}>
        <h4 className={heroStyles.heroSmallCopy}>Creative Front End Developer + Marketer</h4>
        <h1 className={heroStyles.heroCopy}>Building, writing, and strategising for the web.</h1>
        <h4 className={heroStyles.heroSmallCopy}>Say hi on <a href='https://twitter.com/helenadw' target='_blank' className={heroStyles.heroLink}>Twitter</a> or <a href='https://github.com/hcdw' target='_blank'className={heroStyles.heroLink}>Github</a></h4>
        <Link to='/contact' className={heroStyles.heroButton}>want to discuss a project?</Link>
      </div>
    )
}