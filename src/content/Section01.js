import React from 'react'

import { CustomRow, CustomCol } from '../components/Grid/styles'
import { Text } from '../components/Text'
import { BannerContainer, Button, ImageBanner } from '../styles'

export default ({ data }) => (
	<CustomRow mp={'30px 0 50px 0'} p={'80px 0 200px 0'} clearp768={true}>
		<CustomCol nspan="6" mo="1">
			<Text type={{ tag: 'h2' }} weight="bold" mp={'20px 0'} p={'25px 0'}>
				Save your data storage here
			</Text>
			<Text type={{ tag: 'p' }} mp={'0 0 30px 0'} p={'0 0 40px 0'}>
				Data Warehouse is a data storage area that has <br />
				been tested for security, so you can store <br />
				your data here safely but not be afraid <br />
				of being stolen by others.
			</Text>
			<Button mm={'auto'} m={'0'} to="#">
				Learn more
			</Button>
		</CustomCol>
		<CustomCol nspan="6">
			<BannerContainer>
				<ImageBanner
					fluid={data.banner.childImageSharp.fluid}
					alt="Zero waste for a better world"
				/>
			</BannerContainer>
		</CustomCol>
	</CustomRow>
)
