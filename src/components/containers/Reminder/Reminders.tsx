import React, { useState } from 'react';
import { invertColor, padZero } from '../../../utils'
import { Card, Box } from '../..';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { IReminder, initialReminderEntry } from './reducers/reminderReducer';
import AddReminderForm from './AddReminderForm';
import shortid from 'shortid';

interface IReminderBoxProps {
	radius?: number;
}

const ReminderBox = styled(Box)<IReminderBoxProps>`
	border-radius: ${props => props.radius || 0}px;
	cursor: pointer;
`;

interface IRemindersProps {
	isOpenDate: boolean;
	reminders: IReminder[]
}

interface IRemindersState {
	editingReminder: any;
}

class Reminders extends React.Component<IRemindersProps, IRemindersState> {
	state = {
		editingReminder: { ...initialReminderEntry, index: -1 }
	}

	shouldComponentUpdate(nextProps: IRemindersProps, nextState: IRemindersState) {
		if (this.props.isOpenDate !== nextProps.isOpenDate) {
			return true;
		}

		if (this.state.editingReminder.index !== nextState.editingReminder.index) {
			return true;
		}

		return false;
	}

	componentDidUpdate() {
		const { isOpenDate } = this.props;
		const { editingReminder } = this.state;

		if (!isOpenDate && editingReminder.index !== -1) {
			this.setState({
				editingReminder: { ...initialReminderEntry, index: -1 }
			});
		}
	}

	render() {
		const { isOpenDate, reminders = [] } = this.props;
		const { editingReminder } = this.state;

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
						position: 'relative',
						display: 'flex',
						flexWrap: 'wrap',
  					alignContent: 'flex-start'
					}}
				>
					{
						reminders.map((reminder, index: number) =>
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
								onClick={() => {
									if (this.state.editingReminder.index !== index) {
										this.setState({
											editingReminder: {
												index,
												...reminder
											}
										})
									}
								}}
							>
								{reminder.text}

								<Box
									css={{
										display: 'inline-block',
										position: isOpenDate ? 'absolute' : 'relative',
										right: '1em'
									}}
								>
									{`${padZero(`${reminder.hour}`)}:${padZero(`${reminder.minute}`)}`}
								</Box>

								{
									editingReminder.index === index &&
									<Box>
										<AddReminderForm
											key={shortid.generate()}
											date={editingReminder.date}
											initialEntry={editingReminder}
										/>
									</Box>
								}
							</ReminderBox>
						)
					}

				</Box>
			</Card>
		)
	}
}

export default connect()(Reminders);
