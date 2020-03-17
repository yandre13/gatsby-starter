import styled from 'styled-components'

export const CustomRow = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: ${props => `${props.gutter}px`};
	border-radius: ${props => props.radius && '20px'};
	padding-bottom: ${props => props.mpb && `${props.mpb}px`};
	padding-top: ${props => props.mpt && `${props.mpt}px`};

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(12, 1fr);
		padding-bottom: ${props => props.pb && `${props.pb - 80}px`};
		padding-top: ${props => props.pt && `${props.pt - 20}px`};
	}
	@media screen and (min-width: 1200px) {
		grid-template-columns: repeat(12, 1fr);
		padding-bottom: ${props => props.pb && `${props.pb}px`};
		padding-top: ${props => props.pt && `${props.pt}px`};
	}
`

export const CustomCol = styled.div`
	grid-column: span 1;
	order: ${props => props.order && props.order};
	position: relative; /* //For this only */
	padding-right: ${props => props.mpr && `${props.mpr}px`};
	padding-left: ${props => props.mpl && `${props.mpl}px`};
	@media screen and (min-width: 768px) {
		order: 0;
		grid-column: span ${props => (props.nspan ? props.nspan : 6)};
		padding-right: ${props => props.pr && `${props.pr}px`};
		padding-left: ${props => props.pl && `${props.pl}px`};
	}
`
