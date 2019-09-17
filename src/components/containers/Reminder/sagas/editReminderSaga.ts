import { take, put, call } from 'redux-saga/effects';
import { editReminderRequest, editReminder } from '../actions/reminderActions';

function* editReminderSaga() {
	while(true) {
		const action = yield take(editReminderRequest.getType());

		const newReminder = {
			...action.payload
		};

		console.log(newReminder);
		
		// const validReminder = yield call(validateReminder, newReminder);

		// if (!validReminder.invalid) {
		// 	yield put(addNewReminder(newReminder));
		// }
		yield put(editReminder(newReminder));

	}
}

export default editReminderSaga;
