const siteMetadata = {
	title: `My first blog with gatsby`,
	description: `This is my coding blog where I write about my coding journey.`,
	image: `/image.jpeg`,
	siteUrl: `https://my-blog-with-gatsby.com`,
	siteLanguage: `en`,
	siteLocale: `en`,
	authorName: `yandre`
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
		{
			resolve: `gatsby-source-filesystem`,
			options: { path: `${__dirname}/posts`, name: `posts` }
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: { path: `${__dirname}/src/images/`, name: `images` }
		}
	]
}
