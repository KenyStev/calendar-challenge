import styled from 'styled-components';
import Box from './Box';

const CloseButton = styled(Box)`
	position: absolute;
	top: 1em;
	right: 1.5em;
	font-size: ${props => props.theme.fontSizes[3]}px;
	font-weight: ${props => props.theme.fontWeights.medium};
	color: ${props => props.theme.colors.red};
	cursor: pointer;
`;

export default CloseButton;
