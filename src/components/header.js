import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components/macro'
import tw from 'tailwind.macro'
import Nav from "./nav"

const Header = ({ title, description }) => (
  <div css={tw`bg-blue text-white container`}>
    <Nav></Nav>
    <h1 css={tw`text-30`}>{title}</h1>
    <p css={tw`pt-2 text-20 font-light`} class="pad-t-sm fs-sm light">
      {description}
    </p>
  </div>
)
export default Header
