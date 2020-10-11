import React from "react"
import { useStaticQuery, graphql } from "gatsby"
/* import Img from "gatsby-image" */
import {
  SetImg,
  ImgWrapper,
  ImgWrapperLink,
  ApoiadoresContainer,
  ApoiadoresDiamanteContainer,
} from "./styled"
/* import { Link } from "gatsby" */

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
          size
          link
        }
      }
    }
  `)

  return (
    <>
      <ApoiadoresDiamanteContainer>
        {data.allApoiadoresJson.nodes.map(apoiador => {
          if (apoiador.link !== "") {
            return (
              <ImgWrapperLink
                to={apoiador.link}
                target="_blank"
                key={Math.random()}
              >
                <SetImg
                  fluid={apoiador.src.childImageSharp.fluid}
                  style={{
                    width: `${(100 / apoiador.size).toString()}%`,
                    background:
                      apoiador.name === "chilli beans" ? "red" : "none",
                  }}
                />
              </ImgWrapperLink>
            )
          }
          return null
        })}
      </ApoiadoresDiamanteContainer>
      <ApoiadoresContainer>
        {data.allApoiadoresJson.nodes.map(apoiador => {
          if (apoiador.link === "") {
            return (
              <ImgWrapper key={Math.random()}>
                <SetImg
                  fluid={apoiador.src.childImageSharp.fluid}
                  style={{
                    width: `${(100 / apoiador.size).toString()}%`,
                    background:
                      apoiador.name === "chilli beans" ? "red" : "none",
                  }}
                />
              </ImgWrapper>
            )
          }
          return null
        })}
      </ApoiadoresContainer>
    </>
  )
}

export default Apoiadores
