import React from 'react'
import { Link } from 'gatsby'
import footerStyles from './footer.module.css'
import Logo from './Images/hcdw-logo.svg'


export default function Footer(){


    return(
        <div className={footerStyles.footerContainer}>
            <div className={footerStyles.menu1Container}>
                <a href='https://medium.com/@HelenaDW' className={footerStyles.footerLink} target='blank' rel="noopener noreferrer">medium</a>
                <a href='https://www.instagram.com/helenadw' className={footerStyles.footerLink} target='blank' rel="noopener noreferrer">instagram</a>
                <a href='https://www.twitter.com/helenadw' className={footerStyles.footerLink} target='blank' rel="noopener noreferrer">twitter</a>
                <a href='https://www.linkedin.com/in/helenadw/' className={footerStyles.footerLink} target='blank' rel="noopener noreferrer">linkedin</a>

            </div>
            <div className={footerStyles.logoContainer}>
                <Link to='/'>
                    <img src={Logo} alt='logo' className={footerStyles.logo}></img>
                </Link>
            </div>
            <div className={footerStyles.menu2Container}>
                <Link to='/projects' className={footerStyles.footerLink}>projects</Link>
                <Link to='/blog' className={footerStyles.footerLink}>blog</Link>
                <Link to='/about' className={footerStyles.footerLink}>about</Link>
                <Link to='/contact' className={footerStyles.footerLink}>contact</Link>
            </div>
            </div>
      )
}