import React from 'react'
import SEO from 'react-seo-component'
import { Header } from '../Header'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { GlobalStyle } from '../../styles/config'
import { Container } from '../Container'
import { StyledMain } from './styles'

export const Layout = ({ titlePage, children }) => {
	const {
		description,
		title,
		image,
		siteUrl,
		siteLanguage,
		siteLocale
	} = useSiteMetadata()

	return (
		<>
			<SEO
				titleTemplate={title}
				title={titlePage || title}
				description={description || 'Blog amazing'}
				image={`${siteUrl}/${image}` || ''}
				pathname={siteUrl || ''}
				siteLanguage={siteLanguage || 'en'}
				siteLocale={siteLocale || 'en'}
			/>
			<GlobalStyle />
			<Header siteTitle={title} siteDescription={description} />
			<StyledMain>
				<Container>{children}</Container>
			</StyledMain>
		</>
	)
}
