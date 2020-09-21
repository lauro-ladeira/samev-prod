import styled from "styled-components"
import media from "styled-media-query"

export const ComissaoWrapper = styled.div`
  background: linear-gradient(180deg, #bbf7b2 0%, #00b08c 100%);
  width: 100%;
`
export const ComissaoContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 50px 0;

  ${media.lessThan("large")`
    width: 85%;
  `} 
`

export const Title = styled.h1`
  color: #0c525e;
  font-family: "Montserrat";
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  margin-bottom: 20px;
  text-align: center;
`
export const Text = styled.p`
  color: #333;
  font-family: "Roboto Condensed";
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 20px;
  text-align: justify;
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`