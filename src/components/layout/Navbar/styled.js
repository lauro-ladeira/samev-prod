import styled, { css } from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const NavbarWrapper = styled.div`
  align-items: center;
  background-color: #0C525E;
  display: flex;
  height: 100px;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1;

  ${media.greaterThan("804px")`

  background-color: transparent;

  ${props =>
    props.scroll > 0 &&
    props.scroll < 200 &&
    css`
      background-color: rgba(12, 82, 94, ${props.scroll * (1 / 400)});
      box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
      height: calc(100px - ${props.scroll * (40 / 200)}px);
    `}

  ${props =>
    props.scroll >= 200 &&
    css`
      background-color: rgba(12, 82, 94, 1);
      box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
      height: 60px;
    `}
  `}
`
export const NavbarContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 75%;
  z-index: 1;

  ${media.lessThan("large")`
    width: 85%;
  `}
`
export const LogoContainer = styled.div`
  width: 10%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const MenuContainer = styled.ul`
  ${media.lessThan("804px")`
    align-items: center;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
    justify-content: space-around;
    left: 100%;
    /* margin: 0 25%; */
    position: fixed;
    top: 80px;

    /**coloquei 1.3s tava .3 */
    /* transition: ease-out left .7s; */
    transition: left 1.1s cubic-bezier(0.19, 1, 0.22, 1);
    
    width: 100%;
    z-index: 99;

    ${props =>
      props.active === "activeMenu" &&
      css`
        left: 0;
      `}
  `}
`

export const MenuItem = styled.li`
  display: inline-block;

  ${media.lessThan("804px")`
    display: block;
    width: 90%;
  `}
`

export const MenuLink = styled(Link)`
  color: #fff;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  padding: 10px 20px;

  &:active,
  &:hover {
    color: #85F0A5;
  }

  ${media.lessThan("804px")`
    display: block;
    color: #0C525E;
    border-bottom: 1px solid #ddd;
    font-size: 20px;
    padding: 6% 20px;

    &:hover, &.active {
      font-weight: bold;
  `}
`
export const Circle = styled.div`
  display: none;
  ${media.lessThan("804px")`
  display: block;
  position: fixed;
  top: 25px;
  right: calc(7.5% + 19px);
  background-color: #fff;
  height: 50px;
  width: 50px;
  border-radius: 50%;

  transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);

  box-shadow: 0 0 0 0 #FFF, 0 0 0 0 #FFF;

  ${props =>
    props.active === "activeMenu" &&
    css`
      /* box-shadow: 0 0 0 130vw rgba(9, 7, 97, 0.8); */
      /* transition: border-radius 0.7s, height 0.5s, left 0.5s,
        box-shadow 0.6s cubic-bezier(0.19, 1, 0.22, 1); */
      box-shadow: 0 0 0 130vw #fff, 0 0 0 130vh #fff;
      /* border-radius: 0%; */

      /* height: 100vh; */
      /* height: 100vh;
      left: 0;
      margin: 0 25%;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 9; */
    `}
  `}
`
export const Burger = styled.div`
  display: none;
  margin: 26px;
  cursor: pointer;

  ${media.lessThan("804px")`
    display: block;
    z-index: 99;
  `}
`

export const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #0C525E;
  transition: all .3s ease;

  ${props =>
    props.active === "activeLine1" &&
    css`
      transform: rotate(-45deg) translate(-5px, 6px);
    `}

  ${props =>
    props.active === "activeLine2" &&
    css`
      opacity: 0;
    `}

  ${props =>
    props.active === "activeLine3" &&
    css`
      transform: rotate(45deg) translate(-5px, -6px);
    `}
`
