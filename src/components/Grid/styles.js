import styled from 'styled-components'

export const CustomRow = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: ${props => props.gutter && `${props.gutter}px`};
	border-radius: ${props => props.radius && `${props.radius}px`};
	padding: ${props => props.mp && props.mp};

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(12, 1fr);
		padding: ${props => props.p && props.p};
		padding: ${props => props.clearp768 && '60px 0 120px 0'};
	}
	@media screen and (min-width: 1200px) {
		padding: ${props => props.p && props.p};
		grid-template-columns: repeat(12, 1fr);
	}
`

export const CustomCol = styled.div`
	grid-column: span 1;
	order: ${props => props.mo && props.mo};
	position: relative; /* //For this only */
	padding: ${props => props.mp && props.mp};
	@media screen and (min-width: 768px) {
		order: 0;
		grid-column: span ${props => (props.nspan ? props.nspan : 6)};
		padding: ${props => props.p && props.p};
	}
`
