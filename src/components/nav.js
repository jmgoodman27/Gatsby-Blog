import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components/macro'
import tw from 'tailwind.macro'

const Nav = ({ siteTitle }) => (
  <header css={tw`flex items-center`}>
    <Link to="/" css={tw`pr-4`}>Home</Link>
    <Link to="/blog">Blog</Link>
  </header>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: `test`,
}

export default Nav
