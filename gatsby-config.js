const siteMetadata = {
	title: `Starter styled components`,
	description: `Made with 🖤 for a better web`,
	image: `/image.png`,
	siteUrl: `https://starter-landing-styled.netlify.com/`,
	siteLanguage: `en`,
	siteLocale: `en`,
	author: `@yandre`
}

module.exports = {
	siteMetadata,
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-styled-components-dark-mode`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: { path: `${__dirname}/src/images/`, name: `images` }
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Ubuntu`, `Rancho`],
				display: 'swap'
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Starter page template',
				short_name: 'starter-page',
				start_url: '/',
				background_color: '#FCFDFE',
				theme_color: '#212353',
				display: 'minimal-ui',
				icon: 'src/images/logo.png'
			}
		},
		`gatsby-plugin-offline`
	]
}
