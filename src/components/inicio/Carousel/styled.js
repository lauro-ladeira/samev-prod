import styled, { css } from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const CarouselWrapper = styled.div`
  background: linear-gradient(180deg, #0c525e 0%, #00b08c 100%);
  width: 100%;
  height: 455px;
`

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  padding: 50px 0;

  ${media.lessThan("large")`
    width: 85%;
  `}
`

export const Title = styled.h1`
  color: #fff;
  font-family: "Montserrat";
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  margin-bottom: 10px;

  ${media.lessThan("630px")`
    text-align: center;
  `}
`

export const CardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  width: 80%;
  height: 260px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  margin: 20px 5px 10px;

  transition: transform 0.6s;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  ${media.lessThan("480px")`
    width: 85%;
  `}
`
export const CardImage = styled.div`
  height: 100px;
  margin: 20px 20px;
  width: 100px;
  align-self: center;

  ${props =>
    props.active === "activeAvatar" &&
    css`
      height: 200px;
      width: 200px;
    `}

  ${media.lessThan("544px")`
    height: 100px;
    width: 100px;
    /* background-size: 100px; */
  `}
`

export const CardNome = styled.h1`
  font-family: "Roboto Condensed", "sans-serif";
  font-size: 18px;
  font-weight: bold;
  color: #11124d;
  margin-bottom: 10px;
  text-align: center;
`
export const CardEspecialidade = styled.h2`
  font-family: "Roboto Condensed", "sans-serif";
  font-size: 16px;
  color: #222;
  margin-bottom: 10px;
  text-align: center;
`
export const CardPalestras = styled.p`
  font-family: "Roboto Condensed", "sans-serif";
  font-size: 14px;
  font-style: italic;
  text-align: center;
  color: #222;
  margin-top: 10px;
`

export const SetImg = styled(Img)`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  ${props =>
    props.active === "activeAvatar" &&
    css`
      height: 200px;
      width: 200px;
    `}

  ${media.lessThan("544px")`
    ${props =>
      props.active === "activeAvatar" &&
      css`
        background-size: 100px;
        height: 100px;
        width: 100px;
      `}
  `}
`

export const Box = styled.div`
  display: none;
  align-self: center;
  justify-self: center;
  ${props =>
    props.active === "activeBox" &&
    css`
      position: fixed;
      top: 50px;
      background-color: white;
      border-radius: 20px;
      box-shadow: 0 0 0 130vw rgba(12, 82, 94, 0.9);
      padding: 20px;
      max-height: 90vh;
      width: 60%;

      display: flex;
      align-items: center;
      flex-direction: column;

      z-index: 99;
    `}

  ${media.lessThan("1200px")`
    width: 80%;
  `}

  ${media.lessThan("890px")`
    max-height: 80vh;
  `}
`

export const Header = styled.div`
  background-color: transparent;
  border-radius: 20px;
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const CloseButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;

  background-color: transparent;
  color: #0c525e;
  cursor: pointer;
  font-size: 38px;
  font-weight: bold;

  height: 50px;
  width: 50px;

  transform: rotate(-45deg);
`

export const TextBox = styled.p`
  color: #333;
  font-family: "Roboto Condensed", "Sans-serif";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  margin: 40px 20px 20px;

  z-index: 99;

  ${media.lessThan("890px")`
    overflow: scroll;
    padding: 10px;
  `}
`
export const Text = styled.span`
  text-align: justify;
  z-index: 99;
`
