import { take, put, call } from 'redux-saga/effects';
import { addNewReminder, addNewReminderRequest } from '../actions/reminderActions';

export function* validateReminder(object: any): any {
	const validObject = { ...object };

	if (validObject.text.length > 30) {
		return {
			invalid: true,
			error: 'text must be less or equal to 30'
		}
	}

	if (!validObject.hour) {
		return {
			invalid: true,
			error: 'hour needed'
		}
	}

	if (!validObject.minute) {
		return {
			invalid: true,
			error: 'minute needed'
		}
	}

	// if (!validObject.city) {
	// 	return {
	// 		invalid: true,
	// 		error: 'city needed'
	// 	}
	// }

	delete validObject.errors;
	return validObject;
}

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
