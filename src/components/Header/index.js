import React from 'react'
import { Link } from 'gatsby'
import { StyledH1 } from './styles'

export const Header = ({ siteTitle, siteDescription }) => {
	return (
		<>
			<Link to="/">
				<StyledH1>{siteTitle}</StyledH1>
				<p>{siteDescription}</p>
			</Link>
			<button>Change mode</button>
		</>
	)
}
