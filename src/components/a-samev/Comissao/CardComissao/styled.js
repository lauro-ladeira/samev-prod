import styled, { css } from "styled-components"
import media from "styled-media-query"

export const CardContainer = styled.div`
  overflow: hidden;
  color: white;
  width: 179px;
  height: 179px;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  margin: 10px 10px;

  transition: transform 0.6s;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  ${media.lessThan("544px")`
    cursor: pointer;
    width: 100px;
    height: 100px;
    padding: 0px;
    margin: 2.5px 2.5px;
  `}
`

export const CardImage = styled.div`
  ${props =>
    props.path &&
    css`
      background-image: url(${props.path});
    `}

  background-position: center;

  background-size: 130px;
  border-radius: 50%;
  height: 130px;
  margin: 10px auto;
  width: 130px;

  ${media.lessThan("544px")`
    background-size: 50px;
    width: 50px;
    height: 50px;

    ${props =>
      props.active === "activeAvatar" &&
      css`
        background-size: 100px;
        height: 100px;
        width: 100px;
      `}
  `}
`

export const CardNome = styled.h1`
  position: absolute;
  width: 40px;
  left: 20px;
  bottom: 20px;

  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 15px;
  color: #0c525e;

  ${props =>
    props.active === "activeName" &&
    css`
      text-align: center;
      position: static;
      font-size: 20px;
      width: 80%;
    `}

  ${media.lessThan("544px")`
    font-size: 14px;
    text-align: center;
    left: 10px;
    bottom: 10px;
    width: 80px;
  `}
`
export const CardFunction = styled.h2`
  position: absolute;
  width: 40px;
  left: 20px;
  bottom: 20px;
  margin-top: 5px;

  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 15px;
  color: #0c525e;

  ${props =>
    props.active === "activeFunction" &&
    css`
      text-align: center;
      position: static;
      font-size: 16px;
      width: 80%;
    `}

  ${media.lessThan("544px")`
    font-size: 12px;
    text-align: center;
    left: 10px;
    bottom: 10px;
    width: 80px;
  `}
`

export const CardButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;

  background-color: #0c525e;
  color: #fff;
  cursor: pointer;
  font-size: 28px;
  font-weight: bold;

  height: 50px;
  width: 50px;

  ${media.lessThan("544px")`
    display: none;
  `}
`

export const Box = styled.div`
  display: none;
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
  text-align: justify;

  z-index: 99;

  ${media.lessThan("890px")`
    overflow: scroll;
  `}
`
