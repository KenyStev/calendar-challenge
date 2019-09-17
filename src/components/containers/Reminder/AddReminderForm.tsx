import React, { useState } from 'react';
import { IReminder, initialReminderEntry } from './reducers/reminderReducer';
import { addNewReminderRequest, editReminderRequest } from './actions/reminderActions';
import { Flex, Box, ErrorLabel, Input, Button } from '../..';
import { padZero } from '../../../utils';
import moment from 'moment';
import { connect } from 'react-redux';
import shortid from 'shortid';

interface IAddReminderFormProps {
	date: string;
	initialEntry?: any;

	addNewReminderRequest: typeof addNewReminderRequest;
	editReminderRequest: typeof editReminderRequest;
}

interface IAddReminderFormState {
	reminderEntry: IReminder;
	errors: any;
}

class AddReminderForm extends React.Component<IAddReminderFormProps, IAddReminderFormState> {
	constructor(props: IAddReminderFormProps) {
		super(props);
		const { initialEntry, date } = props;
		const entry = {
			...(initialEntry || initialReminderEntry),
			date,
			datetime: moment(date, 'YYYY-DD-MM').toDate()
		};

		this.state = {
			reminderEntry: {...entry},
			errors: {
				text: ''
			}
		}
		console.log(this.state);
	}

	maxLength = 30;

	render() {
		const {
			date,
			initialEntry
		} = this.props;
		const { reminderEntry, errors } = this.state;
		const editing = !!initialEntry;

		return(
			<Flex
				p='1.5em'
				justifyContent='center'
				alignItems='center'
			>

				<Box
					width={1/4}
					mx={3}
					css={{
						position: 'relative'
					}}
				>
					<Input
						type='text'
						name='text'
						placeholder='Reminder Message...'
						value={reminderEntry.text}
						onChange={(event) => {
							this.setState({
								reminderEntry: {
									...reminderEntry,
									text: event.target.value
								}
							});
						}}
						onBlur={() => {
							const errors = {
								text: reminderEntry.text.length > this.maxLength ? 'message mosth be <= 30 characters' : ''
							};

							this.setState({
								errors
							});
						}}
					/>
					{
						errors.text &&
						<ErrorLabel>
							{errors.text}
						</ErrorLabel>
					}
				</Box>
				<Box
					key='input-time'
					mx={3}
				>
					<Input
						type='time'
						name='time'
						value={`${padZero(`${reminderEntry.hour}`)}:${padZero(`${reminderEntry.minute}`)}`}
						onChange={(event) => {
							const [hour, minute] = event.target.value.split(':').map((a: string) => parseInt(a, 10));

							this.setState({
								reminderEntry: {
									...reminderEntry,
									hour,
									minute 
								}
							});
						}}
					/>
				</Box>
				<Box
					key='input-color'
					mx={3}
				>
					<Input
						type='color'
						name='color'
						value={reminderEntry.color}
						onChange={(event) => {
							this.setState({
								reminderEntry: {
									...reminderEntry,
									color: event.target.value 
								}
							});
						}}
					/>
				</Box>
				<Box
					key='input-button'
					mx={3}
				>
					<Button
						p={2}
						height='2.5em'
						type='button'
						name='botton'
						value={editing ? 'Save' : 'Add Reminder'}
						disabled={!!errors.text}
						onClick={(event) => {
							if (editing) {
								this.props.editReminderRequest(reminderEntry);
								return;
							}
							this.props.addNewReminderRequest(reminderEntry);
						}}
					/>
				</Box>
			</Flex>
		);
	}
}

const mapDispatchToProps = {
	addNewReminderRequest,
	editReminderRequest
}

export default connect(null, mapDispatchToProps)(AddReminderForm);
