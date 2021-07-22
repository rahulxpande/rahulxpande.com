import React from 'react'
import Link from 'gatsby-link'
import GatsbyLink from 'gatsby-link'
import './Header.css'



const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/Rahul Pande">Rahul Pande</Link>
      <Link to="/Work">Work</Link>
      <Link to="/About">About</Link>
      <Link to="/Connect">Connect</Link>
    </div>
</div>

  
)

export default Header
