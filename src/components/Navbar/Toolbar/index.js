import React, { useState, useEffect } from 'react'

import { Header, Nav, Logo, Items, ContainerButton } from './styles'
import { ToggleButton } from '../ToogleButton'
import { Container } from '../../Container'
import { Links } from '../../Links'
import { StyledLinkLogo } from '../../../styles'

export const Toolbar = ({
	show,
	setShow,
	width,
	right,
	dark,
	setDark,
	themeContext
}) => {
	const [transparent, setTransparent] = useState(0),
		[innerHeight, setInnerHeight] = useState(0),
		[innerMiddleHeight, setInnerMiddleHeight] = useState(0)

	useEffect(() => {
		function watchScroll() {
			window.addEventListener('scroll', () => setTransparent(window.scrollY))
		}
		watchScroll()
		return () => {
			window.removeEventListener('scroll', () => setTransparent(window.scrollY))
		}
	}, [transparent])

	useEffect(() => {
		if (typeof window !== `undefined`) {
			setInnerHeight(window.innerHeight - 30)
			setInnerMiddleHeight(window.innerHeight / 4)
		}
	}, [])

	return (
		<Header
			transparent={transparent}
			innerHeight={innerHeight}
			innerMiddleHeight={innerMiddleHeight}
		>
			{console.log(innerMiddleHeight)}
			<Container>
				<Nav right={right}>
					{width < 768 && (
						<ContainerButton>
							<ToggleButton show={show} setShow={setShow} />
						</ContainerButton>
					)}
					<Logo>
						<StyledLinkLogo to="/">
							rightaway
							<br />
						</StyledLinkLogo>
					</Logo>

					{width > 768 && (
						<Items right={right}>
							<ul>
								<Links themeContext={themeContext} dark={dark} setDark={setDark} />
							</ul>
						</Items>
					)}
				</Nav>
			</Container>
		</Header>
	)
}
