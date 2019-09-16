import React, { useState } from 'react';
import { initialReminderEntry } from './reducers/reminderReducer';
import { addNewReminderRequest } from './actions/reminderActions';
import { Flex, Box } from '../..';
import moment from 'moment';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ErrorLabel = styled.label`
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
}

const Input = styled.input<IInputProps>`
	width: 100%;
	height: ${props => props.height || '1.5em'};
	background-color: ${props => props.bg || props.theme.colors.white};
	padding: ${props => props.p ? props.theme.space[props.p] : '.4em'};
	border: 2px solid ${props => props.bc || props.theme.colors.blue};
  border-radius: 4px;
`;

const Button = styled(Input)`
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
`;

interface IAddReminderFormProps {
	date: string;

	addNewReminderRequest: typeof addNewReminderRequest;
}

const AddReminderForm: React.FC<IAddReminderFormProps> = ({
	date,

	addNewReminderRequest
}) => {
	const maxLength = 30;
	const [formState, setFormState] = useState({
		...initialReminderEntry,
		date,
		datetime: moment(date, 'YYYY-DD-MM').toDate(),
		errors: {
			text: ''
		}
	});

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
				mx={3}
			>
				<Input
					type='time'
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
				mx={3}
			>
				<Input
					type='color'
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
				mx={3}
			>
				<Button
					p={2}
					height='2.5em'
					type='button'
					value='Add Reminder'
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
