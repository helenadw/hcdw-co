import React from 'react'
import { Link } from 'gatsby'
import introStyles from './intro.module.css'


function Intro() {
    return (
        <div className={introStyles.introWrapper}>
            <div className={introStyles.introContainer}>
                <h3 className={introStyles.introHeading}>Websites, marketing and automation services specially tailored for startups and small businesses.</h3>

            </div>
        </div>
    )
}

export default Intro