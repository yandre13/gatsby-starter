import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Layout } from '../components/Layout'
import { StyledLinkLogo } from '../styles'

//Data from Gql query and pageContext from context gatsby-node.js
export default ({ data, pageContext }) => {
	const { frontmatter, body } = data.mdx,
		{ previous, next } = pageContext

	console.log('data', data)
	console.log('page', pageContext)
	return (
		<Layout titlePage={frontmatter.title}>
			<h1>{frontmatter.title}</h1>
			<p>{frontmatter.date}</p>
			<MDXRenderer>{body}</MDXRenderer>
			{previous === false ? null : (
				<>
					{previous && (
						<StyledLinkLogo to={previous.fields.slug}>
							<p>{previous.frontmatter.title}</p>
						</StyledLinkLogo>
					)}
				</>
			)}
			{next === false ? null : (
				<>
					{next && (
						<StyledLinkLogo to={next.fields.slug}>
							<p>{next.frontmatter.title}</p>
						</StyledLinkLogo>
					)}
				</>
			)}
		</Layout>
	)
}

export const query = graphql`
	query POST_BY_SLUG($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date
			}
			body
		}
	}
`
