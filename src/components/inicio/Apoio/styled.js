import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"
// import Img from 'gatsby-image'
import { Link } from "gatsby"

// import ApoiadorImage from "../../../../apoiador.jpg"

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 50px 0;
`

export const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #0c525e;

  margin-bottom: 20px;
`

export const ApoiadoresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const ApoiadoresDiamanteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const ImgWrapperLink = styled(Link)`
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin: 0 10px 20px;
  transition: transform 0.6s;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  ${media.lessThan("768px")`
    width: 80%;
    margin: 0 10% 30px;
  `}
`

export const ImgWrapper = styled.div`
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin: 0 10px 20px;

  ${media.lessThan("768px")`
    width: 80%;
    margin: 0 10% 30px;
  `}
`

export const SetImg = styled(Img)`
/*     width: 20%;
    height: 20%; */
`
