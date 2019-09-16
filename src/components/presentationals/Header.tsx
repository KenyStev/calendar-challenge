import React from 'react';
import Flex from './Flex';
import Box from './Box';
import shortid from 'shortid';
import styled from 'styled-components';

const HeaderCell = styled(Box)`
	width: 100%;
	padding: ${props => props.theme.space[1]} 0;
	text-align: center;
	color: ${props => props.theme.colors.whitegrey};
	background-color: ${props => props.theme.colors.blue};
	font-size: ${props => props.theme.fontSizes[2]}px;
	font-weight: ${props => props.theme.fontWeights.medium};
`;

interface IHeaderProps {
	month: string;
	headers: Array<string>;
}

const Header: React.FC<IHeaderProps> = ({
	month,
	headers = []
}) => (
	<>
		<Flex
			p={3}
			width={1}
			justifyContent='center'
			sx={{
				color: 'blue',
				fontSize: 5
			}}
		>
			{month}
		</Flex>
		<Flex
			width={1}
			key={shortid.generate()}
		>
			{
				headers.map(header =>
					<HeaderCell
						key={shortid.generate()}
					>
						{header}
					</HeaderCell>
				)
			}
		</Flex>
	</>
);

export default Header;
