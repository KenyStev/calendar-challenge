import React, { useState } from 'react';
import Box from './Box';
import CloseButton from './CloseButton';
import styled  from 'styled-components';
import moment from 'moment';

export type DayType = 'weekday' | 'weekend';
export type DateType = 'monthDay' | 'noMonthDay';

interface IDateProps {
	isOpen?: boolean;
	noTransition?: boolean;
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

	transition: ${props => !props.noTransition && `all 0.1s ease`};

	:hover {
		background-color: rgba(100,200,250,0.3);
	}

	:first-child {
		border-left: 2px solid ${props => props.theme.colors.lightblack}
	}

	:last-child {
		border-right: 2px solid ${props => props.theme.colors.lightblack}
	}

	.grid-dates:last-child & {
		border-bottom: 2px solid ${props => props.theme.colors.lightblack}
	}

	${props => props.isOpen && `
		z-index: 99;
    position: absolute;
    top: 0;
    height: 100%;

    :hover {
			background-color: white;
			cursor: auto;
		}
	`}
`;

const DateNumber = styled(Box)<IDateProps>`
	position: absolute;
	top: 0;
	left: 1em;
	font-size: ${props => props.isOpen ? props.theme.fontSizes[3] : props.theme.fontSizes[2]}px;
	font-weight: ${props => props.theme.fontWeights.medium};
	color: ${props => props.dayType === 'weekend' ? props.theme.colors.lightblue : props.theme.colors.black};
	color: ${props => props.dateType === 'noMonthDay' ? props.theme.colors.grey : props.dayType === 'weekend' ? props.theme.colors.lightblue : props.theme.colors.black };

	${props => props.isOpen && `
		top: 1em;
		left: 1em;
	`}
`;

interface IDayProps {
	date: string;
	dayType: DayType;
	dateType: DateType;

	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
	renderChildren?: (isOpen: boolean) => React.ReactNode;
}

const Day: React.FC<IDayProps> = ({
	children,
	date,
	dayType = 'weekday',
	dateType = 'monthDay',
	renderChildren = (isPoen) => children
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const styleProps = {
		isOpen,
		dayType,
		dateType
	}

	return(
		<StyledBox
			{...styleProps}
			onClick={() => {
				!isOpen && setIsOpen(true);
			}}
		>
			<DateNumber
				{...styleProps}
			>
				{moment(date).date()}
			</DateNumber>

			{
				isOpen &&
				<CloseButton
					onClick={() => {
						setIsOpen(false);
					}}
				>
					X
				</CloseButton>
			}

			{renderChildren(isOpen)}
		</StyledBox>
	)
};

export default Day;
