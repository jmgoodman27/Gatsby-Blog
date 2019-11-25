import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = ({ siteTitle }) => (
  <header className="flex items-center">
    <Link to="/" className="pr-4">Home</Link>
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
