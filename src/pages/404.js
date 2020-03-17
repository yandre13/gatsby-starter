import React, { useRef } from 'react'
import { Error, BackImage } from '../styles'
import SEO from '../components/SEO'
import { GlobalStyle } from '../styles/config'

import { Link } from 'gatsby'

import styled from 'styled-components'

export default () => {
	const refBack = useRef(null),
		handleMovement = e => {
			const pageX = (e.pageX * 0.4) / 15,
				pageY = (e.pageY * -1) / 15
			refBack.current.style.backgroundPosition = `${pageX}px ${pageY}px`
		}

	return (
		<>
			<SEO
				title={'Page not found 404'}
				description={`We haven't found that page, go home for reading more`}
				siteUrl={'/404'}
			/>
			<GlobalStyle />
			<Error>
				<BackImage ref={refBack} onMouseMove={handleMovement}></BackImage>
				<NotFound>
					Page not found <br /> 404 :c <br />
					<GoHome to="/">Back home c:</GoHome>
				</NotFound>
			</Error>
		</>
	)
}

const NotFound = styled.h1`
	font-family: 'Rancho', cursive;
	text-align: center;
	position: relative;
	font-size: 60px;
	line-height: 70px;
	color: black;
	margin: auto;
	padding-top: 60%;
	width: fit-content;
	@media screen and (min-width: 768px) {
		color: white;
		font-size: 130px;
		line-height: 130px;
		padding-top: 20%;
	}
	@media screen and (min-width: 1440px) {
		padding-top: 10%;
	}
`
const GoHome = styled(Link)`
	text-decoration: none;
	color: inherit;
	font-size: 48px;
`
