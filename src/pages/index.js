import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <p>A brand and experience designer based in India. I design identities, websites & mobile apps. I'm currently designing for video at Adobe.</p>
      </div>
    </div>   
    <div className="Cards">
      <h3>All Projects</h3>
      
      <Card 
        title="Project name"
        text="12 sections"
        image={require('../images/1.png')} />
    </div>
  </div>
)



export default IndexPage