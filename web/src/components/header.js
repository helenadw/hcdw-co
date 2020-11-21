import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'
import Logo from './Images/hcdw-logo.svg'

import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>
        <img src={Logo} alt='logo'></img>
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li><Link className={styles.navLink} activeClassName={styles.activeNavLink} to='/projects/'>Projects</Link></li>
          <li><Link className={styles.navLink} activeClassName={styles.activeNavLink} to='/blog/'>Blog</Link></li>
          <li><Link className={styles.navLink} activeClassName={styles.activeNavLink} to='/about/'>About</Link></li>
          <li><Link className={styles.navLink} activeClassName={styles.activeNavLink} to='/contact/'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
