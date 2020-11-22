import React from 'react'
import { Link } from 'gatsby'
import introStyles from './intro.module.css'


function Intro() {
    return (
        <div className={introStyles.introWrapper}>
            <div className={introStyles.introContainer}>
                <h4 className={introStyles.introHeading}>Web design and development services specially tailored for startups and small businesses.</h4>

            </div>
        </div>
    )
}

export default Intro