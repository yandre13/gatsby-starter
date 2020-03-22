import styled from 'styled-components'
import { ArrowNarrowRight } from '@styled-icons/heroicons-outline/ArrowNarrowRight'
import { dark, light } from '../../styles/config'

export const StyledArrowButton = styled(ArrowNarrowRight)`
	color: white;
	width: 32px;
	margin: 0 10px;
	opacity: 0.6;
	&:hover {
		opacity: 1;
	}
`
export const StyledArrowButtonReverse = styled(ArrowNarrowRight)`
	color: white;
	width: 32px;
	margin: 0 10px;
	transform: rotate(180deg);
	opacity: 0.6;
	&:hover {
		opacity: 1;
	}
`
export const ButtonArrow = styled.button`
	background: transparent;
	padding: 0;
	border: none;
	outline: none;
	width: 50px;
	cursor: pointer;
`
export const ButtonContainer = styled.div`
	position: absolute;
	right: 30px;
	bottom: 35px;
	cursor: pointer;
	z-index: 100;
	@media screen and (min-width: 768px) {
		right: 60px;
	}
`

export const Slide = styled.article`
	border-radius: 20px;
	background: ${props =>
		props.theme.isDark ? dark.backgroundColor : light.backgroundColor};
	padding: 40px 20px;
	width: 50%;
	overflow: hidden;
	box-shadow: 0 3px 4px -1px ${props => (props.theme.isDark ? '#171717' : '#444')};
	@media screen and (min-width: 600px) {
		padding: 40px 30px;
	}
	@media screen and (min-width: 768px) {
		padding: 40px 60px;
	}
`
export const Avatar = styled.div`
	background: #eee;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	margin: auto;
	@media screen and (min-width: 768px) {
		width: 100px;
		height: 100px;
	}
`
