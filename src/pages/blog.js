import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Posts from "../components/posts"

const Blog = ({ data }) => (
  <Layout>
    <Header title="Blog"></Header>
    <Posts data={data} grid></Posts>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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