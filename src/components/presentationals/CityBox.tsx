import Box from './Box';
import styled from 'styled-components';

export const CityBox = styled(Box)`
	position: relative;

  input[type="text"] {
		height: ${props => props.height || '1.5em'};
		background-color: ${props => props.theme.colors.white};
		padding: 1.1em;
		border: 2px solid ${props => props.theme.colors.blue};
	  border-radius: 4px;
  }

	.google-covert {
		position: absolute;
		z-index: 99;

		.style-list,
		.style-unordered-list {
			background-color: ${props => props.theme.colors.white};
			color: black;

			:hover {
				background-color: #e7e7e7;
			}
		}
	}
`;
