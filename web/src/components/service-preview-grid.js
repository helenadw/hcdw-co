import React from 'react'
import { Link } from 'gatsby'
import ServicePreview from './service-preview'
import styles from './service-preview-grid.module.css'

import website from './Images/20A.png'
import phone from './Images/iPhone.png'
import automation from './Images/applepro.png'

function ServicePreviewGrid(props) {
    return (
        <div className={styles.root}>
        {props.title && (
          <h2 className={styles.headline}>
            {props.browseMoreHref ? (
              <Link to={props.browseMoreHref}>{props.title}</Link>
            ) : (
              props.title
            )}
          </h2>
        )}
        <ul className={styles.grid}>
          {props.nodes &&
            props.nodes.map(node => (
              <li key={node._id} className={styles.serviceItem}>
                <ServicePreview {...node} />
              </li>
            ))}
        </ul>
        {props.browseMoreHref && (
          <div className={styles.browseMoreNav}>
            <Link to={props.browseMoreHref} className={styles.browseMoreLink}>see more</Link>
          </div>
        )}
        <div className={styles.servicesWrapper}>
                <div className={styles.servicesCards}>

                    <Link to={`/service/websites`} className={styles.servicesCard}>
                        <div className={styles.servicesInfo}>
                            <h3 className={styles.servicesType}>websites</h3>
                            <p className={styles.servicesPara}>User-centric design your customers will love, lightweight solutions you'll love to use.</p>
                            <Link to={`/service/websites`} className={styles.servicesButton}>learn more</Link>
                        </div>
                        <div className={styles.imgDiv}>
                            <img src={website} alt='laptop' className={styles.img}/>
                        </div>
                    </Link>
                    <Link to={`/service/marketing`} className={styles.servicesCard}>
                        <div className={styles.servicesInfo}>
                            <h3 className={styles.servicesType}>marketing</h3>
                            <p className={styles.servicesPara}>Find your customers and develop deep connections to grow your business.</p>
                            <Link to={`/service/marketing`} className={styles.servicesButton}>learn more</Link>
                        </div>
                        <div className={styles.imgDiv}>
                            <img src={phone} alt='laptop' className={styles.img}/>
                        </div>
                    </Link>
                    <Link to={`/service/automation`} className={styles.servicesCard}>
                        <div className={styles.servicesInfo}>
                            <h3 className={styles.servicesType}>automation</h3>
                            <p className={styles.servicesPara}>Save precious time and money in your business by leveraging the power of technology. </p>
                            <Link to={`/service/automation`} className={styles.servicesButton}>learn more</Link>
                        </div>
                        <div className={styles.imgDiv}>
                            <img src={automation} alt='laptop' className={styles.img}/>
                        </div>
                    </Link>
                  
                </div>
        </div>
      </div>
    )}
    ServicePreviewGrid.defaultProps = {
        title: '',
        nodes: [],
        browseMoreHref: ''
      }


export default ServicePreviewGrid

        {/* <div className={servicesAllStyles.servicesWrapper}>
                <div className={servicesAllStyles.servicesCards}>

                    <Link to='/websites' className={servicesAllStyles.servicesCard}>
                        <div className={servicesAllStyles.servicesInfo}>
                            <h3 className={servicesAllStyles.serviceType}>websites</h3>
                            <p className={servicesAllStyles.servicesPara}>user-friendly design your customers will love</p>
                            <Link to='/websites' className={servicesAllStyles.servicesButton}>learn more</Link>
                        </div>
                        <div className={servicesAllStyles.imgDiv}>
                            <img src={website} alt='laptop' className={servicesAllStyles.img}/>
                        </div>
                    </Link>
                    <Link to='/marketing' className={servicesAllStyles.servicesCard}>
                        <div className={servicesAllStyles.servicesInfo}>
                            <h3 className={servicesAllStyles.serviceType}>marketing</h3>
                            <p className={servicesAllStyles.servicesPara}>lightweight solutions that are easy to maintain</p>
                            <Link to='/marketing' className={servicesAllStyles.servicesButton}>learn more</Link>
                        </div>
                        <div className={servicesAllStyles.imgDiv}>
                            <img src={phone} alt='laptop' className={servicesAllStyles.img}/>
                        </div>
                    </Link>
                    <Link to='/automation' className={servicesAllStyles.servicesCard}>
                        <div className={servicesAllStyles.servicesInfo}>
                            <h3 className={servicesAllStyles.serviceType}>automation</h3>
                            <p className={servicesAllStyles.servicesPara}>systems that save time in your business</p>
                            <Link to='/automation' className={servicesAllStyles.servicesButton}>learn more</Link>
                        </div>
                        <div className={servicesAllStyles.imgDiv}>
                            <img src={automation} alt='laptop' className={servicesAllStyles.img}/>
                        </div>
                    </Link>
                  
                </div>
        </div> */}