import { max } from 'date-fns'
import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

import styles from './service-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function ServicePreview (props) {
  return (
    <Link className={styles.root} to={`/service/${props.slug.current}`}>
    <div className={styles.serviceCard}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .height(300)
              .width(600)
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h2 className={cn(responsiveTitle3, styles.title)}>{props.title}</h2>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
      </div>
    </Link>
  )
}

export default ServicePreview