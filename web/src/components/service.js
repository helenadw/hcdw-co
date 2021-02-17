import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'

import styles from './service.module.css'

function Service (props) {
const { _rawBody, _rawExcerpt, title, categories, mainImage, publishedAt, relatedProjects, relatedPrices } = props
  return (
    <article className={styles.root}>
    {/* Hero */}
    <div className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
      {/* <div className={styles.bodyText}>{excerpt || []}</div> */}
      {/* <div className={styles.bodyText}>
        {excerpt && <BlockContent blocks={excerpt || []} />}
      </div> */}
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImageContainer}>
          <img
            className={styles.mainImage}
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1000)
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
    </div>
      <Container>
          <div className={styles.mainContent}>
            
            {/* Body Text */}
            <div className={styles.bodyText}>
              {_rawBody && <BlockContent blocks={_rawBody || []} />}
            </div>
            {/* Categories */}
            {categories && (
              <div className={styles.categories}>
                <div className={styles.categoriesHeadlineContainer}>
                  <h3 className={styles.sectionHeadline}>capabilities</h3>
                </div>
                <div className={styles.categoriesContainer}>
                  {categories.map(category => (
                    <div className={styles.category} key={category._id}>{category.title}</div>
                  ))}
                </div>
              </div>
            )}
            {/* Projects */}
            {relatedProjects && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.sectionHeadline}>related projects</h3>
                <div>
                  <div className={styles.relatedProjectContainer}>
                  {relatedProjects.map(project => (
                      <Link to={`/project/${project.slug.current}`}>
                      <div key={`related_${project._id}`} className={styles.relatedProjectCard}>
                      {project.mainImage && project.mainImage.asset && (
                      <img
                        className={styles.relatedProjectImg}
                        src={imageUrlFor(buildImageObj(project.mainImage))
                          .height(300)
                          .width(600)
                          .url()}
                        alt={project.mainImage.alt}
                      />
                      )}
                      {props._rawExcerpt && (
                      <div className={styles.excerpt}>
                        <BlockText blocks={props._rawExcerpt} />
                      </div>
      )}
                        <Link to={`/project/${project.slug.current}`} className={styles.relatedProjectLink}>{project.title}</Link>
                      </div></Link>
                  ))}
                </div>

                </div>
              </div>
            )}
            {relatedPrices && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.sectionHeadline}>pricing</h3>
                <div>
                  <div className={styles.relatedProjectContainer}>
                  {relatedPrices.map(pricing => (
                      <Link to={`/service/${pricing.slug.current}`}>
                      <div key={`related_${pricing._id}`} className={styles.relatedProjectCard}>
                      {pricing.mainImage && pricing.mainImage.asset && (
                      <img
                        className={styles.relatedProjectImg}
                        src={imageUrlFor(buildImageObj(pricing.mainImage))
                          .height(300)
                          .width(600)
                          .url()}
                        alt={pricing.mainImage.alt}
                      />
                      )}
                      
                        <Link to={`/service/${pricing.slug.current}`} className={styles.relatedProjectLink}>{pricing.title}</Link>
                        <h4>{pricing.price}</h4>
                        <p>{pricing._rawExcerpt}</p>
                      </div></Link>
                  ))}
                </div>

                </div>
              </div>
            )}
           
            {/* <div className={styles.pricingContainer}>
              <h3 className={styles.sectionHeadline}>pricing</h3>
              <div className={styles.pricingCardContainer}>
                <div className={styles.pricingCard}>
                <h4 className={styles.pricingHeadline}>Website in a week</h4>
                <p className={styles.price}>£1,000</p>
                <p className={styles.pricingCopy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ultrices quam molestie adipiscing euismod. Morbi in in sed interdum est faucibus. Vulputate bibendum donec quam mauris.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ultrices quam molestie adipiscing euismod. Morbi in in sed interdum est faucibus. Vulputate bibendum donec quam mauris.</p>

                </div>

              </div>

            </div> */}
          </div>

      </Container>
    </article>
  )
}

export default Service
