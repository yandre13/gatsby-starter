import React from 'react'
import { CustomRow, CustomCol } from '../Grid/styles'
import { Text } from '../Text'
import { Button } from '../../styles'
import {
	CustomRowFooter,
	CustomColFooter,
	ContainerIcons,
	Icon,
	StyledFacebook,
	StyledInstagram,
	StyledGithub,
	StyledMessage,
	ContainerFlex
} from './styles'
import { Container } from '../Container/styles'

export const Footer = () => (
	<footer style={{ position: 'relative', bottom: 0 }}>
		<Container>
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
						<Button mm={'0'} m={'0 25px 0 0'} buttontype={'secondary'} to="#">
							Learn more
						</Button>
						<Button to="#">Learn more</Button>
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
		</Container>
	</footer>
)
