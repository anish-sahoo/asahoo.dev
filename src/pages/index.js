import * as React from "react"
import Layout from "./layout"

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <title>Anish's Portfolio</title>
        <h1>Anish's Portfolio</h1>
        <p>Welcome to my portfolio!</p>
      </Layout>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Anish's Portfolio</title>
