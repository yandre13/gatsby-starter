const { createFilePath } = require('gatsby-source-filesystem'),
	path = require('path')

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions, //Creates pages
		blogPostTemplate = path.resolve('src/templates/blogPostTemplate.js') //template
	//query gql
	const result = await graphql(`
		{
			allMdx {
				edges {
					node {
						frontmatter {
							title
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)
	if (result.errors) throw result.errors
	//getting posts
	const posts = result.data.allMdx.edges.map(({ node }) => node)
	//create page for each mdx file
	posts.forEach((post, idx) => {
		//console.log(post)
		const previous = idx === post.length - 1 ? null : posts[idx + 1],
			next = idx === 0 ? null : posts[idx - 1]
		//
		createPage({
			path: post.fields.slug,
			component: blogPostTemplate, //Template
			//Data passed to context is available in page queries as Gql variables
			context: {
				slug: post.fields.slug,
				previous,
				next
			}
		})
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions //Creates a node
	if (node.internal.type === 'Mdx') {
		const value = createFilePath({ node, getNode }) //Creates a file path (slug)
		//Creates (a field: fields in Gql), aditionals fields in these nodes(So adding a name and value)
		createNodeField({
			name: `slug`,
			node,
			value
		})
	}
}
