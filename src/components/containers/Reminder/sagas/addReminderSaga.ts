import { take, put } from 'redux-saga/effects';
import { addNewReminder, addNewReminderRequest } from '../actions/reminderActions';

function* addRemidnerSaga() {
	while(true) {
		const action = yield take(addNewReminderRequest.getType());

		const newReminder = {
			...action.payload
		};
		delete newReminder.errors;

		console.log(newReminder);

		yield put(addNewReminder(newReminder));
	}
}

export default addRemidnerSaga;
