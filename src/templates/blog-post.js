import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const image = post.frontmatter.image

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div>
        <article
          className="w-full text-slate-900 blog-post flex flex-col px-5 max-w-4xl dark:text-white"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="mb-3 text-center">
            <h1 className="text-4xl font-bold mb-3" itemProp="headline">
              {post.frontmatter.title}
            </h1>
            <p className="text-xs text-red-500 mb-10">
              {post.frontmatter.date}
            </p>
            {image && (
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                className="w-full object-cover mb-6 md:h-72"
                alt={post.frontmatter.title}
              />
            )}
          </header>
          <section
            className="blog-post-content text-xl pb-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </article>
        <nav className="blog-post-nav px-5 mt-20">
          <ul className="flex flex-col gap-6 items-center mb-20 md:flex-row md:justify-around">
            <li>
              {previous && (
                <Link
                  className="text-xl text-amber-800"
                  to={previous.fields.slug}
                  rel="prev"
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link
                  className="text-xl text-amber-800"
                  to={next.fields.slug}
                  rel="next"
                >
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              transformOptions: { fit: COVER }
              layout: CONSTRAINED
            )
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
