import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Pricing from '../components/pricing'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query PricingTemplateQuery($id: String!) {
    pricing: sanityPricing (id: { eq: $id }) {
      id
      publishedAt
      excerpt {
        sanityChildren {
          text
        }
      }
      price
      _rawBody
      relatedServices {
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
      
    }
}
`

const PricingTemplate = props => {
  const { data, errors } = props
  const pricing = data && data.pricing
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {pricing && <SEO title={pricing.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {pricing && <Pricing {...pricing} />}
    </Layout>
  )
}

export default PricingTemplate
