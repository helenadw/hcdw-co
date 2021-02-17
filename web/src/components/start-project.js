import React from 'react'
import { Link } from 'gatsby'
import startStyles from './start-project.module.css'

import Laptop from './Images/laptop.jpg'

function Start() {
    return (
        <div className={startStyles.startWrapper}>
            <div className={startStyles.startContainer}>
                <div>
                    <h2 className={startStyles.startTitle}>Let's work together</h2>
                    <p className={startStyles.startCopy}>Have a project you want to discuss? Get in touch!</p>
                </div>
                <div className={startStyles.btnDiv}>
                    <a href='https://form.typeform.com/to/viJLURRO' target='blank' rel="noopener noreferrer" className={startStyles.startButton}><div>start a project</div></a>
                </div>
            </div>
        </div>
    )
}

export default Start