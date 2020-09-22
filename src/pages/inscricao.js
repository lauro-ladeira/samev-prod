import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/a-samev/Header"
import Inscricao from "../components/inscricao/Inscricao"

const InscricaoPage = () => {
  return (
    <Layout>
      <SEO title="Inscrição" />
      <Header title="Inscrição" />
      <Inscricao />
    </Layout>
  )
}
export default InscricaoPage