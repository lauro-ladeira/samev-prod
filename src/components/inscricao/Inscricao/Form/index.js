import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Form = () => {
  const { formImage } = useStaticQuery(
    graphql`
      query {
        formImage: file(relativePath: { eq: "form.png" }) {
          childImageSharp {
            fluid(maxWidth: 85, maxHeight: 97) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return <Img fluid={formImage.childImageSharp.fluid} />
}

export default Form
