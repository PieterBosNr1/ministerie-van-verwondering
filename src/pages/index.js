import React from 'react'
import { Link, graphql } from 'gatsby'
import {} from 'gatsby'


import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = (props) => {
  
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <ul>
        {props.data.allMarkdownRemark.edges.map((item) => (
         <li><Link to={item.node.frontmatter.path}>{item.node.frontmatter.title}</Link></li>
        ))}
      </ul>
      
    </Layout>
    )
}
 


export const query = graphql`
query HomepageQuery {
  allMarkdownRemark{
    edges{
      node{
        frontmatter{
          title
          date
        	path
        }
      }
    }
  }
}
`

export default IndexPage
