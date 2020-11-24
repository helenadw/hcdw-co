import React from 'react'
import { Link } from 'gatsby'

import Container from '../components/container'
import SEO from '../components/seo'
import linksStyles from '../styles/links.module.css'
import Logo from '../components/Images/hcdw-logo.svg'

import { responsiveTitle2 } from '../components/typography.module.css'

const Links = () => {
    return (
        <div className={linksStyles.root}>
        
            <div className={linksStyles.branding}>
                <Link to='/'>
                    <img src={Logo} alt='logo'></img>
                </Link>
            </div>
            <div className={linksStyles.linksContainer}>
                {/* <a href='https://linkin.bio/ig-hcdw-co' className={linksStyles.linkinbioContainer}>
                        <h4 className={responsiveTitle2.title}>find a link from our feed</h4>
                </a>
                <Link to='/' className={linksStyles.linkinbioContainer}>
                        <h4 className={responsiveTitle2.title}>visit website</h4>
                </Link> */}

                <div className={linksStyles.startContainer}>
                    <a href='https://linkin.bio/ig-hcdw-co' className={linksStyles.linkinbioButton}><div>link in bio</div></a>
                </div>
                <div className={linksStyles.startContainer}>
                    <Link to='/' className={linksStyles.visitButton}><div>visit website</div></Link>
                </div>
                <div className={linksStyles.startContainer}>
                    <a href='https://form.typeform.com/to/viJLURRO' className={linksStyles.startButton}><div>start a project</div></a>
                </div>
            </div>
        </div>
    )
}

export default Links