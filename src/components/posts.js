import React from "react"
import { Link } from "gatsby"
import PostLink from "../components/post-link"
import { css } from 'linaria';

const gridStyles = css`
@apply py-32;
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
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
}) => {
  let Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    if(numPosts) {
      Posts = Posts.slice(0, numPosts);
    }

    let styles = 'container py-12 ';
    if (grid) styles += gridStyles;

    return (
      <div className={styles}>
        {Posts}
      </div>
    )
}
export default Posts
