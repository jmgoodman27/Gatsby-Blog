import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import styled from "@emotion/styled"

const Header = ({ title, description }) => (
  <div className="bg-blue text-white py-8">
    <div className="container">
      <Nav></Nav>
      <h1 className="text-30">{title}</h1>
      <p className="pt-2 text-20 font-light">{description}</p>
    </div>
  </div>
)
export default Header
