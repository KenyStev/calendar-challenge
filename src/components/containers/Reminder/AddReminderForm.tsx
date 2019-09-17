import React, { useState } from 'react';
import { initialReminderEntry } from './reducers/reminderReducer';
import { addNewReminderRequest } from './actions/reminderActions';
import { Flex, Box, ErrorLabel, Input, Button } from '../..';
import moment from 'moment';
import { connect } from 'react-redux';

interface IAddReminderFormProps {
	date: string;
	initialEntry?: any;

	addNewReminderRequest: typeof addNewReminderRequest;
}

const AddReminderForm: React.FC<IAddReminderFormProps> = ({
	date,
	initialEntry,

	addNewReminderRequest
}) => {
	const editing = !!initialEntry;
	const maxLength = 30;
	const entry = {
		...(initialEntry || initialReminderEntry),
		date,
		datetime: moment(date, 'YYYY-DD-MM').toDate(),
		errors: {
			text: ''
		}
	};
	const [formState, setFormState] = useState(entry);
	console.log(formState);

	return(
		<Flex
			p='1.5em'
			justifyContent='center'
			alignItems='center'
		>

			<Box
				key='input-text'
				width={1/4}
				mx={3}
				css={{
					position: 'relative'
				}}
			>
				<Input
					id={editing ? 'editText' : 'text'}
					type='text'
					name='text'
					placeholder='Reminder Message...'
					value={formState.text}
					onChange={(event) => {
						setFormState({
							...formState,
							text: event.target.value
						});
					}}
					onBlur={() => {
						const errors = {
							text: formState.text.length > maxLength ? 'message mosth be <= 30 characters' : ''
						};

						setFormState({
							...formState,
							errors
						});
					}}
				/>
				{
					formState.errors.text &&
					<ErrorLabel>
						{formState.errors.text}
					</ErrorLabel>
				}
			</Box>
			<Box
				key='input-time'
				mx={3}
			>
				<Input
					id={editing ? 'editTime' : 'time'}
					type='time'
					name='time'
					onChange={(event) => {
						const [hour, minute] = event.target.value.split(':').map((a: string) => parseInt(a, 10));

						setFormState({
							...formState,
							hour,
							minute 
						});
					}}
				/>
			</Box>
			<Box
				key='input-color'
				mx={3}
			>
				<Input
					id={editing ? 'editColor' : 'color'}
					type='color'
					name='color'
					value={formState.color}
					onChange={(event) => {
						setFormState({
							...formState,
							color: event.target.value 
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
					value='Add Reminder'
					disabled={!!formState.errors.text}
					onClick={(event) => {
						addNewReminderRequest(formState);
					}}
				/>
			</Box>
		</Flex>
	);
}

const mapDispatchToProps = {
	addNewReminderRequest
}

export default connect(null, mapDispatchToProps)(AddReminderForm);
