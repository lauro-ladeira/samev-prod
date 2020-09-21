import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

import HeaderImage from "./HeaderImage"
// import HeaderImage from "../../../images/pessoas-samev-2019.jpg"

export const HeaderWrapper = styled(HeaderImage)`
  background-position: top;
  background-color: #0c525e;
  width: 100%;
  height: 100vh;
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
//   height: 100vh;
// `

export const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 75%;
  padding-top: 40vh;

  ${media.lessThan("large")`
    width: 85%;
  `}

  ${media.lessThan("medium")`
   flex-direction: column;
   padding-top: 30vh;
  `}
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;

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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding: 30px 10px 0;

  ${media.lessThan("medium")`
    justify-content: flex-start;
    padding: 30px 0;
  `}
  ${media.lessThan("630px")`
    justify-content: center;
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
  font-family: "Roboto Condensed";
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
  color: #bbf7b2;
`
export const ColorSmaller = styled(Description)`
  display: block;
  color: #bbf7b2;
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
  background: #bbf7b2;
  border-radius: 10px;
  border: none;
  color: #0C525E;

  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  text-decoration: none;

  white-space: nowrap;

  transition: transform 0.6s;

    &:hover,
    &:focus {
      transform: scale(1.05);
      background: #00b08c;
      color: #fff;
    }
`