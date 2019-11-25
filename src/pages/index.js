import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Side from "../components/side"
import Posts from "../components/posts"

import styled from "styled-components/macro"
import tw from "tailwind.macro"

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
      <Header
        title="Hi, I'm Jake"
        description={
          <>
            I build websites on the{" "}
            <span css={tw`font-bold`}>Shopify Plus platform</span>, helping
            premier ecommerce agencies deliver amazing results for their
            clients.
          </>
        }
      ></Header>

      <div>
        <div className="container md:flex py-8">
          <Side className="pad-b-lg md:w-1/3 pr-8"></Side>
          <Posts className="md:w-2/3" data={data} numPosts="5">
            <h2 className="text-30 font-bold">Blog</h2>
            <p>
              Read about my projects, skills, tools, and preferences on all things web
              development.
            </p>
          </Posts>
        </div>
      </div>

      <Link to="/blog">Blog</Link>
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
