import React from 'react'
//
import { Layout } from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { ImageBanner } from '../styles'

export default () => {
	const data = useStaticQuery(graphql`
		query GET_IMAGE {
			image: file(relativePath: { eq: "banner.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<>
			<Layout>
				<div>
					<h1 style={{ fontSize: '50px', width: '50%', padding: '20px' }}>
						This is page 2
					</h1>
					<ImageBanner fluid={data.image.childImageSharp.fluid} />
				</div>
			</Layout>
		</>
	)
}
