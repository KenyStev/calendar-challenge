import { Reducer } from 'redux';
import { IState } from '../../../../reducer';
import { addNewReminder } from '../actions/reminderActions';
import moment from 'moment';

const format = 'YYYY-DD-MM';

export interface IReminder {
	text?: string;
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

const initialState: IStateReminder = {
	'2019-16-09': {
		reminders: [
			{
				text: 'Reminder 0',
				city: 'SPS',
				hour: 9,
				minute: 0,
				date: '2019-16-09',
				datetime: moment('2019-16-09 9:00', 'YYYY-DD-MM HH:mm').toDate(),
				color: '#4d4d4d'
			}
		]
	}
};

const initialEntry = {
	text: '',
	city: '',
  hour: 0,
	minute: 0,
	date: moment().format(format),
	datetime: new Date(),
	color: ''
};

const reminderReducer: Reducer<IStateReminder> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case addNewReminder.getType(): {
			const {date, hour, minute} = action.payload;
			const reminders = [
				...state[action.payload.date].reminders,
				{
					...initialEntry,
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
		default:
			return state;
	}
}

export const reminderSelector = (state: IState) => state.reminders;

export default reminderReducer;
