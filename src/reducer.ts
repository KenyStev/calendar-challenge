import { combineReducers } from 'redux';
import calendarReducer, { IStateCalendar } from './modules/Calendar/reducers/calendarReducer';


export interface IState {
	calendar: IStateCalendar;
};

const rootReducer = combineReducers<IState>({
	calendar: calendarReducer
});

export default rootReducer;
