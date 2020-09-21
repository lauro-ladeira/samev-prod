import styled from "styled-components"
import media from "styled-media-query"

export const ProgramacaoWrapper = styled.div`
  width: 100%;
  background-color: #fff;
`

export const ProgramacaoContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  padding: 50px 0;

  ${media.lessThan("large")`
    width: 85%;
  `}
`
export const DayBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #ddd;
  border-radius: 20px;
  width: 100%;
  padding-bottom: 15px;
  margin-bottom: 30px;
`
export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c525e;
  border-radius: 20px 20px 0 0;
  height: 50px;
  width: 100%;
`

export const Title = styled.h1`
  font-size: 30px;
  line-height: 35px;
  color: #bbf7b2;
  font-family: "Montserrat";
  font-weight: bold;

  ${media.lessThan("910px")`
    font-size: 26px;
    line-height: 50px;
  `}

  ${media.lessThan("550px")`
    font-size: 18px;
  `}
`
export const GridContainer = styled.div`
  margin-top: 0;
  width: 100%;
`

export const Row = styled.div`
  font-family: "Roboto Condensed";
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  background-color: ${props =>
    props.titulo === "TITULO"
      ? " #1f7874"
      : props.titulo === "AGUARDE"
      ? "#bbf7b2"
      : ""};

  ${media.lessThan("700px")`
    grid-template-columns: .5fr 8fr .5fr;
  `}
`

export const Column = styled.div`
  line-height: 19px;
  display: inline-block;
  padding: 15px;
  text-align: ${props =>
    props.titulo === "TITULO" || props.titulo === "AGUARDE" ? "center" : ""};
  font-family: ${props => (props.titulo === "TITULO" ? "Montserrat" : "")};
  color: ${props => (props.titulo === "TITULO" ? "#fff" : "")};
  ${media.lessThan("550px")`
    font-size: ${props => (props.titulo === "TITULO" ? "14px" : "")};
  `}
`

export const Palestrante = styled.span`
  font-weight: bold;
  cursor: pointer;
  transition: font-size 0.6s;

  &:hover,
  &:focus {
    font-size: 17px;
  }
`

export const TableTitle = styled.span`
  font-weight: bold;
`

export const PalestranteWrapper = styled.div`
  display: inline-block;
  height: 18px;
`
