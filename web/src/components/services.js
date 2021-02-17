import React from 'react'
import { Link } from 'gatsby'
import servicesStyles from './services.module.css'

import website from './Images/20A.png'
import marketing from './Images/iPhone.png'
import automation from './Images/applepro.png'


function ServicesIndexGrid() {
    return (
        <div className={servicesStyles.servicesWrapper}>
                <h2 className={servicesStyles.servicesTitle}>services</h2>
                <div className={servicesStyles.grid}>
                    <Link to='service/websites' className={servicesStyles.servicesCard}>
                        <div >
                        <h4 className={servicesStyles.serviceType}>websites</h4>
                        <img src={website} className={servicesStyles.img}></img>
                        <div><Link to='service/websites' className={servicesStyles.servicesButton}>learn more</Link></div>
                        {/* <p>user-friendly design your customers will love</p> */}
                        </div>
                    </Link>
                    <Link to='service/marketing' className={servicesStyles.servicesCard}>
                        <div >
                        <h4 className={servicesStyles.serviceType}>marketing</h4>
                        <img src={marketing} className={servicesStyles.img}></img>
                        <div><Link to='service/marketing' className={servicesStyles.servicesButton}>learn more</Link></div>
                        {/* <p>find your customers and build deep connections</p> */}
                        </div>
                    </Link>
                    <Link to='service/automation' className={servicesStyles.servicesCard}>
                        <div >
                            <h4 className={servicesStyles.serviceType}>automation</h4>
                                <img src={automation} className={servicesStyles.img}></img>
                            <div><Link to='service/automation' className={servicesStyles.servicesButton}>learn more</Link></div>
                            {/* <p>leveraging systems that save time in your business</p> */}
                        </div>
                    </Link>
                </div>
                {/* <a href='https://form.typeform.com/to/viJLURRO' target='blank' rel="noopener noreferrer" className={servicesStyles.servicesButton}><div>start a project</div></a> */}
                <div className={servicesStyles.browseMoreNav}>
                    <Link to='/services' className={servicesStyles.browseMoreLink}>learn more</Link>
                </div>
        </div>
    )
}

export default ServicesIndexGrid