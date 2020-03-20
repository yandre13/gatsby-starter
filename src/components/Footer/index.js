import React from 'react'
import { CustomRow, CustomCol } from '../Grid/styles'
import { Text } from '../Text'
import { Button } from '../../styles'

import { Github } from '@styled-icons/evaicons-solid/Github'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { MessageSquare } from '@styled-icons/evaicons-solid/MessageSquare'
import styled, { css } from 'styled-components'
import { dark, light } from '../../styles/config'

const ContainerFlex = styled.div`
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

const Icon = styled.div`
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

const StyledGithub = styled(Github)`
	width: 30px;
	color: white;
`
const StyledInstagram = styled(Instagram)`
	width: 30px;
	color: white;
`
const StyledFacebook = styled(Facebook)`
	width: 30px;
	color: white;
`
const StyledMessage = styled(MessageSquare)`
	width: 30px;
	color: white;
`
const ContainerIcons = styled.div`
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

export const Footer = () => {
	return (
		<>
			<CustomRow p={'0 0 80px 0'}>
				<CustomCol nspan={6}>
					<Text
						type={{ tag: 'h4' }}
						weight={'bold'}
						mp={'0 0 5px 0'}
						p={'0 0 10px 0'}
					>
						Try for free!
					</Text>
					<Text type={{ tag: 'p' }}>Get limited 1 week free try our features!</Text>
				</CustomCol>
				<CustomCol nspan={6}>
					<ContainerFlex>
						<Button mm={'0'} m={'0 25px 0 0'} buttontype={'secondary'}>
							Learn more
						</Button>
						<Button>Learn more</Button>
					</ContainerFlex>
				</CustomCol>
			</CustomRow>
			<CustomRowFooter mp={'20px 0'} p={'0'}>
				<CustomColFooter nspan={5} mspan={9} smspan={2} mp={'0 0 20px 0'}>
					<Text type={{ tag: 'h5' }} mp={'20px 0 10px 0'} p={'10px 0 20px 0'}>
						DataWareHouse
					</Text>
					<Text type={{ tag: 'p' }} mp={'5px 0'} p={'10px 0'}>
						Warehouse Society, 234 <br />
						Bahagia Ave Street PRBW 29281
					</Text>
					<Text type={{ tag: 'small' }} p={'20px 0 10px 0'} p={'20px 0 10px 0'}>
						info@warehouse.project 1-232-3434 (Main)
					</Text>
				</CustomColFooter>
				<CustomColFooter nspan={2} mspan={3} smspan={1} mp={'0 0 20px 0'}>
					<Text type={{ tag: 'h5' }} mp={'20px 0 10px 0'} p={'10px 0 20px 0'}>
						About
					</Text>
					<Text type={{ tag: 'p' }} mp={'5px 0'} p={'10px 0'}>
						Profile
					</Text>
					<Text type={{ tag: 'p' }} mp={'5px 0'} p={'10px 0'}>
						Features
					</Text>
					<Text type={{ tag: 'p' }} mp={'5px 0'} p={'10px 0'}>
						Careers
					</Text>
					<Text type={{ tag: 'p' }} mp={'5px 0'} p={'10px 0'}>
						DW News
					</Text>
				</CustomColFooter>
				<CustomColFooter nspan={2} mspan={3} smspan={1}>
					<Text type={{ tag: 'h5' }} mp={'20px 0 10px 0'} p={'10px 0 20px 0'}>
						Help
					</Text>
					<Text type={{ tag: 'p' }} mp={'5px 0'} p={'10px 0'}>
						Support
					</Text>
					<Text type={{ tag: 'p' }} mp={'5px 0'} p={'10px 0'}>
						Guide
					</Text>
					<Text type={{ tag: 'p' }} mp={'5px 0'} p={'10px 0'}>
						Reports
					</Text>
					<Text type={{ tag: 'p' }} mp={'5px 0'} p={'10px 0'}>
						Q&A
					</Text>
				</CustomColFooter>
				<CustomColFooter nspan={3} mspan={3} smspan={2}>
					<Text type={{ tag: 'h5' }} ma={'center'} mp={'30px 0'} p={'10px 0 20px 0'}>
						Social media
					</Text>
					<ContainerIcons>
						<Icon>
							<StyledFacebook />
						</Icon>
						<Icon>
							<StyledInstagram />
						</Icon>
						<Icon>
							<StyledGithub />
						</Icon>
					</ContainerIcons>
				</CustomColFooter>
			</CustomRowFooter>
			<CustomRow mp={'50px 0 30px 0'} p>
				<CustomCol mo={'1'} nspan="6">
					<Text type={{ tag: 'small' }}>
						© Datawarehouse™, 2020. All rights reserved.
						<br />
						&nbsp;Company Registration Number: 21479524.
					</Text>
				</CustomCol>
				<CustomCol mp={'0 0 30px 0'} p={0} nspan="6">
					<Icon mm={'auto'} ml={'auto'} secondary={true}>
						<StyledMessage />
					</Icon>
				</CustomCol>
			</CustomRow>
		</>
	)
}
