import styled from 'styled-components'

export const StyledMain = styled.main`
	width: 100%;
	height: 100vh;
	background: ${props => props.theme.backgroundColor};
	position: relative;
	top: 66px;
	@media screen and (max-width: 768px) {
		top: 56px;
	}
`
