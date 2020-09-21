import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

// import HeaderImage from "../../../images/pessoas-samev-2019.jpg"
import HeaderImage from "../../inicio/Header/HeaderImage"

export const HeaderWrapper = styled(HeaderImage)`
  background-position: center;

  width: 100%;
  height: 400px;
`

// export const HeaderWrapper = styled.div`
//   background-image: linear-gradient(
//       180deg,
//       #060761 12.31%,
//       rgba(6, 7, 97, 0) 144.2%
//     ),
//     url(${HeaderImage});
//   background-position: center;

//   width: 100%;
//   height: 400px;
// `

export const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  padding-top: 25vh;

  ${media.lessThan("large")`
    width: 85%;
  `}

  ${media.lessThan("medium")`
   flex-direction: column;
   padding-top: 30vh;
  `}
`

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan("large")`
    width: 85%;
  `}
  ${media.lessThan("medium")`
    width: 100%;
  `}
  ${media.lessThan("630px")`
    text-align: center;
  `}
`

export const Title = styled.h1`
  display: inline-block;
  font-size: 48px;
  line-height: 62px;
  color: #ffffff;
  font-family: 'Montserrat';
  font-weight: bold;

  ${media.lessThan("910px")`
    font-size: 42px;
    line-height: 50px;
  `}

  ${media.lessThan("630px")`
    display:block;
  `}

  ${media.lessThan("388px")`
    font-size: 32px;
    line-height: 45px;
  `}

`

export const Description = styled(Title)`
  font-size: 36px;
  line-height: 46px;
  
  ${media.lessThan("910px")`
    font-size: 32px;
    line-height: 42px;
  `}

  ${media.lessThan("388px")`
    font-size: 26px;
    line-height: 39px;
  `}
`

export const Color = styled(Description)`
  color: #f6ab00;
`
export const ColorSmaller = styled(Description)`
  display: block;
  color: #f6ab00;
  font-size: 24px;

  ${media.lessThan("910px")`
    font-size: 20px;
  `}

  ${media.lessThan("388px")`
    font-size: 20px;
  `}
`

export const Break = styled.br``

export const Button = styled(Link)`
  padding: 10px 56px;

  display: block;
  background: #f6ab00;
  border-radius: 10px;
  border: none;
  color: #060761;

  font-family: Roboto Condensed;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-decoration: none;

  white-space: nowrap;
`
