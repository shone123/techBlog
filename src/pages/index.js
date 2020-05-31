import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from 'gatsby'; 
import PropTypes from "prop-types"
import {Card} from 'react-bootstrap';
import Layout from "../components/layout";
import SideBar from "../components/sidebar/SideBar";
import SEO from "../components/seo"
import './index.scss'
import "../styles/layout-overide.scss";
import "../styles/_footer.scss";

const IndexPage = (props) => {  
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              path
            }
          }
        }
      }
    }
  `)
  
  const emptyQuery = ""
  const allPosts = data.allMarkdownRemark.edges

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })
  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props
    console.log(data);
    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { title } = post.node.frontmatter
      return (        
        title.toLowerCase().includes(query.toLowerCase()) 
      )
    })
    setState({
      query,
      filteredData,
    })
  }
  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts
    return(
    <>  
      <div className="blog-posts">
        <Layout/> 
        <SEO title="Home" /> 
        <div class="card search-bar">
            <div class="card-body">
              <div class="input-group">
                <input type="text" class="form-control" onChange={handleInputChange} placeholder="Search for..."/>
              </div>
            </div>
          </div>
            <div className="side-content col-md-8">
              {
                posts.filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                  return (
                    <div className="content">
                        <Card className="mt">
                          <Card.Header>{post.frontmatter.title}</Card.Header>
                            <Card.Body>
                            <Card.Title>{post.frontmatter.date}</Card.Title>
                              <Card.Text>
                                    {post.excerpt}
                              </Card.Text>
                              <Link to={post.frontmatter.path} className="btn btn-outline-primary float-right">Read More</Link>
                            </Card.Body>
                        </Card>
                    </div>    
                );
            })}
        </div>
        <div className="side col-md-4">
            <SideBar/>            
        </div>        
        <footer className="footer">
            © {new Date().getFullYear()}, techblog
              {` `}
        </footer>
    </div>  
  </>      
  )
}
IndexPage.propTypes = {
  props: PropTypes.node.isRequired,
}
export default IndexPage
