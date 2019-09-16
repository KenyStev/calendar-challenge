import { Reducer } from 'redux';
import { IState } from '../../../reducer';
import moment from 'moment';

const format = 'YYYY-DD-MM';
const weeks = 6;
const daysPerWeek = 7;
const totalDaysOfGrid = weeks * daysPerWeek - 1;
const startCurrentDate = moment().format(format);

export interface IGridDate {
	date: Date;
}

export interface IStateCalendar {
	currentDate: string;
	headers: Array<string>;
	weeks: Array<Array<IGridDate>>;
}

function fillDates(date: string): Array<Array<IGridDate>> {
	const currentDate = moment(date, format);

	const firstOfMonth = moment(currentDate).startOf('month').day();
	const firstDayOfGrid = moment(currentDate).startOf('month').subtract(firstOfMonth || 7 , 'days');
	const endDayOfGrid = moment(firstDayOfGrid).add(totalDaysOfGrid, 'days');

	const weeks: Array<Array<IGridDate>> = [];
	let week: Array<IGridDate> = [];

	for (let day = moment(firstDayOfGrid), i=0; day.isSameOrBefore(endDayOfGrid); day.add(1, 'days'), i++) {
		week.push({
			date: moment(day).toDate()
		});

		if (i === 6) {
			i = -1;
			weeks.push(week);
			week = [];
		}
	}

	return weeks;
}

const initialState: IStateCalendar = {
	currentDate: startCurrentDate,
	headers: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	weeks: fillDates(startCurrentDate)
}

const calendarReducer: Reducer<IStateCalendar> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		default:
			return state;
	}
}

export const calendarSelector = (state: IState) => state.calendar;

export default calendarReducer;
