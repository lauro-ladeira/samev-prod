import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/a-samev/Header"
import ProgramacaoEvento from "../components/programacao/ProgramacaoEvento"

const ProgramacaoPage = () => {
  return (
    <Layout>
      <SEO title="Programação" />
      <Header title="Programação" />
      <ProgramacaoEvento />
    </Layout>
  )
}
export default ProgramacaoPage
