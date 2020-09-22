import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/a-samev/Header"
import Resumos from "../components/resumos/Resumos"

const ResumosPage = () => {
  return (
    <Layout>
      <SEO title="Resumos" />
      <Header title="Resumos" />
      <Resumos />
    </Layout>
  )
}
export default ResumosPage
