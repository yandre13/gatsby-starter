import React from 'react'
import { StyledLink as Link } from './styles'
import { StyledToggle } from './styles'

export const Links = ({ dark, setDark, themeContext }) => {
	return (
		<>
			<li>
				<Link to="/about-us">About us</Link>
			</li>
			<li>
				<Link to="/page-2">About us</Link>
			</li>
			<li>
				<StyledToggle
					dark={dark}
					name="toggle-switch"
					onToggle={() => {
						setDark(themeContext.isDark)
						themeContext.toggleDark()
					}}
				/>
			</li>
		</>
	)
}
