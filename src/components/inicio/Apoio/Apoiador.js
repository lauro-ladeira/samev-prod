import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ImgWrapper, ApoiadoresContainer } from "./styled"

export const Apoiadores = () => {
  const data = useStaticQuery(graphql`
    query {
      allApoiadoresJson {
        nodes {
          name
          src {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ApoiadoresContainer>
      {data.allApoiadoresJson.nodes.map(apoiador => (
        <ImgWrapper key={Math.random()}>
            <Img fluid={apoiador.src.childImageSharp.fluid} />
        </ImgWrapper>
      ))}
    </ApoiadoresContainer>
  )
}

export default Apoiadores

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { SetImg, ApoiadoresContainer } from "./styled"

// const Apoiador = () => {
//   const { data } = useStaticQuery(
//     graphql`
//     query BlurUpQuery {
//         heroAssets: allFile(filter: { absolutePath: { regex: "/ufv_apoiador/" } }) {
//           edges {
//             node {
//               childImageSharp {
//                 fluid(maxWidth: 600) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   )

//   return (
//     <ApoiadoresContainer>
//       {data.allFile.edges.map(({ node }) => (
//         <SetImg fluid={node.childImageSharp.fluid} />
//       ))}
//     </ApoiadoresContainer>
//   )
// }

// export default Apoiador

// query {
//     logoImage: file(relativePath: { eq: "ufv_apoiador.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 800) {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `
