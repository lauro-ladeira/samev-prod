import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"

import Navbar from "./Navbar"
import Footer from "./Footer"

import { LayoutMain } from "./styled"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <GlobalStyles />
      <LayoutMain>{children}</LayoutMain>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
