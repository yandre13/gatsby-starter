import React from 'react'
import { Text } from '../components/Text'

export default () => (
	<>
		<Text
			id="features"
			type={{ tag: 'h3' }}
			ma={'center'}
			align={'center'}
			weight="bold"
			mp={'50px 0 0 0'}
			p={'100px 0 0 0'}
		>
			Features
		</Text>
		<Text
			type={{ tag: 'p' }}
			ma={'center'}
			align={'center'}
			mp={'20px 0'}
			p={'50px 0 20px '}
		>
			Some of the features and advantages that we provide for those of you
			<br /> who store data in this Data Warehouse.
		</Text>
	</>
)
