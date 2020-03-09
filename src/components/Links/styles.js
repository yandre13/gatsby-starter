import styled from 'styled-components'
import { Toggle } from 'react-toggle-component'
import { Link } from 'gatsby'
import { dark, light } from '../../styles/config'

export const StyledToggle = styled(Toggle)`
	display: inline-block;
	width: 24px;
	height: 24px;
	position: relative;
	top: -1px;
	background-color: transparent;
	background: ${props =>
		props.dark
			? `url('https://upload.wikimedia.org/wikipedia/commons/7/7c/OOjs_UI_icon_moon.svg')`
			: `url('https://simpleicon.com/wp-content/uploads/sun.svg')`};
	background-size: cover;
	transform: rotate(-25deg);
	transition: all ease-in 0.7s;
	& input[type='checkbox'] {
		position: relative;
		margin: 0;
	}
	& input[type='checkbox'] + label {
		background: transparent;
		width: 28px;
		display: inline-block;
		position: relative;
		top: -20px;
		&::before {
			display: none;
		}
		&::after {
			display: none;
		}
	}
	& input[type='checkbox']:checked + label {
		background: transparent;
	}
`

export const StyledLink = styled(Link)`
	color: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
	text-decoration: none;
	line-height: 24px;
`
