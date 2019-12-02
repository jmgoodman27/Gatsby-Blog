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
      worked with countless businesses and creatives. <br />
      <br />
      I've now been focusing on the Shopify platform, and have worked with
      over a dozen different shops doing everything from custom development to
      consulting.
      <br />
      <br />
    </p>
    <p>
      If you're in need of a Shopify developer, shoot me an email at
      jmgoodman27@gmail.com to get in touch!
      <br />
    </p>
    <img alt="Profile" className={imageStyle} src={profileImg} />
  </div>
)
export default Side
