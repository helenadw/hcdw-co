import React from 'react'
import { Link } from 'gatsby'
import startStyles from './start-project.module.css'

import Laptop from './Images/laptop.jpg'

function Start() {
    return (
        <div className={startStyles.startWrapper}>
            <div className={startStyles.startContainer}>
                <h2 className={startStyles.startTitle}>hire</h2>
                <p className={startStyles.startCopy}>Have a project in mind that you want to tackle? I can help with web design and development, whatever stage you are at. From installing a template for you all the way up to custom coded websites.</p>
                {/* <img src={Laptop} alt='laptop on table'></img> */}
                <a href='https://form.typeform.com/to/viJLURRO' target='blank' rel="noopener noreferrer" className={startStyles.startButton}><div>start a project</div></a>
            </div>
        </div>
    )
}

export default Start