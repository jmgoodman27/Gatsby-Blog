import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

const Blog = () => (
  <Layout>
    <Header title="Blog"></Header>
    <h1>This is my blog on all things web development</h1>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
