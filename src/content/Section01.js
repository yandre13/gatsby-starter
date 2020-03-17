import React from 'react'

import { CustomRow, CustomCol } from '../components/Grid/styles'
import { Text } from '../components/Text'
import { BannerContainer, Button, ImageBanner } from '../styles'

export default ({ data }) => (
	<CustomRow pt={80} mpt={30} pb={200} mpb={50}>
		<CustomCol nspan="6" order="1">
			<Text type={{ tag: 'h2' }} weight="bold" pb={25} mpt={20} mpb={20}>
				Save your data storage here
			</Text>
			<Text type={{ tag: 'p' }} pb={40} mpb={30}>
				Data Warehouse is a data storage area that has <br />
				been tested for security, so you can store <br />
				your data here safely but not be afraid <br />
				of being stolen by others.
			</Text>
			<Button mac={'ya'} to="/page-2">
				Learn more
			</Button>
		</CustomCol>
		<CustomCol nspan="6" className="hero">
			<BannerContainer>
				<ImageBanner fluid={data.banner.childImageSharp.fluid} />
			</BannerContainer>
		</CustomCol>
	</CustomRow>
)
