import React from 'react'
import { Link } from 'gatsby'
import linksStyles from '../styles/links.module.css'
import Logo from '../components/Images/hcdw-logo.svg'


const Links = () => {
    return (
        <div className={linksStyles.root}>
            <div className={linksStyles.branding}>
                <Link to='/'>
                    <img src={Logo} alt='logo'></img>
                </Link>
            </div>
            <div className={linksStyles.linksContainer}>
                <a href='https://linkin.bio/ig-hcdw-co' className={linksStyles.linkinbioContainer}><div className={linksStyles.linkinbioButton}>link in bio</div></a>
                <div className={linksStyles.btnContainer}>
                    <Link to='/' className={linksStyles.visitButton}><div>visit website</div></Link>
                    <a href='https://form.typeform.com/to/viJLURRO' className={linksStyles.startButton}><div>start a project</div></a>
                </div>
            </div>
        </div>
    )
}

export default Links