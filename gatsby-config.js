const siteMetadata = {
	title: `My first blog with gatsby`,
	description: `This is my coding blog where I write about my coding journey.`,
	image: `/image.jpeg`,
	siteUrl: `https://mygatsbyblog-ya.netlify.com/`,
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
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					}
				],
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					}
				]
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: { path: `${__dirname}/posts`, name: `posts` }
		},
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
