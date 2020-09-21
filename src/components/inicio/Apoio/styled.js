import styled from "styled-components"
import media from "styled-media-query"
// import Img from 'gatsby-image'
// import { Link } from "gatsby"

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

export const ImgWrapper = styled.div`
  /* background: red; */
  width: 25%;
  margin: 0 10px 20px;

  ${media.lessThan("768px")`
    width: 80%;
    margin: 0 10% 30px;
  `}
`
