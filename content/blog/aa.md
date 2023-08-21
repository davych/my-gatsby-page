---
title: Another Post
date: 2021-07-24
description: A post about something cool
slug: another-post
---
Here's another post! It's even better than the first one!

```javascript
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.title}>
      <p>{data.markdownRemark.frontmatter.date}</p>
      {/* <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      /> */}
      {/* html */}
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
  `

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export default BlogPost
```