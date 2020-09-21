import React from "react"
import * as S from "./styled"

const Header = ({ title }) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
        </S.TitleContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
