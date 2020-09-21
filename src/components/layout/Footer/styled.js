import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #0c525e;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 75%;
  margin: 0 auto;
  padding: 50px 0;

  ${media.lessThan("large")`
    width: 85%;
  `}

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

export const Contato = styled.div`
  width: 300px;
  height: 150px;
`

export const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: left;
  color: #bbf7b2;
  margin-bottom: 23px;

  ${media.lessThan("medium")`
    text-align: center;
    font-size: 30px;
    line-height: 34px;
  `}
`

export const Text = styled.h1`
  font-family: "Roboto Condensed";
  font-weight: 300;
  font-size: 24px;
  line-height: 31px;
  text-align: left;
  color: #fff;
  white-space: nowrap;

  ${media.lessThan("medium")`
    text-align: center;
    font-size: 18px;
    line-height: 22px;
  `}
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 227px;
  height: 150px;

  ${media.lessThan("medium")`
    align-items: center;
  `}
`

export const LogoContainer = styled.div`
  width: 77%;
`

export const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 77%;
  margin-bottom: 23px;
  ${media.lessThan("medium")`
    justify-content: center;
  `}
`

export const socialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #bbf7b2;
`

export const socialMediaLink = styled.a`
  display: inline-block;
  color: #0c525e;
`