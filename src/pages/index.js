import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div className="w-full px-5 box-border md:max-w-3xl">
        <Seo title="All posts" />
        {/* <Bio /> */}
        <ol className="list-none flex flex-col gap-9 box-border">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const tags = post.frontmatter.tags
            const image = post.frontmatter.image

            return (
              <li
                key={post.fields.slug}
                className="border-b border-b-red-300 pb-10"
              >
                <article
                  className="flex flex-col box-border w-full md:flex-row"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  {image && (
                    <Img
                      fluid={image.childImageSharp.fluid}
                      className="w-full object-cover mb-4 mr-8 md:w-80 md:mb-0"
                      alt={title}
                    />
                  )}
                  <div>
                    <div className="flex text-gray-400 text-sm mb-1">
                      <span>{post.frontmatter.date}</span>
                      <span className="px-1">-</span>
                      {tags && tags.length > 0 && (
                        <div className="flex flex-row tags">
                          {tags.map((tag, index) => (
                            <div key={tag}>
                              {index > 0 && <span className="px-1">/</span>}
                              <Link
                                className="text-slate-400"
                                to={`/tags/${tag}/`}
                              >
                                {tag}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div>
                      <h2 className="text-4xl font-semibold text-red-700 mb-3">
                        <Link
                          className="hover:underline hover:drop-shadow"
                          to={post.fields.slug}
                          itemProp="url"
                        >
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                    </div>
                    <div className="w-full">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          image {
            childImageSharp {
              fluid(fit: COVER, maxWidth: 800) {
                aspectRatio
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
