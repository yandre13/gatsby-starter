import React, { useState } from 'react'

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { SquareTwo } from '../../styles'
import {
	Slide,
	Avatar,
	ButtonContainer,
	ButtonArrow,
	StyledArrowButtonReverse,
	StyledArrowButton
} from './styles'
import { Text } from '../Text'
import { CustomRow, CustomCol } from '../Grid/styles'
import { useEffect } from 'react'

export const Slider = () => {
	const params = {
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		lazyLoading: true,
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
	useEffect(() => {
		setSwiper(true)
		console.log(swiper)
	}, [])
	return (
		<>
			{swiper ? (
				<SquareTwo id="testimonials">
					<Text
						type={{ tag: 'h4' }}
						mp={'25px 0 40px'}
						p={'50px 0 50px'}
						color={'white'}
					>
						Testimonials
					</Text>
					<Swiper getSwiper={setSwiper} {...params}>
						<Slide>
							<CustomRow>
								<CustomCol nspan={4}>
									<Avatar />
								</CustomCol>
								<CustomCol nspan={8} mp={'0'} p={'0 0 0 30px'}>
									<Text type={{ tag: 'h5' }} mp={'30px 0 0 0'} p={'20px 0 0 0'}>
										Jhon Fag
									</Text>
									<Text type={{ tag: 'small' }} color={'#9C69E2'}>
										wordfaang.com
									</Text>
									<Text type={{ tag: 'p' }} mp={'20px 0 0 0'} p={'15px 0 0 0'}>
										Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
										enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
										laoreet nulla.
									</Text>
								</CustomCol>
							</CustomRow>
						</Slide>
						<Slide>
							<CustomRow>
								<CustomCol nspan={4}>
									<Avatar />
								</CustomCol>
								<CustomCol nspan={8} mp={'0'} p={'0 0 0 30px'}>
									<Text type={{ tag: 'h5' }} mp={'30px 0 0 0'} p={'20px 0 0 0'}>
										Jhon Fag
									</Text>
									<Text type={{ tag: 'small' }} color={'#9C69E2'}>
										wordfaang.com
									</Text>
									<Text type={{ tag: 'p' }} mp={'20px 0 0 0'} p={'15px 0 0 0'}>
										Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
										enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
										laoreet nulla.
									</Text>
								</CustomCol>
							</CustomRow>
						</Slide>
						<Slide>
							<CustomRow>
								<CustomCol nspan={4}>
									<Avatar />
								</CustomCol>
								<CustomCol nspan={8} mp={'0'} p={'0 0 0 30px'}>
									<Text type={{ tag: 'h5' }} mp={'30px 0 0 0'} p={'20px 0 0 0'}>
										Jhon Fag
									</Text>
									<Text type={{ tag: 'small' }} color={'#9C69E2'}>
										wordfaang.com
									</Text>
									<Text type={{ tag: 'p' }} mp={'20px 0 0 0'} p={'15px 0 0 0'}>
										Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
										enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
										laoreet nulla.
									</Text>
								</CustomCol>
							</CustomRow>
						</Slide>
						<Slide>
							<CustomRow>
								<CustomCol nspan={4}>
									<Avatar />
								</CustomCol>
								<CustomCol nspan={8} mp={'0'} p={'0 0 0 30px'}>
									<Text type={{ tag: 'h5' }} mp={'30px 0 0 0'} p={'20px 0 0 0'}>
										Jhon Fag
									</Text>
									<Text type={{ tag: 'small' }} color={'#9C69E2'}>
										wordfaang.com
									</Text>
									<Text type={{ tag: 'p' }} mp={'20px 0 0 0'} p={'15px 0 0 0'}>
										Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
										enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
										laoreet nulla.
									</Text>
								</CustomCol>
							</CustomRow>
						</Slide>
						<Slide>
							<CustomRow>
								<CustomCol nspan={4}>
									<Avatar />
								</CustomCol>
								<CustomCol nspan={8} mp={'0'} p={'0 0 0 30px'}>
									<Text type={{ tag: 'h5' }} mp={'30px 0 0 0'} p={'20px 0 0 0'}>
										Jhon Fag
									</Text>
									<Text type={{ tag: 'small' }} color={'#9C69E2'}>
										wordfaang.com
									</Text>
									<Text type={{ tag: 'p' }} mp={'20px 0 0 0'} p={'15px 0 0 0'}>
										Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
										enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
										laoreet nulla.
									</Text>
								</CustomCol>
							</CustomRow>
						</Slide>
					</Swiper>
					<ButtonContainer>
						<ButtonArrow onClick={goPrev}>
							<StyledArrowButtonReverse />
						</ButtonArrow>
						<ButtonArrow onClick={goNext}>
							<StyledArrowButton />
						</ButtonArrow>
					</ButtonContainer>
				</SquareTwo>
			) : (
				<div>LOADING....</div>
			)}
		</>
	)
}
