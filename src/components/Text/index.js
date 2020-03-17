import React from 'react'
import { H1, H2, H3, H4, H5, P, Small } from './styles'

export const Text = ({
	type,
	align,
	weight,
	pb,
	pt,
	mpb,
	mpt,
	color,
	children
}) => {
	return (
		<>
			{type.tag === 'h1' && (
				<H1
					align={align}
					pb={pb}
					pt={pt}
					mpb={mpb}
					mpt={mpt}
					weight={weight}
					color={color}
				>
					{children}
				</H1>
			)}
			{type.tag === 'h2' && (
				<H2
					align={align}
					pb={pb}
					pt={pt}
					mpb={mpb}
					mpt={mpt}
					weight={weight}
					color={color}
				>
					{children}
				</H2>
			)}
			{type.tag === 'h3' && (
				<H3
					align={align}
					pb={pb}
					pt={pt}
					mpb={mpb}
					mpt={mpt}
					weight={weight}
					color={color}
				>
					{children}
				</H3>
			)}
			{type.tag === 'h4' && (
				<H4
					align={align}
					pb={pb}
					pt={pt}
					mpb={mpb}
					mpt={mpt}
					weight={weight}
					color={color}
				>
					{children}
				</H4>
			)}
			{type.tag === 'h5' && (
				<H5
					align={align}
					pb={pb}
					pt={pt}
					mpb={mpb}
					mpt={mpt}
					weight={weight}
					color={color}
				>
					{children}
				</H5>
			)}
			{type.tag === 'p' && (
				<P
					align={align}
					pb={pb}
					pt={pt}
					mpb={mpb}
					mpt={mpt}
					weight={weight}
					color={color}
				>
					{children}
				</P>
			)}
			{type.tag === 'small' && (
				<Small
					align={align}
					pb={pb}
					pt={pt}
					mpb={mpb}
					mpt={mpt}
					weight={weight}
					color={color}
				>
					{children}
				</Small>
			)}
		</>
	)
}
