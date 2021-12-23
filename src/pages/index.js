import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <ExampleButton>click me</ExampleButton>
    </Layout>
  )
}
