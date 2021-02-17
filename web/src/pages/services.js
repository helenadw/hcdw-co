import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ServicePreviewGrid from '../components/service-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query ServicesPageQuery {
    service: allSanityService(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              _key
            }
            alt 
          }
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const ServicesPage = props => {
    const { data, errors } = props
    if (errors) {
        return (
        <Layout>
            <GraphQLErrorList errors={errors} />
        </Layout>
        )
    }
    const serviceNodes =
        data && data.services && mapEdgesToNodes(data.services).filter(filterOutDocsWithoutSlugs)
    return(
        <Layout>
            <SEO title='Services' />
            <Container>
            <h1 className={responsiveTitle1}>Services</h1>
            {serviceNodes && serviceNodes.length > 0 && <ServicePreviewGrid nodes={serviceNodes} />}
            <ServicePreviewGrid/>
            </Container>
        </Layout>
    )
} 
export default ServicesPage