import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const InscricaoWrapper = styled.div`
  width: 100%;
  height: auto;
`

export const InscricaoContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 50px 0;

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

  margin-bottom: 20px;
  margin-top: 20px;

  ${media.lessThan("630px")`
    text-align: center;
  `}
`

export const Description = styled.p`
  color: #333;
  font-family: "Roboto Condensed";
  font-size: 16px;
  line-height: 25px;
  text-align: justify;

  margin-bottom: 40px;
  margin-top: 20px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;

  ${media.lessThan("760px")`
    flex-direction: column;
  `}
`
export const Button = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  width: 492px;
  height: 179px;
  margin-bottom: 20px;

  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  text-align: center;

  background: #1f7874;
  border-radius: 20px;
  color: #fff;

  &:hover,
  &:focus {
    background: #00b08c;
  }

  ${media.lessThan("1170px")`
    width: 45%;
  `}

  ${media.lessThan("760px")`
    width: 100%;
    font-size: 20px;
  `}
`
export const Img = styled.div`
  width: 96px;
  height: auto;
`
export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  height: auto;
  width: 100%;
`
export const TableBox = styled.div`
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
  background-color: #1f7874;
  border-radius: 20px 20px 0 0;
  height: 50px;
  width: 100%;
`

export const TableTitle = styled.h1`
  font-size: 30px;
  line-height: 35px;
  color: #fff;
  font-family: "Montserrat";
  font-weight: bold;

  ${media.lessThan("910px")`
    font-size: 22px;
    line-height: 50px;
  `}

  ${media.lessThan("500px")`
    font-size: 17px;
  `}
`
export const GridContainer = styled.div`
  margin-top: 0;
  width: 100%;
`

export const Row = styled.div`
  font-family: "Roboto Condensed";
  font-size: 20px;
  display: grid;
  padding: 0 60px;
  grid-template-columns: 1fr 1fr 1fr;

  ${media.lessThan("760px")`
    padding: 0 0;
    font-size: 14px;
    grid-template-columns: 1fr 1.3fr .8fr;
  `}

  /* ${media.lessThan("700px")`
  grid-template-columns: 30% 70%;
  `} */
`

export const Column = styled.div`
  line-height: 19px;
  display: inline-block;
  padding: 15px;
  text-align: center;
  align-self: center;
`
export const Obs = styled.p`
  font-size: 14px;

  ${media.lessThan("760px")`
    font-size: 10px;
    line-height: 15px;
  `}
`
