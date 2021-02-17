import React from 'react'
import { Link } from 'gatsby'
import styles from './about-me.module.css'
import image from './Images/hcdw.jpg'
import Container from './container'

function AboutMe() {
    return (
        <div className={styles.root}>
            <Container>
            <div className={styles.wrapper}>
                <div className={styles.copy}>
                    <h4 className={styles.heading}>Hi! I'm Helena</h4>
                    <p className={styles.para}>I’m here to support with all your website and marketing needs.
    Whether you need some fresh ideas or a from-scratch build.
    Jargon free solutions you need and none you don’t.
    I’ve worked on the other side, as a brand manager, so I know just how important finding the right creative partner to work with is and how important it is to trust the person who will work on your brand.</p>
                </div>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={image}></img>
                </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutMe