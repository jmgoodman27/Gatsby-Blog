import React from "react"
import { Link } from "gatsby"
import PostLink from "../components/post-link"
import { css } from 'linaria';

const gridStyles = css`
  padding-top: 50px;
  padding-bottom: 50px;
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  grid-template-columns: 1fr;
  @screen md {
    grid-template-columns: 1fr 1fr;
  }
`

const Posts = ({
  grid,
  numPosts,
  data: {
    allMarkdownRemark: { edges },
  },
  children,
  className
}) => {
  let Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    if(numPosts) {
      Posts = Posts.slice(0, numPosts);
    }

    let styles = 'container pt-16 md:pt-8 ';
    styles += className;
    if (grid) styles += gridStyles;

    return (
      <div className={styles}>
        { children }
        {Posts}
      </div>
    )
}
export default Posts
