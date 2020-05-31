import { Link } from "gatsby"
import React from "react"
import { Card, Button } from 'react-bootstrap';
import './Post.scss';

const BlogPost =({title})=> { 
    return(
      <div className="content">
        <Card className="mt">
        <Card.Header>{title}</Card.Header>
            <Card.Body>
            <Card.Title></Card.Title>
              <Card.Text>
              
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
      </div>
  )
}

export default BlogPost
