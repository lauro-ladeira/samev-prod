import React from "react"
import * as S from "./styled"

/* import resumos from "../../../data/resumos.json" */

const Resumos = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Submissão de resumos</S.Title>
        <S.Description>
          Os participantes da XXII SAMEV terão o direito de submeter até dois
          trabalhos, podendo ser de pesquisa, extensão ou relato de caso. Os
          resumos ficarão expostos neste site durante os dias 24 de novembro a 8
          de dezembro de 2020, no formato de painel. Os interessados devem
          enviar um e-mail com o(s) resumo(s) e painel (eis) anexados para
          samev.vet@gmail.com.br. O assunto deverá ser “SUBMISSÃO DE RESUMOS”,
          sendo que este deve ser enviado entre os dias 29 de setembro à 20 de
          outubro de 2020. Em nosso EDITAL DE SUBMISSÃO DE RESUMOS, os
          interessados encontrarão mais informações gerais e específicas sobre
          como realizar todo processo de submissão. Abaixo, em “Modelo de
          Resumo”, encontra-se disponível um esboço de como o resumo deve ser
          formulado.
        </S.Description>
        <S.ButtonsContainer>
          <S.Button
            to="https://drive.google.com/file/d/1UG1a2qa8xcyofNl3FTOWkZD2lDtaUTya/view?usp=sharing"
            target="_blank"
          >
            Edital
          </S.Button>
          <S.Button
            to="https://drive.google.com/file/d/1zsS10pwjpM--eyfSGml1m-qQkUkoL0BZ/view?usp=sharing"
            target="_blank"
          >
            Modelo de Resumo
          </S.Button>
        </S.ButtonsContainer>
        {/*         <S.Title>Resumos</S.Title> */}
      </S.Container>
      {/*       <S.ResumosContainer>
        {resumos.map(el => {
          return (
            <S.Card key={Math.random()}>
              <S.TitleCard>{el.titulo}</S.TitleCard>
              <S.CardBottom>
                {el.autores.map((autores, i) => {
                  return (
                    <S.CardAuthor key={Math.random()}>
                      {autores.autor}
                    </S.CardAuthor>
                  )
                })}
              </S.CardBottom>
            </S.Card>
          )
        })}
      </S.ResumosContainer> */}
    </S.Wrapper>
  )
}

export default Resumos
