/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex gap-6 mb-6 border-b pb-4 items-center">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/mimoji-laptop.png"
        width={80}
        height={80}
        quality={95}
        alt="John Costanzo mimoji holding a laptop"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a
            className="text-teal-600 hover:text-teal-500"
            href={`https://twitter.com/${social?.twitter || ``}`}
          >
            You should follow them on Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
