import { Reducer, combineReducers } from 'redux';


interface IStateDashboard {
	test: string;
}

const initialState: IStateDashboard = {
	test: 'test value'
}

const testReducer: Reducer<IStateDashboard> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case 'TEST_ACTION':
			return {
				...state,
				test: 'test value 2'
			}
		default:
			return state;
	}
}

export interface IState {
	testReducer: IStateDashboard;
};

const rootReducer = combineReducers<IState>({
	testReducer: testReducer
});

export default rootReducer;
