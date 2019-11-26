import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"

const Header = ({ title, description }) => (
  <div className="bg-blue text-white py-16">
    <div className="container">
      <Nav></Nav>
      <h1 className="text-40 font-bold pt-8">{title}</h1>
      <p className="pt-2 text-20 font-light">{description}</p>
    </div>
  </div>
)
export default Header
