import React from 'react';
import Box from './Box';
import styled  from 'styled-components';
import moment from 'moment';

export type DayType = 'weekday' | 'weekend';
export type DateType = 'monthDay' | 'noMonthDay';

interface IDateProps {
	dayType?: DayType;
	dateType?: DateType;
}

const StyledBox = styled(Box)<IDateProps>`
	width: 100%;
	position: relative;
	height: ${props => props.theme.space[145]};
	background-color: ${props => props.dayType === 'weekend' ? props.theme.colors.whitegrey : props.theme.colors.white};
	border: 1px solid ${props => props.theme.colors.lightblack}
	cursor: pointer;

	:hover {
		background-color: rgba(100,200,250,0.3);
	}
`;

const DateNumber = styled(Box)<IDateProps>`
	position: absolute;
	top: 0;
	left: 1em;
	font-size: ${props => props.theme.fontSizes[2]}px;
	font-weight: ${props => props.theme.fontWeights.medium};
	color: ${props => props.dayType === 'weekend' ? props.theme.colors.lightblue : props.theme.colors.black};
	color: ${props => props.dateType === 'noMonthDay' ? props.theme.colors.grey : props.dayType === 'weekend' ? props.theme.colors.lightblue : props.theme.colors.black };
`;

interface IDayProps {
	date: string;
	dayType: DayType;
	dateType: DateType;
}

const Day: React.FC<IDayProps> = ({
	date,
	dayType = 'weekday',
	dateType = 'monthDay'
}) => (
	<StyledBox
		dayType={dayType}
	>
		<DateNumber
			dayType={dayType}
			dateType={dateType}
		>
			{moment(date).date()}
		</DateNumber>
	</StyledBox>
);

export default Day;
