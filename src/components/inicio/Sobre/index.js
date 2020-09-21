import React from "react"
import * as S from "./styled"

const Sobre = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Sobre a SAMEV</S.Title>
        <S.Description>
          A Semana Acadêmica de Medicina Veterinária ocorre anualmente e é
          realizada por estudantes da Universidade Federal de Viçosa (UFV). Em
          2020, na sua vigésima segunda edição, o evento será realizado de
          maneira remota devido às circunstâncias atuais de distanciamento
          social, sendo que neste ano a temática será Especialidades na Medicina
          Veterinária. A importância da nossa semana é, sobretudo, apresentar
          assuntos que despertem interesse e curiosidade nos ouvintes, ampliando
          os conhecimentos e trazendo perspectivas diversificadas sobre assuntos
          que não são corriqueiramente abordados durante a graduação. Para isso,
          buscamos oferecer palestras ministradas por profissionais
          especializados em diversas áreas da Medicina Veterinária, além de
          facilitar o contato entre ouvintes e palestrantes durante nosso
          evento. Para isso, contamos com debates e espaços exclusivos
          destinados a um bate papo com perguntas e respostas.
        </S.Description>
        <S.ButtonContainer>
          <S.Button to="/a-samev">Saiba mais</S.Button>
        </S.ButtonContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default Sobre
