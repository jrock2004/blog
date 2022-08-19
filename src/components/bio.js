import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          social {
            github
            linkedin
            twitter
          }
        }
      }
    }
  `)

  const social = data.site.siteMetadata?.social

  if (!social) {
    return <></>
  } else {
    return (
      <div className="flex flex-col gap-5">
        <a href={`https://github.com/${social.github || ``}`}>Github</a>
        <a href={`https://linkedin.com/in/${social.linkedin || ``}`}>
          LinkedIn
        </a>
        <a href={`https://twitter.com/${social.twitter || ``}`}>Twitter</a>
      </div>
    )
  }
}

export default Bio
