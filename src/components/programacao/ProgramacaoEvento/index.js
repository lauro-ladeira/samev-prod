import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"
import * as X from "../../inicio/Carousel/styled"

import programacao from "../../../data/programacao.json"

const ProgramacaoEvento = () => {
  const [active, setActive] = useState(false)
  const [palestranteActive, setPalestranteActive] = useState("")

  const escFunction = event => {
    if (event.keyCode === 27) {
      setActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", escFunction, false)

    return () => {
      window.removeEventListener("keydown", escFunction, false)
    }
  }, [])

  const toggleClassName = p => {
    const currentState = active
    setActive(!currentState)
    if (
      [
        "Maricy Apparício",
        "Gustavo Cobucci",
        "Rafael Bombachi",
        "Laís Ângelo de Abreu",
        "Camila Utrera",
        "Ana Paula Simões",
        "Henrique Machado",
        "Mariana Costa Fausto",
        "Abelardo Silva Júnior",
        "Carine Stefanello",
        "Ana Flávia Chizzotti",
        "A CONFIRMAR",
      ].includes(p)
    ) {
      return setPalestranteActive("Aguarde informações!")
    }
    setPalestranteActive(p)
  }

  const data = useStaticQuery(graphql`
    query {
      allPalestrantesJson {
        nodes {
          nome
          especialidade
          descricao {
            topico
          }
          palestras {
            tema
          }
          src {
            childImageSharp {
              fluid(maxWidth: 800) {
                src
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <S.ProgramacaoWrapper>
      <S.ProgramacaoContainer>
        <X.Box active={active ? "activeBox" : null}>
          <X.Header>
            <X.CloseButton
              onClick={() => toggleClassName("")}
              active={active ? "activeClose" : null}
            >
              +
            </X.CloseButton>
          </X.Header>
          <X.Info>
            <X.CardImage active={active ? "activeAvatar" : null}>
              {data.allPalestrantesJson.nodes.map(palestrante => {
                if (palestrante.nome === palestranteActive) {
                  return (
                    <X.SetImg
                      active={active ? "activeAvatar" : null}
                      key={Math.random()}
                      fluid={palestrante.src.childImageSharp.fluid}
                    />
                  )
                }
                return null
              })}
            </X.CardImage>
            <X.CardNome active={active ? "activeName" : null}>
              {palestranteActive}
            </X.CardNome>
          </X.Info>
          <X.TextBox>
            {data.allPalestrantesJson.nodes.map(palestrante => {
              if (palestrante.nome === palestranteActive) {
                return palestrante.descricao.map(el => {
                  return <X.Text key={Math.random()}>{el.topico}</X.Text>
                })
              }
              return null
            })}
          </X.TextBox>
        </X.Box>
        {programacao.map(el => {
          return (
            <S.DayBox key={Math.random()}>
              <S.TitleBox>
                <S.Title>{el.dia}</S.Title>
              </S.TitleBox>
              <S.GridContainer>
                {el.palestras.map((palestra, i) => {
                  return (
                    <S.Row
                      titulo={palestra.horario}
                      style={
                        palestra.horario === "AGUARDE"
                          ? { backgroundColor: "#bbf7b2" }
                          : i % 2 !== 0 && palestra.horario !== "TITULO"
                          ? { backgroundColor: "#eee" }
                          : {}
                      }
                      key={Math.random()}
                    >
                      <S.Column />
                      <S.Column titulo={palestra.horario}>
                        <S.PalestranteWrapper>
                          {![
                            "Palestras GRAVADAS - Disponíveis a partir das 10h",
                            "AGUARDE NOVIDADES",
                            "Palestra AO VIVO 19h",
                          ].includes(palestra.palestrante) ? (
                            <S.Palestrante
                              onClick={() =>
                                toggleClassName(palestra.palestrante)
                              }
                              active={active ? "activeClose" : null}
                            >
                              {palestra.palestrante}
                            </S.Palestrante>
                          ) : (
                            <S.TableTitle>{palestra.palestrante}</S.TableTitle>
                          )}
                        </S.PalestranteWrapper>
                        {palestra.tema}{" "}
                      </S.Column>
                      <S.Column />
                    </S.Row>
                  )
                })}
              </S.GridContainer>
            </S.DayBox>
          )
        })}
      </S.ProgramacaoContainer>
    </S.ProgramacaoWrapper>
  )
}

export default ProgramacaoEvento