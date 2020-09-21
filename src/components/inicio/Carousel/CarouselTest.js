import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import * as S from "./styled"

const Palestrantes = () => {
  const [active, setActive] = useState(false)
  const [palestranteActive, setPalestranteActive] = useState({})

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

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScrol: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 914,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 685,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <S.CarouselWrapper>
      <S.CarouselContainer>
        <S.Title>Palestrantes</S.Title>
        <S.Box active={active ? "activeBox" : null}>
          <S.Header>
            <S.CloseButton
              onClick={toggleClassName}
              active={active ? "activeClose" : null}
            >
              +
            </S.CloseButton>
          </S.Header>
          <S.Info>
            <S.CardImage active={active ? "activeAvatar" : null}>
              {data.allPalestrantesJson.nodes.map(palestrante => {
                if (palestrante.nome === palestranteActive.nome) {
                  return (
                    <S.SetImg
                      active={active ? "activeAvatar" : null}
                      key={Math.random()}
                      fluid={palestranteActive.src.childImageSharp.fluid}
                    />
                  )
                }
                return null
              })}
            </S.CardImage>
            <S.CardNome active={active ? "activeName" : null}>
              {palestranteActive.nome}
            </S.CardNome>
          </S.Info>
          <S.TextBox>
          {data.allPalestrantesJson.nodes.map(palestrante => {
            if (palestrante.nome === palestranteActive.nome) {
              return palestranteActive.descricao.map(el => {
                return <S.Text key={Math.random()}>{el.topico}<br /></S.Text>
              })
            }
            return null
          })}
          </S.TextBox>
        </S.Box>
        <Slider {...settings}>
          {data.allPalestrantesJson.nodes.map(palestrante => (
            <React.Fragment key={Math.random()}>
              <S.CardContainer
                onClick={() => toggleClassName(palestrante)}
                active={active ? "activeClose" : null}
              >
                <S.CardImage>
                  <S.SetImg fluid={palestrante.src.childImageSharp.fluid} durationFadeIn={100} />
                </S.CardImage>
                <S.CardNome>{palestrante.nome}</S.CardNome>
                <S.CardEspecialidade>
                  {palestrante.especialidade}
                </S.CardEspecialidade>
                {palestrante.palestras.map(palestras => (
                  <S.CardPalestras key={Math.random()}>
                    {palestras.tema}
                  </S.CardPalestras>
                ))}
                ;
              </S.CardContainer>
            </React.Fragment>
          ))}
        </Slider>
      </S.CarouselContainer>
    </S.CarouselWrapper>
  )
}

export default Palestrantes
