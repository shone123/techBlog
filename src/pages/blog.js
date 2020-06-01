import React from 'react'
import BlogRoll from '../components/BlogRoll'
import './blog.scss';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Latest Posts</h1>
        {/* all latest posts */}
        <section>
          <div className="content">
            <BlogRoll /> 
          </div>
        </section>
      </React.Fragment>
    )
  }
}