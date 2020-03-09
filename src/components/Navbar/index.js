import React, { useState, useEffect } from 'react'
import { Toolbar } from './Toolbar'
import { SideDrawer } from './SideDrawer'
import { BackDrop } from './BackDrop'

export const Navbar = ({ themeContext, dark, setDark }) => {
	const [show, setShow] = useState(false),
		[width, setWidth] = useState(0),
		right = false

	const handleShow = () => setShow(!show)

	useEffect(() => {
		if (typeof window !== `undefined`) {
			setWidth(window.innerWidth)
		}

		function watchResize() {
			window.addEventListener('resize', () => setWidth(window.innerWidth))
		}
		watchResize()
		return () => {
			window.removeEventListener('resize', () => setWidth(window.innerWidth))
		}
	}, [width])

	return (
		<>
			<Toolbar
				width={width}
				show={show}
				setShow={handleShow}
				right={right}
				themeContext={themeContext}
				dark={dark}
				setDark={setDark}
			/>
			{width < 768 && <SideDrawer show={show} right={right} />}
			{show && width < 768 && <BackDrop setShow={handleShow} />}
		</>
	)
}
