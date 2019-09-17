import { take, put, call } from 'redux-saga/effects';
import { addNewReminder, addNewReminderRequest } from '../actions/reminderActions';
import { validateReminder } from './reminderUtils';

function* addRemidnerSaga() {
	while(true) {
		const action = yield take(addNewReminderRequest.getType());

		const newReminder = {
			...action.payload
		};
		
		const validReminder = yield call(validateReminder, newReminder);

		if (!validReminder.invalid) {
			yield put(addNewReminder(newReminder));
		}

	}
}

export default addRemidnerSaga;
