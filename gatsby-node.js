const { createFilePath } = require('gatsby-source-filesystem'),
	path = require('path')

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions,
		blogPostTemplate = path.resolve('src/templates/blogPostTemplate.js')
	return graphql(`
		{
			allMdx {
				nodes {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) throw result.errors
		const posts = result.data.allMdx.nodes
		//create page for each mdx file
		posts.forEach((post, idx) => {
			const previous = idx === post.length - 1 ? null : posts[idx + 1],
				next = idx === 0 ? null : posts[idx - 1]
			createPage({
				path: post.fields.slug,
				component: blogPostTemplate,
				context: {
					slug: post.fields.slug,
					previous,
					next
				}
			})
		})
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions
	if (node.internal.type === 'Mdx') {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: 'slug',
			node,
			value
		})
	}
}
