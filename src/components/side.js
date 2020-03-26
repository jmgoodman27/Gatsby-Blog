import React from "react"
import profileImg from "../images/profile_image.jpg"
import { css } from 'linaria';

const imageStyle = css`
  max-width: 8rem;
  padding-top: 20px;
`


const Side = ({ className }) => (
  <div className={className}>
    <h2 className="text-35 font-bold pb-4">About Me</h2>
    <p>
      I've been building websites professionally for over 8 years now, and have
      worked with countless businesses of all sizes, mainly in the ecommerce space. 
      <br /><br />
      I've now been focusing on the Shopify platform, building custom storefront experiences with Shopify's Slate, Vue, GraphQL, and more.  
      <br /><br />
      I'm excited about the future of headless commerce and the improvements it'll bring to both user and developer experiences.
      <br />
    </p>
    <img alt="Profile" className={imageStyle} src={profileImg} />
  </div>
)
export default Side
