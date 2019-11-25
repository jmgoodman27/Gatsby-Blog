import React from "react"
import { graphql } from "gatsby"
import styled from '@emotion/styled'
import { Link } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const PostContent = styled.div`
    p {
      padding: 10px;
    }
  `

  return (
    <div className="p-16">
      <Link to="/blog">Back to Blog</Link>
      <h1 className="text-45 font-bold text-center">{frontmatter.title}</h1>
      <h2 class="text-center">{frontmatter.date}</h2>
      <PostContent
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
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