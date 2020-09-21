import React from "react"
import * as S from "./styled"

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.TitleContainer>
          <S.Title>XXII SAMEV</S.Title>
          <S.Description
            style={{
              color: "#79cd55",
              fontWeight: "normal",
            }}
          >
            Especialidades
          </S.Description>
          <S.Description>
            Semana Acadêmica de Medicina Veterinária <S.Break />
          </S.Description>
          <S.Color>
            de 24 a 28 de novembro de 2020 <S.Break />
          </S.Color>
          <S.ColorSmaller style={{ fontWeight: "normal" }}>
            Evento Online
          </S.ColorSmaller>
        </S.TitleContainer>
        <S.ButtonContainer>
          <S.Button to="/inscricao" target="_blank">
            INSCREVA-SE!
          </S.Button>
        </S.ButtonContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
