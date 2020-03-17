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
	<CustomRow pt={60} mpt={20} pb={110} mpb={50} gutter={50}>
		<CustomCol nspan={6}>
			<CardContainer>
				<Card bg={'#F0FAF8'}>
					<ContainerImgContent pt={40} mpt={30}>
						<ImageBanner fluid={data.img_c01.childImageSharp.fluid} />
					</ContainerImgContent>
					<ContainerContent>
						<Text type={{ tag: 'h4' }} pt={10} mpt={20}>
							Features
						</Text>
						<Text type={{ tag: 'p' }} pt={30} pb={40} mpt={20} mpb={20}>
							Don’t worry if your data is very large, the Data Warehoue provides a
							search engine, which is useful for making it easier to find data
							effectively saving time.
						</Text>
						<Text type={{ tag: 'p' }} weight={'bold'} mpb={20}>
							Learn more <StyledArrow />
						</Text>
					</ContainerContent>
				</Card>
			</CardContainer>
		</CustomCol>
		<CustomCol nspan={6}>
			<CardContainer>
				<Card bg={'#f5f0fc'}>
					<ContainerImgContent pt={40} mpt={30}>
						<ImageBanner fluid={data.img_c02.childImageSharp.fluid} />
					</ContainerImgContent>
					<ContainerContent>
						<Text type={{ tag: 'h4' }} pt={10} mpt={20}>
							Features
						</Text>
						<Text type={{ tag: 'p' }} pt={30} pb={40} mpt={20} mpb={20}>
							Don’t worry if your data is very large, the Data Warehoue provides a
							search engine, which is useful for making it easier to find data
							effectively saving time.
						</Text>
						<Text type={{ tag: 'p' }} weight={'bold'} mpb={20}>
							Learn more <StyledArrow />
						</Text>
					</ContainerContent>
				</Card>
			</CardContainer>
		</CustomCol>
		<CustomCol nspan={6}>
			<CardContainer>
				<Card bg={'#FDEFF8'}>
					<ContainerImgContent pt={40} mpt={30}>
						<ImageBanner fluid={data.img_c03.childImageSharp.fluid} />
					</ContainerImgContent>
					<ContainerContent>
						<Text type={{ tag: 'h4' }} pt={10} mpt={20}>
							Features
						</Text>
						<Text type={{ tag: 'p' }} pt={30} pb={40} mpt={20} mpb={20}>
							Don’t worry if your data is very large, the Data Warehoue provides a
							search engine, which is useful for making it easier to find data
							effectively saving time.
						</Text>
						<Text type={{ tag: 'p' }} weight={'bold'} mpb={20}>
							Learn more <StyledArrow />
						</Text>
					</ContainerContent>
				</Card>
			</CardContainer>
		</CustomCol>
		<CustomCol nspan={6}>
			<CardContainer>
				<Card bg={'#EAF5FB'}>
					<ContainerImgContent pt={40} mpt={30}>
						<ImageBanner fluid={data.img_c04.childImageSharp.fluid} />
					</ContainerImgContent>
					<ContainerContent>
						<Text type={{ tag: 'h4' }} pt={10} mpt={20}>
							Features
						</Text>
						<Text type={{ tag: 'p' }} pt={30} pb={40} mpt={20} mpb={20}>
							Don’t worry if your data is very large, the Data Warehoue provides a
							search engine, which is useful for making it easier to find data
							effectively saving time.
						</Text>
						<Text type={{ tag: 'p' }} weight={'bold'} mpb={20}>
							Learn more <StyledArrow />
						</Text>
					</ContainerContent>
				</Card>
			</CardContainer>
		</CustomCol>
	</CustomRow>
)
