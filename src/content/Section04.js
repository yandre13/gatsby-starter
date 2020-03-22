import React from 'react'
import { CustomRow, CustomCol } from '../components/Grid/styles'
import { Text } from '../components/Text'
import {
	ImageBanner,
	Card,
	CardContainer,
	ContainerContent,
	ContainerImgContent
} from '../styles'

import { ArrowNarrowRight } from '@styled-icons/heroicons-outline/ArrowNarrowRight'
import styled from 'styled-components'
const StyledArrow = styled(ArrowNarrowRight)`
	color: #9c69e2;
	width: 30px;
	margin: 0 10px;
`

export default ({ data }) => (
	<CustomRow mp={'20px 0 50px 0'} p={'60px 0 110px'} gutter={50}>
		<CustomCol nspan={6}>
			<CardContainer>
				<Card bg={{ light: '#F0FAF8', dark: '#181E1D' }}>
					<ContainerImgContent mp={'30px 0 0 0'} p={'40px 0 0 0'}>
						<ImageBanner
							fluid={data.img_c01.childImageSharp.fluid}
							alt="no more pollution"
						/>
					</ContainerImgContent>
					<ContainerContent p={'40px 40px 20px 20px'}>
						<Text type={{ tag: 'h4' }} mp={'20px 0 0 0'} p={'10px 0 0 0'}>
							Features
						</Text>
						<Text type={{ tag: 'p' }} mp={'20px 0'} p={'30px 0 40px'}>
							Don’t worry if your data is very large, the Data Warehoue provides a
							search engine, which is useful for making it easier to find data
							effectively saving time.
						</Text>
						<Text type={{ tag: 'p' }} weight={'bold'} mp={'0 0 20px 0'}>
							Learn more <StyledArrow />
						</Text>
					</ContainerContent>
				</Card>
			</CardContainer>
		</CustomCol>
		<CustomCol nspan={6}>
			<CardContainer>
				<Card bg={{ light: '#f5f0fc', dark: '#1B181C' }}>
					<ContainerImgContent mp={'30px 0 0 0'} p={'40px 0 0 0'}>
						<ImageBanner
							fluid={data.img_c02.childImageSharp.fluid}
							alt="no more plastic bags"
						/>
					</ContainerImgContent>
					<ContainerContent p={'40px 40px 20px 20px'}>
						<Text type={{ tag: 'h4' }} mp={'20px 0 0 0'} p={'10px 0 0 0'}>
							Features
						</Text>
						<Text type={{ tag: 'p' }} mp={'20px 0'} p={'30px 0 40px'}>
							Don’t worry if your data is very large, the Data Warehoue provides a
							search engine, which is useful for making it easier to find data
							effectively saving time.
						</Text>
						<Text type={{ tag: 'p' }} weight={'bold'} mp={'0 0 20px 0'}>
							Learn more <StyledArrow />
						</Text>
					</ContainerContent>
				</Card>
			</CardContainer>
		</CustomCol>
		<CustomCol nspan={6}>
			<CardContainer>
				<Card bg={{ light: '#FDEFF8', dark: '#241B20' }}>
					<ContainerImgContent mp={'30px 0 0 0 '} p={'40px 0 0 0'}>
						<ImageBanner
							fluid={data.img_c03.childImageSharp.fluid}
							alt="You must plant trees"
						/>
					</ContainerImgContent>
					<ContainerContent p={'40px 40px 20px 20px'}>
						<Text type={{ tag: 'h4' }} mp={'20px 0 0 0'} p={'10px 0 0 0'}>
							Features
						</Text>
						<Text type={{ tag: 'p' }} mp={'20px 0'} p={'30px 0 40px'}>
							Don’t worry if your data is very large, the Data Warehoue provides a
							search engine, which is useful for making it easier to find data
							effectively saving time.
						</Text>
						<Text type={{ tag: 'p' }} weight={'bold'} mp={'0 0 20px 0'}>
							Learn more <StyledArrow />
						</Text>
					</ContainerContent>
				</Card>
			</CardContainer>
		</CustomCol>
		<CustomCol nspan={6}>
			<CardContainer>
				<Card bg={{ light: '#EAF5FB', dark: '#161D22' }}>
					<ContainerImgContent mp={'30px 0 0 0 '} p={'40px 0 0 0'}>
						<ImageBanner
							fluid={data.img_c04.childImageSharp.fluid}
							alt="Join us to save the world"
						/>
					</ContainerImgContent>
					<ContainerContent p={'40px 40px 20px 20px'}>
						<Text type={{ tag: 'h4' }} mp={'20px 0 0 0'} p={'10px 0 0 0'}>
							Features
						</Text>
						<Text type={{ tag: 'p' }} mp={'20px 0'} p={'30px 0 40px'}>
							Don’t worry if your data is very large, the Data Warehoue provides a
							search engine, which is useful for making it easier to find data
							effectively saving time.
						</Text>
						<Text type={{ tag: 'p' }} weight={'bold'} mp={'0 0 20px 0'}>
							Learn more <StyledArrow />
						</Text>
					</ContainerContent>
				</Card>
			</CardContainer>
		</CustomCol>
	</CustomRow>
)
