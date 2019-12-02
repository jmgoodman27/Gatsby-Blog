import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Side from "../components/side"
import Posts from "../components/posts"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header
        title="Hi, I'm Jake"
        description={
          <>
            I build websites on the{" "}
            <span className="font-bold">Shopify Plus platform</span>, helping
            premier ecommerce agencies deliver amazing results for their
            clients.
          </>
        }
      ></Header>

      <div>
        <div className="container md:flex py-8">
          <Side className="pt-8 md:w-1/3 md:pr-8"></Side>
          <Posts className="md:w-2/3" data={data} numPosts="5">
            <div className="pb-8">
              <h2 className="text-35 font-bold pb-2">Blog</h2>
              <p>
                Read about my projects, skills, tools, and preferences on all
                things web development.
              </p>
            </div>
          </Posts>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

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
