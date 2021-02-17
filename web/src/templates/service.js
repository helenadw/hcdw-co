import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Service from '../components/service'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ServiceTemplateQuery($id: String!) {
    service: sanityService(id: { eq: $id }) {
      id
      publishedAt
      excerpt {
        sanityChildren {
          text
        }
      }
      categories {
        _id
        title
      }
      relatedProjects {
        title
        _id
        mainImage {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
          }
          alt
        }
        slug {
          current
        }
      }
      relatedPrices {
        title
        _id
        price 
        excerpt {
          sanityChildren {
            text
          }
        }
        slug {
          current
        }
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      
      title
      slug {
        current
      }
      _rawBody
    }
}
`

const ServiceTemplate = props => {
  const { data, errors } = props
  const service = data && data.service
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {service && <SEO title={service.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {service && <Service {...service} />}
    </Layout>
  )
}

export default ServiceTemplate
