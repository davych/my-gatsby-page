import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      hi
      {
        data.allMarkdownRemark.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
    nodes {
      frontmatter {
        title
        description
        date(formatString: "MMMM D, YYYY")
        slug
      }
      id
    }
  }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage