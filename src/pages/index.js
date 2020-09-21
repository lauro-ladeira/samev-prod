import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from '../components/inicio/Header'
import Sobre from '../components/inicio/Sobre'
import Apoio from '../components/inicio/Apoio'
import Palestrantes from "../components/inicio/Carousel/CarouselTest"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Sobre />
    <Palestrantes />
    <Apoio />
  </Layout>
)

export default IndexPage
