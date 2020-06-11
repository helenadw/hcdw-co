import React from 'react'
import { Link } from 'gatsby'
import heroStyles from './hero.module.css'


export default function Hero(){
    return(
        <div className={heroStyles.heroContainer}>
        <h4 className={heroStyles.heroSmallCopy}>Creative Front End Developer + Marketer</h4>
        <h1 className={heroStyles.heroCopy}>Building, writing, and strategising for the web.</h1>
        <h4 className={heroStyles.heroSmallCopy}>Say hi on <a href='https://twitter.com/helenadw' target='_blank'>Twitter</a> or <a href='https://github.com/hcdw' target='_blank'>Github</a></h4>
        <button className={heroStyles.heroButton}>want to discuss a project?</button>
      </div>
    )
}