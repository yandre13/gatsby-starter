import React from 'react'
import { Text } from '../components/Text'

export default () => (
	<>
		<Text type={{ tag: 'h3' }} align={'center'} weight="bold" pt={100} mpt={50}>
			Features
		</Text>
		<Text type={{ tag: 'p' }} align={'center'} pt={50} pb={20} mpt={20} mpb={20}>
			Some of the features and advantages that we provide for those of you
			<br /> who store data in this Data Warehouse.
		</Text>
	</>
)
