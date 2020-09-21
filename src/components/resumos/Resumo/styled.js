import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
`

export const Container = styled.div`
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

export const Title = styled.h1`
  font-size: 30px;
  line-height: 35px;
  color: #333;
  font-family: 'Roboto Condensed';
  font-weight: bold;

  ${media.lessThan("910px")`
    font-size: 26px;
    line-height: 50px;
  `}

  ${media.lessThan("388px")`
    font-size: 22px;
  `}

`