import React from 'react'
import SEO from '../SEO'
import { Header } from '../Header'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { GlobalStyle } from '../../styles/config'
import { Container } from '../Container/styles.js'
import { StyledMain } from './styles'

if (typeof window !== 'undefined') {
	// eslint-disable-next-line global-require
	require('smooth-scroll')('a[href*="#"]')
}

export const Layout = ({ children }) => {
	const {
		title,
		description,
		author,
		siteLanguage,
		siteUrl,
		image
	} = useSiteMetadata()

	return (
		<>
			<SEO
				title={title}
				description={description}
				author={author}
				lang={siteLanguage}
				siteUrl={siteUrl}
				image={image}
			/>
			<GlobalStyle />
			<Header />
			<StyledMain>
				<Container>{children}</Container>
			</StyledMain>
		</>
	)
}
