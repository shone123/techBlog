import React from "react"
import { graphql } from "gatsby"
import Image from "../components/image"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
   
<div class="container">

<div class="row">

  <div class="col-md-8">

    <h1 class="my-4">Page Heading
      <small>Secondary Text</small>
    </h1>

    
    <div class="card mb-4">
    <Image/>
      <div class="card-body">
        <h2 class="card-title">{frontmatter.title}</h2>
        <p class="card-text"><div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      /></p>
        <a href="#" class="btn btn-primary">Read More &rarr;</a>
      </div>
      <div class="card-footer text-muted">
        {frontmatter.date}
        <a href="#">Start Bootstrap</a>
      </div>
    </div>

    <div class="card mb-4">
      <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
      <div class="card-body">
        <h2 class="card-title">{frontmatter.title}</h2>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
        <a href="#" class="btn btn-primary">Read More &rarr;</a>
      </div>
      <div class="card-footer text-muted">
        Posted on January 1, 2017 by
        <a href="#">Start Bootstrap</a>
      </div>
    </div>

    <div class="card mb-4">
      <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
      <div class="card-body">
        <h2 class="card-title">Post Title</h2>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
        <a href="#" class="btn btn-primary">Read More &rarr;</a>
      </div>
      <div class="card-footer text-muted">
        Posted on January 1, 2017 by
        <a href="#">Start Bootstrap</a>
      </div>
    </div>

    
    <ul class="pagination justify-content-center mb-4">
      <li class="page-item">
        <a class="page-link" href="#">&larr; Older</a>
      </li>
      <li class="page-item disabled">
        <a class="page-link" href="#">Newer &rarr;</a>
      </li>
    </ul>

  </div>
  </div>
  </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`