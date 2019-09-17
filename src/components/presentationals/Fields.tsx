import styled from 'styled-components';

export const ErrorLabel = styled.label`
	position: absolute;
	top: 100%;
	left: 1em;
	color: red;
`;

interface IInputProps {
	p?: number | string;
	bc?: string;
	bg?: string;
	height?: number | string;
	disabled?: boolean;
	name: string;
}

export const Input = styled.input<IInputProps>`
	width: 100%;
	height: ${props => props.height || '1.5em'};
	background-color: ${props => props.bg || props.theme.colors.white};
	padding: ${props => props.p ? props.theme.space[props.p] : '.4em'};
	border: 2px solid ${props => props.bc || props.theme.colors.blue};
  border-radius: 4px;
`;

export const Button = styled(Input)`
	line-height: .5em;
	background-color: ${props => props.theme.colors.blue};
	color: ${props => props.theme.colors.whitegrey};
	cursor: pointer;

	:hover {
		background-color: ${props => props.theme.colors.lightblue};
	}

	:active {
		background-color: ${props => props.theme.colors.lightblack};
	}

	:disabled {
		background-color: ${props => props.theme.colors.grey};
	}
`;
