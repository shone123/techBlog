import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'; 
import PropTypes from "prop-types"
import {Card, Button} from 'react-bootstrap';
import Layout from "../components/layout";
import SideBar from "../components/sidebar/SideBar";
import Link from "gatsby-link";
import './index.scss'
import "../styles/layout-overide.scss";
import "../styles/_footer.scss";

const IndexPage = ({children}) => {  
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
  const { edges: posts } = data.allMarkdownRemark;
      return(
        <div className="blog-posts">
        <Layout/>  
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
            <div className="side">
                <SideBar/>            
            </div>

            <footer className="footer">
            © {new Date().getFullYear()}, techblog
            {` `}
            </footer>
        </div>    
  )
}

IndexPage.propTypes = {
  children: PropTypes.node.isRequired,
}
export default IndexPage

