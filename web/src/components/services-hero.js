import React from 'react'
import { Link } from 'gatsby'
import servicesHeroStyles from './services-hero.module.css'

function ServicesHero(){
    return(
        <div className={servicesHeroStyles.servicesHeroContainer}>
            <div className={servicesHeroStyles.copyContainer}>
              <h1 className={servicesHeroStyles.heroCopy}>meet your new creative department</h1>
              <p className={servicesHeroStyles.heroSmallCopy}>everything you need to design, build and grow your brand</p>
              <a href='https://form.typeform.com/to/viJLURRO' target='blank' rel="noopener noreferrer" className={servicesHeroStyles.heroButton}><div>start a project</div></a>
              {/* <Link to='/contact' className={heroStyles.heroButton}><div>start a project</div></Link> */}
            </div>
            <div className={servicesHeroStyles.imgContainer}>
                  
            </div>
            
            
        </div>

    )
}

export default ServicesHero