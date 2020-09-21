import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

// eslint-disable-next-line react/prop-types
const HeaderImage = ({ className, children }) => {
  const { headerImage } = useStaticQuery(
    graphql`
      query {
        headerImage: file(
          relativePath: { eq: "samev-background.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1366) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={headerImage.childImageSharp.fluid} 
      id="gbitest"
      role="img"
      aria-label="gbitest"
      fadeIn={`soft`}
    >
      {children}
    </BackgroundImage>
  )
}

export default HeaderImage