import React from "react"
import * as S from "./styled"
import Apoiadores from './Apoiador'

const Sobre = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Apoio</S.Title>
        <Apoiadores />
      </S.Container>
    </S.Wrapper>
  )
}

export default Sobre
