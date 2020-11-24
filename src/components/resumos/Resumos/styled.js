import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 50px 0 0 0;

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
  text-align: center;

  margin-bottom: 30px;

  ${media.lessThan("760px")`
    margin-top: 30px;
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

  width: 320px;
  padding: 20px 0;
  margin-bottom: 80px;

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
    width: 30%;
  `}

  ${media.lessThan("760px")`
    width: 100%;
    font-size: 20px;
    margin-bottom: 10px;
  `}
`
export const ResumosContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: calc(75% + 60px);
  margin: 0 auto;
  padding-bottom: 50px;

  ${media.lessThan("large")`
    width: calc(85% + 20px);
  `}
`
export const Card = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  color: white;
  width: 30%;
  height: 200px;

  border-radius: 20px;
  background-color: #ededed;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 10px;

  transition: transform 0.6s;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  ${media.lessThan("760px")`
    width: 85%;
    height: auto;
  `}
`
export const TitleCard = styled.h1`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  margin: 20px 20px 10px;

  text-align: center;

  color: #1f7874;
`
export const CardBottom = styled.h1`
  background: #1f7874;
  border-radius: 0px 0px 20px 20px;
  width: 100%;
  height: auto;

  &:hover,
  &:focus {
    background: #00b08c;
  }
`
export const CardAuthor = styled.h1`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  text-align: center;
  margin: 10px;

  color: #fff;
`
