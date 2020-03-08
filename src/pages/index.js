import React from 'react'
//
import { Layout } from '../components/Layout'

import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { PostWrapper, IndexWrapper } from '../styles'
import styled from 'styled-components'

const Image = styled(Img)`
	border-radius: 5px;
`

export default ({ data }) => {
	return (
		<>
			<Layout>
				<IndexWrapper>
					{data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
						<PostWrapper key={id}>
							<Link to={fields.slug}>
								{!!frontmatter.cover ? (
									<Image fluid={frontmatter.cover.childImageSharp.fluid} />
								) : null}
								<h1>{frontmatter.title}</h1>
								<p>{frontmatter.date}</p>
								<p>{excerpt}</p>
							</Link>
						</PostWrapper>
					))}
				</IndexWrapper>
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
	}
`
