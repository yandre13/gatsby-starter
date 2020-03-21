import React from 'react'
import { CustomRow, CustomCol } from '../components/Grid/styles'
import { Text } from '../components/Text'
import { ImageBanner, Img2, SquareOne, SubContent } from '../styles'

export default ({ data }) => (
	<SquareOne id="whoweare">
		<CustomRow gutter={30}>
			<CustomCol nspan={6}>
				<Img2>
					<ImageBanner fluid={data.img2.childImageSharp.fluid} alt="Who we are" />
				</Img2>
			</CustomCol>
			<CustomCol nspan={6}>
				<SubContent>
					<Text type={{ tag: 'h4' }} weight="bold" mp={'20px 0'} p={'0 0 20px 0'}>
						We are a high-level data storage bank
					</Text>
					<Text type={{ tag: 'p' }}>
						The place to store various data that you can access at any time through
						the internet and where you can carry it. This very flexible storage area
						has a high level of security. To enter into your own data you must enter
						the password that you created when you registered in this Data Warehouse.
					</Text>
				</SubContent>
			</CustomCol>
		</CustomRow>
	</SquareOne>
)
