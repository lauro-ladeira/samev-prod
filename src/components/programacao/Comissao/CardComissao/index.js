import React, { useState } from "react"
import * as S from "./styled"

function CardComissao({ nome, descricao, url }) {
  const [active, setActive] = useState(false)

  const toggleClassName = () => {
    const currentState = active
    setActive(!currentState)
  }

  const path = `../../../../../${url}`

  return (
    <>
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
          <S.CardImage path={path}  active={active ? "activeAvatar" : null}/>
          <S.CardNome active={active ? "activeName" : null}>{nome}</S.CardNome>
        </S.Info>
        <S.TextBox>{descricao}</S.TextBox>
      </S.Box>
      <S.CardContainer
        onClick={toggleClassName}
        active={active ? "activeClose" : null}
      >
        <S.CardImage path={path} />
        <S.CardNome>{nome}</S.CardNome>
        <S.CardButton onClick={toggleClassName}>+</S.CardButton>
      </S.CardContainer>
    </>
  )
}

export default CardComissao
