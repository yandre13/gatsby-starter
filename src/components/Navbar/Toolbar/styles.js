import styled, { css } from 'styled-components'

export const ContainerButton = styled.div`
	display: flex;
	align-items: center;
	height: 66px;
	justify-self: flex-end;
	@media screen and (max-width: 768px) {
		height: 56px;
	}
`

//This needs a Header
export const Header = styled.header`
	position: fixed;
	display: flex;
	justify-content: center;
	height: 66px;
	width: 100%;
	/* background */
	transition: 0.4s ease-in;
	background: ${props => props.theme.primaryColor};
	${props =>
		props.transparent > props.innerMiddleHeight &&
		css`
			background: transparent;
			backdrop-filter: saturate(180%) blur(25px);
			border: 0;
		`}
/* 	${props =>
	props.transparent > props.innerHeight &&
	css`
		background: transparent;
		backdrop-filter: saturate(180%) blur(25px);
	`} */
top: 0;
	left: 0;
	z-index: 10;
 @media screen and (max-width: 768px) {
		height: 56px;
	}
 
`
//A nav
export const Nav = styled.nav`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 768px) {
		& {
			flex-direction: ${props => (props.right ? 'row-reverse' : 'row')};
		}
	}
`
//A logo in a div
export const Logo = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	align-self: flex-start;
	& a {
		text-decoration: none;
		font-size: 1.5rem;
		line-height: 1.5;
	}
	& img {
		width: 120px;
		display: block;
		padding: 10px;
	}
`
//A div for the items
export const Items = styled.div`
	width: 100%;
	& ul {
		list-style: none;
		display: flex;
		justify-content: ${props => (props.right ? 'flex-end' : 'flex-end')};
	}
	& li {
		padding: 0 0.5rem;
	}

	@media (max-width: 768px) {
		& {
			display: none;
		}
	}
`
