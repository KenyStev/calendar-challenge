import React from 'react';
import { invertColor, padZero } from '../../../utils'
import { Card, Box, CloseButton } from '../..';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { IReminder, initialReminderEntry } from './reducers/reminderReducer';
import AddReminderForm from './AddReminderForm';
import shortid from 'shortid';

const RemindersContainer = styled(Box)`
	height: 80%;
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none;
		-webkit-appearance: none;
  }
`;

interface IReminderBoxProps {
	radius?: number;
}

const ReminderBox = styled(Box)<IReminderBoxProps>`
	border-radius: ${props => props.radius || 0}px;
	cursor: pointer;
`;

interface IRemindersProps {
	isOpenDate: boolean;
	reminders: IReminder[],

	deleteAll: () => void;
	deleteReminder: (index: number) => void;
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
			{
				isOpenDate &&
				<Box
					css={{
						position: 'relative',
						height: '3em'
					}}
				>
					<CloseButton
						onClick={() => {
							this.props.deleteAll();
						}}
					>
						Delete All
					</CloseButton>
				</Box>
			}
				<RemindersContainer>
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
								css={{
									position: 'relative',
									overflow: isOpenDate ? 'visible' : 'hidden'
								}}
								onClick={() => {
									if (isOpenDate && this.state.editingReminder.index !== index) {
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
									px={4}
									css={{
										display: 'inline-block'
									}}
								>
									| {`${reminder.city}`} |
								</Box>

								<Box
									css={{
										display: 'inline-block',
										position: isOpenDate ? 'absolute' : 'relative',
										right: '5em'
									}}
								>
									{`${padZero(`${reminder.hour}`)}:${padZero(`${reminder.minute}`)}`}
								</Box>

								{
									editingReminder.index === index &&
									<CloseButton
										onClick={() => {
											this.props.deleteReminder(editingReminder.index);
										}}
									>
										X
									</CloseButton>
								}

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
				</RemindersContainer>
			</Card>
		)
	}
}

export default connect()(Reminders);
