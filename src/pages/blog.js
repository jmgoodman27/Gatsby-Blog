import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Posts from "../components/posts"

const Blog = ({ data }) => (
  <Layout>
    <Header title="Blog" description="Read about my projects, skills, tools, and preferences on all things web development."></Header>
    <Posts data={data} grid></Posts>
  </Layout>
)

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`