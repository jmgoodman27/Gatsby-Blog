import React from "react"

const Footer = () => {

  return (
    <footer className="bg-blue text-white">
    <div className="container py-8">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
  )
}

export default Footer
