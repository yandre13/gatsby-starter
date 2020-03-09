import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { dark, light } from './config'

export const Image = styled(Img)`
	width: 100%;
	@media screen and (min-width: 600px) {
		width: 40vw;
	}
`
export const ImageBanner = styled(Img)`
	width: 100%;
	float: right;
	@media screen and (min-width: 600px) {
		width: 40vw;
	}
`
export const StyledLinkLogo = styled(Link)`
	color: ${props =>
		props.theme.isDark ? dark.primaryColor : light.primaryColor};
	font-weight: 400;
	text-decoration: none;
`
