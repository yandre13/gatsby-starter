import styled, { css } from 'styled-components'
import { Github } from '@styled-icons/evaicons-solid/Github'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { MessageSquare } from '@styled-icons/evaicons-solid/MessageSquare'
import { dark, light } from '../../styles/config'

export const ContainerFlex = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	padding: 20px 0 0 0;
	& a:first-of-type {
		margin-bottom: 20px;
	}
	@media screen and (min-width: 520px) {
		align-items: center;
		flex-direction: row;
		justify-content: space-evenly;
		& a:first-of-type {
			margin-bottom: 0;
		}
	}
	@media screen and (min-width: 768px) {
		align-items: center;
		flex-direction: row;
		justify-content: flex-end;
	}
`

export const Icon = styled.div`
	width: 50px;
	height: 50px;
	cursor: pointer;
	&:hover {
		box-shadow: 0 0 20px
			${props => (props.theme.isDark ? dark.buttonColor : light.buttonColor)};
	}
	background: ${props => (props.theme.isDark ? '#373737' : '#b7b5bd')};
	${props =>
		props.secondary &&
		css`
			box-shadow: 0 0 20px
				${props =>
					props.theme.isDark ? dark.secondaryColor : light.secondaryColor};
			background: ${props =>
				props.theme.isDark ? dark.secondaryColor : light.secondaryColor};
			&:hover {
				box-shadow: 0 0 20px
					${props =>
						props.theme.isDark ? dark.secondaryColor : light.secondaryColor};
			}
		`};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	${props =>
		props.mm &&
		css`
			margin: ${props => props.mm && props.mm};
		`};
	@media screen and (min-width: 768px) {
		margin-right: 15px;
		${props =>
			props.ml &&
			css`
				margin: 0;
				margin-left: ${props => props.ml && props.ml};
			`};
	}
`

export const StyledGithub = styled(Github)`
	width: 30px;
	color: white;
`
export const StyledInstagram = styled(Instagram)`
	width: 30px;
	color: white;
`
export const StyledFacebook = styled(Facebook)`
	width: 30px;
	color: white;
`
export const StyledMessage = styled(MessageSquare)`
	width: 30px;
	color: white;
`
export const ContainerIcons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	@media screen and (min-width: 768px) {
		justify-content: flex-start;
	}
`
export const CustomRowFooter = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: ${props => props.mp && props.mp};
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(9, 1fr);
		padding: ${props => props.p && props.p};
	}
	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(12, 1fr);
	}
`

export const CustomColFooter = styled.div`
	grid-column: span ${props => props.smspan && props.smspan};
	padding: ${props => props.mp && props.mp};
	@media screen and (min-width: 768px) {
		grid-column: span ${props => props.mspan && props.mspan};
		padding: ${props => props.p && props.p};
	}
	@media screen and (min-width: 1024px) {
		grid-column: span ${props => props.nspan && props.nspan};
	}
`
