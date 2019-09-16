import { take } from 'redux-saga/effects';
import { addNewReminderRequest } from '../actions/reminderActions';

function* addRemidnerSaga() {
	while(true) {
		const action = yield take(addNewReminderRequest.getType());

		console.log(action);
	}
}

export default addRemidnerSaga;
