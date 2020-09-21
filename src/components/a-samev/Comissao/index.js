import React from "react"
import * as S from "./styled"
import CardComissao from "./CardComissao"

function Comissao({ dados }) {
  return (
    <S.ComissaoWrapper>
      <S.ComissaoContainer>
        <S.Title>Comissão Organizadora 2020</S.Title>
        <S.Text>
          A Semana Acadêmica de Medicina Veterinária (SAMEV) da Universidade
          Federal de Viçosa (UFV) é organizada por uma equipe de alunos do
          próprio curso, cujo trabalho passa pela supervisão de professores da
          instituição. Atualmente, a equipe conta com 20 (vinte) estudantes, que
          se dividem em 7 (sete) diretorias: <strong>Acessibilidade</strong>,
          que tem como principal função viabilizar a participação de pessoas com
          deficiência e/ou em situação de vulnerabilidade econômica social, a
          fim de tornar o evento mais acessível para os diferentes públicos;{" "}
          <strong>Financeiro</strong>, diretoria responsável pela organização da
          planilha de gastos do evento; <strong>Logística</strong>, a qual se
          responsabiliza em programar o evento, escalar membros para funções
          variadas e organizar datas para reuniões internas;{" "}
          <strong>Marketing</strong>, setor responsável em administrar todas as
          plataformas digitais da SAMEV, como Facebook, E-mail, Instagram e o
          site oficial, além de realizar o contato com o público para prestar
          auxílio e esclarecer dúvidas; <strong>Patrocínio</strong>, cuja
          principal função é contatar possíveis patrocinadores de modo coerente,
          formal e educado; <strong>Presidência</strong>, responsável pelo
          contato direto com o(s) professor(es) coordenador(es), conduzir
          reuniões, fiscalizar os prazos da comissão e dar suporte à todas as
          demais diretorias; <strong>Relações Públicas</strong>, responsável
          pelo contato com todos os palestrantes antes, durante, e, caso
          necessário, depois do evento. A fim de aproximar a comissão
          organizadora aos participantes do evento, apresentamos a nossa equipe
          responsável pela XXII SAMEV a seguir.
        </S.Text>
        <S.CardsWrapper>
          {dados.map((dados, i) => {
            if(i < 2) {
              return (
                <CardComissao
                  key={i}
                  nome={dados.nome}
                  funcao={dados.funcao}
                  descricao={dados.descricao}
                  url={dados.url}
                />
              )
            } else {
              return null
            }
          })}
        </S.CardsWrapper>
        <S.CardsWrapper>
        {dados.map((dados, i) => {
            if(i >= 2) {
              return (
                <CardComissao
                  key={i}
                  nome={dados.nome}
                  funcao={dados.funcao}
                  descricao={dados.descricao}
                  url={dados.url}
                />
              )
            } else {
              return null
            }
          })}
        </S.CardsWrapper>
      </S.ComissaoContainer>
    </S.ComissaoWrapper>
  )
}

export default Comissao
