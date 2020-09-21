import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Pay = () => {
  const { payImage } = useStaticQuery(
    graphql`
      query {
        payImage: file(relativePath: { eq: "pay.png" }) {
          childImageSharp {
            fluid(maxWidth: 96, maxHeight: 97) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return <Img fluid={payImage.childImageSharp.fluid} />
}

export default Pay
