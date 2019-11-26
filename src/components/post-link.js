import React from "react"
import { Link } from "gatsby"
import { styled } from "linaria/react"

const Wrapper = styled.div`
  box-shadow: 0 5px 13px #e7e7e7;
  padding: 45px;
  box-sizing: border-box;
  background-color: #fff;
  color: #000;
  transition: all 0.2s;
  margin-bottom: 20px;
  &:hover {
    transform: translate(0, -3px);
  }
`

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.path}>
    <Wrapper>
      <h3 className="text-22 font-bold">{post.frontmatter.title}</h3>
      <p>{post.frontmatter.date}</p>
      <p className="pt-4">{post.excerpt}</p>
    </Wrapper>
  </Link>
)

export default PostLink
