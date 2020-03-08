import React from 'react'
import SEO from 'react-seo-component'
import { Header } from '../Header'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { StyledMain } from './styles'

export const Layout = ({ children }) => {
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
				title={title || 'Blog'}
				description={description || 'Blog amazing'}
				image={`${siteUrl}/${image}` || ''}
				pathname={siteUrl || ''}
				siteLanguage={siteLanguage || 'en'}
				siteLocale={siteLocale || 'en'}
			/>
			<StyledMain>
				<Header siteTitle={title} siteDescription={description} />
				{children}
			</StyledMain>
		</>
	)
}
