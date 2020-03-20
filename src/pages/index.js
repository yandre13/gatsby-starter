import React from 'react'
//
import { Layout } from '../components/Layout'
import { graphql } from 'gatsby'
import { OverContainer, Separator } from '../styles'

import { Slider } from '../components/Swiper'

import Section01 from '../content/Section01'
import Section02 from '../content/Section02'
import Section03 from '../content/Section03'
import Section04 from '../content/Section04'
import { Footer } from '../components/Footer'

export default ({ data }) => {
	return (
		<>
			<Layout>
				{/*Section 1*/}
				<Section01 data={data} />
				<OverContainer>
					{/*Section 2*/}
					<Section02 data={data} />
					{/*Section 3*/}
					<Section03 />
					{/*Section 4*/}
					<Section04 data={data} />
					{/*Section 5*/}
					<Slider />
				</OverContainer>
				<Separator mt={100} mb={100} mmt={50} mmb={50} />
				<Footer />
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
		banner: file(relativePath: { eq: "banner.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		img2: file(relativePath: { eq: "img2.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		img_c01: file(relativePath: { eq: "img_c01.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		img_c02: file(relativePath: { eq: "img_c02.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		img_c03: file(relativePath: { eq: "img_c03.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		img_c04: file(relativePath: { eq: "img_c04.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
