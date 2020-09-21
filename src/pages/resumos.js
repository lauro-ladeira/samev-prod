import React from "react"
import Layout from "../components/layout"

import Header from "../components/a-samev/Header"
import Resumos from "../components/resumos/Resumos"

const ResumosPage = () => {
  return (
    <Layout>
      <Header title="Resumos" />
      <Resumos />
    </Layout>
  )
}
export default ResumosPage