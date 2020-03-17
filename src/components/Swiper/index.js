import React, { useState } from 'react'

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { SquareTwo } from '../../styles'

import { ArrowNarrowRight } from '@styled-icons/heroicons-outline/ArrowNarrowRight'
import styled from 'styled-components'
import { Text } from '../Text'
import { CustomRow, CustomCol } from '../Grid/styles'

const StyledArrowButton = styled(ArrowNarrowRight)`
	color: white;
	width: 32px;
	margin: 0 10px;
	opacity: 0.6;
	&:hover {
		opacity: 1;
	}
`
const StyledArrowButtonReverse = styled(ArrowNarrowRight)`
	color: white;
	width: 32px;
	margin: 0 10px;
	transform: rotate(180deg);
	opacity: 0.6;
	&:hover {
		opacity: 1;
	}
`
const Button = styled.button`
	background: transparent;
	padding: 0;
	border: none;
	outline: none;
	width: 45px;
	cursor: pointer;
`
const ButtonContainer = styled.div`
	position: absolute;
	right: 30px;
	bottom: 35px;
	cursor: pointer;
	z-index: 100;
	@media screen and (min-width: 768px) {
		right: 60px;
	}
`

const Slide = styled.article`
	border-radius: 20px;
	background: white;
	padding: 40px 20px;
	width: 50%;
	overflow: hidden;
	box-shadow: 0 4px 4px -1px #545454;
	@media screen and (min-width: 600px) {
		padding: 40px 30px;
	}
	@media screen and (min-width: 768px) {
		padding: 40px 60px;
	}
`
const Avatar = styled.div`
	background: #eee;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	margin: auto;
	@media screen and (min-width: 768px) {
		width: 100px;
		height: 100px;
	}
`

export const Slider = () => {
	const params = {
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpoints: {
			1400: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			}
		}
	}
	const [swiper, setSwiper] = useState(null)

	const goNext = () => {
		if (swiper !== null) {
			swiper.slideNext()
		}
	}

	const goPrev = () => {
		if (swiper !== null) {
			swiper.slidePrev()
		}
	}
	return (
		<>
			<SquareTwo>
				<Text
					type={{ tag: 'h4' }}
					pb={60}
					pt={50}
					mpb={40}
					mpt={25}
					color={'white'}
				>
					Testimonials
				</Text>
				<Swiper speed={1000} getSwiper={setSwiper} {...params}>
					<Slide>
						<CustomRow>
							<CustomCol nspan={3}>
								<Avatar />
							</CustomCol>
							<CustomCol nspan={9} pl={30} mpl={0}>
								<Text type={{ tag: 'h5' }} pt={20} mpt={30}>
									Jhon Fag
								</Text>
								<Text type={{ tag: 'small' }} color={'#9C69E2'}>
									wordfaang.com
								</Text>
								<Text type={{ tag: 'p' }} pt={15} mpt={20}>
									Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim
									erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet
									nulla.
								</Text>
							</CustomCol>
						</CustomRow>
					</Slide>
					<Slide>
						<CustomRow>
							<CustomCol nspan={3}>
								<Avatar />
							</CustomCol>
							<CustomCol nspan={9} pl={30} mpl={0}>
								<Text type={{ tag: 'h5' }} pt={20} mpt={30}>
									Jhon Fag
								</Text>
								<Text type={{ tag: 'small' }} color={'#9C69E2'}>
									wordfaang.com
								</Text>
								<Text type={{ tag: 'p' }} pt={15} mpt={20}>
									Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim
									erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet
									nulla.
								</Text>
							</CustomCol>
						</CustomRow>
					</Slide>
					<Slide>
						<CustomRow>
							<CustomCol nspan={3}>
								<Avatar />
							</CustomCol>
							<CustomCol nspan={9} pl={30} mpl={0}>
								<Text type={{ tag: 'h5' }} pt={20} mpt={30}>
									Jhon Fag
								</Text>
								<Text type={{ tag: 'small' }} color={'#9C69E2'}>
									wordfaang.com
								</Text>
								<Text type={{ tag: 'p' }} pt={15} mpt={20}>
									Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim
									erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet
									nulla.
								</Text>
							</CustomCol>
						</CustomRow>
					</Slide>
					<Slide>
						<CustomRow>
							<CustomCol nspan={3}>
								<Avatar />
							</CustomCol>
							<CustomCol nspan={9} pl={30} mpl={0}>
								<Text type={{ tag: 'h5' }} pt={20} mpt={30}>
									Jhon Fag
								</Text>
								<Text type={{ tag: 'small' }} color={'#9C69E2'}>
									wordfaang.com
								</Text>
								<Text type={{ tag: 'p' }} pt={15} mpt={20}>
									Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim
									erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet
									nulla.
								</Text>
							</CustomCol>
						</CustomRow>
					</Slide>
					<Slide>
						<CustomRow>
							<CustomCol nspan={3}>
								<Avatar />
							</CustomCol>
							<CustomCol nspan={9} pl={30} mpl={0}>
								<Text type={{ tag: 'h5' }} pt={20} mpt={30}>
									Jhon Fag
								</Text>
								<Text type={{ tag: 'small' }} color={'#9C69E2'}>
									wordfaang.com
								</Text>
								<Text type={{ tag: 'p' }} pt={15} mpt={20}>
									Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim
									erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet
									nulla.
								</Text>
							</CustomCol>
						</CustomRow>
					</Slide>
				</Swiper>
				<ButtonContainer>
					<Button onClick={goPrev}>
						<StyledArrowButtonReverse />
					</Button>
					<Button onClick={goNext}>
						<StyledArrowButton />
					</Button>
				</ButtonContainer>
			</SquareTwo>
		</>
	)
}
