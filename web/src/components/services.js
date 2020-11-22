import React from 'react'
import { Link } from 'gatsby'
import servicesStyles from './services.module.css'
// import Code from './icons/code.svg'
// import Drop from './icons/drop.svg'
// import Cube from './icons/cube.svg'



function Services() {
    return (
        <div className={servicesStyles.servicesWrapper}>
            <div className={servicesStyles.servicesContainer}>
                <h2 className={servicesStyles.servicesTitle}>services</h2>
                <div className={servicesStyles.servicesCards}>
                    <div className={servicesStyles.servicesCard}>
                    {/* <img src={Drop} alt='dropper icon'></img> */}
                    <h4 className={servicesStyles.serviceType}>web design</h4>
                    <p>user-friendly design your customers will love</p>
                    </div>
                    <div className={servicesStyles.servicesCard}>
                    {/* <img src={Code} alt='code icon'></img> */}
                    <h4 className={servicesStyles.serviceType}>web development</h4>
                    <p>lightweight solutions that are easy to maintain</p>
                    </div>
                    <div className={servicesStyles.servicesCard}>
                    {/* <img src={Cube} alt='cube icon'></img> */}
                    <h4 className={servicesStyles.serviceType}>automation</h4>
                    <p>systems that save time in your business</p>
                    </div>
                </div>
                {/* <a href='https://form.typeform.com/to/viJLURRO' target='blank' rel="noopener noreferrer" className={servicesStyles.servicesButton}><div>start a project</div></a> */}
            </div>
        </div>
    )
}

export default Services