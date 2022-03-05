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
      <Seo title="All posts" />
      <Bio />
      <ol className="list-none flex flex-col gap-12">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const tags = post.frontmatter.tags
          const image = post.frontmatter.image

          return (
            <li key={post.fields.slug}>
              <article
                className="flex"
                itemScope
                itemType="http://schema.org/Article"
              >
                {image && (
                  <Img
                    fluid={image.childImageSharp.fluid}
                    className="w-80 object-cover mr-8"
                    alt={title}
                  />
                )}
                <div>
                  <div className="flex text-gray-400 text-sm mb-1">
                    <span>{post.frontmatter.date}</span>
                    <span className="px-1">-</span>
                    {tags && tags.length > 0 && (
                      <div className="tags">
                        {tags.map((tag, index) => (
                          <>
                            {index > 0 && <span className="px-1">/</span>}
                            <Link
                              key={tag}
                              className="text-slate-400"
                              to={`/tags/${tag}/`}
                            >
                              {tag}
                            </Link>
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-teal-500 mb-3">
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                  </div>
                  <div className="mb-6">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </div>
                  <div>
                    <Link
                      className="bg-teal-500 text-white p-2"
                      to={post.fields.slug}
                      itemProp="url"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )

          // return (
          //   <li key={post.fields.slug}>
          //     <article
          //       className="post-list-item"
          //       itemScope
          //       itemType="http://schema.org/Article"
          //     >
          //       <header>
          //         <h2>
          //           <Link to={post.fields.slug} itemProp="url">
          //             <span itemProp="headline">{title}</span>
          //           </Link>
          //         </h2>
          //         <small>{post.frontmatter.date}</small>
          //         {tags && tags.length > 0 && (
          //           <div className="tags">
          //             {tags.map(tag => (
          //               <Link key={tag} to={`/tags/${tag}/`}>
          //                 {tag}
          //               </Link>
          //             ))}
          //           </div>
          //         )}
          //       </header>
          //       <section>
          //         {image && (
          //           <Img
          //             fluid={image.childImageSharp.fluid}
          //             className={
          //               image.childImageSharp.fluid.aspectRatio > 1
          //                 ? "wide"
          //                 : ""
          //             }
          //             alt={title}
          //           />
          //         )}
          //         <p
          //           dangerouslySetInnerHTML={{
          //             __html: post.frontmatter.description || post.excerpt,
          //           }}
          //           itemProp="description"
          //         />
          //       </section>
          //     </article>
          //   </li>
          // )
        })}
      </ol>
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
