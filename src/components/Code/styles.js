import styled from 'styled-components'

export const Pre = styled.pre`
	position: relative;
	text-align: left;
	margin: 1em 0;
	padding: 0.5em;
	overflow-x: auto;
	border-radius: 3px;

	& .token-lline {
		line-height: 1.3em;
		height: 1.3em;
	}
	font-family: 'Courier New', Courier, monospace;
`

export const LineNo = styled.span`
	display: inline-block;
	width: 2em;
	user-select: none;
	opacity: 0.3;
`

export const CopyCode = styled.button`
	position: absolute;
	right: 0.25rem;
	border: 0;
	border-radius: 3px;
	margin: 0.25em;
	opacity: 0.3;
	&:hover {
		opacity: 1;
	}
`
