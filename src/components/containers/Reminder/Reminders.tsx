import React from 'react';
import { invertColor } from '../../../utils'
import { Card, Box } from '../..';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { IReminder } from './reducers/reminderReducer';
import shortid from 'shortid';

interface IReminderBoxProps {
	radius?: number;
}

const ReminderBox = styled(Box)<IReminderBoxProps>`
	border-radius: ${props => props.radius || 0}px;
`;

interface IRemindersProps {
	isOpenDate: boolean;
	reminders: IReminder[]
}

class Reminders extends React.Component<IRemindersProps> {
	render() {
		const { isOpenDate, reminders = [] } = this.props;

		return(
			<Card
				position='absolute'
				bottom={0}
				width='100%'
				height='80%'
				css={{
					overflow: 'hidden'
				}}
			>
				<Box
					height='100%'
					css={{
						display: 'flex',
						flexWrap: 'wrap',
  					alignContent: 'flex-start'
					}}
				>
					{
						reminders.map(reminder =>
							<ReminderBox
								key={shortid.generate()}
								px={1}
								py={isOpenDate ? 1 : 0}
								mx={1}
								my={isOpenDate ? 1 : 0}
								width={isOpenDate ? 1 : 1/5}
								withEllipsis
								bg={reminder.color}
								radius={4}
								color={invertColor(reminder.color, true)}
							>
								{reminder.text}
							</ReminderBox>
						)
					}

				</Box>
			</Card>
		)
	}
}

export default connect()(Reminders);
