import React from 'react'
//
import { Layout } from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { ImageBanner, Image, StyledLinkLogo } from '../styles'

export default ({ data }) => {
	return (
		<>
			<Layout>
				<div>
					<h1 style={{ fontSize: '50px', width: '50%', padding: '20px' }}>
						Save your data storage here
					</h1>
					<ImageBanner fluid={data.image.childImageSharp.fluid} />
					{data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
						<div key={id}>
							<StyledLinkLogo to={fields.slug}>
								{!!frontmatter.cover ? (
									<Image fluid={frontmatter.cover.childImageSharp.fluid} />
								) : null}
								<h1>{frontmatter.title}</h1>
								<p>{frontmatter.date}</p>
								<p>{excerpt}</p>
							</StyledLinkLogo>
						</div>
					))}
				</div>
			</Layout>
		</>
	)
}

export const query = graphql`
	query SITE_INDEX_QUERY {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { published: { eq: true } } }
		) {
			nodes {
				id
				excerpt(pruneLength: 250)
				frontmatter {
					title
					date(formatString: "YYYY MMMM Do")
					cover {
						publicURL
						childImageSharp {
							fluid(maxWidth: 1000) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				fields {
					slug
				}
			}
		}
		image: file(relativePath: { eq: "banner.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
