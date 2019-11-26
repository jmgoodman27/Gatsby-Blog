import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import linkedin from "../images/linked-in.png"

const Nav = ({ siteTitle }) => (
  <header className="flex items-center text-18">
    <Link to="/" activeClassName="font-bold" className="pr-6">
      Home
    </Link>
    <Link to="/blog" activeClassName="font-bold" className="pr-6">
      Blog
    </Link>
    <a href="https://www.linkedin.com/in/jakemgoodman/">
      <img alt="Linked In" className="w-6" src={linkedin} />
    </a>
  </header>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: `test`,
}

export default Nav
