import React from "react"
import { graphql } from "gatsby"
import { styled }from "linaria/react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Prism from "prismjs"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const PostContent = styled.div`
    padding: 60px;
    max-width: 1000px;
    font-size: 18px;
    margin: 0 auto;
    p, li {
      padding: 20px 0;
      line-height: 2.5;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      font-weight: bold;
      padding-top: 40px;
      font-size: 20px;
    }

    li {
      padding: 0px;
      list-style-type: disc;
      margin-left: 20px;
    }
  `

  return (
    <Layout>
      <div className="bg-blue py-16">
        <div className="container text-white">
          <div className="py-8 text-center">
            <Link to="/blog"> &larr; Back to Blog</Link>
          </div>
          <h1 className="text-45 font-bold text-center">{frontmatter.title}</h1>
          <p className="text-center pt-4 text-18">{frontmatter.date}</p>
        </div>
      </div>
      <PostContent dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
