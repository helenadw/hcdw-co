// import React from 'react'
// import { graphql } from 'gatsby'
// import Container from '../components/container'
// import GraphQLErrorList from '../components/graphql-error-list'
// import ServicePreviewGrid from '../components/service-preview-grid'
// import SEO from '../components/seo'
// import Layout from '../containers/layout'
// import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
// import { responsiveTitle1 } from '../components/typography.module.css'

// export const query = graphql`
//   query PricingPageQuery {
//     service: allSanityPricing(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
//       edges {
//         node {
//           id
//           publishedAt
//           mainImage {
//             asset {
//               _key
//             }
//             alt 
//           }
//           title
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `

// const PricingPage = props => {
//     const { data, errors } = props
//     if (errors) {
//         return (
//         <Layout>
//             <GraphQLErrorList errors={errors} />
//         </Layout>
//         )
//     }
//     const pricingNodes =
//         data && data.pricing && mapEdgesToNodes(data.pricing).filter(filterOutDocsWithoutSlugs)
//     return(
//         <Layout>
//             <SEO title='Pricing' />
//             <Container>
//             <h1 className={responsiveTitle1}>Pricing</h1>
//             {pricingNodes && pricingNodes.length > 0 && <PricingPreviewGrid nodes={pricingNodes} />}
//             <PricingPreviewGrid/>
//             </Container>
//         </Layout>
//     )
// } 
// export default PricingPage