import styled, { createGlobalStyle, css } from "styled-components"
import media from "styled-media-query"

export const GlobalStyles = createGlobalStyle`

  /* Estilo da legenda, sempre colocar !important pra forçar a alteração */
  .ril__captionContent {
    font-family: Roboto Condensed !important;
    padding: 10px 20px;
    color: #fff !important;
  }

  /* Container da legenda, posicionei ela no centro, o default é pra esqueda */
  .ril__caption {
    /* justify-content: center; */
  }

  /* Estilo do titulo */
  /* .ril__toolbarItem {
    font-family: Roboto Condensed !important;
  } */
`

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 50px 0;
  font-family: "Roboto Condensed";

  ${media.lessThan("large")`
    width: 85%;
  `}
`

export const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #0c525e;
  margin-bottom: 10px;
  text-align: center;
`

export const Subtitle = styled.h2`
  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #00b08c;
  margin: 30px 0;
  text-align: center;
`

export const CardImage = styled.div`
  ${props =>
    props.path &&
    css`
      background-image: url(${props.path});
    `}
  /* background-image: url("../../../../XX SAMEV 10.jpg"); */
  background-position: center;
  background-repeat: no-repeat;

  background-size: 155%;
  height: 150px;
  margin: 5px;
  width: 150px;

  ${media.lessThan("480px")`
    height: 100px;
    width: 100px;
    margin: 2px;
  `}
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Thumb = styled.div`
  cursor: pointer;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
`

export const Button = styled.button`
  cursor: pointer;
  background-color: #bbf7b2;
  border: none;
  border-radius: 10px;
  color: #0c525e;
  font-family: "Roboto Condensed";
  font-size: 16px;
  padding: 10px 20px;
  margin-top: 20px;

  &:hover {
    background-color: #0c525e;
    color: #bbf7b2;
  }
`
