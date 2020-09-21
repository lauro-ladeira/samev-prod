import React, { useState } from "react"
import * as S from "./styled"

import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

import { data, adicionalData } from "./mocks"

const Galeria = () => {
  const [photoList, setPhotoList] = useState({
    samevXX: data.samevXX,
    samevXXI: data.samevXXI,
  })

  const [isShowButton, setIsShowButton] = useState({
    samevXX: true,
    samevXXI: true,
  })
  const [photo, setPhoto] = useState({
    samevXX: {
      index: 0,
      isOpen: false,
    },
    samevXXI: {
      index: 0,
      isOpen: false,
    },
  })

  function openPhoto(index, categoria) {
    setPhoto({ ...photo, [categoria]: { index: index, isOpen: true } })
  }

  function updatePhotos(categoria) {
    const newList = {
      ...photoList,
      [categoria]: [...photoList[categoria], ...adicionalData[categoria]],
    }
    setPhotoList(newList)
    setIsShowButton({ ...isShowButton, [categoria]: false })
  }

  return (
    <S.Wrapper>
      <S.GlobalStyles />
      <S.Container>
        {photo.samevXX.isOpen && (
          <Lightbox
            imageCaption={photoList.samevXX[photo.samevXX.index].caption}
            mainSrc={photoList.samevXX[photo.samevXX.index].image}
            nextSrc={
              photoList.samevXX[
                (photo.samevXX.index + 1) % photoList.samevXX.length
              ].image
            }
            prevSrc={
              photoList.samevXX[
                (photo.samevXX.index + photoList.samevXX.length - 1) %
                  photoList.samevXX.length
              ].image
            }
            onCloseRequest={() =>
              setPhoto({ ...photo, samevXX: { ...photo, isOpen: false } })
            }
            onMovePrevRequest={() =>
              setPhoto({
                ...photo,
                samevXX: {
                  ...photo.samevXX,
                  index:
                    (photo.samevXX.index + photoList.samevXX.length - 1) %
                    photoList.samevXX.length,
                },
              })
            }
            onMoveNextRequest={() =>
              setPhoto({
                ...photo,
                samevXX: {
                  ...photo.samevXX,
                  index: (photo.samevXX.index + 1) % photoList.samevXX.length,
                },
              })
            }
          />
        )}
        {photo.samevXXI.isOpen && (
          <Lightbox
            imageCaption={photoList.samevXXI[photo.samevXXI.index].caption}
            mainSrc={photoList.samevXXI[photo.samevXXI.index].image}
            nextSrc={
              photoList.samevXXI[
                (photo.samevXXI.index + 1) % photoList.samevXXI.length
              ].image
            }
            prevSrc={
              photoList.samevXXI[
                (photo.samevXXI.index + photoList.samevXXI.length - 1) %
                  photoList.samevXXI.length
              ].image
            }
            onCloseRequest={() =>
              setPhoto({ ...photo, samevXXI: { ...photo, isOpen: false } })
            }
            onMovePrevRequest={() =>
              setPhoto({
                ...photo,
                samevXXI: {
                  ...photo.samevXXI,
                  index:
                    (photo.samevXXI.index + photoList.samevXXI.length - 1) %
                    photoList.samevXXI.length,
                },
              })
            }
            onMoveNextRequest={() =>
              setPhoto({
                ...photo,
                samevXXI: {
                  ...photo.samevXXI,
                  index: (photo.samevXXI.index + 1) % photoList.samevXXI.length,
                },
              })
            }
          />
        )}
        <S.Title>Eventos anteriores</S.Title>
        <S.Subtitle>XXI SAMEV</S.Subtitle>
        <S.CardsContainer>
          {photoList.samevXXI.map((el, index) => {
            return (
              <S.Thumb
                onClick={() => openPhoto(index, "samevXXI")}
                key={`${Math.random()}-${el.caption}`}
              >
                <S.CardImage path={el.image} />
              </S.Thumb>
            )
          })}
        </S.CardsContainer>
        {isShowButton.samevXXI && (
          <S.ButtonContainer>
            <S.Button onClick={() => updatePhotos("samevXXI")}>
              Veja mais
            </S.Button>
          </S.ButtonContainer>
        )}
        <S.Subtitle>XX SAMEV</S.Subtitle>
        <S.CardsContainer>
          {photoList.samevXX.map((el, index) => {
            return (
              <S.Thumb
                onClick={() => openPhoto(index, "samevXX")}
                key={`${Math.random()}-${el.caption}`}
              >
                <S.CardImage path={el.image} />
              </S.Thumb>
            )
          })}
        </S.CardsContainer>
        {isShowButton.samevXX && (
          <S.ButtonContainer>
            <S.Button onClick={() => updatePhotos("samevXX")}>
              Veja mais
            </S.Button>
          </S.ButtonContainer>
        )}
      </S.Container>
    </S.Wrapper>
  )
}

export default Galeria
