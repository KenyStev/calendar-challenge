import { combineReducers } from 'redux';
import calendarReducer, { IStateCalendar } from './modules/Calendar/reducers/calendarReducer';
import reminderReducer, { IStateReminder } from './components/containers/Reminder/reducers/reminderReducer';


export interface IState {
	calendar: IStateCalendar;
	reminders: IStateReminder;
};

const rootReducer = combineReducers<IState>({
	calendar: calendarReducer,
	reminders: reminderReducer
});

export default rootReducer;
