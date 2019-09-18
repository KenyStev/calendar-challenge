import { Reducer } from 'redux';
import { IState } from '../../../../reducer';
import { addNewReminder, editReminder, deleteReminder, deleteAllReminder } from '../actions/reminderActions';
import moment from 'moment';

const format = 'YYYY-DD-MM';

export interface IReminder {
	index?: number;
	text: string;
	city?: string;
	hour: number;
	minute: number;
	date: string;
	color: string;
	datetime: Date;
}

export interface IStateReminder {
	[index: string]: {
		reminders: IReminder[];
	}
}

const remindersEntry = [
	{
		text: 'Reminder 0',
		city: 'SPS',
		hour: 9,
		minute: 0,
		date: '2019-16-09',
		datetime: moment('2019-16-09 9:00', 'YYYY-DD-MM HH:mm').toDate(),
		color: '#4d4d4d'
	},
	{
		text: 'Reminder 1',
		city: 'SPS',
		hour: 8,
		minute: 30,
		date: '2019-16-09',
		datetime: moment('2019-16-09 8:30', 'YYYY-DD-MM HH:mm').toDate(),
		color: '#1a1a1a'
	}
];

const initialState: IStateReminder = {
	'2019-16-09': {
		reminders: []
	}
};

export const initialReminderEntry = {
	text: '',
	city: '',
  hour: 0,
	minute: 0,
	date: moment().format(format),
	datetime: new Date(),
	color: '#FFFFFF'
};

const reminderReducer: Reducer<IStateReminder> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case addNewReminder.getType(): {
			const {date, hour, minute} = action.payload;
			const reminders = [
				...(state[action.payload.date] || {reminders: []}).reminders,
				{
					...initialReminderEntry,
					...action.payload,
					datetime: moment(`${date} ${hour}:${minute}`, `${format} HH:mm`).toDate()
				}
			];
			reminders.sort((a, b) => {
				const dateA = new Date(a.datetime);
        const dateB = new Date(b.datetime);

        return dateA.valueOf() - dateB.valueOf();
			})

			return {
				...state,
				[action.payload.date]: {
					reminders
				}
			}
		}
		case editReminder.getType(): {
			const {date, hour, minute, index} = action.payload;
			const editedEntry = {...action.payload};
			delete editedEntry.index;

			const reminders = [
				...state[action.payload.date].reminders
			];
			reminders[index] = {
				...editedEntry,
				datetime: moment(`${date} ${hour}:${minute}`, `${format} HH:mm`).toDate()
			};

			reminders.sort((a, b) => {
				const dateA = new Date(a.datetime);
        const dateB = new Date(b.datetime);

        return dateA.valueOf() - dateB.valueOf();
			})

			return {
				...state,
				[action.payload.date]: {
					reminders
				}
			}
		}
		case deleteReminder.getType(): {
			const {date, index} = action.payload;
			
			const reminders = [
				...state[date].reminders
			];
			reminders.splice(index, 1);

			reminders.sort((a, b) => {
				const dateA = new Date(a.datetime);
        const dateB = new Date(b.datetime);

        return dateA.valueOf() - dateB.valueOf();
			})

			return {
				...state,
				[date]: {
					reminders
				}
			}
		}
		case deleteAllReminder.getType(): {
			const date = action.payload;

			return {
				...state,
				[date]: {
					reminders: []
				}
			}
		}
		default:
			return state;
	}
}

export const reminderSelector = (state: IState) => state.reminders;

export default reminderReducer;
